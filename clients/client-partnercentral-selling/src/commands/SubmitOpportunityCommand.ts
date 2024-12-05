// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitOpportunityRequest } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_SubmitOpportunityCommand, se_SubmitOpportunityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitOpportunityCommand}.
 */
export interface SubmitOpportunityCommandInput extends SubmitOpportunityRequest {}
/**
 * @public
 *
 * The output of {@link SubmitOpportunityCommand}.
 */
export interface SubmitOpportunityCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *     Use this action to submit an opportunity that was previously created by partner for
 *     AWS review. After you perform this action, the opportunity becomes non-editable until it
 *     is reviewed by AWS and has <code> LifeCycle.ReviewStatus </code> as either
 *     <code>Approved</code> or <code>Action Required</code>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, SubmitOpportunityCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, SubmitOpportunityCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // SubmitOpportunityRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   InvolvementType: "For Visibility Only" || "Co-Sell", // required
 *   Visibility: "Full" || "Limited",
 * };
 * const command = new SubmitOpportunityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubmitOpportunityCommandInput - {@link SubmitOpportunityCommandInput}
 * @returns {@link SubmitOpportunityCommandOutput}
 * @see {@link SubmitOpportunityCommandInput} for command's `input` shape.
 * @see {@link SubmitOpportunityCommandOutput} for command's `response` shape.
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
export class SubmitOpportunityCommand extends $Command
  .classBuilder<
    SubmitOpportunityCommandInput,
    SubmitOpportunityCommandOutput,
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
  .s("AWSPartnerCentralSelling", "SubmitOpportunity", {})
  .n("PartnerCentralSellingClient", "SubmitOpportunityCommand")
  .f(void 0, void 0)
  .ser(se_SubmitOpportunityCommand)
  .de(de_SubmitOpportunityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitOpportunityRequest;
      output: {};
    };
    sdk: {
      input: SubmitOpportunityCommandInput;
      output: SubmitOpportunityCommandOutput;
    };
  };
}
