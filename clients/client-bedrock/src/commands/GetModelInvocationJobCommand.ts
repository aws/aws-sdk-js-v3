// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetModelInvocationJobRequest, GetModelInvocationJobResponse } from "../models/models_1";
import { GetModelInvocationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets details about a batch inference job. For more information, see [Monitor batch inference jobs](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-monitor)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
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
 * //   modelInvocationType: "InvokeModel" || "Converse",
 * //   totalRecordCount: Number("long"),
 * //   processedRecordCount: Number("long"),
 * //   successRecordCount: Number("long"),
 * //   errorRecordCount: Number("long"),
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetModelInvocationJobCommand extends command<GetModelInvocationJobCommandInput, GetModelInvocationJobCommandOutput>(
  _ep0,
  _mw0,
  "GetModelInvocationJob",
  GetModelInvocationJob$
) {
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
