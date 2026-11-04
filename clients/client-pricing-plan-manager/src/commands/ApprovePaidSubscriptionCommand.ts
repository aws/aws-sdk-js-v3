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
 * Approves a subscription that is in `PENDING_APPROVAL` status, activating it and starting billing.
 *
 * > **Note:** This operation requires the current `ETag` value for concurrency control. Retrieve it from a previous `GetSubscription` or `ListSubscriptions` response.
 *
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
 *
 * You do not have the required permissions to perform this operation. Verify that your IAM policy grants access to this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. This typically occurs when the `ETag` value in the `If-Match` header does not match the current version of the subscription. Retrieve the latest version and retry.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred on the server. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified subscription was not found. Verify that the ARN is correct and that the subscription belongs to your account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the allowed limit. Wait briefly and retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed a business rule validation. For example, the specified resource might already be associated with another subscription, or the subscription might not be in the required state for this operation.
 *
 * @throws {@link PricingPlanManagerServiceException}
 *
 * Base exception class for all service exceptions from PricingPlanManager service.
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
