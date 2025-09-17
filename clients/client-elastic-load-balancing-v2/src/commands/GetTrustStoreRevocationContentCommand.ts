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
import { GetTrustStoreRevocationContentInput, GetTrustStoreRevocationContentOutput } from "../models/models_0";
import {
  de_GetTrustStoreRevocationContentCommand,
  se_GetTrustStoreRevocationContentCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreRevocationContentCommand}.
 */
export interface GetTrustStoreRevocationContentCommandInput extends GetTrustStoreRevocationContentInput {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreRevocationContentCommand}.
 */
export interface GetTrustStoreRevocationContentCommandOutput
  extends GetTrustStoreRevocationContentOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified revocation file.</p>
 *          <p>This action returns a pre-signed S3 URI which is
 *       active for ten minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, GetTrustStoreRevocationContentCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, GetTrustStoreRevocationContentCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // GetTrustStoreRevocationContentInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationId: Number("long"), // required
 * };
 * const command = new GetTrustStoreRevocationContentCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreRevocationContentOutput
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrustStoreRevocationContentCommandInput - {@link GetTrustStoreRevocationContentCommandInput}
 * @returns {@link GetTrustStoreRevocationContentCommandOutput}
 * @see {@link GetTrustStoreRevocationContentCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreRevocationContentCommandOutput} for command's `response` shape.
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
export class GetTrustStoreRevocationContentCommand extends $Command
  .classBuilder<
    GetTrustStoreRevocationContentCommandInput,
    GetTrustStoreRevocationContentCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "GetTrustStoreRevocationContent", {})
  .n("ElasticLoadBalancingV2Client", "GetTrustStoreRevocationContentCommand")
  .f(void 0, void 0)
  .ser(se_GetTrustStoreRevocationContentCommand)
  .de(de_GetTrustStoreRevocationContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreRevocationContentInput;
      output: GetTrustStoreRevocationContentOutput;
    };
    sdk: {
      input: GetTrustStoreRevocationContentCommandInput;
      output: GetTrustStoreRevocationContentCommandOutput;
    };
  };
}
