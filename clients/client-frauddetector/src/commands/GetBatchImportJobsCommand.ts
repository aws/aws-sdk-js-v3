// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetBatchImportJobsRequest, GetBatchImportJobsResult } from "../models/models_0";
import { GetBatchImportJobs } from "../schemas/schemas_14_Batch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchImportJobsCommand}.
 */
export interface GetBatchImportJobsCommandInput extends GetBatchImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchImportJobsCommand}.
 */
export interface GetBatchImportJobsCommandOutput extends GetBatchImportJobsResult, __MetadataBearer {}

/**
 * <p>Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>,
 *          this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50.
 *          To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request.
 *          A null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetBatchImportJobsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetBatchImportJobsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetBatchImportJobsRequest
 *   jobId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBatchImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchImportJobsResult
 * //   batchImports: [ // BatchImportList
 * //     { // BatchImport
 * //       jobId: "STRING_VALUE",
 * //       status: "IN_PROGRESS_INITIALIZING" || "IN_PROGRESS" || "CANCEL_IN_PROGRESS" || "CANCELED" || "COMPLETE" || "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       completionTime: "STRING_VALUE",
 * //       inputPath: "STRING_VALUE",
 * //       outputPath: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       iamRoleArn: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       processedRecordsCount: Number("int"),
 * //       failedRecordsCount: Number("int"),
 * //       totalRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBatchImportJobsCommandInput - {@link GetBatchImportJobsCommandInput}
 * @returns {@link GetBatchImportJobsCommandOutput}
 * @see {@link GetBatchImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetBatchImportJobsCommandOutput} for command's `response` shape.
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
export class GetBatchImportJobsCommand extends $Command
  .classBuilder<
    GetBatchImportJobsCommandInput,
    GetBatchImportJobsCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetBatchImportJobs", {})
  .n("FraudDetectorClient", "GetBatchImportJobsCommand")
  .sc(GetBatchImportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchImportJobsRequest;
      output: GetBatchImportJobsResult;
    };
    sdk: {
      input: GetBatchImportJobsCommandInput;
      output: GetBatchImportJobsCommandOutput;
    };
  };
}
