// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBillingGroupInput, UpdateBillingGroupOutput } from "../models/models_0";
import { UpdateBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandInput extends UpdateBillingGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandOutput extends UpdateBillingGroupOutput, __MetadataBearer {}

/**
 * This updates an existing billing group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateBillingGroupCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateBillingGroupCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // UpdateBillingGroupInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING" || "PENDING",
 *   ComputationPreference: { // ComputationPreference
 *     PricingPlanArn: "STRING_VALUE", // required
 *   },
 *   Description: "STRING_VALUE",
 *   AccountGrouping: { // UpdateBillingGroupAccountGrouping
 *     AutoAssociate: true || false,
 *     ResponsibilityTransferArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillingGroupOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   PrimaryAccountId: "STRING_VALUE",
 * //   PricingPlanArn: "STRING_VALUE",
 * //   Size: Number("long"),
 * //   LastModifiedTime: Number("long"),
 * //   Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING" || "PENDING",
 * //   StatusReason: "STRING_VALUE",
 * //   AccountGrouping: { // UpdateBillingGroupAccountGrouping
 * //     AutoAssociate: true || false,
 * //     ResponsibilityTransferArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBillingGroupCommandInput - {@link UpdateBillingGroupCommandInput}
 * @returns {@link UpdateBillingGroupCommandOutput}
 * @see {@link UpdateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can cause an inconsistent state by updating or deleting a resource.
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
export class UpdateBillingGroupCommand extends command<UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBillingGroup",
  UpdateBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillingGroupInput;
      output: UpdateBillingGroupOutput;
    };
    sdk: {
      input: UpdateBillingGroupCommandInput;
      output: UpdateBillingGroupCommandOutput;
    };
  };
}
