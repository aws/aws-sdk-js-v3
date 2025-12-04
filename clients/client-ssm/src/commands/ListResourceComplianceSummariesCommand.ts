// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourceComplianceSummariesRequest, ListResourceComplianceSummariesResult } from "../models/models_1";
import { ListResourceComplianceSummaries } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceComplianceSummariesCommand}.
 */
export interface ListResourceComplianceSummariesCommandInput extends ListResourceComplianceSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceComplianceSummariesCommand}.
 */
export interface ListResourceComplianceSummariesCommandOutput
  extends ListResourceComplianceSummariesResult,
    __MetadataBearer {}

/**
 * <p>Returns a resource-level summary count. The summary includes information about compliant and
 *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
 *    criteria you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListResourceComplianceSummariesRequest
 *   Filters: [ // ComplianceStringFilterList
 *     { // ComplianceStringFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // ComplianceStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *       Type: "EQUAL" || "NOT_EQUAL" || "BEGIN_WITH" || "LESS_THAN" || "GREATER_THAN",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceComplianceSummariesResult
 * //   ResourceComplianceSummaryItems: [ // ResourceComplianceSummaryItemList
 * //     { // ResourceComplianceSummaryItem
 * //       ComplianceType: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Status: "COMPLIANT" || "NON_COMPLIANT",
 * //       OverallSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //       ExecutionSummary: { // ComplianceExecutionSummary
 * //         ExecutionTime: new Date("TIMESTAMP"), // required
 * //         ExecutionId: "STRING_VALUE",
 * //         ExecutionType: "STRING_VALUE",
 * //       },
 * //       CompliantSummary: { // CompliantSummary
 * //         CompliantCount: Number("int"),
 * //         SeveritySummary: { // SeveritySummary
 * //           CriticalCount: Number("int"),
 * //           HighCount: Number("int"),
 * //           MediumCount: Number("int"),
 * //           LowCount: Number("int"),
 * //           InformationalCount: Number("int"),
 * //           UnspecifiedCount: Number("int"),
 * //         },
 * //       },
 * //       NonCompliantSummary: { // NonCompliantSummary
 * //         NonCompliantCount: Number("int"),
 * //         SeveritySummary: {
 * //           CriticalCount: Number("int"),
 * //           HighCount: Number("int"),
 * //           MediumCount: Number("int"),
 * //           LowCount: Number("int"),
 * //           InformationalCount: Number("int"),
 * //           UnspecifiedCount: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceComplianceSummariesCommandInput - {@link ListResourceComplianceSummariesCommandInput}
 * @returns {@link ListResourceComplianceSummariesCommandOutput}
 * @see {@link ListResourceComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListResourceComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListResourceComplianceSummariesCommand extends $Command
  .classBuilder<
    ListResourceComplianceSummariesCommandInput,
    ListResourceComplianceSummariesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListResourceComplianceSummaries", {})
  .n("SSMClient", "ListResourceComplianceSummariesCommand")
  .sc(ListResourceComplianceSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceComplianceSummariesRequest;
      output: ListResourceComplianceSummariesResult;
    };
    sdk: {
      input: ListResourceComplianceSummariesCommandInput;
      output: ListResourceComplianceSummariesCommandOutput;
    };
  };
}
