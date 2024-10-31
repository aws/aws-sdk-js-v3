// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSharedTrustStoreAssociationInput, DeleteSharedTrustStoreAssociationOutput } from "../models/models_0";
import {
  de_DeleteSharedTrustStoreAssociationCommand,
  se_DeleteSharedTrustStoreAssociationCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSharedTrustStoreAssociationCommand}.
 */
export interface DeleteSharedTrustStoreAssociationCommandInput extends DeleteSharedTrustStoreAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSharedTrustStoreAssociationCommand}.
 */
export interface DeleteSharedTrustStoreAssociationCommandOutput
  extends DeleteSharedTrustStoreAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a shared trust store association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteSharedTrustStoreAssociationCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteSharedTrustStoreAssociationCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeleteSharedTrustStoreAssociationInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSharedTrustStoreAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSharedTrustStoreAssociationCommandInput - {@link DeleteSharedTrustStoreAssociationCommandInput}
 * @returns {@link DeleteSharedTrustStoreAssociationCommandOutput}
 * @see {@link DeleteSharedTrustStoreAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteSharedTrustStoreAssociationCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link DeleteAssociationSameAccountException} (client fault)
 *  <p>The specified association can't be within the same account.</p>
 *
 * @throws {@link TrustStoreAssociationNotFoundException} (client fault)
 *  <p>The specified association does not exist.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example Delete a shared trust store association
 * ```javascript
 * // This example deletes the association between the specified trust store and the specified load balancer.
 * const input = {
 *   "ResourceArn": "arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/my-load-balancer/80233fa81d678c2c",
 *   "TrustStoreArn": "arn:aws:elasticloadbalancing:us-east-1:123456789012:truststore/my-trust-store/73e2d6bc24d8a063"
 * };
 * const command = new DeleteSharedTrustStoreAssociationCommand(input);
 * await client.send(command);
 * // example id: delete-a-shared-trust-store-association-1721684063527
 * ```
 *
 */
export class DeleteSharedTrustStoreAssociationCommand extends $Command
  .classBuilder<
    DeleteSharedTrustStoreAssociationCommandInput,
    DeleteSharedTrustStoreAssociationCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DeleteSharedTrustStoreAssociation", {})
  .n("ElasticLoadBalancingV2Client", "DeleteSharedTrustStoreAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSharedTrustStoreAssociationCommand)
  .de(de_DeleteSharedTrustStoreAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSharedTrustStoreAssociationInput;
      output: {};
    };
    sdk: {
      input: DeleteSharedTrustStoreAssociationCommandInput;
      output: DeleteSharedTrustStoreAssociationCommandOutput;
    };
  };
}
