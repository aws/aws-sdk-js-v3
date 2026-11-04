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
 * Sends an action to a workflow step that has paused at a `WaitForAction` step, so that image creation can continue. To find the steps that are waiting for an action, call ListWaitingWorkflowSteps.
 *
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
 *
 * You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder calls on your behalf. Retry with an increasing or variable delay between requests.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A generic client error. This error usually indicates that the request failed a validation check, such as when a downstream service rejects a configured value.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform the requested operation.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * You have specified a client token for an operation using parameter values that differ from a previous request that used the same client token.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value that you provided for the specified parameter is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is malformed or otherwise invalid. Verify the request and try again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource that you are trying to operate on is currently in use. Review the message details and retry later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * At least one of the resources referenced by your request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An internal server error occurred while Image Builder processed the request. Retrying the request may succeed.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unable to process your request at this time.
 *
 * @throws {@link ImagebuilderServiceException}
 *
 * Base exception class for all service exceptions from Imagebuilder service.
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
