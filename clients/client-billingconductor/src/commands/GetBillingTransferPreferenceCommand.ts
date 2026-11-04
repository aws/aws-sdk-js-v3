// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillingTransferPreferenceInput, GetBillingTransferPreferenceOutput } from "../models/models_0";
import { GetBillingTransferPreference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBillingTransferPreferenceCommand}.
 */
export interface GetBillingTransferPreferenceCommandInput extends GetBillingTransferPreferenceInput {}
/**
 * @public
 *
 * The output of {@link GetBillingTransferPreferenceCommand}.
 */
export interface GetBillingTransferPreferenceCommandOutput extends GetBillingTransferPreferenceOutput, __MetadataBearer {}

/**
 * Retrieves the auto billing group creation preference for a billing transfer.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, GetBillingTransferPreferenceCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, GetBillingTransferPreferenceCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // GetBillingTransferPreferenceInput
 *   ResponsibilityTransferArn: "STRING_VALUE", // required
 * };
 * const command = new GetBillingTransferPreferenceCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingTransferPreferenceOutput
 * //   ResponsibilityTransferArn: "STRING_VALUE", // required
 * //   AutoBillingTransferBillingGroupCreation: { // AutoTransferBillingGroupCreationPreference
 * //     Enabled: true || false, // required
 * //     PricingPlanArn: "STRING_VALUE",
 * //   },
 * //   LastModifiedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetBillingTransferPreferenceCommandInput - {@link GetBillingTransferPreferenceCommandInput}
 * @returns {@link GetBillingTransferPreferenceCommandOutput}
 * @see {@link GetBillingTransferPreferenceCommandInput} for command's `input` shape.
 * @see {@link GetBillingTransferPreferenceCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't match with the constraints specified by Amazon Web Services services.
 *
 * @throws {@link BillingconductorServiceException}
 *
 * Base exception class for all service exceptions from Billingconductor service.
 *
 * @public
 */
export class GetBillingTransferPreferenceCommand extends command<GetBillingTransferPreferenceCommandInput, GetBillingTransferPreferenceCommandOutput>(
  _ep0,
  _mw0,
  "GetBillingTransferPreference",
  GetBillingTransferPreference$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingTransferPreferenceInput;
      output: GetBillingTransferPreferenceOutput;
    };
    sdk: {
      input: GetBillingTransferPreferenceCommandInput;
      output: GetBillingTransferPreferenceCommandOutput;
    };
  };
}
