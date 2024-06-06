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
import { DescribeTrustStoresInput, DescribeTrustStoresOutput } from "../models/models_0";
import { de_DescribeTrustStoresCommand, se_DescribeTrustStoresCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustStoresCommand}.
 */
export interface DescribeTrustStoresCommandInput extends DescribeTrustStoresInput {}
/**
 * @public
 *
 * The output of {@link DescribeTrustStoresCommand}.
 */
export interface DescribeTrustStoresCommandOutput extends DescribeTrustStoresOutput, __MetadataBearer {}

/**
 * <p>Describes all trust stores for a given account
 *       by trust store arn’s or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTrustStoresCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTrustStoresCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTrustStoresInput
 *   TrustStoreArns: [ // TrustStoreArns
 *     "STRING_VALUE",
 *   ],
 *   Names: [ // TrustStoreNames
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeTrustStoresCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustStoresOutput
 * //   TrustStores: [ // TrustStores
 * //     { // TrustStore
 * //       Name: "STRING_VALUE",
 * //       TrustStoreArn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING",
 * //       NumberOfCaCertificates: Number("int"),
 * //       TotalRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustStoresCommandInput - {@link DescribeTrustStoresCommandInput}
 * @returns {@link DescribeTrustStoresCommandOutput}
 * @see {@link DescribeTrustStoresCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustStoresCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 */
export class DescribeTrustStoresCommand extends $Command
  .classBuilder<
    DescribeTrustStoresCommandInput,
    DescribeTrustStoresCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DescribeTrustStores", {})
  .n("ElasticLoadBalancingV2Client", "DescribeTrustStoresCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrustStoresCommand)
  .de(de_DescribeTrustStoresCommand)
  .build() {}
