// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAsyncInvokeRequest, StartAsyncInvokeResponse } from "../models/models_0";
import { StartAsyncInvoke$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAsyncInvokeCommand}.
 */
export interface StartAsyncInvokeCommandInput extends StartAsyncInvokeRequest {}
/**
 * @public
 *
 * The output of {@link StartAsyncInvokeCommand}.
 */
export interface StartAsyncInvokeCommandOutput extends StartAsyncInvokeResponse, __MetadataBearer {}

/**
 * Starts an asynchronous invocation.
 *
 * This operation requires permission for the `bedrock:InvokeModel` action.
 *
 * > **Important:** To deny all inference access to resources that you specify in the modelId field, you need to deny access to the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` actions. Doing this also denies access to the resource through the Converse API actions ([Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) and [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html)). For more information see [Deny access for inference on specific models](https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-deny-inference).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, StartAsyncInvokeCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, StartAsyncInvokeCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * // import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
 * const config = {}; // type is BedrockRuntimeClientConfig
 * const client = new BedrockRuntimeClient(config);
 * const input = { // StartAsyncInvokeRequest
 *   clientRequestToken: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 *   modelInput: "DOCUMENT_VALUE", // required
 *   outputDataConfig: { // AsyncInvokeOutputDataConfig Union: only one key present
 *     s3OutputDataConfig: { // AsyncInvokeS3OutputDataConfig
 *       s3Uri: "STRING_VALUE", // required
 *       kmsKeyId: "STRING_VALUE",
 *       bucketOwner: "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartAsyncInvokeCommand(input);
 * const response = await client.send(command);
 * // { // StartAsyncInvokeResponse
 * //   invocationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAsyncInvokeCommandInput - {@link StartAsyncInvokeCommandInput}
 * @returns {@link StartAsyncInvokeCommandOutput}
 * @see {@link StartAsyncInvokeCommandInput} for command's `input` shape.
 * @see {@link StartAsyncInvokeCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see [AccessDeniedException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied) in the Amazon Bedrock User Guide
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. For troubleshooting this error, see [InternalFailure](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure) in the Amazon Bedrock User Guide
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. For troubleshooting this error, see [ResourceNotFound](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found) in the Amazon Bedrock User Guide
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds the service quota for your account. You can view your quotas at [Viewing service quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html). You can resubmit your request later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service isn't currently available. For troubleshooting this error, see [ServiceUnavailable](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable) in the Amazon Bedrock User Guide
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request was denied due to exceeding the account quotas for *Amazon Bedrock*. For troubleshooting this error, see [ThrottlingException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception) in the Amazon Bedrock User Guide
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by *Amazon Bedrock*. For troubleshooting this error, see [ValidationError](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error) in the Amazon Bedrock User Guide
 *
 * @throws {@link BedrockRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockRuntime service.
 *
 * @public
 */
export class StartAsyncInvokeCommand extends command<StartAsyncInvokeCommandInput, StartAsyncInvokeCommandOutput>(
  _ep0,
  _mw0,
  "StartAsyncInvoke",
  StartAsyncInvoke$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAsyncInvokeRequest;
      output: StartAsyncInvokeResponse;
    };
    sdk: {
      input: StartAsyncInvokeCommandInput;
      output: StartAsyncInvokeCommandOutput;
    };
  };
}
