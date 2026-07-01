// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLabelingJobsForWorkteamRequest, ListLabelingJobsForWorkteamResponse } from "../models/models_4";
import { ListLabelingJobsForWorkteam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLabelingJobsForWorkteamCommand}.
 */
export interface ListLabelingJobsForWorkteamCommandInput extends ListLabelingJobsForWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelingJobsForWorkteamCommand}.
 */
export interface ListLabelingJobsForWorkteamCommandOutput extends ListLabelingJobsForWorkteamResponse, __MetadataBearer {}

/**
 * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsForWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsForWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListLabelingJobsForWorkteamRequest
 *   WorkteamArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   JobReferenceCodeContains: "STRING_VALUE",
 *   SortBy: "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListLabelingJobsForWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelingJobsForWorkteamResponse
 * //   LabelingJobSummaryList: [ // LabelingJobForWorkteamSummaryList // required
 * //     { // LabelingJobForWorkteamSummary
 * //       LabelingJobName: "STRING_VALUE",
 * //       JobReferenceCode: "STRING_VALUE", // required
 * //       WorkRequesterAccountId: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LabelCounters: { // LabelCountersForWorkteam
 * //         HumanLabeled: Number("int"),
 * //         PendingHuman: Number("int"),
 * //         Total: Number("int"),
 * //       },
 * //       NumberOfHumanWorkersPerDataObject: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLabelingJobsForWorkteamCommandInput - {@link ListLabelingJobsForWorkteamCommandInput}
 * @returns {@link ListLabelingJobsForWorkteamCommandOutput}
 * @see {@link ListLabelingJobsForWorkteamCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsForWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListLabelingJobsForWorkteamCommand extends command<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput>(
  _ep0,
  _mw0,
  "ListLabelingJobsForWorkteam",
  ListLabelingJobsForWorkteam$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLabelingJobsForWorkteamRequest;
      output: ListLabelingJobsForWorkteamResponse;
    };
    sdk: {
      input: ListLabelingJobsForWorkteamCommandInput;
      output: ListLabelingJobsForWorkteamCommandOutput;
    };
  };
}
