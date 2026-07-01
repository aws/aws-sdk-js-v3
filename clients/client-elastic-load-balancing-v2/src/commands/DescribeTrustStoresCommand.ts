// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrustStoresInput, DescribeTrustStoresOutput } from "../models/models_0";
import { DescribeTrustStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Describes all trust stores for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTrustStoresCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTrustStoresCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
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
 *
 * @public
 */
export class DescribeTrustStoresCommand extends command<DescribeTrustStoresCommandInput, DescribeTrustStoresCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustStores",
  DescribeTrustStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustStoresInput;
      output: DescribeTrustStoresOutput;
    };
    sdk: {
      input: DescribeTrustStoresCommandInput;
      output: DescribeTrustStoresCommandOutput;
    };
  };
}
