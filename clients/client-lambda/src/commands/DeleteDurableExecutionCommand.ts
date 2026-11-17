// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDurableExecutionRequest, DeleteDurableExecutionResponse } from "../models/models_0";
import { DeleteDurableExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDurableExecutionCommand}.
 */
export interface DeleteDurableExecutionCommandInput extends DeleteDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDurableExecutionCommand}.
 */
export interface DeleteDurableExecutionCommandOutput extends DeleteDurableExecutionResponse, __MetadataBearer {}

/**
 * <p>Deletes a completed Lambda <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable execution</a> and its data. The execution must be in a terminal state (<code>SUCCEEDED</code>, <code>FAILED</code>, <code>STOPPED</code>, or <code>TIMED_OUT</code>). Otherwise, this operation returns a <code>ResourceConflictException</code>.</p> <p>The execution has <code>DELETING</code> status until the deletion finishes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-delete.html">Deleting durable executions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDurableExecutionResponse
 * //   DeletionRequestTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteDurableExecutionCommandInput - {@link DeleteDurableExecutionCommandInput}
 * @returns {@link DeleteDurableExecutionCommandOutput}
 * @see {@link DeleteDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link DeleteDurableExecutionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class DeleteDurableExecutionCommand extends command<DeleteDurableExecutionCommandInput, DeleteDurableExecutionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDurableExecution",
  DeleteDurableExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDurableExecutionRequest;
      output: DeleteDurableExecutionResponse;
    };
    sdk: {
      input: DeleteDurableExecutionCommandInput;
      output: DeleteDurableExecutionCommandOutput;
    };
  };
}
