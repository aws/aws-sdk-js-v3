// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppLaunchConfigurationRequest, DeleteAppLaunchConfigurationResponse } from "../models/models_0";
import {
  de_DeleteAppLaunchConfigurationCommand,
  se_DeleteAppLaunchConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppLaunchConfigurationCommand}.
 */
export interface DeleteAppLaunchConfigurationCommandInput extends DeleteAppLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppLaunchConfigurationCommand}.
 */
export interface DeleteAppLaunchConfigurationCommandOutput
  extends DeleteAppLaunchConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // DeleteAppLaunchConfigurationRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new DeleteAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppLaunchConfigurationCommandInput - {@link DeleteAppLaunchConfigurationCommandInput}
 * @returns {@link DeleteAppLaunchConfigurationCommandOutput}
 * @see {@link DeleteAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class DeleteAppLaunchConfigurationCommand extends $Command
  .classBuilder<
    DeleteAppLaunchConfigurationCommandInput,
    DeleteAppLaunchConfigurationCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "DeleteAppLaunchConfiguration", {})
  .n("SMSClient", "DeleteAppLaunchConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppLaunchConfigurationCommand)
  .de(de_DeleteAppLaunchConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppLaunchConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppLaunchConfigurationCommandInput;
      output: DeleteAppLaunchConfigurationCommandOutput;
    };
  };
}
