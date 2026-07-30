// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSubscriptionInput, CreateSubscriptionOutput } from "../models/models_0";
import { CreateSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandInput extends CreateSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandOutput extends CreateSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Creates a flat-rate pricing subscription for the specified resources.</p> <note> <p>When <code>approvalMode</code> is set to <code>MANUAL</code>, paid-tier subscriptions are created in <code>PENDING_APPROVAL</code> status and require a separate <code>ApprovePaidSubscription</code> call before billing starts. Free-tier subscriptions are always activated immediately regardless of approval mode.</p> <p>When <code>approvalMode</code> is set to <code>IMMEDIATE</code> or is not specified, the subscription is activated immediately.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingPlanManagerClient, CreateSubscriptionCommand } from "@aws-sdk/client-pricing-plan-manager"; // ES Modules import
 * // const { PricingPlanManagerClient, CreateSubscriptionCommand } = require("@aws-sdk/client-pricing-plan-manager"); // CommonJS import
 * // import type { PricingPlanManagerClientConfig } from "@aws-sdk/client-pricing-plan-manager";
 * const config = {}; // type is PricingPlanManagerClientConfig
 * const client = new PricingPlanManagerClient(config);
 * const input = { // CreateSubscriptionInput
 *   planFamily: "STRING_VALUE", // required
 *   planTier: "STRING_VALUE", // required
 *   usageLevel: "STRING_VALUE",
 *   resourceArns: [ // ResourceArns // required
 *     "STRING_VALUE",
 *   ],
 *   approvalMode: "MANUAL" || "IMMEDIATE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionOutput
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
 * @param CreateSubscriptionCommandInput - {@link CreateSubscriptionCommandInput}
 * @returns {@link CreateSubscriptionCommandOutput}
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service limit. You have reached the maximum number of subscriptions allowed for your account.</p>
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
 * @example Create a flat-rate pricing subscription (deferred approval)
 * ```javascript
 * //
 * const input = {
 *   approvalMode: "MANUAL",
 *   planFamily: "CloudFront",
 *   planTier: "PRO",
 *   resourceArns: [
 *     "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *     "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *   ]
 * };
 * const command = new CreateSubscriptionCommand(input);
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
 *     status: "PENDING_APPROVAL",
 *     updatedAt: "2025-01-15T10:30:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Create a subscription with approval mode
 * ```javascript
 * //
 * const input = {
 *   approvalMode: "IMMEDIATE",
 *   planFamily: "CloudFront",
 *   planTier: "PRO",
 *   resourceArns: [
 *     "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *     "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *   ]
 * };
 * const command = new CreateSubscriptionCommand(input);
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
 *     status: "SYNC_IN_PROGRESS",
 *     updatedAt: "2025-01-15T10:30:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSubscriptionCommand extends command<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSubscription",
  CreateSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionInput;
      output: CreateSubscriptionOutput;
    };
    sdk: {
      input: CreateSubscriptionCommandInput;
      output: CreateSubscriptionCommandOutput;
    };
  };
}
