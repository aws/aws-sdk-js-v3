// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPolicyPreviewJobsRequest, ListPolicyPreviewJobsResponse } from "../models/models_0";
import { ListPolicyPreviewJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyPreviewJobsCommand}.
 */
export interface ListPolicyPreviewJobsCommandInput extends ListPolicyPreviewJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyPreviewJobsCommand}.
 */
export interface ListPolicyPreviewJobsCommandOutput extends ListPolicyPreviewJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all policy preview jobs with optional filtering by job status or target ID. Results are paginated for efficient retrieval of large result sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListPolicyPreviewJobsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListPolicyPreviewJobsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListPolicyPreviewJobsRequest
 *   filters: { // PolicyPreviewJobFiltersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPolicyPreviewJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyPreviewJobsResponse
 * //   analysisReports: [ // PolicyPreviewAnalysisReports // required
 * //     { // PolicyPreviewAnalysisReport
 * //       jobId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       submittedAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //       outputS3Uri: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyPreviewJobsCommandInput - {@link ListPolicyPreviewJobsCommandInput}
 * @returns {@link ListPolicyPreviewJobsCommandOutput}
 * @see {@link ListPolicyPreviewJobsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyPreviewJobsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Successfully listed policy preview jobs with filters
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     jobStatus: "COMPLETED"
 *   },
 *   maxResults: 10,
 *   nextToken: "token-123"
 * };
 * const command = new ListPolicyPreviewJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   analysisReports: [
 *     {
 *       completedAt: "2023-05-01T10:30:00Z",
 *       jobId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 *       outputS3Uri: "s3://bucket/path",
 *       startedAt: "2023-05-01T10:01:00Z",
 *       status: "COMPLETED",
 *       submittedAt: "2023-05-01T10:00:00Z"
 *     },
 *     {
 *       completedAt: "2023-05-02T10:30:00Z",
 *       jobId: "c3d4e5f6-a7b8-9012-cdef-123456789012",
 *       outputS3Uri: "s3://bucket/path",
 *       startedAt: "2023-05-02T10:01:00Z",
 *       status: "COMPLETED",
 *       submittedAt: "2023-05-02T10:00:00Z"
 *     }
 *   ],
 *   nextToken: "token-456"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPolicyPreviewJobsCommand extends $Command
  .classBuilder<
    ListPolicyPreviewJobsCommandInput,
    ListPolicyPreviewJobsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "ListPolicyPreviewJobs", {})
  .n("AccessAnalyzerClient", "ListPolicyPreviewJobsCommand")
  .sc(ListPolicyPreviewJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyPreviewJobsRequest;
      output: ListPolicyPreviewJobsResponse;
    };
    sdk: {
      input: ListPolicyPreviewJobsCommandInput;
      output: ListPolicyPreviewJobsCommandOutput;
    };
  };
}
