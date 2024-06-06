// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelCustomizationJobRequest, CreateModelCustomizationJobResponse } from "../models/models_0";
import {
  de_CreateModelCustomizationJobCommand,
  se_CreateModelCustomizationJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCustomizationJobCommand}.
 */
export interface CreateModelCustomizationJobCommandInput extends CreateModelCustomizationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCustomizationJobCommand}.
 */
export interface CreateModelCustomizationJobCommandOutput
  extends CreateModelCustomizationJobResponse,
    __MetadataBearer {}

/**
 * <p>Creates a fine-tuning job to customize a base model.</p>
 *          <p>You specify the base foundation model and the location of the training data.
 *          After the  model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes.
 *       </p>
 *          <p>For information on the format of training and validation data, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-prepare.html">Prepare the datasets</a>.</p>
 *          <p>
 *          Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size.
 *          To monitor a job, use the <code>GetModelCustomizationJob</code> operation to retrieve the job status.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateModelCustomizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateModelCustomizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateModelCustomizationJobRequest
 *   jobName: "STRING_VALUE", // required
 *   customModelName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   baseModelIdentifier: "STRING_VALUE", // required
 *   customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING",
 *   customModelKmsKeyId: "STRING_VALUE",
 *   jobTags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customModelTags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   trainingDataConfig: { // TrainingDataConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   validationDataConfig: { // ValidationDataConfig
 *     validators: [ // Validators // required
 *       { // Validator
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   outputDataConfig: { // OutputDataConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   hyperParameters: { // ModelCustomizationHyperParameters // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   vpcConfig: { // VpcConfig
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateModelCustomizationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCustomizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCustomizationJobCommandInput - {@link CreateModelCustomizationJobCommandInput}
 * @returns {@link CreateModelCustomizationJobCommandOutput}
 * @see {@link CreateModelCustomizationJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelCustomizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *          The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class CreateModelCustomizationJobCommand extends $Command
  .classBuilder<
    CreateModelCustomizationJobCommandInput,
    CreateModelCustomizationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "CreateModelCustomizationJob", {})
  .n("BedrockClient", "CreateModelCustomizationJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelCustomizationJobCommand)
  .de(de_CreateModelCustomizationJobCommand)
  .build() {}
