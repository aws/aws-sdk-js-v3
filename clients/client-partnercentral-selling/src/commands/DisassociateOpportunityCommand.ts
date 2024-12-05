// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateOpportunityRequest } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_DisassociateOpportunityCommand, se_DisassociateOpportunityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Allows you to remove an existing association between an <code>Opportunity</code> and
 *             related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to
 *                 <code>AssociateOpportunity</code>, and it provides flexibility to manage
 *             associations as business needs change.</p>
 *          <p>Use this operation to update the associations of an <code>Opportunity</code> due to
 *             changes in the related entities, or if an association was made in error. Ensuring
 *             accurate associations helps maintain clarity and accuracy to track and manage business
 *             opportunities. When you replace an entity, first attach the new entity and then
 *             disassociate the one to be removed, especially if it's the last remaining entity that's
 *             required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, DisassociateOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, DisassociateOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // DisassociateOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   OpportunityIdentifier: "STRING_VALUE", // required
 *   RelatedEntityType: "Solutions" || "AwsProducts" || "AwsMarketplaceOffers", // required
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
 *  <p>This error occurs when you don't have permission to perform the requested
 *             action.</p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your
 *             AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist.
 *             Resource ID and type might be incorrect.</p>
 *          <p>Suggested action: This is usually a transient error. Retry after the provided retry
 *             delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not
 *             exist, or isn't visible with the current credentials.</p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the
 *             expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas
 *             and adapt your usage to avoid throttling.</p>
 *          <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business
 *             validation rules.</p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons,
 *             to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 * @public
 */
export class DisassociateOpportunityCommand extends $Command
  .classBuilder<
    DisassociateOpportunityCommandInput,
    DisassociateOpportunityCommandOutput,
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
  .s("AWSPartnerCentralSelling", "DisassociateOpportunity", {})
  .n("PartnerCentralSellingClient", "DisassociateOpportunityCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateOpportunityCommand)
  .de(de_DisassociateOpportunityCommand)
  .build() {
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
