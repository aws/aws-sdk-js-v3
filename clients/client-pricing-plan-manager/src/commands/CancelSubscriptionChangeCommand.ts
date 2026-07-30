// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelSubscriptionChangeInput, CancelSubscriptionChangeOutput } from "../models/models_0";
import { CancelSubscriptionChange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelSubscriptionChangeCommand}.
 */
export interface CancelSubscriptionChangeCommandInput extends CancelSubscriptionChangeInput {}
/**
 * @public
 *
 * The output of {@link CancelSubscriptionChangeCommand}.
 */
export interface CancelSubscriptionChangeCommandOutput extends CancelSubscriptionChangeOutput, __MetadataBearer {}

/**
 * <p>Cancels a pending scheduled change on a subscription, such as a pending downgrade or cancellation. The subscription returns to its state before the change was scheduled.</p> <note> <p>You cannot cancel a scheduled change close to its effective date. If the change is within the processing window, this operation returns an error.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingPlanManagerClient, CancelSubscriptionChangeCommand } from "@aws-sdk/client-pricing-plan-manager"; // ES Modules import
 * // const { PricingPlanManagerClient, CancelSubscriptionChangeCommand } = require("@aws-sdk/client-pricing-plan-manager"); // CommonJS import
 * // import type { PricingPlanManagerClientConfig } from "@aws-sdk/client-pricing-plan-manager";
 * const config = {}; // type is PricingPlanManagerClientConfig
 * const client = new PricingPlanManagerClient(config);
 * const input = { // CancelSubscriptionChangeInput
 *   arn: "STRING_VALUE", // required
 *   ifMatch: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CancelSubscriptionChangeCommand(input);
 * const response = await client.send(command);
 * // { // CancelSubscriptionChangeOutput
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
 * @param CancelSubscriptionChangeCommandInput - {@link CancelSubscriptionChangeCommandInput}
 * @returns {@link CancelSubscriptionChangeCommandOutput}
 * @see {@link CancelSubscriptionChangeCommandInput} for command's `input` shape.
 * @see {@link CancelSubscriptionChangeCommandOutput} for command's `response` shape.
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
 * @example Cancel a pending subscription change
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *   ifMatch: "3"
 * };
 * const command = new CancelSubscriptionChangeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eTag: "4",
 *   subscription: {
 *     arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *     createdAt: "2025-01-15T10:30:00Z",
 *     planFamily: "CloudFront",
 *     planTier: "BUSINESS",
 *     resourceArns: [
 *       "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *       "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *     ],
 *     status: "ACTIVE",
 *     updatedAt: "2025-01-17T09:00:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelSubscriptionChangeCommand extends command<CancelSubscriptionChangeCommandInput, CancelSubscriptionChangeCommandOutput>(
  _ep0,
  _mw0,
  "CancelSubscriptionChange",
  CancelSubscriptionChange$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSubscriptionChangeInput;
      output: CancelSubscriptionChangeOutput;
    };
    sdk: {
      input: CancelSubscriptionChangeCommandInput;
      output: CancelSubscriptionChangeCommandOutput;
    };
  };
}
