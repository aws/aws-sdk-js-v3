// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendWorkflowStepActionRequest, SendWorkflowStepActionResponse } from "../models/models_0";
import { SendWorkflowStepAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandInput extends SendWorkflowStepActionRequest {}
/**
 * @public
 *
 * The output of {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandOutput extends SendWorkflowStepActionResponse, __MetadataBearer {}

/**
 * <p>Sends an action to a workflow step that has paused at a
 * 			<code>WaitForAction</code> step, so that image creation can continue.
 * 			To find the steps that are waiting for an action, call
 * 			<a>ListWaitingWorkflowSteps</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, SendWorkflowStepActionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, SendWorkflowStepActionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // SendWorkflowStepActionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   action: "RESUME" || "STOP", // required
 *   reason: "STRING_VALUE",
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new SendWorkflowStepActionCommand(input);
 * const response = await client.send(command);
 * // { // SendWorkflowStepActionResponse
 * //   stepExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendWorkflowStepActionCommandInput - {@link SendWorkflowStepActionCommandInput}
 * @returns {@link SendWorkflowStepActionCommandOutput}
 * @see {@link SendWorkflowStepActionCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepActionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Stop a workflow step that is waiting for action
 * ```javascript
 * // The following example sends the STOP action to a workflow step that has paused the image build, identified by the step execution ID that ListWaitingWorkflowSteps returns.
 * const input = {
 *   action: "STOP",
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE67890",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-wait-recipe/1.0.0/1",
 *   stepExecutionId: "step-8eb24d7a-036e-46b5-94a3-90a5d8b5ac4a"
 * };
 * const command = new SendWorkflowStepActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE67890",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-wait-recipe/1.0.0/1",
 *   stepExecutionId: "step-8eb24d7a-036e-46b5-94a3-90a5d8b5ac4a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendWorkflowStepActionCommand extends command<SendWorkflowStepActionCommandInput, SendWorkflowStepActionCommandOutput>(
  _ep0,
  _mw0,
  "SendWorkflowStepAction",
  SendWorkflowStepAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendWorkflowStepActionRequest;
      output: SendWorkflowStepActionResponse;
    };
    sdk: {
      input: SendWorkflowStepActionCommandInput;
      output: SendWorkflowStepActionCommandOutput;
    };
  };
}
