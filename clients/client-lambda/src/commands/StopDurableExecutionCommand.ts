// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopDurableExecutionRequest, StopDurableExecutionResponse } from "../models/models_0";
import { StopDurableExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopDurableExecutionCommand}.
 */
export interface StopDurableExecutionCommandInput extends StopDurableExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopDurableExecutionCommand}.
 */
export interface StopDurableExecutionCommandOutput extends StopDurableExecutionResponse, __MetadataBearer {}

/**
 * Stops a running [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html). The execution transitions to STOPPED status and cannot be resumed. Any in-progress operations are terminated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, StopDurableExecutionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, StopDurableExecutionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // StopDurableExecutionRequest
 *   DurableExecutionArn: "STRING_VALUE", // required
 *   Error: { // ErrorObject
 *     ErrorMessage: "STRING_VALUE",
 *     ErrorType: "STRING_VALUE",
 *     ErrorData: "STRING_VALUE",
 *     StackTrace: [ // StackTraceEntries
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StopDurableExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopDurableExecutionResponse
 * //   StopTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StopDurableExecutionCommandInput - {@link StopDurableExecutionCommandInput}
 * @returns {@link StopDurableExecutionCommandOutput}
 * @see {@link StopDurableExecutionCommandInput} for command's `input` shape.
 * @see {@link StopDurableExecutionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.
 *
 * @throws {@link KMSDisabledException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.
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
export class StopDurableExecutionCommand extends command<StopDurableExecutionCommandInput, StopDurableExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopDurableExecution",
  StopDurableExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDurableExecutionRequest;
      output: StopDurableExecutionResponse;
    };
    sdk: {
      input: StopDurableExecutionCommandInput;
      output: StopDurableExecutionCommandOutput;
    };
  };
}
