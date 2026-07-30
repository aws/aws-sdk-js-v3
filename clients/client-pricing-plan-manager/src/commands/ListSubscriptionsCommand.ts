// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubscriptionsInput, ListSubscriptionsOutput } from "../models/models_0";
import { ListSubscriptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandInput extends ListSubscriptionsInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of all flat-rate pricing subscriptions in the calling account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingPlanManagerClient, ListSubscriptionsCommand } from "@aws-sdk/client-pricing-plan-manager"; // ES Modules import
 * // const { PricingPlanManagerClient, ListSubscriptionsCommand } = require("@aws-sdk/client-pricing-plan-manager"); // CommonJS import
 * // import type { PricingPlanManagerClientConfig } from "@aws-sdk/client-pricing-plan-manager";
 * const config = {}; // type is PricingPlanManagerClientConfig
 * const client = new PricingPlanManagerClient(config);
 * const input = { // ListSubscriptionsInput
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsOutput
 * //   subscriptionSummaries: [ // SubscriptionSummaryList // required
 * //     { // SubscriptionSummary
 * //       arn: "STRING_VALUE", // required
 * //       planFamily: "STRING_VALUE", // required
 * //       planTier: "STRING_VALUE", // required
 * //       usageLevel: "STRING_VALUE",
 * //       scheduledChange: { // ScheduledChange
 * //         changeType: "DOWNGRADE" || "CANCELLATION", // required
 * //         effectiveDate: new Date("TIMESTAMP"),
 * //         planTier: "STRING_VALUE",
 * //         usageLevel: "STRING_VALUE",
 * //       },
 * //       status: "PENDING_APPROVAL" || "ACTIVE" || "SYNC_IN_PROGRESS" || "FAILED", // required
 * //       statusReason: "STRING_VALUE",
 * //       resourceArns: [ // ResourceArns // required
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       eTag: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsCommandInput - {@link ListSubscriptionsCommandInput}
 * @returns {@link ListSubscriptionsCommandOutput}
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
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
 * @example List all subscriptions
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   subscriptionSummaries: [
 *     {
 *       arn: "arn:aws:pricingplanmanager::123456789012:subscription/sub-1234567890",
 *       createdAt: "2025-01-15T10:30:00Z",
 *       eTag: "1",
 *       planFamily: "CloudFront",
 *       planTier: "PRO",
 *       resourceArns: [
 *         "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *         "arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4"
 *       ],
 *       status: "ACTIVE",
 *       updatedAt: "2025-01-15T10:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSubscriptionsCommand extends command<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubscriptions",
  ListSubscriptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsInput;
      output: ListSubscriptionsOutput;
    };
    sdk: {
      input: ListSubscriptionsCommandInput;
      output: ListSubscriptionsCommandOutput;
    };
  };
}
