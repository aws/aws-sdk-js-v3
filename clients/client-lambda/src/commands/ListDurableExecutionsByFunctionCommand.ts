// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDurableExecutionsByFunctionRequest,
  ListDurableExecutionsByFunctionResponse,
} from "../models/models_0";
import { ListDurableExecutionsByFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDurableExecutionsByFunctionCommand}.
 */
export interface ListDurableExecutionsByFunctionCommandInput extends ListDurableExecutionsByFunctionRequest {}
/**
 * @public
 *
 * The output of {@link ListDurableExecutionsByFunctionCommand}.
 */
export interface ListDurableExecutionsByFunctionCommandOutput extends ListDurableExecutionsByFunctionResponse, __MetadataBearer {}

/**
 * Returns a list of [durable executions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html) for a specified Lambda function. You can filter the results by execution name, status, and start time range. This API supports pagination for large result sets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListDurableExecutionsByFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListDurableExecutionsByFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListDurableExecutionsByFunctionRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   DurableExecutionName: "STRING_VALUE",
 *   Statuses: [ // ExecutionStatusList
 *     "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "STOPPED",
 *   ],
 *   StartedAfter: new Date("TIMESTAMP"),
 *   StartedBefore: new Date("TIMESTAMP"),
 *   ReverseOrder: true || false,
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListDurableExecutionsByFunctionCommand(input);
 * const response = await client.send(command);
 * // { // ListDurableExecutionsByFunctionResponse
 * //   DurableExecutions: [ // DurableExecutions
 * //     { // Execution
 * //       DurableExecutionArn: "STRING_VALUE", // required
 * //       DurableExecutionName: "STRING_VALUE", // required
 * //       FunctionArn: "STRING_VALUE", // required
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "STOPPED", // required
 * //       StartTimestamp: new Date("TIMESTAMP"), // required
 * //       EndTimestamp: new Date("TIMESTAMP"),
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDurableExecutionsByFunctionCommandInput - {@link ListDurableExecutionsByFunctionCommandInput}
 * @returns {@link ListDurableExecutionsByFunctionCommandOutput}
 * @see {@link ListDurableExecutionsByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListDurableExecutionsByFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
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
export class ListDurableExecutionsByFunctionCommand extends command<ListDurableExecutionsByFunctionCommandInput, ListDurableExecutionsByFunctionCommandOutput>(
  _ep0,
  _mw0,
  "ListDurableExecutionsByFunction",
  ListDurableExecutionsByFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDurableExecutionsByFunctionRequest;
      output: ListDurableExecutionsByFunctionResponse;
    };
    sdk: {
      input: ListDurableExecutionsByFunctionCommandInput;
      output: ListDurableExecutionsByFunctionCommandOutput;
    };
  };
}
