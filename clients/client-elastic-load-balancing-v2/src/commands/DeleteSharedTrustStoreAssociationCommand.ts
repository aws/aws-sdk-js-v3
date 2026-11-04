// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteSharedTrustStoreAssociationInput,
  DeleteSharedTrustStoreAssociationOutput,
} from "../models/models_0";
import { DeleteSharedTrustStoreAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteSharedTrustStoreAssociationCommandOutput extends DeleteSharedTrustStoreAssociationOutput, __MetadataBearer {}

/**
 * Deletes a shared trust store association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteSharedTrustStoreAssociationCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteSharedTrustStoreAssociationCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
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
 *
 * The specified association can't be within the same account.
 *
 * @throws {@link TrustStoreAssociationNotFoundException} (client fault)
 *
 * The specified association does not exist.
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *
 * The specified trust store does not exist.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @example Delete a shared trust store association
 * ```javascript
 * // This example deletes the association between the specified trust store and the specified load balancer.
 * const input = {
 *   ResourceArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/my-load-balancer/80233fa81d678c2c",
 *   TrustStoreArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:truststore/my-trust-store/73e2d6bc24d8a063"
 * };
 * const command = new DeleteSharedTrustStoreAssociationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSharedTrustStoreAssociationCommand extends command<DeleteSharedTrustStoreAssociationCommandInput, DeleteSharedTrustStoreAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSharedTrustStoreAssociation",
  DeleteSharedTrustStoreAssociation$
) {
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
