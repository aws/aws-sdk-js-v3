// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendWorkflowStepStateRequest, SendWorkflowStepStateResponse } from "../models/models_0";
import { de_SendWorkflowStepStateCommand, se_SendWorkflowStepStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendWorkflowStepStateCommand}.
 */
export interface SendWorkflowStepStateCommandInput extends SendWorkflowStepStateRequest {}
/**
 * @public
 *
 * The output of {@link SendWorkflowStepStateCommand}.
 */
export interface SendWorkflowStepStateCommandOutput extends SendWorkflowStepStateResponse, __MetadataBearer {}

/**
 * <p>Sends a callback for asynchronous custom steps.</p>
 *          <p>
 *       The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow.
 *       You must include those with their callback as well as providing a status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, SendWorkflowStepStateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, SendWorkflowStepStateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // SendWorkflowStepStateRequest
 *   WorkflowId: "STRING_VALUE", // required
 *   ExecutionId: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   Status: "SUCCESS" || "FAILURE", // required
 * };
 * const command = new SendWorkflowStepStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendWorkflowStepStateCommandInput - {@link SendWorkflowStepStateCommandInput}
 * @returns {@link SendWorkflowStepStateCommandOutput}
 * @see {@link SendWorkflowStepStateCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepStateCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class SendWorkflowStepStateCommand extends $Command
  .classBuilder<
    SendWorkflowStepStateCommandInput,
    SendWorkflowStepStateCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "SendWorkflowStepState", {})
  .n("TransferClient", "SendWorkflowStepStateCommand")
  .f(void 0, void 0)
  .ser(se_SendWorkflowStepStateCommand)
  .de(de_SendWorkflowStepStateCommand)
  .build() {}
