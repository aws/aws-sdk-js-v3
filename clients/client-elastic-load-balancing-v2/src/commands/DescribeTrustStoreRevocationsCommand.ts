// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrustStoreRevocationsInput, DescribeTrustStoreRevocationsOutput } from "../models/models_0";
import { DescribeTrustStoreRevocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrustStoreRevocationsCommand}.
 */
export interface DescribeTrustStoreRevocationsCommandInput extends DescribeTrustStoreRevocationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTrustStoreRevocationsCommand}.
 */
export interface DescribeTrustStoreRevocationsCommandOutput extends DescribeTrustStoreRevocationsOutput, __MetadataBearer {}

/**
 * <p>Describes the revocation files in use by the specified trust store or revocation
 *       files.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTrustStoreRevocationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTrustStoreRevocationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTrustStoreRevocationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationIds: [ // RevocationIds
 *     Number("long"),
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeTrustStoreRevocationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustStoreRevocationsOutput
 * //   TrustStoreRevocations: [ // DescribeTrustStoreRevocationResponse
 * //     { // DescribeTrustStoreRevocation
 * //       TrustStoreArn: "STRING_VALUE",
 * //       RevocationId: Number("long"),
 * //       RevocationType: "CRL",
 * //       NumberOfRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustStoreRevocationsCommandInput - {@link DescribeTrustStoreRevocationsCommandInput}
 * @returns {@link DescribeTrustStoreRevocationsCommandOutput}
 * @see {@link DescribeTrustStoreRevocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustStoreRevocationsCommandOutput} for command's `response` shape.
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
export class DescribeTrustStoreRevocationsCommand extends command<DescribeTrustStoreRevocationsCommandInput, DescribeTrustStoreRevocationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustStoreRevocations",
  DescribeTrustStoreRevocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustStoreRevocationsInput;
      output: DescribeTrustStoreRevocationsOutput;
    };
    sdk: {
      input: DescribeTrustStoreRevocationsCommandInput;
      output: DescribeTrustStoreRevocationsCommandOutput;
    };
  };
}
