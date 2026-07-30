// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSubscriptionInput, GetSubscriptionOutput } from "../models/models_0";
import { GetSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSubscriptionCommand}.
 */
export interface GetSubscriptionCommandInput extends GetSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionCommand}.
 */
export interface GetSubscriptionCommandOutput extends GetSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a flat-rate pricing subscription, including its current status, associated resources, and any pending scheduled changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingPlanManagerClient, GetSubscriptionCommand } from "@aws-sdk/client-pricing-plan-manager"; // ES Modules import
 * // const { PricingPlanManagerClient, GetSubscriptionCommand } = require("@aws-sdk/client-pricing-plan-manager"); // CommonJS import
 * // import type { PricingPlanManagerClientConfig } from "@aws-sdk/client-pricing-plan-manager";
 * const config = {}; // type is PricingPlanManagerClientConfig
 * const client = new PricingPlanManagerClient(config);
 * const input = { // GetSubscriptionInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionOutput
 * //   subscription: { // Subscription
 * //     arn: "STRING_VALUE", // required
 * //     planFamily: "STRING_VALUE", // required
 * //     planTier: "STRING_VALUE", // required
 * //     usageLevel: "STRING_VALUE",
 * //     scheduledChange: { // ScheduledChange
 * //       changeType: "DOWNGRADE" || "CANCELLATION", // required
 * //       effectiveDate: new Date("TIMESTAMP"),
 * //       planTier: "STRING_VALUE",
 * //       usageLevel: "STRING_VALUE",
 * //     },
 * //     status: "PENDING_APPROVAL" || "ACTIVE" || "SYNC_IN_PROGRESS" || "FAILED", // required
 * //     statusReason: "STRING_VALUE",
 * //     resourceArns: [ // ResourceArns // required
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   eTag: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSubscriptionCommandInput - {@link GetSubscriptionCommandInput}
 * @returns {@link GetSubscriptionCommandOutput}
 * @see {@link GetSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link PricingPlanManagerClientResolvedConfig | config} for PricingPlanManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required permissions to perform this operation. Verify that your IAM policy grants access to this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred on the server. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified subscription was not found. Verify that the ARN is correct and that the subscription belongs to your account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the allowed limit. Wait briefly and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed a business rule validation. For example, the specified resource might already be associated with another subscription, or the subscription might not be in the required state for this operation.</p>
 *
 * @throws {@link PricingPlanManagerServiceException}
 * <p>Base exception class for all service exceptions from PricingPlanManager service.</p>
 *
 *
 * @example Get subscription details
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890"
 * };
 * const command = new GetSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eTag: "1",
 *   subscription: {
 *     arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *     createdAt: "2025-01-15T10:30:00Z",
 *     planFamily: "CloudFront",
 *     planTier: "PRO",
 *     resourceArns: [
 *       "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *       "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *     ],
 *     status: "ACTIVE",
 *     updatedAt: "2025-01-15T10:30:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSubscriptionCommand extends command<GetSubscriptionCommandInput, GetSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "GetSubscription",
  GetSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionInput;
      output: GetSubscriptionOutput;
    };
    sdk: {
      input: GetSubscriptionCommandInput;
      output: GetSubscriptionCommandOutput;
    };
  };
}
