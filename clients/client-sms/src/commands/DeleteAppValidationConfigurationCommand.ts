// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppValidationConfigurationRequest, DeleteAppValidationConfigurationResponse } from "../models/models_0";
import {
  de_DeleteAppValidationConfigurationCommand,
  se_DeleteAppValidationConfigurationCommand,
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
 * The input for {@link DeleteAppValidationConfigurationCommand}.
 */
export interface DeleteAppValidationConfigurationCommandInput extends DeleteAppValidationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppValidationConfigurationCommand}.
 */
export interface DeleteAppValidationConfigurationCommandOutput
  extends DeleteAppValidationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // DeleteAppValidationConfigurationRequest
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppValidationConfigurationCommandInput - {@link DeleteAppValidationConfigurationCommandInput}
 * @returns {@link DeleteAppValidationConfigurationCommandOutput}
 * @see {@link DeleteAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppValidationConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteAppValidationConfigurationCommand extends $Command
  .classBuilder<
    DeleteAppValidationConfigurationCommandInput,
    DeleteAppValidationConfigurationCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "DeleteAppValidationConfiguration", {})
  .n("SMSClient", "DeleteAppValidationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppValidationConfigurationCommand)
  .de(de_DeleteAppValidationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppValidationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppValidationConfigurationCommandInput;
      output: DeleteAppValidationConfigurationCommandOutput;
    };
  };
}
