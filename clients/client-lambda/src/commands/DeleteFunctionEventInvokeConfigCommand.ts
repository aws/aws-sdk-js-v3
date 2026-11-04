// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFunctionEventInvokeConfigRequest } from "../models/models_0";
import { DeleteFunctionEventInvokeConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFunctionEventInvokeConfigCommand}.
 */
export interface DeleteFunctionEventInvokeConfigCommandInput extends DeleteFunctionEventInvokeConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionEventInvokeConfigCommand}.
 */
export interface DeleteFunctionEventInvokeConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes the configuration for asynchronous invocation for a function, version, or alias.
 *
 * To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteFunctionEventInvokeConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new DeleteFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionEventInvokeConfigCommandInput - {@link DeleteFunctionEventInvokeConfigCommandInput}
 * @returns {@link DeleteFunctionEventInvokeConfigCommandOutput}
 * @see {@link DeleteFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To delete an asynchronous invocation configuration
 * ```javascript
 * // The following example deletes the asynchronous invocation configuration for the GREEN alias of a function named my-function.
 * const input = {
 *   FunctionName: "my-function",
 *   Qualifier: "GREEN"
 * };
 * const command = new DeleteFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteFunctionEventInvokeConfigCommand extends command<DeleteFunctionEventInvokeConfigCommandInput, DeleteFunctionEventInvokeConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFunctionEventInvokeConfig",
  DeleteFunctionEventInvokeConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFunctionEventInvokeConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionEventInvokeConfigCommandInput;
      output: DeleteFunctionEventInvokeConfigCommandOutput;
    };
  };
}
