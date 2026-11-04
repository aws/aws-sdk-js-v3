// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FunctionEventInvokeConfig, UpdateFunctionEventInvokeConfigRequest } from "../models/models_0";
import { UpdateFunctionEventInvokeConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFunctionEventInvokeConfigCommand}.
 */
export interface UpdateFunctionEventInvokeConfigCommandInput extends UpdateFunctionEventInvokeConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionEventInvokeConfigCommand}.
 */
export interface UpdateFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {}

/**
 * Updates the configuration for asynchronous invocation for a function, version, or alias.
 *
 * To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // UpdateFunctionEventInvokeConfigRequest
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
 * const command = new UpdateFunctionEventInvokeConfigCommand(input);
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
 * @param UpdateFunctionEventInvokeConfigCommandInput - {@link UpdateFunctionEventInvokeConfigCommandInput}
 * @returns {@link UpdateFunctionEventInvokeConfigCommandOutput}
 * @see {@link UpdateFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
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
 * @example To update an asynchronous invocation configuration
 * ```javascript
 * // The following example adds an on-failure destination to the existing asynchronous invocation configuration for a function named my-function.
 * const input = {
 *   DestinationConfig: {
 *     OnFailure: {
 *       Destination: "arn:aws:sqs:us-east-2:123456789012:destination"
 *     }
 *   },
 *   FunctionName: "my-function"
 * };
 * const command = new UpdateFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DestinationConfig: {
 *     OnFailure: {
 *       Destination: "arn:aws:sqs:us-east-2:123456789012:destination"
 *     },
 *     OnSuccess:     { /* empty *\/ }
 *   },
 *   FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:$LATEST",
 *   LastModified: 1.573687896493E9,
 *   MaximumEventAgeInSeconds: 3600,
 *   MaximumRetryAttempts: 0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateFunctionEventInvokeConfigCommand extends command<UpdateFunctionEventInvokeConfigCommandInput, UpdateFunctionEventInvokeConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFunctionEventInvokeConfig",
  UpdateFunctionEventInvokeConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionEventInvokeConfigRequest;
      output: FunctionEventInvokeConfig;
    };
    sdk: {
      input: UpdateFunctionEventInvokeConfigCommandInput;
      output: UpdateFunctionEventInvokeConfigCommandOutput;
    };
  };
}
