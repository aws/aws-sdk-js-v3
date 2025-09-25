// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceSettingsOutput } from "../models/models_0";
import { GetServiceSettings } from "../schemas/schemas_3_Configuration";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandOutput extends GetServiceSettingsOutput, __MetadataBearer {}

/**
 * <p>Returns settings configured for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, GetServiceSettingsCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, GetServiceSettingsCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * // import type { SSMQuickSetupClientConfig } from "@aws-sdk/client-ssm-quicksetup";
 * const config = {}; // type is SSMQuickSetupClientConfig
 * const client = new SSMQuickSetupClient(config);
 * const input = {};
 * const command = new GetServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSettingsOutput
 * //   ServiceSettings: { // ServiceSettings
 * //     ExplorerEnablingRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSettingsCommandInput - {@link GetServiceSettingsCommandInput}
 * @returns {@link GetServiceSettingsCommandOutput}
 * @see {@link GetServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link SSMQuickSetupClientResolvedConfig | config} for SSMQuickSetupClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester has insufficient permissions to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another request is being processed. Wait a few minutes and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation exceeds the maximum allowed request rate per Amazon Web Services account and Amazon Web Services Region.</p>
 *
 * @throws {@link SSMQuickSetupServiceException}
 * <p>Base exception class for all service exceptions from SSMQuickSetup service.</p>
 *
 *
 * @public
 */
export class GetServiceSettingsCommand extends $Command
  .classBuilder<
    GetServiceSettingsCommandInput,
    GetServiceSettingsCommandOutput,
    SSMQuickSetupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMQuickSetupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSetup", "GetServiceSettings", {})
  .n("SSMQuickSetupClient", "GetServiceSettingsCommand")
  .sc(GetServiceSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServiceSettingsOutput;
    };
    sdk: {
      input: GetServiceSettingsCommandInput;
      output: GetServiceSettingsCommandOutput;
    };
  };
}
