// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDurableExecutionRequest, GetDurableExecutionResponse } from "../models/models_0";
import { GetDurableExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDurableExecutionCommand}.
 */
export interface GetDurableExecutionCommandInput extends GetDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetDurableExecutionCommand}.
 */
export interface GetDurableExecutionCommandOutput extends GetDurableExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific <a href="https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html">durable execution</a>, including its current status, input payload, result or error information, and execution metadata such as start time and usage statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   IncludeExecutionData: true || false,
 * };
 * const command = new GetDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetDurableExecutionResponse
 * //   DurableExecutionArn: "STRING_VALUE", // required
 * //   DurableExecutionName: "STRING_VALUE", // required
 * //   FunctionArn: "STRING_VALUE", // required
 * //   InputPayload: "STRING_VALUE",
 * //   Result: "STRING_VALUE",
 * //   Error: { // ErrorObject
 * //     ErrorMessage: "STRING_VALUE",
 * //     ErrorType: "STRING_VALUE",
 * //     ErrorData: "STRING_VALUE",
 * //     StackTrace: [ // StackTraceEntries
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   StartTimestamp: new Date("TIMESTAMP"), // required
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "STOPPED", // required
 * //   EndTimestamp: new Date("TIMESTAMP"),
 * //   Version: "STRING_VALUE",
 * //   TraceHeader: { // TraceHeader
 * //     XAmznTraceId: "STRING_VALUE",
 * //   },
 * //   ExecutionDataIncluded: true || false,
 * //   DurableConfig: { // DurableConfig
 * //     KMSKeyArn: "STRING_VALUE",
 * //     RetentionPeriodInDays: Number("int"),
 * //     ExecutionTimeout: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDurableExecutionCommandInput - {@link GetDurableExecutionCommandInput}
 * @returns {@link GetDurableExecutionCommandOutput}
 * @see {@link GetDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link GetDurableExecutionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
 *
 * @throws {@link KMSDisabledException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.</p>
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
export class GetDurableExecutionCommand extends command<GetDurableExecutionCommandInput, GetDurableExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetDurableExecution",
  GetDurableExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDurableExecutionRequest;
      output: GetDurableExecutionResponse;
    };
    sdk: {
      input: GetDurableExecutionCommandInput;
      output: GetDurableExecutionCommandOutput;
    };
  };
}
