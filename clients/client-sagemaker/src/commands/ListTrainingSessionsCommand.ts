// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrainingSessionsRequest, ListTrainingSessionsResponse } from "../models/models_4";
import { ListTrainingSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrainingSessionsCommand}.
 */
export interface ListTrainingSessionsCommandInput extends ListTrainingSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainingSessionsCommand}.
 */
export interface ListTrainingSessionsCommandOutput extends ListTrainingSessionsResponse, __MetadataBearer {}

/**
 * Lists training sessions in your account. You can filter results by creation time, name, and status. The operation paginates results. To retrieve additional results, use the `NextToken` parameter.
 *
 * The following operations are related to `ListTrainingSessions`:
 *
 * - `CreateTrainingSession`
 * - `DescribeTrainingSession`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingSessionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingSessionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListTrainingSessionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "Created" || "Blocked" || "Running" || "Failed" || "Scheduled" || "Stopping" || "Stopped" || "Expired" || "Deleting" || "DeletionFailed",
 * };
 * const command = new ListTrainingSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainingSessionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TrainingSessionSummaries: [ // TrainingSessionSummaries
 * //     { // TrainingSessionSummary
 * //       TrainingSessionArn: "STRING_VALUE", // required
 * //       TrainingSessionStatus: "Created" || "Blocked" || "Running" || "Failed" || "Scheduled" || "Stopping" || "Stopped" || "Expired" || "Deleting" || "DeletionFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrainingSessionsCommandInput - {@link ListTrainingSessionsCommandInput}
 * @returns {@link ListTrainingSessionsCommandOutput}
 * @see {@link ListTrainingSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingSessionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class ListTrainingSessionsCommand extends command<ListTrainingSessionsCommandInput, ListTrainingSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListTrainingSessions",
  ListTrainingSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrainingSessionsRequest;
      output: ListTrainingSessionsResponse;
    };
    sdk: {
      input: ListTrainingSessionsCommandInput;
      output: ListTrainingSessionsCommandOutput;
    };
  };
}
