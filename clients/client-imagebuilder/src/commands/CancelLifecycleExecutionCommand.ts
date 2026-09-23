// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelLifecycleExecutionRequest, CancelLifecycleExecutionResponse } from "../models/models_0";
import { CancelLifecycleExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelLifecycleExecutionCommand}.
 */
export interface CancelLifecycleExecutionCommandInput extends CancelLifecycleExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelLifecycleExecutionCommand}.
 */
export interface CancelLifecycleExecutionCommandOutput extends CancelLifecycleExecutionResponse, __MetadataBearer {}

/**
 * <p>Cancels a lifecycle execution – a single run of lifecycle actions that a
 * 			lifecycle policy or a <a>StartResourceStateUpdate</a> request
 * 			started. You can only cancel an execution that hasn't reached a
 * 			terminal state. Cancellation is asynchronous and doesn't undo
 * 			completed lifecycle actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelLifecycleExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelLifecycleExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CancelLifecycleExecutionRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CancelLifecycleExecutionCommand(input);
 * const response = await client.send(command);
 * // { // CancelLifecycleExecutionResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelLifecycleExecutionCommandInput - {@link CancelLifecycleExecutionCommandInput}
 * @returns {@link CancelLifecycleExecutionCommandOutput}
 * @see {@link CancelLifecycleExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelLifecycleExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 * @example Cancel a lifecycle execution
 * ```javascript
 * // The following example cancels the scheduled resource state update associated with the specified lifecycle execution ID before it runs.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE97531",
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503"
 * };
 * const command = new CancelLifecycleExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelLifecycleExecutionCommand extends command<CancelLifecycleExecutionCommandInput, CancelLifecycleExecutionCommandOutput>(
  _ep0,
  _mw0,
  "CancelLifecycleExecution",
  CancelLifecycleExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelLifecycleExecutionRequest;
      output: CancelLifecycleExecutionResponse;
    };
    sdk: {
      input: CancelLifecycleExecutionCommandInput;
      output: CancelLifecycleExecutionCommandOutput;
    };
  };
}
