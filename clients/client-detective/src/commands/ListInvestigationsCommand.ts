// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInvestigationsRequest, ListInvestigationsResponse } from "../models/models_0";
import { ListInvestigations } from "../schemas/schemas_3_Organization";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandInput extends ListInvestigationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandOutput extends ListInvestigationsResponse, __MetadataBearer {}

/**
 * <p>Detective investigations lets you investigate IAM users and
 *             IAM roles using indicators of compromise. An indicator of compromise
 *          (IOC) is an artifact observed in or on a network, system, or environment that can (with a
 *          high level of confidence) identify malicious activity or a security incident.
 *             <code>ListInvestigations</code> lists all active Detective
 *          investigations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListInvestigationsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListInvestigationsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListInvestigationsRequest
 *   GraphArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   FilterCriteria: { // FilterCriteria
 *     Severity: { // StringFilter
 *       Value: "STRING_VALUE", // required
 *     },
 *     Status: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     State: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     EntityArn: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     CreatedTime: { // DateFilter
 *       StartInclusive: new Date("TIMESTAMP"), // required
 *       EndInclusive: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   SortCriteria: { // SortCriteria
 *     Field: "SEVERITY" || "STATUS" || "CREATED_TIME",
 *     SortOrder: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListInvestigationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationsResponse
 * //   InvestigationDetails: [ // InvestigationDetails
 * //     { // InvestigationDetail
 * //       InvestigationId: "STRING_VALUE",
 * //       Severity: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       Status: "RUNNING" || "FAILED" || "SUCCESSFUL",
 * //       State: "ACTIVE" || "ARCHIVED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       EntityArn: "STRING_VALUE",
 * //       EntityType: "IAM_ROLE" || "IAM_USER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvestigationsCommandInput - {@link ListInvestigationsCommandInput}
 * @returns {@link ListInvestigationsCommandOutput}
 * @see {@link ListInvestigationsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class ListInvestigationsCommand extends $Command
  .classBuilder<
    ListInvestigationsCommandInput,
    ListInvestigationsCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "ListInvestigations", {})
  .n("DetectiveClient", "ListInvestigationsCommand")
  .sc(ListInvestigations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvestigationsRequest;
      output: ListInvestigationsResponse;
    };
    sdk: {
      input: ListInvestigationsCommandInput;
      output: ListInvestigationsCommandOutput;
    };
  };
}
