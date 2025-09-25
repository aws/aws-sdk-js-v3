// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeModelRequest, DescribeModelResponse } from "../models/models_0";
import { DescribeModel } from "../schemas/schemas_1_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandInput extends DescribeModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandOutput extends DescribeModelResponse, __MetadataBearer {}

/**
 * <p>Describes a version of an Amazon Lookout for Vision model.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // import type { LookoutVisionClientConfig } from "@aws-sdk/client-lookoutvision";
 * const config = {}; // type is LookoutVisionClientConfig
 * const client = new LookoutVisionClient(config);
 * const input = { // DescribeModelRequest
 *   ProjectName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelResponse
 * //   ModelDescription: { // ModelDescription
 * //     ModelVersion: "STRING_VALUE",
 * //     ModelArn: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     Status: "TRAINING" || "TRAINED" || "TRAINING_FAILED" || "STARTING_HOSTING" || "HOSTED" || "HOSTING_FAILED" || "STOPPING_HOSTING" || "SYSTEM_UPDATING" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     Performance: { // ModelPerformance
 * //       F1Score: Number("float"),
 * //       Recall: Number("float"),
 * //       Precision: Number("float"),
 * //     },
 * //     OutputConfig: { // OutputConfig
 * //       S3Location: { // S3Location
 * //         Bucket: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     EvaluationManifest: { // OutputS3Object
 * //       Bucket: "STRING_VALUE", // required
 * //       Key: "STRING_VALUE", // required
 * //     },
 * //     EvaluationResult: {
 * //       Bucket: "STRING_VALUE", // required
 * //       Key: "STRING_VALUE", // required
 * //     },
 * //     EvaluationEndTimestamp: new Date("TIMESTAMP"),
 * //     KmsKeyId: "STRING_VALUE",
 * //     MinInferenceUnits: Number("int"),
 * //     MaxInferenceUnits: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeModelCommandInput - {@link DescribeModelCommandInput}
 * @returns {@link DescribeModelCommandOutput}
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
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
export class DescribeModelCommand extends $Command
  .classBuilder<
    DescribeModelCommandInput,
    DescribeModelCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutVisionService", "DescribeModel", {})
  .n("LookoutVisionClient", "DescribeModelCommand")
  .sc(DescribeModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelRequest;
      output: DescribeModelResponse;
    };
    sdk: {
      input: DescribeModelCommandInput;
      output: DescribeModelCommandOutput;
    };
  };
}
