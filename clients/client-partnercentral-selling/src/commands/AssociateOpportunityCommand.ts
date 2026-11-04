// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateOpportunityRequest } from "../models/models_0";
import { AssociateOpportunity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables you to create a formal association between an `Opportunity` and various related entities, enriching the context and details of the opportunity for better collaboration and decision making. You can associate an opportunity with the following entity types:
 *
 * - Partner Solution: A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address business challenges using Amazon Web Services services.
 * - Amazon Web Services Products: Amazon Web Services offers many products and services that provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, see [Amazon Web Services products](https://github.com/aws-samples/partner-crm-integration-samples/blob/main/resources/aws_products.json).
 * - Amazon Web Services Marketplace private offer: Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, see [Private offers in Amazon Web Services Marketplace](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-private-offers.html).
 *
 * To obtain identifiers for these entities, use the following methods:
 *
 * - Solution: Use the `ListSolutions` operation.
 * - AWS Products: For the latest list of Amazon Web Services products, see [Amazon Web Services products](https://github.com/aws-samples/partner-crm-integration-samples/blob/main/resources/aws_products.json).
 * - Amazon Web Services Marketplace private offer: Use the [Using the Amazon Web Services Marketplace Catalog API](https://docs.aws.amazon.com/marketplace/latest/APIReference/catalog-apis.html) to list entities. Specifically, use the `ListEntities` operation to retrieve a list of private offers. The request returns the details of available private offers. For more information, see [ListEntities](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, AssociateOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, AssociateOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // AssociateOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   OpportunityIdentifier: "STRING_VALUE", // required
 *   RelatedEntityType: "Solutions" || "AwsProducts" || "AwsMarketplaceOffers" || "AwsMarketplaceOfferSets" || "AwsMarketplaceSolutions" || "AwsMarketplaceProducts", // required
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
 *
 * This error occurs when you don't have permission to perform the requested action.
 *
 * You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *
 * Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *
 * Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.
 *
 * This error occurs when there are too many requests sent. Review the provided [Quotas](https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html) and retry after the provided delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service or business validation rules.
 *
 * Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *
 * @throws {@link PartnerCentralSellingServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralSelling service.
 *
 * @public
 */
export class AssociateOpportunityCommand extends command<AssociateOpportunityCommandInput, AssociateOpportunityCommandOutput>(
  _ep0,
  _mw0,
  "AssociateOpportunity",
  AssociateOpportunity$
) {
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
