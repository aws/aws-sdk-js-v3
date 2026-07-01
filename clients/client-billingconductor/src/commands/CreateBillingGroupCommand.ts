// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBillingGroupInput, CreateBillingGroupOutput } from "../models/models_0";
import { CreateBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBillingGroupCommand}.
 */
export interface CreateBillingGroupCommandInput extends CreateBillingGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateBillingGroupCommand}.
 */
export interface CreateBillingGroupCommandOutput extends CreateBillingGroupOutput, __MetadataBearer {}

/**
 * <p> Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreateBillingGroupCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreateBillingGroupCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // CreateBillingGroupInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   AccountGrouping: { // AccountGrouping
 *     LinkedAccountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     AutoAssociate: true || false,
 *     ResponsibilityTransferArn: "STRING_VALUE",
 *   },
 *   ComputationPreference: { // ComputationPreference
 *     PricingPlanArn: "STRING_VALUE", // required
 *   },
 *   PrimaryAccountId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillingGroupOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBillingGroupCommandInput - {@link CreateBillingGroupCommandInput}
 * @returns {@link CreateBillingGroupCommandOutput}
 * @see {@link CreateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateBillingGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request would cause a service limit to exceed. </p>
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
export class CreateBillingGroupCommand extends command<CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateBillingGroup",
  CreateBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillingGroupInput;
      output: CreateBillingGroupOutput;
    };
    sdk: {
      input: CreateBillingGroupCommandInput;
      output: CreateBillingGroupCommandOutput;
    };
  };
}
