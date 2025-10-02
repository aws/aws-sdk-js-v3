// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppConfigDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetLatestConfigurationRequest,
  GetLatestConfigurationResponse,
  GetLatestConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetLatestConfigurationCommand, se_GetLatestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLatestConfigurationCommand}.
 */
export interface GetLatestConfigurationCommandInput extends GetLatestConfigurationRequest {}
/**
 * @public
 */
export type GetLatestConfigurationCommandOutputType = Omit<GetLatestConfigurationResponse, "Configuration"> & {
  Configuration?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetLatestConfigurationCommand}.
 */
export interface GetLatestConfigurationCommandOutput
  extends GetLatestConfigurationCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Retrieves the latest deployed configuration. This API may return empty configuration
 *          data if the client already has the latest version. For more information about this API
 *          action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
 *          <important>
 *             <p>Note the following important information.</p>
 *             <ul>
 *                <li>
 *                   <p>Each configuration token is only valid for one call to
 *                      <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code>
 *                   response includes a <code>NextPollConfigurationToken</code> that should always
 *                   replace the token used for the just-completed call in preparation for the next
 *                   one. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>GetLatestConfiguration</code> is a priced call. For more information, see
 *                      <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, GetLatestConfigurationCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, GetLatestConfigurationCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * // import type { AppConfigDataClientConfig } from "@aws-sdk/client-appconfigdata";
 * const config = {}; // type is AppConfigDataClientConfig
 * const client = new AppConfigDataClient(config);
 * const input = { // GetLatestConfigurationRequest
 *   ConfigurationToken: "STRING_VALUE", // required
 * };
 * const command = new GetLatestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLatestConfigurationResponse
 * //   NextPollConfigurationToken: "STRING_VALUE",
 * //   NextPollIntervalInSeconds: Number("int"),
 * //   ContentType: "STRING_VALUE",
 * //   Configuration: new Uint8Array(),
 * //   VersionLabel: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLatestConfigurationCommandInput - {@link GetLatestConfigurationCommandInput}
 * @returns {@link GetLatestConfigurationCommandOutput}
 * @see {@link GetLatestConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLatestConfigurationCommandOutput} for command's `response` shape.
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
export class GetLatestConfigurationCommand extends $Command
  .classBuilder<
    GetLatestConfigurationCommandInput,
    GetLatestConfigurationCommandOutput,
    AppConfigDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppConfigData", "GetLatestConfiguration", {})
  .n("AppConfigDataClient", "GetLatestConfigurationCommand")
  .f(void 0, GetLatestConfigurationResponseFilterSensitiveLog)
  .ser(se_GetLatestConfigurationCommand)
  .de(de_GetLatestConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLatestConfigurationRequest;
      output: GetLatestConfigurationResponse;
    };
    sdk: {
      input: GetLatestConfigurationCommandInput;
      output: GetLatestConfigurationCommandOutput;
    };
  };
}
