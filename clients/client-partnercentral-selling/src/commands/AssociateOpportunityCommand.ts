// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateOpportunityRequest } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_AssociateOpportunityCommand, se_AssociateOpportunityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateOpportunityCommand}.
 */
export interface AssociateOpportunityCommandInput extends AssociateOpportunityRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOpportunityCommand}.
 */
export interface AssociateOpportunityCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *             Enables you to create a formal association between an <code>Opportunity</code> and various
 *             related entities, enriching the context and details of the opportunity for better collaboration and
 *             decision-making. You can associate an opportunity with the following types of entities:
 *         </p>
 *          <ul>
 *             <li>
 *                <p>
 *                     Partner Solution:
 *                     A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address specific business challenges or achieve particular goals using Amazon Web Services services.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                     Amazon Web Services Product:
 *                     Amazon Web Services offers a wide range of products and services designed to provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, refer to <a href="https://github.com/aws-samples/partner-crm-integration-samples/blob/main/resources/aws_products.json">Amazon Web Services products</a>.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                     Amazon Web Services Marketplace private offer:
 *                     Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, refer to <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-private-offers.html">Private offers in Amazon Web Services Marketplace</a>.
 *                 </p>
 *             </li>
 *          </ul>
 *          <p>To obtain identifiers for these entities, use the following methods:</p>
 *          <ul>
 *             <li>
 *                <p>Solution: Use the <code>ListSolutions</code> operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     AWS products: For the latest list of Amazon Web Services products, refer to
 *                     the Amazon Web Services products list.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     Amazon Web Services Marketplace private offer: Use the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html">AWS Marketplace Catalog API</a> to list entities. Specifically, use the <code>ListEntities</code> operation to retrieve a list of private offers. The request to the <code>ListEntities</code> API returns the details of the private offers available to you. For more information, refer to <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html">ListEntities</a>.
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, AssociateOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, AssociateOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // AssociateOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   OpportunityIdentifier: "STRING_VALUE", // required
 *   RelatedEntityType: "Solutions" || "AwsProducts" || "AwsMarketplaceOffers", // required
 *   RelatedEntityIdentifier: "STRING_VALUE", // required
 * };
 * const command = new AssociateOpportunityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateOpportunityCommandInput - {@link AssociateOpportunityCommandInput}
 * @returns {@link AssociateOpportunityCommandOutput}
 * @see {@link AssociateOpportunityCommandInput} for command's `input` shape.
 * @see {@link AssociateOpportunityCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the
 *             requested action.
 *         </p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *         </p>
 *          <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *         </p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your
 *             usage to avoid throttling.
 *         </p>
 *          <p>This error occurs when there are too many requests sent. Review the provided
 *             <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">quotas</a> and retry after the provided delay.
 *         </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.
 *         </p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *         </p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 * @public
 */
export class AssociateOpportunityCommand extends $Command
  .classBuilder<
    AssociateOpportunityCommandInput,
    AssociateOpportunityCommandOutput,
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
  .s("AWSPartnerCentralSelling", "AssociateOpportunity", {})
  .n("PartnerCentralSellingClient", "AssociateOpportunityCommand")
  .f(void 0, void 0)
  .ser(se_AssociateOpportunityCommand)
  .de(de_AssociateOpportunityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateOpportunityRequest;
      output: {};
    };
    sdk: {
      input: AssociateOpportunityCommandInput;
      output: AssociateOpportunityCommandOutput;
    };
  };
}
