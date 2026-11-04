// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateOpportunityRequest } from "../models/models_0";
import { DisassociateOpportunity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateOpportunityCommand}.
 */
export interface DisassociateOpportunityCommandInput extends DisassociateOpportunityRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateOpportunityCommand}.
 */
export interface DisassociateOpportunityCommandOutput extends __MetadataBearer {}

/**
 * Allows you to remove an existing association between an `Opportunity` and related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to `AssociateOpportunity`, and it provides flexibility to manage associations as business needs change.
 *
 * Use this operation to update the associations of an `Opportunity` due to changes in the related entities, or if an association was made in error. Ensuring accurate associations helps maintain clarity and accuracy to track and manage business opportunities. When you replace an entity, first attach the new entity and then disassociate the one to be removed, especially if it's the last remaining entity that's required.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, DisassociateOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, DisassociateOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // DisassociateOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   OpportunityIdentifier: "STRING_VALUE", // required
 *   RelatedEntityType: "Solutions" || "AwsProducts" || "AwsMarketplaceOffers" || "AwsMarketplaceOfferSets" || "AwsMarketplaceSolutions" || "AwsMarketplaceProducts", // required
 *   RelatedEntityIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateOpportunityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateOpportunityCommandInput - {@link DisassociateOpportunityCommandInput}
 * @returns {@link DisassociateOpportunityCommandOutput}
 * @see {@link DisassociateOpportunityCommandInput} for command's `input` shape.
 * @see {@link DisassociateOpportunityCommandOutput} for command's `response` shape.
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
export class DisassociateOpportunityCommand extends command<DisassociateOpportunityCommandInput, DisassociateOpportunityCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateOpportunity",
  DisassociateOpportunity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateOpportunityRequest;
      output: {};
    };
    sdk: {
      input: DisassociateOpportunityCommandInput;
      output: DisassociateOpportunityCommandOutput;
    };
  };
}
