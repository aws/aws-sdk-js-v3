// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateBillingGroupInput,
  UpdateBillingGroupInputFilterSensitiveLog,
  UpdateBillingGroupOutput,
  UpdateBillingGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateBillingGroupCommand, se_UpdateBillingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This updates an existing billing group. </p>
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
 *   Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING",
 *   ComputationPreference: { // ComputationPreference
 *     PricingPlanArn: "STRING_VALUE", // required
 *   },
 *   Description: "STRING_VALUE",
 *   AccountGrouping: { // UpdateBillingGroupAccountGrouping
 *     AutoAssociate: true || false,
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
 * //   Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING",
 * //   StatusReason: "STRING_VALUE",
 * //   AccountGrouping: { // UpdateBillingGroupAccountGrouping
 * //     AutoAssociate: true || false,
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
export class UpdateBillingGroupCommand extends $Command
  .classBuilder<
    UpdateBillingGroupCommandInput,
    UpdateBillingGroupCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "UpdateBillingGroup", {})
  .n("BillingconductorClient", "UpdateBillingGroupCommand")
  .f(UpdateBillingGroupInputFilterSensitiveLog, UpdateBillingGroupOutputFilterSensitiveLog)
  .ser(se_UpdateBillingGroupCommand)
  .de(de_UpdateBillingGroupCommand)
  .build() {
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
