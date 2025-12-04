// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListScanJobSummariesInput, ListScanJobSummariesOutput } from "../models/models_0";
import { ListScanJobSummaries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScanJobSummariesCommand}.
 */
export interface ListScanJobSummariesCommandInput extends ListScanJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListScanJobSummariesCommand}.
 */
export interface ListScanJobSummariesCommandOutput extends ListScanJobSummariesOutput, __MetadataBearer {}

/**
 * <p>This is a request for a summary of scan jobs created or running within the most recent 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListScanJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListScanJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListScanJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   MalwareScanner: "GUARDDUTY",
 *   ScanResultStatus: "NO_THREATS_FOUND" || "THREATS_FOUND",
 *   State: "CREATED" || "COMPLETED" || "COMPLETED_WITH_ISSUES" || "RUNNING" || "FAILED" || "CANCELED" || "AGGREGATE_ALL" || "ANY",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScanJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListScanJobSummariesOutput
 * //   ScanJobSummaries: [ // ScanJobSummaryList
 * //     { // ScanJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "COMPLETED" || "COMPLETED_WITH_ISSUES" || "RUNNING" || "FAILED" || "CANCELED" || "AGGREGATE_ALL" || "ANY",
 * //       ResourceType: "STRING_VALUE",
 * //       Count: Number("int"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       MalwareScanner: "GUARDDUTY",
 * //       ScanResultStatus: "NO_THREATS_FOUND" || "THREATS_FOUND",
 * //     },
 * //   ],
 * //   AggregationPeriod: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScanJobSummariesCommandInput - {@link ListScanJobSummariesCommandInput}
 * @returns {@link ListScanJobSummariesCommandOutput}
 * @see {@link ListScanJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListScanJobSummariesCommandOutput} for command's `response` shape.
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
export class ListScanJobSummariesCommand extends $Command
  .classBuilder<
    ListScanJobSummariesCommandInput,
    ListScanJobSummariesCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListScanJobSummaries", {})
  .n("BackupClient", "ListScanJobSummariesCommand")
  .sc(ListScanJobSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScanJobSummariesInput;
      output: ListScanJobSummariesOutput;
    };
    sdk: {
      input: ListScanJobSummariesCommandInput;
      output: ListScanJobSummariesCommandOutput;
    };
  };
}
