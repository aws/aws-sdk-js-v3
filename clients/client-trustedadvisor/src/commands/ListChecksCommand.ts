// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListChecksRequest, ListChecksResponse } from "../models/models_0";
import { ListChecks } from "../schemas/schemas_1_Recommendation";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChecksCommand}.
 */
export interface ListChecksCommandInput extends ListChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListChecksCommand}.
 */
export interface ListChecksCommandOutput extends ListChecksResponse, __MetadataBearer {}

/**
 * <p>List a filterable set of Checks</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListChecksCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListChecksCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListChecksRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   pillar: "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 *   awsService: "STRING_VALUE",
 *   source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected",
 *   language: "en" || "ja" || "zh" || "fr" || "de" || "ko" || "zh_TW" || "it" || "es" || "pt_BR" || "id",
 * };
 * const command = new ListChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListChecksResponse
 * //   nextToken: "STRING_VALUE",
 * //   checkSummaries: [ // CheckSummaryList // required
 * //     { // CheckSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       pillars: [ // RecommendationPillarList // required
 * //         "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 * //       ],
 * //       awsServices: [ // RecommendationAwsServiceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected", // required
 * //       metadata: { // StringMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListChecksCommandInput - {@link ListChecksCommandInput}
 * @returns {@link ListChecksCommandOutput}
 * @see {@link ListChecksCommandInput} for command's `input` shape.
 * @see {@link ListChecksCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 *
 * @example List all AWS Trusted Advisor Checks
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListChecksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checkSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor:::check/1iG5NDGVre",
 *       awsServices: [
 *         "EC2"
 *       ],
 *       description: `Checks security groups for rules that allow unrestricted access to a resource. Unrestricted access increases opportunities for malicious activity (hacking, denial-of-service attacks, loss of data).
 * <br>
 * <br>Note: This check only evaluates security groups that you create and their inbound rules for IPv4 addresses. Security groups created by AWS Directory Services are flagged as red or yellow, but they don’t pose a security risk and can be safely ignored or excluded. For more information, see the <a href="https://aws.amazon.com/premiumsupport/faqs/#AWS_Trusted_Advisor" target="_blank">Trusted Advisor FAQ</a>.
 * <br>
 * <br>
 * <h4 class='headerBodyStyle'>Alert Criteria</h4>
 * <br>
 * Red: A security group rule has a source IP address with a /0 suffix for ports other than 25, 80, or 443.
 * <br>
 * <br>
 * <h4 class='headerBodyStyle'>Recommended Action</h4>
 * <br>
 * Restrict access to only those IP addresses that require it. To restrict access to a specific IP address, set the suffix to /32 (for example, 192.0.2.10/32). Be sure to delete overly permissive rules after creating rules that are more restrictive.
 * <br>
 * <br>
 * <h4 class='headerBodyStyle'>Additional Resources</h4>
 * <br><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html" target="_blank">Amazon EC2 Security Groups</a><br>
 * <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing" target="_blank">Classless Inter-Domain Routing</a> (Wikipedia)`,
 *       id: "1iG5NDGVre",
 *       metadata: {
 *         0: "Region",
 *         1: "Security Group Name",
 *         2: "Security Group ID",
 *         3: "Protocol",
 *         4: "Port",
 *         5: "Status",
 *         6: "IP Range"
 *       },
 *       name: "Security Groups - Unrestricted Access",
 *       pillars: [
 *         "security"
 *       ],
 *       source: "ta_check"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor:::check/1qazXsw23e",
 *       awsServices: [
 *         "RDS"
 *       ],
 *       description: `Checks your usage of RDS and provides recommendations on purchase of Reserved Instances to help reduce costs incurred from using RDS On-Demand. AWS generates these recommendations by analyzing your On-Demand usage for the past 30 days. We then simulate every combination of reservations in the generated category of usage in order to identify the best number of each type of Reserved Instance to purchase to maximize your savings. This check covers recommendations based on partial upfront payment option with 1-year or 3-year commitment. This check is not available to accounts linked in Consolidated Billing. Recommendations are only available for the Paying Account.<br/><br/>
 * <h4 class='headerBodyStyle'>Alert Criteria</h4><br/>
 * Yellow: Optimizing the purchase of RDS Reserved Instances can help reduce costs.<br/><br/>
 * <h4 class='headerBodyStyle'>Recommended Action</h4><br/>
 * See the <a href="http://console.aws.amazon.com/billing/home?/costexplorer#/costexplorer" target="_blank">Cost Explorer</a> page for more detailed recommendations, customization options (e.g. look-back period, payment option, etc.) and to purchase RDS Reserved Instances.
 * <br/>
 * <br/>
 * <h4 class='headerBodyStyle'>Additional Resources</h4><br/>
 * Information on RDS Reserved Instances and how they can save you money can be found <a href="http://aws.amazon.com/rds/reserved-instances/" target="_blank">here</a>.<br>
 * For more information on this recommendation, see <a href="http://aws.amazon.com/premiumsupport/technology/trusted-advisor/faqs/#Reserved_Instance_Optimization_Check_Questions" target="_blank">Reserved Instance Optimization Check Questions</a> in the Trusted Advisor FAQs.<br>
 * For more detailed description of fields, see <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ReservationPurchaseRecommendationDetail.html#awscostmanagement-Type-ReservationPurchaseRecommendationDetail-AverageUtilization" target="_blank">Cost Explorer documentation</a>`,
 *       id: "1qazXsw23e",
 *       metadata: {
 *         0: "Region",
 *         1: "Family",
 *         10: "Upfront Cost of Reserved Instances",
 *         11: "Estimated cost of Reserved Instances (monthly)",
 *         12: "Estimated On-Demand Cost Post Recommended Reserved Instance Purchase (monthly)",
 *         13: "Estimated Break Even (months)",
 *         14: "Lookback Period (days)",
 *         15: "Term (years)",
 *         2: "Instance Type",
 *         3: "License Model",
 *         4: "Database Edition",
 *         5: "Database Engine",
 *         6: "Deployment Option",
 *         7: "Recommended number of Reserved Instances to purchase",
 *         8: "Expected Average Reserved Instance Utilization",
 *         9: "Estimated Savings with Recommendation (monthly)"
 *       },
 *       name: "Amazon Relational Database Service (RDS) Reserved Instance Optimization",
 *       pillars: [
 *         "cost_optimizing"
 *       ],
 *       source: "ta_check"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor:::check/1qw23er45t",
 *       awsServices: [
 *         "Redshift"
 *       ],
 *       description: `Checks your usage of Redshift and provides recommendations on purchase of Reserved Nodes to help reduce costs incurred from using Redshift On-Demand. AWS generates these recommendations by analyzing your On-Demand usage for the past 30 days. We then simulate every combination of reservations in the generated category of usage in order to identify the best number of each type of Reserved Nodes to purchase to maximize your savings. This check covers recommendations based on partial upfront payment option with 1-year or 3-year commitment. This check is not available to accounts linked in Consolidated Billing. Recommendations are only available for the Paying Account.<br/><br/>
 * <h4 class='headerBodyStyle'>Alert Criteria</h4><br/>Yellow: Optimizing the purchase of Redshift Reserved Nodes can help reduce costs.<br/><br/>
 * <h4 class='headerBodyStyle'>Recommended Action</h4><br/>See the <a href="https://console.aws.amazon.com/billing/home?/costexplorer#/costexplorer" target="_blank">Cost Explorer</a> page for more detailed recommendations, customization options (e.g. look-back period, payment option, etc.) and to purchase Redshift Reserved Nodes.<br/><br/>
 * <h4 class='headerBodyStyle'>Additional Resources</h4><br/>Information on Redshift Reserved Nodes and how they can save you money can be found <a href="http://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html" target="_blank">here</a>.<br>
 * For more information on this recommendation, see <a href="http://aws.amazon.com/premiumsupport/technology/trusted-advisor/faqs/#Reserved_Instance_Optimization_Check_Questions" target="_blank">Reserved Instance Optimization Check Questions</a> in the Trusted Advisor FAQs.<br/>
 * For more detailed description of fields, see <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ReservationPurchaseRecommendationDetail.html#awscostmanagement-Type-ReservationPurchaseRecommendationDetail-AverageUtilization" target="_blank">Cost Explorer documentation</a>`,
 *       id: "1qw23er45t",
 *       metadata: {
 *         0: "Region",
 *         1: "Family",
 *         10: "Lookback Period (days)",
 *         11: "Term (years)",
 *         2: "Node Type",
 *         3: "Recommended number of Reserved Nodes to purchase",
 *         4: "Expected Average Reserved Node Utilization",
 *         5: "Estimated Savings with Recommendation (monthly)",
 *         6: "Upfront Cost of Reserved Nodes",
 *         7: "Estimated cost of Reserved Nodes (monthly)",
 *         8: "Estimated On-Demand Cost Post Recommended Reserved Nodes Purchase (monthly)",
 *         9: "Estimated Break Even (months)"
 *       },
 *       name: "Amazon Redshift Reserved Node Optimization",
 *       pillars: [
 *         "cost_optimizing"
 *       ],
 *       source: "ta_check"
 *     }
 *   ],
 *   nextToken: "<REDACTED>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChecksCommand extends $Command
  .classBuilder<
    ListChecksCommandInput,
    ListChecksCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrustedAdvisor", "ListChecks", {})
  .n("TrustedAdvisorClient", "ListChecksCommand")
  .sc(ListChecks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChecksRequest;
      output: ListChecksResponse;
    };
    sdk: {
      input: ListChecksCommandInput;
      output: ListChecksCommandOutput;
    };
  };
}
