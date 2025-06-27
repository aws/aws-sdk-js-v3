// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { de_CreateModelCommand, se_CreateModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCommand}.
 */
export interface CreateModelCommandInput extends CreateModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCommand}.
 */
export interface CreateModelCommandOutput extends CreateModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
 *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
 *        and evaluates a new version of a model. </p>
 *          <p>To get the current status, check the <code>Status</code> field returned
 *       in the response from <a>DescribeModel</a>.</p>
 *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
 *        to create a training and a test dataset.
 *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
 *        the model. </p>
 *          <p>After training completes, the evaluation metrics are stored at the location specified in
 *         <code>OutputConfig</code>.  </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
 *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, CreateModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, CreateModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // CreateModelRequest
 *   ProjectName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   OutputConfig: { // OutputConfig
 *     S3Location: { // S3Location
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *   },
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelResponse
 * //   ModelMetadata: { // ModelMetadata
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     ModelVersion: "STRING_VALUE",
 * //     ModelArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "TRAINING" || "TRAINED" || "TRAINING_FAILED" || "STARTING_HOSTING" || "HOSTED" || "HOSTING_FAILED" || "STOPPING_HOSTING" || "SYSTEM_UPDATING" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     Performance: { // ModelPerformance
 * //       F1Score: Number("float"),
 * //       Recall: Number("float"),
 * //       Precision: Number("float"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateModelCommandInput - {@link CreateModelCommandInput}
 * @returns {@link CreateModelCommandOutput}
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded the allowed limit. For more information, see
 *         Limits in Amazon Lookout for Vision in the Amazon Lookout for Vision Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class CreateModelCommand extends $Command
  .classBuilder<
    CreateModelCommandInput,
    CreateModelCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "CreateModel", {})
  .n("LookoutVisionClient", "CreateModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelCommand)
  .de(de_CreateModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelRequest;
      output: CreateModelResponse;
    };
    sdk: {
      input: CreateModelCommandInput;
      output: CreateModelCommandOutput;
    };
  };
}
