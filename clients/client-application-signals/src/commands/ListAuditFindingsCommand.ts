// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAuditFindingsInput, ListAuditFindingsOutput } from "../models/models_0";
import { de_ListAuditFindingsCommand, se_ListAuditFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuditFindingsCommand}.
 */
export interface ListAuditFindingsCommandInput extends ListAuditFindingsInput {}
/**
 * @public
 *
 * The output of {@link ListAuditFindingsCommand}.
 */
export interface ListAuditFindingsCommandOutput extends ListAuditFindingsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of audit findings that provide automated analysis of service behavior and root cause analysis. These findings help identify the most significant observations about your services, including performance issues, anomalies, and potential problems. The findings are generated using heuristic algorithms based on established troubleshooting patterns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListAuditFindingsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListAuditFindingsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListAuditFindingsInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Auditors: [ // Auditors
 *     "STRING_VALUE",
 *   ],
 *   AuditTargets: [ // AuditTargets // required
 *     { // AuditTarget
 *       Type: "STRING_VALUE", // required
 *       Data: { // AuditTargetEntity Union: only one key present
 *         Service: { // ServiceEntity
 *           Type: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *           Environment: "STRING_VALUE",
 *           AwsAccountId: "STRING_VALUE",
 *         },
 *         Slo: { // ServiceLevelObjectiveEntity
 *           SloName: "STRING_VALUE",
 *           SloArn: "STRING_VALUE",
 *         },
 *         ServiceOperation: { // ServiceOperationEntity
 *           Service: {
 *             Type: "STRING_VALUE",
 *             Name: "STRING_VALUE",
 *             Environment: "STRING_VALUE",
 *             AwsAccountId: "STRING_VALUE",
 *           },
 *           Operation: "STRING_VALUE",
 *           MetricType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAuditFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditFindingsOutput
 * //   AuditFindings: [ // AuditFindings // required
 * //     { // AuditFinding
 * //       KeyAttributes: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AuditorResults: [ // AuditorResults
 * //         { // AuditorResult
 * //           Auditor: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "NONE",
 * //         },
 * //       ],
 * //       Operation: "STRING_VALUE",
 * //       MetricGraph: { // MetricGraph
 * //         MetricDataQueries: [ // MetricDataQueries
 * //           { // MetricDataQuery
 * //             Id: "STRING_VALUE", // required
 * //             MetricStat: { // MetricStat
 * //               Metric: { // Metric
 * //                 Namespace: "STRING_VALUE",
 * //                 MetricName: "STRING_VALUE",
 * //                 Dimensions: [ // Dimensions
 * //                   { // Dimension
 * //                     Name: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               Period: Number("int"), // required
 * //               Stat: "STRING_VALUE", // required
 * //               Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             ReturnData: true || false,
 * //             Period: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       DependencyGraph: { // DependencyGraph
 * //         Nodes: [ // Nodes
 * //           { // Node
 * //             KeyAttributes: { // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             Name: "STRING_VALUE", // required
 * //             NodeId: "STRING_VALUE", // required
 * //             Operation: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //             Duration: Number("double"),
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Edges: [ // Edges
 * //           { // Edge
 * //             SourceNodeId: "STRING_VALUE",
 * //             DestinationNodeId: "STRING_VALUE",
 * //             Duration: Number("double"),
 * //             ConnectionType: "INDIRECT" || "DIRECT",
 * //           },
 * //         ],
 * //       },
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditFindingsCommandInput - {@link ListAuditFindingsCommandInput}
 * @returns {@link ListAuditFindingsCommandOutput}
 * @see {@link ListAuditFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAuditFindingsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class ListAuditFindingsCommand extends $Command
  .classBuilder<
    ListAuditFindingsCommandInput,
    ListAuditFindingsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "ListAuditFindings", {})
  .n("ApplicationSignalsClient", "ListAuditFindingsCommand")
  .f(void 0, void 0)
  .ser(se_ListAuditFindingsCommand)
  .de(de_ListAuditFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuditFindingsInput;
      output: ListAuditFindingsOutput;
    };
    sdk: {
      input: ListAuditFindingsCommandInput;
      output: ListAuditFindingsCommandOutput;
    };
  };
}
