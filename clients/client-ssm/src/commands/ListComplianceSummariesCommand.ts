// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/models_1";
import { ListComplianceSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComplianceSummariesCommand}.
 */
export interface ListComplianceSummariesCommandInput extends ListComplianceSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceSummariesCommand}.
 */
export interface ListComplianceSummariesCommandOutput extends ListComplianceSummariesResult, __MetadataBearer {}

/**
 * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
 *    example, this call can return State Manager associations, patches, or custom compliance types
 *    according to the filter criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListComplianceSummariesRequest
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
 * const command = new ListComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceSummariesResult
 * //   ComplianceSummaryItems: [ // ComplianceSummaryItemList
 * //     { // ComplianceSummaryItem
 * //       ComplianceType: "STRING_VALUE",
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
 * @param ListComplianceSummariesCommandInput - {@link ListComplianceSummariesCommandInput}
 * @returns {@link ListComplianceSummariesCommandOutput}
 * @see {@link ListComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceSummariesCommandOutput} for command's `response` shape.
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
export class ListComplianceSummariesCommand extends command<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListComplianceSummaries",
  ListComplianceSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComplianceSummariesRequest;
      output: ListComplianceSummariesResult;
    };
    sdk: {
      input: ListComplianceSummariesCommandInput;
      output: ListComplianceSummariesCommandOutput;
    };
  };
}
