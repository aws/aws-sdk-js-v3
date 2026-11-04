// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FunctionEventInvokeConfig, PutFunctionEventInvokeConfigRequest } from "../models/models_0";
import { PutFunctionEventInvokeConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionEventInvokeConfigCommand}.
 */
export interface PutFunctionEventInvokeConfigCommandInput extends PutFunctionEventInvokeConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionEventInvokeConfigCommand}.
 */
export interface PutFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {}

/**
 * Configures options for [asynchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html) on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use UpdateFunctionEventInvokeConfig.
 *
 * By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with UpdateFunctionConfiguration.
 *
 * To send an invocation record to a queue, topic, S3 bucket, function, or event bus, specify a [destination](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations). You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.
 *
 * > **Note:** S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionEventInvokeConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   MaximumRetryAttempts: Number("int"),
 *   MaximumEventAgeInSeconds: Number("int"),
 *   DestinationConfig: { // DestinationConfig
 *     OnSuccess: { // OnSuccess
 *       Destination: "STRING_VALUE",
 *     },
 *     OnFailure: { // OnFailure
 *       Destination: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * // { // FunctionEventInvokeConfig
 * //   LastModified: new Date("TIMESTAMP"),
 * //   FunctionArn: "STRING_VALUE",
 * //   MaximumRetryAttempts: Number("int"),
 * //   MaximumEventAgeInSeconds: Number("int"),
 * //   DestinationConfig: { // DestinationConfig
 * //     OnSuccess: { // OnSuccess
 * //       Destination: "STRING_VALUE",
 * //     },
 * //     OnFailure: { // OnFailure
 * //       Destination: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutFunctionEventInvokeConfigCommandInput - {@link PutFunctionEventInvokeConfigCommandInput}
 * @returns {@link PutFunctionEventInvokeConfigCommandOutput}
 * @see {@link PutFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
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
 * @example To configure error handling for asynchronous invocation
 * ```javascript
 * // The following example sets a maximum event age of one hour and disables retries for the specified function.
 * const input = {
 *   FunctionName: "my-function",
 *   MaximumEventAgeInSeconds: 3600,
 *   MaximumRetryAttempts: 0
 * };
 * const command = new PutFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DestinationConfig: {
 *     OnFailure:     { /* empty *\/ },
 *     OnSuccess:     { /* empty *\/ }
 *   },
 *   FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:$LATEST",
 *   LastModified: "2016-11-21T19:49:20.006Z",
 *   MaximumEventAgeInSeconds: 3600,
 *   MaximumRetryAttempts: 0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutFunctionEventInvokeConfigCommand extends command<PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput>(
  _ep0,
  _mw0,
  "PutFunctionEventInvokeConfig",
  PutFunctionEventInvokeConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionEventInvokeConfigRequest;
      output: FunctionEventInvokeConfig;
    };
    sdk: {
      input: PutFunctionEventInvokeConfigCommandInput;
      output: PutFunctionEventInvokeConfigCommandOutput;
    };
  };
}
