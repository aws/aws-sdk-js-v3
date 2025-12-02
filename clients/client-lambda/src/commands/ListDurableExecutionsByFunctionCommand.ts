// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListDurableExecutionsByFunctionRequest, ListDurableExecutionsByFunctionResponse } from "../models/models_0";
import { ListDurableExecutionsByFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListDurableExecutionsByFunctionCommandOutput
  extends ListDurableExecutionsByFunctionResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable executions</a> for a specified Lambda function. You can filter the results by execution name, status, and start time range. This API supports pagination for large result sets.</p>
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
 *  <p>One of the parameters in the request is not valid.</p>
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
export class ListDurableExecutionsByFunctionCommand extends $Command
  .classBuilder<
    ListDurableExecutionsByFunctionCommandInput,
    ListDurableExecutionsByFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListDurableExecutionsByFunction", {})
  .n("LambdaClient", "ListDurableExecutionsByFunctionCommand")
  .sc(ListDurableExecutionsByFunction)
  .build() {
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
