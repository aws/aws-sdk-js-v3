// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMediaAnalysisJobsRequest, ListMediaAnalysisJobsResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListMediaAnalysisJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMediaAnalysisJobsCommand}.
 */
export interface ListMediaAnalysisJobsCommandInput extends ListMediaAnalysisJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaAnalysisJobsCommand}.
 */
export interface ListMediaAnalysisJobsCommandOutput extends ListMediaAnalysisJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of media analysis jobs. Results are sorted by <code>CreationTimestamp</code> in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListMediaAnalysisJobsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListMediaAnalysisJobsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // ListMediaAnalysisJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaAnalysisJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaAnalysisJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MediaAnalysisJobs: [ // MediaAnalysisJobDescriptions // required
 * //     { // MediaAnalysisJobDescription
 * //       JobId: "STRING_VALUE", // required
 * //       JobName: "STRING_VALUE",
 * //       OperationsConfig: { // MediaAnalysisOperationsConfig
 * //         DetectModerationLabels: { // MediaAnalysisDetectModerationLabelsConfig
 * //           MinConfidence: Number("float"),
 * //           ProjectVersion: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "CREATED" || "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //       FailureDetails: { // MediaAnalysisJobFailureDetails
 * //         Code: "INTERNAL_ERROR" || "INVALID_S3_OBJECT" || "INVALID_MANIFEST" || "INVALID_OUTPUT_CONFIG" || "INVALID_KMS_KEY" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "RESOURCE_NOT_READY" || "THROTTLED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreationTimestamp: new Date("TIMESTAMP"), // required
 * //       CompletionTimestamp: new Date("TIMESTAMP"),
 * //       Input: { // MediaAnalysisInput
 * //         S3Object: { // S3Object
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       },
 * //       OutputConfig: { // MediaAnalysisOutputConfig
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //       },
 * //       KmsKeyId: "STRING_VALUE",
 * //       Results: { // MediaAnalysisResults
 * //         S3Object: {
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //         ModelVersions: { // MediaAnalysisModelVersions
 * //           Moderation: "STRING_VALUE",
 * //         },
 * //       },
 * //       ManifestSummary: { // MediaAnalysisManifestSummary
 * //         S3Object: {
 * //           Bucket: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Version: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMediaAnalysisJobsCommandInput - {@link ListMediaAnalysisJobsCommandInput}
 * @returns {@link ListMediaAnalysisJobsCommandOutput}
 * @see {@link ListMediaAnalysisJobsCommandInput} for command's `input` shape.
 * @see {@link ListMediaAnalysisJobsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
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
export class ListMediaAnalysisJobsCommand extends $Command
  .classBuilder<
    ListMediaAnalysisJobsCommandInput,
    ListMediaAnalysisJobsCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "ListMediaAnalysisJobs", {})
  .n("RekognitionClient", "ListMediaAnalysisJobsCommand")
  .sc(ListMediaAnalysisJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMediaAnalysisJobsRequest;
      output: ListMediaAnalysisJobsResponse;
    };
    sdk: {
      input: ListMediaAnalysisJobsCommandInput;
      output: ListMediaAnalysisJobsCommandOutput;
    };
  };
}
