// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetBatchPredictionJobsRequest, GetBatchPredictionJobsResult } from "../models/models_0";
import { de_GetBatchPredictionJobsCommand, se_GetBatchPredictionJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchPredictionJobsCommand}.
 */
export interface GetBatchPredictionJobsCommandInput extends GetBatchPredictionJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchPredictionJobsCommand}.
 */
export interface GetBatchPredictionJobsCommandOutput extends GetBatchPredictionJobsResult, __MetadataBearer {}

/**
 * <p>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetBatchPredictionJobsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetBatchPredictionJobsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetBatchPredictionJobsRequest
 *   jobId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBatchPredictionJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchPredictionJobsResult
 * //   batchPredictions: [ // BatchPredictionList
 * //     { // BatchPrediction
 * //       jobId: "STRING_VALUE",
 * //       status: "IN_PROGRESS_INITIALIZING" || "IN_PROGRESS" || "CANCEL_IN_PROGRESS" || "CANCELED" || "COMPLETE" || "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       completionTime: "STRING_VALUE",
 * //       lastHeartbeatTime: "STRING_VALUE",
 * //       inputPath: "STRING_VALUE",
 * //       outputPath: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       detectorName: "STRING_VALUE",
 * //       detectorVersion: "STRING_VALUE",
 * //       iamRoleArn: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       processedRecordsCount: Number("int"),
 * //       totalRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBatchPredictionJobsCommandInput - {@link GetBatchPredictionJobsCommandInput}
 * @returns {@link GetBatchPredictionJobsCommandOutput}
 * @see {@link GetBatchPredictionJobsCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionJobsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class GetBatchPredictionJobsCommand extends $Command
  .classBuilder<
    GetBatchPredictionJobsCommandInput,
    GetBatchPredictionJobsCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "GetBatchPredictionJobs", {})
  .n("FraudDetectorClient", "GetBatchPredictionJobsCommand")
  .f(void 0, void 0)
  .ser(se_GetBatchPredictionJobsCommand)
  .de(de_GetBatchPredictionJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchPredictionJobsRequest;
      output: GetBatchPredictionJobsResult;
    };
    sdk: {
      input: GetBatchPredictionJobsCommandInput;
      output: GetBatchPredictionJobsCommandOutput;
    };
  };
}
