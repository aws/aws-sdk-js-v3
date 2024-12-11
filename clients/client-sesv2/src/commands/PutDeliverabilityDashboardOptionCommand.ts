// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutDeliverabilityDashboardOptionRequest, PutDeliverabilityDashboardOptionResponse } from "../models/models_1";
import {
  de_PutDeliverabilityDashboardOptionCommand,
  se_PutDeliverabilityDashboardOptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeliverabilityDashboardOptionCommand}.
 */
export interface PutDeliverabilityDashboardOptionCommandInput extends PutDeliverabilityDashboardOptionRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliverabilityDashboardOptionCommand}.
 */
export interface PutDeliverabilityDashboardOptionCommandOutput
  extends PutDeliverabilityDashboardOptionResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email. You also gain the ability to perform predictive inbox placement tests.</p>
 *          <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDeliverabilityDashboardOptionRequest
 *   DashboardEnabled: true || false, // required
 *   SubscribedDomains: [ // DomainDeliverabilityTrackingOptions
 *     { // DomainDeliverabilityTrackingOption
 *       Domain: "STRING_VALUE",
 *       SubscriptionStartDate: new Date("TIMESTAMP"),
 *       InboxPlacementTrackingOption: { // InboxPlacementTrackingOption
 *         Global: true || false,
 *         TrackedIsps: [ // IspNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new PutDeliverabilityDashboardOptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDeliverabilityDashboardOptionCommandInput - {@link PutDeliverabilityDashboardOptionCommandInput}
 * @returns {@link PutDeliverabilityDashboardOptionCommandOutput}
 * @see {@link PutDeliverabilityDashboardOptionCommandInput} for command's `input` shape.
 * @see {@link PutDeliverabilityDashboardOptionCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class PutDeliverabilityDashboardOptionCommand extends $Command
  .classBuilder<
    PutDeliverabilityDashboardOptionCommandInput,
    PutDeliverabilityDashboardOptionCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "PutDeliverabilityDashboardOption", {})
  .n("SESv2Client", "PutDeliverabilityDashboardOptionCommand")
  .f(void 0, void 0)
  .ser(se_PutDeliverabilityDashboardOptionCommand)
  .de(de_PutDeliverabilityDashboardOptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeliverabilityDashboardOptionRequest;
      output: {};
    };
    sdk: {
      input: PutDeliverabilityDashboardOptionCommandInput;
      output: PutDeliverabilityDashboardOptionCommandOutput;
    };
  };
}
