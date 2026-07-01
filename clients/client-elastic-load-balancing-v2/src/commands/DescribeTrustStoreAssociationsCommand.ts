// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrustStoreAssociationsInput, DescribeTrustStoreAssociationsOutput } from "../models/models_0";
import { DescribeTrustStoreAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrustStoreAssociationsCommand}.
 */
export interface DescribeTrustStoreAssociationsCommandInput extends DescribeTrustStoreAssociationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTrustStoreAssociationsCommand}.
 */
export interface DescribeTrustStoreAssociationsCommandOutput extends DescribeTrustStoreAssociationsOutput, __MetadataBearer {}

/**
 * <p>Describes all resources associated with the specified trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTrustStoreAssociationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTrustStoreAssociationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTrustStoreAssociationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeTrustStoreAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustStoreAssociationsOutput
 * //   TrustStoreAssociations: [ // TrustStoreAssociations
 * //     { // TrustStoreAssociation
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustStoreAssociationsCommandInput - {@link DescribeTrustStoreAssociationsCommandInput}
 * @returns {@link DescribeTrustStoreAssociationsCommandOutput}
 * @see {@link DescribeTrustStoreAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustStoreAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeTrustStoreAssociationsCommand extends command<DescribeTrustStoreAssociationsCommandInput, DescribeTrustStoreAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustStoreAssociations",
  DescribeTrustStoreAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustStoreAssociationsInput;
      output: DescribeTrustStoreAssociationsOutput;
    };
    sdk: {
      input: DescribeTrustStoreAssociationsCommandInput;
      output: DescribeTrustStoreAssociationsCommandOutput;
    };
  };
}
