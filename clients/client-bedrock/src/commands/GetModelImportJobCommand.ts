// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelImportJobRequest, GetModelImportJobResponse } from "../models/models_0";
import { de_GetModelImportJobCommand, se_GetModelImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the properties associated with import model job, including the status of the
 *             job. For more information,
 *             see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">Import a customized model</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelImportJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelImportJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
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
export class GetModelImportJobCommand extends $Command
  .classBuilder<
    GetModelImportJobCommandInput,
    GetModelImportJobCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetModelImportJob", {})
  .n("BedrockClient", "GetModelImportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetModelImportJobCommand)
  .de(de_GetModelImportJobCommand)
  .build() {
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
