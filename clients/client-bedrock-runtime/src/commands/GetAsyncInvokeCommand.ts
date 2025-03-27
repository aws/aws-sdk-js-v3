// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAsyncInvokeRequest,
  GetAsyncInvokeResponse,
  GetAsyncInvokeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAsyncInvokeCommand, se_GetAsyncInvokeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAsyncInvokeCommand}.
 */
export interface GetAsyncInvokeCommandInput extends GetAsyncInvokeRequest {}
/**
 * @public
 *
 * The output of {@link GetAsyncInvokeCommand}.
 */
export interface GetAsyncInvokeCommandOutput extends GetAsyncInvokeResponse, __MetadataBearer {}

/**
 * <p>Retrieve information about an asynchronous invocation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, GetAsyncInvokeCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, GetAsyncInvokeCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // GetAsyncInvokeRequest
 *   invocationArn: "STRING_VALUE", // required
 * };
 * const command = new GetAsyncInvokeCommand(input);
 * const response = await client.send(command);
 * // { // GetAsyncInvokeResponse
 * //   invocationArn: "STRING_VALUE", // required
 * //   modelArn: "STRING_VALUE", // required
 * //   clientRequestToken: "STRING_VALUE",
 * //   status: "InProgress" || "Completed" || "Failed", // required
 * //   failureMessage: "STRING_VALUE",
 * //   submitTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   outputDataConfig: { // AsyncInvokeOutputDataConfig Union: only one key present
 * //     s3OutputDataConfig: { // AsyncInvokeS3OutputDataConfig
 * //       s3Uri: "STRING_VALUE", // required
 * //       kmsKeyId: "STRING_VALUE",
 * //       bucketOwner: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAsyncInvokeCommandInput - {@link GetAsyncInvokeCommandInput}
 * @returns {@link GetAsyncInvokeCommandOutput}
 * @see {@link GetAsyncInvokeCommandInput} for command's `input` shape.
 * @see {@link GetAsyncInvokeCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For
 *          troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error,
 *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class GetAsyncInvokeCommand extends $Command
  .classBuilder<
    GetAsyncInvokeCommandInput,
    GetAsyncInvokeCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockFrontendService", "GetAsyncInvoke", {})
  .n("BedrockRuntimeClient", "GetAsyncInvokeCommand")
  .f(void 0, GetAsyncInvokeResponseFilterSensitiveLog)
  .ser(se_GetAsyncInvokeCommand)
  .de(de_GetAsyncInvokeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAsyncInvokeRequest;
      output: GetAsyncInvokeResponse;
    };
    sdk: {
      input: GetAsyncInvokeCommandInput;
      output: GetAsyncInvokeCommandOutput;
    };
  };
}
