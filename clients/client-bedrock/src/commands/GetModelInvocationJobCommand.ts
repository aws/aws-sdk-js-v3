// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetModelInvocationJobRequest,
  GetModelInvocationJobResponse,
  GetModelInvocationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetModelInvocationJobCommand, se_GetModelInvocationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelInvocationJobCommand}.
 */
export interface GetModelInvocationJobCommandInput extends GetModelInvocationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetModelInvocationJobCommand}.
 */
export interface GetModelInvocationJobCommandOutput extends GetModelInvocationJobResponse, __MetadataBearer {}

/**
 * <p>Gets details about a batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-manage.html#batch-inference-view">View details about a batch inference job</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetModelInvocationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetModelInvocationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetModelInvocationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE",
 * //   modelId: "STRING_VALUE", // required
 * //   clientRequestToken: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "Submitted" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "PartiallyCompleted" || "Expired" || "Validating" || "Scheduled",
 * //   message: "STRING_VALUE",
 * //   submitTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   inputDataConfig: { // ModelInvocationJobInputDataConfig Union: only one key present
 * //     s3InputDataConfig: { // ModelInvocationJobS3InputDataConfig
 * //       s3InputFormat: "JSONL",
 * //       s3Uri: "STRING_VALUE", // required
 * //       s3BucketOwner: "STRING_VALUE",
 * //     },
 * //   },
 * //   outputDataConfig: { // ModelInvocationJobOutputDataConfig Union: only one key present
 * //     s3OutputDataConfig: { // ModelInvocationJobS3OutputDataConfig
 * //       s3Uri: "STRING_VALUE", // required
 * //       s3EncryptionKeyId: "STRING_VALUE",
 * //       s3BucketOwner: "STRING_VALUE",
 * //     },
 * //   },
 * //   vpcConfig: { // VpcConfig
 * //     subnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   timeoutDurationInHours: Number("int"),
 * //   jobExpirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetModelInvocationJobCommandInput - {@link GetModelInvocationJobCommandInput}
 * @returns {@link GetModelInvocationJobCommandOutput}
 * @see {@link GetModelInvocationJobCommandInput} for command's `input` shape.
 * @see {@link GetModelInvocationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class GetModelInvocationJobCommand extends $Command
  .classBuilder<
    GetModelInvocationJobCommandInput,
    GetModelInvocationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetModelInvocationJob", {})
  .n("BedrockClient", "GetModelInvocationJobCommand")
  .f(void 0, GetModelInvocationJobResponseFilterSensitiveLog)
  .ser(se_GetModelInvocationJobCommand)
  .de(de_GetModelInvocationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelInvocationJobRequest;
      output: GetModelInvocationJobResponse;
    };
    sdk: {
      input: GetModelInvocationJobCommandInput;
      output: GetModelInvocationJobCommandOutput;
    };
  };
}
