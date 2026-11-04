// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAsyncInvokesRequest, ListAsyncInvokesResponse } from "../models/models_0";
import { ListAsyncInvokes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAsyncInvokesCommand}.
 */
export interface ListAsyncInvokesCommandInput extends ListAsyncInvokesRequest {}
/**
 * @public
 *
 * The output of {@link ListAsyncInvokesCommand}.
 */
export interface ListAsyncInvokesCommandOutput extends ListAsyncInvokesResponse, __MetadataBearer {}

/**
 * Lists asynchronous invocations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, ListAsyncInvokesCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, ListAsyncInvokesCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * // import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
 * const config = {}; // type is BedrockRuntimeClientConfig
 * const client = new BedrockRuntimeClient(config);
 * const input = { // ListAsyncInvokesRequest
 *   submitTimeAfter: new Date("TIMESTAMP"),
 *   submitTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "SubmissionTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAsyncInvokesCommand(input);
 * const response = await client.send(command);
 * // { // ListAsyncInvokesResponse
 * //   nextToken: "STRING_VALUE",
 * //   asyncInvokeSummaries: [ // AsyncInvokeSummaries
 * //     { // AsyncInvokeSummary
 * //       invocationArn: "STRING_VALUE", // required
 * //       modelArn: "STRING_VALUE", // required
 * //       clientRequestToken: "STRING_VALUE",
 * //       status: "InProgress" || "Completed" || "Failed",
 * //       failureMessage: "STRING_VALUE",
 * //       submitTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       outputDataConfig: { // AsyncInvokeOutputDataConfig Union: only one key present
 * //         s3OutputDataConfig: { // AsyncInvokeS3OutputDataConfig
 * //           s3Uri: "STRING_VALUE", // required
 * //           kmsKeyId: "STRING_VALUE",
 * //           bucketOwner: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAsyncInvokesCommandInput - {@link ListAsyncInvokesCommandInput}
 * @returns {@link ListAsyncInvokesCommandOutput}
 * @see {@link ListAsyncInvokesCommandInput} for command's `input` shape.
 * @see {@link ListAsyncInvokesCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see [AccessDeniedException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied) in the Amazon Bedrock User Guide
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. For troubleshooting this error, see [InternalFailure](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure) in the Amazon Bedrock User Guide
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
export class ListAsyncInvokesCommand extends command<ListAsyncInvokesCommandInput, ListAsyncInvokesCommandOutput>(
  _ep0,
  _mw0,
  "ListAsyncInvokes",
  ListAsyncInvokes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAsyncInvokesRequest;
      output: ListAsyncInvokesResponse;
    };
    sdk: {
      input: ListAsyncInvokesCommandInput;
      output: ListAsyncInvokesCommandOutput;
    };
  };
}
