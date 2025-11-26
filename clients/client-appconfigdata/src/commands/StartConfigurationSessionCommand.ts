// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartConfigurationSessionRequest, StartConfigurationSessionResponse } from "../models/models_0";
import { StartConfigurationSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationSessionCommand}.
 */
export interface StartConfigurationSessionCommandInput extends StartConfigurationSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationSessionCommand}.
 */
export interface StartConfigurationSessionCommandOutput extends StartConfigurationSessionResponse, __MetadataBearer {}

/**
 * <p>Starts a configuration session used to retrieve a deployed configuration. For more
 *          information about this API action and to view example CLI commands that show how to use
 *          it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, StartConfigurationSessionCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, StartConfigurationSessionCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * // import type { AppConfigDataClientConfig } from "@aws-sdk/client-appconfigdata";
 * const config = {}; // type is AppConfigDataClientConfig
 * const client = new AppConfigDataClient(config);
 * const input = { // StartConfigurationSessionRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ConfigurationProfileIdentifier: "STRING_VALUE", // required
 *   RequiredMinimumPollIntervalInSeconds: Number("int"),
 * };
 * const command = new StartConfigurationSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartConfigurationSessionResponse
 * //   InitialConfigurationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartConfigurationSessionCommandInput - {@link StartConfigurationSessionCommandInput}
 * @returns {@link StartConfigurationSessionCommandOutput}
 * @see {@link StartConfigurationSessionCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationSessionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigDataClientResolvedConfig | config} for AppConfigDataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AppConfigDataServiceException}
 * <p>Base exception class for all service exceptions from AppConfigData service.</p>
 *
 *
 * @public
 */
export class StartConfigurationSessionCommand extends $Command
  .classBuilder<
    StartConfigurationSessionCommandInput,
    StartConfigurationSessionCommandOutput,
    AppConfigDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppConfigData", "StartConfigurationSession", {})
  .n("AppConfigDataClient", "StartConfigurationSessionCommand")
  .sc(StartConfigurationSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConfigurationSessionRequest;
      output: StartConfigurationSessionResponse;
    };
    sdk: {
      input: StartConfigurationSessionCommandInput;
      output: StartConfigurationSessionCommandOutput;
    };
  };
}
