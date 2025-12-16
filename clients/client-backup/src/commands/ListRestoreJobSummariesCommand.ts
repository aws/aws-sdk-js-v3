// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRestoreJobSummariesInput, ListRestoreJobSummariesOutput } from "../models/models_0";
import { ListRestoreJobSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreJobSummariesCommand}.
 */
export interface ListRestoreJobSummariesCommandInput extends ListRestoreJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreJobSummariesCommand}.
 */
export interface ListRestoreJobSummariesCommandOutput extends ListRestoreJobSummariesOutput, __MetadataBearer {}

/**
 * <p>This request obtains a summary of restore jobs created
 *          or running within the the most recent 30 days. You can
 *          include parameters AccountID, State, ResourceType,
 *          AggregationPeriod, MaxResults, or NextToken to filter
 *          results.</p>
 *          <p>This request returns a summary that contains
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListRestoreJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   State: "CREATED" || "PENDING" || "RUNNING" || "ABORTED" || "COMPLETED" || "FAILED" || "AGGREGATE_ALL" || "ANY",
 *   ResourceType: "STRING_VALUE",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRestoreJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreJobSummariesOutput
 * //   RestoreJobSummaries: [ // RestoreJobSummaryList
 * //     { // RestoreJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "PENDING" || "RUNNING" || "ABORTED" || "COMPLETED" || "FAILED" || "AGGREGATE_ALL" || "ANY",
 * //       ResourceType: "STRING_VALUE",
 * //       Count: Number("int"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   AggregationPeriod: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRestoreJobSummariesCommandInput - {@link ListRestoreJobSummariesCommandInput}
 * @returns {@link ListRestoreJobSummariesCommandOutput}
 * @see {@link ListRestoreJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobSummariesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class ListRestoreJobSummariesCommand extends $Command
  .classBuilder<
    ListRestoreJobSummariesCommandInput,
    ListRestoreJobSummariesCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListRestoreJobSummaries", {})
  .n("BackupClient", "ListRestoreJobSummariesCommand")
  .sc(ListRestoreJobSummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRestoreJobSummariesInput;
      output: ListRestoreJobSummariesOutput;
    };
    sdk: {
      input: ListRestoreJobSummariesCommandInput;
      output: ListRestoreJobSummariesCommandOutput;
    };
  };
}
