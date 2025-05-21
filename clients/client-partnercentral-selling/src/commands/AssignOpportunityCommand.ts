// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssignOpportunityRequest, AssignOpportunityRequestFilterSensitiveLog } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_AssignOpportunityCommand, se_AssignOpportunityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssignOpportunityCommand}.
 */
export interface AssignOpportunityCommandInput extends AssignOpportunityRequest {}
/**
 * @public
 *
 * The output of {@link AssignOpportunityCommand}.
 */
export interface AssignOpportunityCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables you to reassign an existing <code>Opportunity</code> to another user within your Partner Central account. The specified user receives the opportunity, and it appears on their Partner Central dashboard, allowing them to take necessary actions or proceed with the opportunity.</p> <p>This is useful for distributing opportunities to the appropriate team members or departments within your organization, ensuring that each opportunity is handled by the right person. By default, the opportunity owner is the one who creates it. Currently, there's no API to enumerate the list of available users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, AssignOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, AssignOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // AssignOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Assignee: { // AssigneeContact
 *     Email: "STRING_VALUE", // required
 *     FirstName: "STRING_VALUE", // required
 *     LastName: "STRING_VALUE", // required
 *     BusinessTitle: "STRING_VALUE", // required
 *   },
 * };
 * const command = new AssignOpportunityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssignOpportunityCommandInput - {@link AssignOpportunityCommandInput}
 * @returns {@link AssignOpportunityCommandOutput}
 * @see {@link AssignOpportunityCommandInput} for command's `input` shape.
 * @see {@link AssignOpportunityCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class AssignOpportunityCommand extends $Command
  .classBuilder<
    AssignOpportunityCommandInput,
    AssignOpportunityCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPartnerCentralSelling", "AssignOpportunity", {})
  .n("PartnerCentralSellingClient", "AssignOpportunityCommand")
  .f(AssignOpportunityRequestFilterSensitiveLog, void 0)
  .ser(se_AssignOpportunityCommand)
  .de(de_AssignOpportunityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssignOpportunityRequest;
      output: {};
    };
    sdk: {
      input: AssignOpportunityCommandInput;
      output: AssignOpportunityCommandOutput;
    };
  };
}
