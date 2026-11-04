// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMatchingJobsInput, ListMatchingJobsOutput } from "../models/models_0";
import { ListMatchingJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMatchingJobsCommand}.
 */
export interface ListMatchingJobsCommandInput extends ListMatchingJobsInput {}
/**
 * @public
 *
 * The output of {@link ListMatchingJobsCommand}.
 */
export interface ListMatchingJobsCommandOutput extends ListMatchingJobsOutput, __MetadataBearer {}

/**
 * Lists all jobs for a given workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListMatchingJobsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListMatchingJobsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListMatchingJobsInput
 *   workflowName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMatchingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMatchingJobsOutput
 * //   jobs: [ // JobList
 * //     { // JobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMatchingJobsCommandInput - {@link ListMatchingJobsCommandInput}
 * @returns {@link ListMatchingJobsCommandOutput}
 * @see {@link ListMatchingJobsCommandInput} for command's `input` shape.
 * @see {@link ListMatchingJobsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class ListMatchingJobsCommand extends command<ListMatchingJobsCommandInput, ListMatchingJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListMatchingJobs",
  ListMatchingJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMatchingJobsInput;
      output: ListMatchingJobsOutput;
    };
    sdk: {
      input: ListMatchingJobsCommandInput;
      output: ListMatchingJobsCommandOutput;
    };
  };
}
