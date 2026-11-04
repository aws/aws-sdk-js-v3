// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRunsRequest, ListRunsResponse } from "../models/models_0";
import { ListRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRunsCommand}.
 */
export interface ListRunsCommandInput extends ListRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListRunsCommand}.
 */
export interface ListRunsCommandOutput extends ListRunsResponse, __MetadataBearer {}

/**
 * Retrieves a list of runs and returns each run's metadata and status.
 *
 * Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If the `ListRuns` response doesn't include specific runs that you expected, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see [CloudWatch logs](https://docs.aws.amazon.com/omics/latest/dev/monitoring-cloudwatch-logs.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListRunsRequest
 *   name: "STRING_VALUE",
 *   runGroupId: "STRING_VALUE",
 *   batchId: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "STRING_VALUE",
 * };
 * const command = new ListRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListRunsResponse
 * //   items: [ // RunList
 * //     { // RunListItem
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       workflowId: "STRING_VALUE",
 * //       batchId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       priority: Number("int"),
 * //       storageCapacity: Number("int"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       stopTime: new Date("TIMESTAMP"),
 * //       storageType: "STRING_VALUE",
 * //       workflowVersionName: "STRING_VALUE",
 * //       workflowName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunsCommandInput - {@link ListRunsCommandInput}
 * @returns {@link ListRunsCommandOutput}
 * @see {@link ListRunsCommandInput} for command's `input` shape.
 * @see {@link ListRunsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListRunsCommand extends command<ListRunsCommandInput, ListRunsCommandOutput>(
  _ep0,
  _mw0,
  "ListRuns",
  ListRuns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunsRequest;
      output: ListRunsResponse;
    };
    sdk: {
      input: ListRunsCommandInput;
      output: ListRunsCommandOutput;
    };
  };
}
