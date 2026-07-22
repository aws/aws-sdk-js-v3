// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataTransformationJobsRequest, ListDataTransformationJobsResponse } from "../models/models_0";
import { ListDataTransformationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataTransformationJobsCommand}.
 */
export interface ListDataTransformationJobsCommandInput extends ListDataTransformationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTransformationJobsCommand}.
 */
export interface ListDataTransformationJobsCommandOutput extends ListDataTransformationJobsResponse, __MetadataBearer {}

/**
 * <p>Lists data transformation jobs for your AWS account. Results can be filtered by status, job name, and submit time window. Results are paginated. Use the <code>NextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListDataTransformationJobsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListDataTransformationJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListDataTransformationJobsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED",
 *   JobName: "STRING_VALUE",
 *   SubmittedAfter: new Date("TIMESTAMP"),
 *   SubmittedBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListDataTransformationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTransformationJobsResponse
 * //   Items: [ // TransformationJobSummaryList // required
 * //     { // TransformationJobSummary
 * //       JobId: "STRING_VALUE", // required
 * //       JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //       SubmitTime: new Date("TIMESTAMP"), // required
 * //       JobName: "STRING_VALUE",
 * //       EndTime: new Date("TIMESTAMP"),
 * //       SourceFormat: "CCDA" || "CSV",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataTransformationJobsCommandInput - {@link ListDataTransformationJobsCommandInput}
 * @returns {@link ListDataTransformationJobsCommandOutput}
 * @see {@link ListDataTransformationJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataTransformationJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class ListDataTransformationJobsCommand extends command<ListDataTransformationJobsCommandInput, ListDataTransformationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataTransformationJobs",
  ListDataTransformationJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTransformationJobsRequest;
      output: ListDataTransformationJobsResponse;
    };
    sdk: {
      input: ListDataTransformationJobsCommandInput;
      output: ListDataTransformationJobsCommandOutput;
    };
  };
}
