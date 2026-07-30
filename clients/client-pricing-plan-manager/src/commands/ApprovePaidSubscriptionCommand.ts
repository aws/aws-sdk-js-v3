// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApprovePaidSubscriptionInput, ApprovePaidSubscriptionOutput } from "../models/models_0";
import { ApprovePaidSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ApprovePaidSubscriptionCommand}.
 */
export interface ApprovePaidSubscriptionCommandInput extends ApprovePaidSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link ApprovePaidSubscriptionCommand}.
 */
export interface ApprovePaidSubscriptionCommandOutput extends ApprovePaidSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Approves a subscription that is in <code>PENDING_APPROVAL</code> status, activating it and starting billing.</p> <note> <p>This operation requires the current <code>ETag</code> value for concurrency control. Retrieve it from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingPlanManagerClient, ApprovePaidSubscriptionCommand } from "@aws-sdk/client-pricing-plan-manager"; // ES Modules import
 * // const { PricingPlanManagerClient, ApprovePaidSubscriptionCommand } = require("@aws-sdk/client-pricing-plan-manager"); // CommonJS import
 * // import type { PricingPlanManagerClientConfig } from "@aws-sdk/client-pricing-plan-manager";
 * const config = {}; // type is PricingPlanManagerClientConfig
 * const client = new PricingPlanManagerClient(config);
 * const input = { // ApprovePaidSubscriptionInput
 *   arn: "STRING_VALUE", // required
 *   ifMatch: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ApprovePaidSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // ApprovePaidSubscriptionOutput
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
 * @param ApprovePaidSubscriptionCommandInput - {@link ApprovePaidSubscriptionCommandInput}
 * @returns {@link ApprovePaidSubscriptionCommandOutput}
 * @see {@link ApprovePaidSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ApprovePaidSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link PricingPlanManagerClientResolvedConfig | config} for PricingPlanManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required permissions to perform this operation. Verify that your IAM policy grants access to this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This typically occurs when the <code>ETag</code> value in the <code>If-Match</code> header does not match the current version of the subscription. Retrieve the latest version and retry.</p>
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
 * @example Approve a pending paid subscription
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *   ifMatch: "1"
 * };
 * const command = new ApprovePaidSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eTag: "2",
 *   subscription: {
 *     arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *     createdAt: "2025-01-15T10:30:00Z",
 *     planFamily: "CloudFront",
 *     planTier: "PRO",
 *     resourceArns: [
 *       "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *       "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *     ],
 *     status: "SYNC_IN_PROGRESS",
 *     updatedAt: "2025-01-15T10:35:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ApprovePaidSubscriptionCommand extends command<ApprovePaidSubscriptionCommandInput, ApprovePaidSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "ApprovePaidSubscription",
  ApprovePaidSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApprovePaidSubscriptionInput;
      output: ApprovePaidSubscriptionOutput;
    };
    sdk: {
      input: ApprovePaidSubscriptionCommandInput;
      output: ApprovePaidSubscriptionCommandOutput;
    };
  };
}
