// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NotifyAppValidationOutputRequest, NotifyAppValidationOutputResponse } from "../models/models_0";
import { de_NotifyAppValidationOutputCommand, se_NotifyAppValidationOutputCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyAppValidationOutputCommand}.
 */
export interface NotifyAppValidationOutputCommandInput extends NotifyAppValidationOutputRequest {}
/**
 * @public
 *
 * The output of {@link NotifyAppValidationOutputCommand}.
 */
export interface NotifyAppValidationOutputCommandOutput extends NotifyAppValidationOutputResponse, __MetadataBearer {}

/**
 * <p>Provides information to Server Migration Service about whether application validation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, NotifyAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, NotifyAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // NotifyAppValidationOutputRequest
 *   appId: "STRING_VALUE", // required
 *   notificationContext: { // NotificationContext
 *     validationId: "STRING_VALUE",
 *     status: "READY_FOR_VALIDATION" || "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 *     statusMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new NotifyAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyAppValidationOutputCommandInput - {@link NotifyAppValidationOutputCommandInput}
 * @returns {@link NotifyAppValidationOutputCommandOutput}
 * @see {@link NotifyAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link NotifyAppValidationOutputCommandOutput} for command's `response` shape.
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
 * @public
 */
export class NotifyAppValidationOutputCommand extends $Command
  .classBuilder<
    NotifyAppValidationOutputCommandInput,
    NotifyAppValidationOutputCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "NotifyAppValidationOutput", {})
  .n("SMSClient", "NotifyAppValidationOutputCommand")
  .f(void 0, void 0)
  .ser(se_NotifyAppValidationOutputCommand)
  .de(de_NotifyAppValidationOutputCommand)
  .build() {}
