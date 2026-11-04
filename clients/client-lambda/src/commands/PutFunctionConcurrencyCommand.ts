// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
import { PutFunctionConcurrency$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandInput extends PutFunctionConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandOutput extends Concurrency, __MetadataBearer {}

/**
 * Sets the maximum number of simultaneous executions for a Lambda Event Function, and reserves capacity for that concurrency level.
 *
 * Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function.
 *
 * Use GetAccountSettings to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see [Lambda function scaling](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionConcurrencyRequest
 *   FunctionName: "STRING_VALUE", // required
 *   ReservedConcurrentExecutions: Number("int"), // required
 * };
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * // { // Concurrency
 * //   ReservedConcurrentExecutions: Number("int"),
 * // };
 *
 * ```
 *
 * @param PutFunctionConcurrencyCommandInput - {@link PutFunctionConcurrencyCommandInput}
 * @returns {@link PutFunctionConcurrencyCommandOutput}
 * @see {@link PutFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link PutFunctionConcurrencyCommandOutput} for command's `response` shape.
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
 * @example To configure a reserved concurrency limit for a function
 * ```javascript
 * // The following example configures 100 reserved concurrent executions for the my-function function.
 * const input = {
 *   FunctionName: "my-function",
 *   ReservedConcurrentExecutions: 100
 * };
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReservedConcurrentExecutions: 100
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutFunctionConcurrencyCommand extends command<PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput>(
  _ep0,
  _mw0,
  "PutFunctionConcurrency",
  PutFunctionConcurrency$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionConcurrencyRequest;
      output: Concurrency;
    };
    sdk: {
      input: PutFunctionConcurrencyCommandInput;
      output: PutFunctionConcurrencyCommandOutput;
    };
  };
}
