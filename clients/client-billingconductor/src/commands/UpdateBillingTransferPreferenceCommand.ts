// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBillingTransferPreferenceInput, UpdateBillingTransferPreferenceOutput } from "../models/models_0";
import { UpdateBillingTransferPreference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBillingTransferPreferenceCommand}.
 */
export interface UpdateBillingTransferPreferenceCommandInput extends UpdateBillingTransferPreferenceInput {}
/**
 * @public
 *
 * The output of {@link UpdateBillingTransferPreferenceCommand}.
 */
export interface UpdateBillingTransferPreferenceCommandOutput extends UpdateBillingTransferPreferenceOutput, __MetadataBearer {}

/**
 * <p>Sets the auto billing group creation preference for a billing transfer. When the preference is enabled, Billing Conductor automatically creates an indirect billing transfer billing group in your account, with the pricing plan that you specify, for each account that transfers its bill to the bill source account of this billing transfer. The preference applies only to billing groups that are created after you enable it.</p> <p>Enabling the preference requires the <code>iam:CreateServiceLinkedRole</code> permission. While a pricing plan is specified in an enabled preference, you can't delete that pricing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateBillingTransferPreferenceCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateBillingTransferPreferenceCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // UpdateBillingTransferPreferenceInput
 *   ClientToken: "STRING_VALUE",
 *   ResponsibilityTransferArn: "STRING_VALUE", // required
 *   AutoBillingTransferBillingGroupCreation: { // AutoTransferBillingGroupCreationPreference
 *     Enabled: true || false, // required
 *     PricingPlanArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBillingTransferPreferenceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillingTransferPreferenceOutput
 * //   ResponsibilityTransferArn: "STRING_VALUE", // required
 * //   AutoBillingTransferBillingGroupCreation: { // AutoTransferBillingGroupCreationPreference
 * //     Enabled: true || false, // required
 * //     PricingPlanArn: "STRING_VALUE",
 * //   },
 * //   LastModifiedTime: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param UpdateBillingTransferPreferenceCommandInput - {@link UpdateBillingTransferPreferenceCommandInput}
 * @returns {@link UpdateBillingTransferPreferenceCommandOutput}
 * @see {@link UpdateBillingTransferPreferenceCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingTransferPreferenceCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class UpdateBillingTransferPreferenceCommand extends command<UpdateBillingTransferPreferenceCommandInput, UpdateBillingTransferPreferenceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBillingTransferPreference",
  UpdateBillingTransferPreference$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillingTransferPreferenceInput;
      output: UpdateBillingTransferPreferenceOutput;
    };
    sdk: {
      input: UpdateBillingTransferPreferenceCommandInput;
      output: UpdateBillingTransferPreferenceCommandOutput;
    };
  };
}
