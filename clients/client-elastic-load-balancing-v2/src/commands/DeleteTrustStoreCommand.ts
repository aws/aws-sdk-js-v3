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
import { DeleteTrustStoreInput, DeleteTrustStoreOutput } from "../models/models_0";
import { de_DeleteTrustStoreCommand, se_DeleteTrustStoreCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandInput extends DeleteTrustStoreInput {}
/**
 * @public
 *
 * The output of {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandOutput extends DeleteTrustStoreOutput, __MetadataBearer {}

/**
 * <p>Deletes a trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteTrustStoreCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteTrustStoreCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeleteTrustStoreInput
 *   TrustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrustStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrustStoreCommandInput - {@link DeleteTrustStoreCommandInput}
 * @returns {@link DeleteTrustStoreCommandOutput}
 * @see {@link DeleteTrustStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link TrustStoreInUseException} (client fault)
 *  <p>The specified trust store is currently in use.</p>
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
export class DeleteTrustStoreCommand extends $Command
  .classBuilder<
    DeleteTrustStoreCommandInput,
    DeleteTrustStoreCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "DeleteTrustStore", {})
  .n("ElasticLoadBalancingV2Client", "DeleteTrustStoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrustStoreCommand)
  .de(de_DeleteTrustStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustStoreInput;
      output: {};
    };
    sdk: {
      input: DeleteTrustStoreCommandInput;
      output: DeleteTrustStoreCommandOutput;
    };
  };
}
