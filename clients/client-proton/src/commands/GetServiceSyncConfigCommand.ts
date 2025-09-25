// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceSyncConfigInput, GetServiceSyncConfigOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetServiceSyncConfig } from "../schemas/schemas_9_ServiceSyncConfig";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceSyncConfigCommand}.
 */
export interface GetServiceSyncConfigCommandInput extends GetServiceSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link GetServiceSyncConfigCommand}.
 */
export interface GetServiceSyncConfigCommandOutput extends GetServiceSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Get detailed information for the service sync configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetServiceSyncConfigInput
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new GetServiceSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSyncConfigOutput
 * //   serviceSyncConfig: { // ServiceSyncConfig
 * //     serviceName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     filePath: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSyncConfigCommandInput - {@link GetServiceSyncConfigCommandInput}
 * @returns {@link GetServiceSyncConfigCommandOutput}
 * @see {@link GetServiceSyncConfigCommandInput} for command's `input` shape.
 * @see {@link GetServiceSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class GetServiceSyncConfigCommand extends $Command
  .classBuilder<
    GetServiceSyncConfigCommandInput,
    GetServiceSyncConfigCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "GetServiceSyncConfig", {})
  .n("ProtonClient", "GetServiceSyncConfigCommand")
  .sc(GetServiceSyncConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceSyncConfigInput;
      output: GetServiceSyncConfigOutput;
    };
    sdk: {
      input: GetServiceSyncConfigCommandInput;
      output: GetServiceSyncConfigCommandOutput;
    };
  };
}
