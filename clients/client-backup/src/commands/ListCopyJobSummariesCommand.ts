// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCopyJobSummariesInput, ListCopyJobSummariesOutput } from "../models/models_0";
import { de_ListCopyJobSummariesCommand, se_ListCopyJobSummariesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCopyJobSummariesCommand}.
 */
export interface ListCopyJobSummariesCommandInput extends ListCopyJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListCopyJobSummariesCommand}.
 */
export interface ListCopyJobSummariesCommandOutput extends ListCopyJobSummariesOutput, __MetadataBearer {}

/**
 * <p>This request obtains a list of copy jobs created
 *          or running within the the most recent 30 days. You can
 *          include parameters AccountID, State, ResourceType, MessageCategory,
 *          AggregationPeriod, MaxResults, or NextToken to filter
 *          results.</p>
 *          <p>This request returns a summary that contains
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListCopyJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListCopyJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListCopyJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   State: "CREATED" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
 *   ResourceType: "STRING_VALUE",
 *   MessageCategory: "STRING_VALUE",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCopyJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListCopyJobSummariesOutput
 * //   CopyJobSummaries: [ // CopyJobSummaryList
 * //     { // CopyJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
 * //       ResourceType: "STRING_VALUE",
 * //       MessageCategory: "STRING_VALUE",
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
 * @param ListCopyJobSummariesCommandInput - {@link ListCopyJobSummariesCommandInput}
 * @returns {@link ListCopyJobSummariesCommandOutput}
 * @see {@link ListCopyJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListCopyJobSummariesCommandOutput} for command's `response` shape.
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
export class ListCopyJobSummariesCommand extends $Command
  .classBuilder<
    ListCopyJobSummariesCommandInput,
    ListCopyJobSummariesCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListCopyJobSummaries", {})
  .n("BackupClient", "ListCopyJobSummariesCommand")
  .f(void 0, void 0)
  .ser(se_ListCopyJobSummariesCommand)
  .de(de_ListCopyJobSummariesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCopyJobSummariesInput;
      output: ListCopyJobSummariesOutput;
    };
    sdk: {
      input: ListCopyJobSummariesCommandInput;
      output: ListCopyJobSummariesCommandOutput;
    };
  };
}
