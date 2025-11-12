// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveTrustStoreRevocationsInput, RemoveTrustStoreRevocationsOutput } from "../models/models_0";
import { RemoveTrustStoreRevocations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTrustStoreRevocationsCommand}.
 */
export interface RemoveTrustStoreRevocationsCommandInput extends RemoveTrustStoreRevocationsInput {}
/**
 * @public
 *
 * The output of {@link RemoveTrustStoreRevocationsCommand}.
 */
export interface RemoveTrustStoreRevocationsCommandOutput extends RemoveTrustStoreRevocationsOutput, __MetadataBearer {}

/**
 * <p>Removes the specified revocation file from the specified trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RemoveTrustStoreRevocationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RemoveTrustStoreRevocationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // RemoveTrustStoreRevocationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationIds: [ // RevocationIds // required
 *     Number("long"),
 *   ],
 * };
 * const command = new RemoveTrustStoreRevocationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTrustStoreRevocationsCommandInput - {@link RemoveTrustStoreRevocationsCommandInput}
 * @returns {@link RemoveTrustStoreRevocationsCommandOutput}
 * @see {@link RemoveTrustStoreRevocationsCommandInput} for command's `input` shape.
 * @see {@link RemoveTrustStoreRevocationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link RevocationIdNotFoundException} (client fault)
 *  <p>The specified revocation ID does not exist.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class RemoveTrustStoreRevocationsCommand extends $Command
  .classBuilder<
    RemoveTrustStoreRevocationsCommandInput,
    RemoveTrustStoreRevocationsCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "RemoveTrustStoreRevocations", {})
  .n("ElasticLoadBalancingV2Client", "RemoveTrustStoreRevocationsCommand")
  .sc(RemoveTrustStoreRevocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTrustStoreRevocationsInput;
      output: {};
    };
    sdk: {
      input: RemoveTrustStoreRevocationsCommandInput;
      output: RemoveTrustStoreRevocationsCommandOutput;
    };
  };
}
