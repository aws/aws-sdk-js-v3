// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFunctionRecursionConfigRequest, PutFunctionRecursionConfigResponse } from "../models/models_0";
import { PutFunctionRecursionConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionRecursionConfigCommand}.
 */
export interface PutFunctionRecursionConfigCommandInput extends PutFunctionRecursionConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionRecursionConfigCommand}.
 */
export interface PutFunctionRecursionConfigCommandOutput extends PutFunctionRecursionConfigResponse, __MetadataBearer {}

/**
 * Sets the [recursive loop detection](https://docs.aws.amazon.com/lambda/latest/dg/invocation-recursion.html) configuration for a Lambda Event Function.
 *
 * When you configure a Lambda function to output to the same service or resource that invokes the function, it's possible to create an infinite recursive loop. For example, a Lambda function might write a message to an Amazon Simple Queue Service (Amazon SQS) queue, which then invokes the same function. This invocation causes the function to write another message to the queue, which in turn invokes the function again.
 *
 * Lambda can detect certain types of recursive loops shortly after they occur. When Lambda detects a recursive loop and your function's recursive loop detection configuration is set to `Terminate`, it stops your function being invoked and notifies you.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionRecursionConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionRecursionConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionRecursionConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   RecursiveLoop: "Allow" || "Terminate", // required
 * };
 * const command = new PutFunctionRecursionConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutFunctionRecursionConfigResponse
 * //   RecursiveLoop: "Allow" || "Terminate",
 * // };
 *
 * ```
 *
 * @param PutFunctionRecursionConfigCommandInput - {@link PutFunctionRecursionConfigCommandInput}
 * @returns {@link PutFunctionRecursionConfigCommandOutput}
 * @see {@link PutFunctionRecursionConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionRecursionConfigCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutFunctionRecursionConfigCommand extends command<PutFunctionRecursionConfigCommandInput, PutFunctionRecursionConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutFunctionRecursionConfig",
  PutFunctionRecursionConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionRecursionConfigRequest;
      output: PutFunctionRecursionConfigResponse;
    };
    sdk: {
      input: PutFunctionRecursionConfigCommandInput;
      output: PutFunctionRecursionConfigCommandOutput;
    };
  };
}
