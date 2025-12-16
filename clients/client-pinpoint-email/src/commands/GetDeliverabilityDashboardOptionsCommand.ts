// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetDeliverabilityDashboardOptionsRequest,
  GetDeliverabilityDashboardOptionsResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDeliverabilityDashboardOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeliverabilityDashboardOptionsCommand}.
 */
export interface GetDeliverabilityDashboardOptionsCommandInput extends GetDeliverabilityDashboardOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliverabilityDashboardOptionsCommand}.
 */
export interface GetDeliverabilityDashboardOptionsCommandOutput
  extends GetDeliverabilityDashboardOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the
 *             ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDeliverabilityDashboardOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDeliverabilityDashboardOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = {};
 * const command = new GetDeliverabilityDashboardOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliverabilityDashboardOptionsResponse
 * //   DashboardEnabled: true || false, // required
 * //   SubscriptionExpiryDate: new Date("TIMESTAMP"),
 * //   AccountStatus: "ACTIVE" || "PENDING_EXPIRATION" || "DISABLED",
 * //   ActiveSubscribedDomains: [ // DomainDeliverabilityTrackingOptions
 * //     { // DomainDeliverabilityTrackingOption
 * //       Domain: "STRING_VALUE",
 * //       SubscriptionStartDate: new Date("TIMESTAMP"),
 * //       InboxPlacementTrackingOption: { // InboxPlacementTrackingOption
 * //         Global: true || false,
 * //         TrackedIsps: [ // IspNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   PendingExpirationSubscribedDomains: [
 * //     {
 * //       Domain: "STRING_VALUE",
 * //       SubscriptionStartDate: new Date("TIMESTAMP"),
 * //       InboxPlacementTrackingOption: {
 * //         Global: true || false,
 * //         TrackedIsps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeliverabilityDashboardOptionsCommandInput - {@link GetDeliverabilityDashboardOptionsCommandInput}
 * @returns {@link GetDeliverabilityDashboardOptionsCommandOutput}
 * @see {@link GetDeliverabilityDashboardOptionsCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityDashboardOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class GetDeliverabilityDashboardOptionsCommand extends $Command
  .classBuilder<
    GetDeliverabilityDashboardOptionsCommandInput,
    GetDeliverabilityDashboardOptionsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "GetDeliverabilityDashboardOptions", {})
  .n("PinpointEmailClient", "GetDeliverabilityDashboardOptionsCommand")
  .sc(GetDeliverabilityDashboardOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDeliverabilityDashboardOptionsResponse;
    };
    sdk: {
      input: GetDeliverabilityDashboardOptionsCommandInput;
      output: GetDeliverabilityDashboardOptionsCommandOutput;
    };
  };
}
