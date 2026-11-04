// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetModelImportJobRequest, GetModelImportJobResponse } from "../models/models_1";
import { GetModelImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetModelImportJobCommand}.
 */
export interface GetModelImportJobCommandInput extends GetModelImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetModelImportJobCommand}.
 */
export interface GetModelImportJobCommandOutput extends GetModelImportJobResponse, __MetadataBearer {}

/**
 * Retrieves the properties associated with import model job, including the status of the job. For more information, see [Import a customized model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelImportJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelImportJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetModelImportJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetModelImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetModelImportJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobName: "STRING_VALUE",
 * //   importedModelName: "STRING_VALUE",
 * //   importedModelArn: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   modelDataSource: { // ModelDataSource Union: only one key present
 * //     s3DataSource: { // S3DataSource
 * //       s3Uri: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "InProgress" || "Completed" || "Failed",
 * //   failureMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   vpcConfig: { // VpcConfig
 * //     subnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   importedModelKmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelImportJobCommandInput - {@link GetModelImportJobCommandInput}
 * @returns {@link GetModelImportJobCommandOutput}
 * @see {@link GetModelImportJobCommandInput} for command's `input` shape.
 * @see {@link GetModelImportJobCommandOutput} for command's `response` shape.
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
export class GetModelImportJobCommand extends command<GetModelImportJobCommandInput, GetModelImportJobCommandOutput>(
  _ep0,
  _mw0,
  "GetModelImportJob",
  GetModelImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelImportJobRequest;
      output: GetModelImportJobResponse;
    };
    sdk: {
      input: GetModelImportJobCommandInput;
      output: GetModelImportJobCommandOutput;
    };
  };
}
