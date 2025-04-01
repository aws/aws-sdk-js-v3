// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMediaAnalysisJobRequest, GetMediaAnalysisJobResponse } from "../models/models_0";
import { de_GetMediaAnalysisJobCommand, se_GetMediaAnalysisJobCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMediaAnalysisJobCommand}.
 */
export interface GetMediaAnalysisJobCommandInput extends GetMediaAnalysisJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaAnalysisJobCommand}.
 */
export interface GetMediaAnalysisJobCommandOutput extends GetMediaAnalysisJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the results for a given media analysis job.
 *         Takes a <code>JobId</code> returned by StartMediaAnalysisJob.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetMediaAnalysisJobCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetMediaAnalysisJobCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetMediaAnalysisJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetMediaAnalysisJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaAnalysisJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobName: "STRING_VALUE",
 * //   OperationsConfig: { // MediaAnalysisOperationsConfig
 * //     DetectModerationLabels: { // MediaAnalysisDetectModerationLabelsConfig
 * //       MinConfidence: Number("float"),
 * //       ProjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * //   Status: "CREATED" || "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   FailureDetails: { // MediaAnalysisJobFailureDetails
 * //     Code: "INTERNAL_ERROR" || "INVALID_S3_OBJECT" || "INVALID_MANIFEST" || "INVALID_OUTPUT_CONFIG" || "INVALID_KMS_KEY" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "RESOURCE_NOT_READY" || "THROTTLED",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   CreationTimestamp: new Date("TIMESTAMP"), // required
 * //   CompletionTimestamp: new Date("TIMESTAMP"),
 * //   Input: { // MediaAnalysisInput
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   OutputConfig: { // MediaAnalysisOutputConfig
 * //     S3Bucket: "STRING_VALUE", // required
 * //     S3KeyPrefix: "STRING_VALUE",
 * //   },
 * //   KmsKeyId: "STRING_VALUE",
 * //   Results: { // MediaAnalysisResults
 * //     S3Object: {
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //     ModelVersions: { // MediaAnalysisModelVersions
 * //       Moderation: "STRING_VALUE",
 * //     },
 * //   },
 * //   ManifestSummary: { // MediaAnalysisManifestSummary
 * //     S3Object: {
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMediaAnalysisJobCommandInput - {@link GetMediaAnalysisJobCommandInput}
 * @returns {@link GetMediaAnalysisJobCommandOutput}
 * @see {@link GetMediaAnalysisJobCommandInput} for command's `input` shape.
 * @see {@link GetMediaAnalysisJobCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @public
 */
export class GetMediaAnalysisJobCommand extends $Command
  .classBuilder<
    GetMediaAnalysisJobCommandInput,
    GetMediaAnalysisJobCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "GetMediaAnalysisJob", {})
  .n("RekognitionClient", "GetMediaAnalysisJobCommand")
  .f(void 0, void 0)
  .ser(se_GetMediaAnalysisJobCommand)
  .de(de_GetMediaAnalysisJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaAnalysisJobRequest;
      output: GetMediaAnalysisJobResponse;
    };
    sdk: {
      input: GetMediaAnalysisJobCommandInput;
      output: GetMediaAnalysisJobCommandOutput;
    };
  };
}
