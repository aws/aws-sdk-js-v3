// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTrustStoreCaCertificatesBundleInput,
  GetTrustStoreCaCertificatesBundleOutput,
} from "../models/models_0";
import { GetTrustStoreCaCertificatesBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCaCertificatesBundleCommand}.
 */
export interface GetTrustStoreCaCertificatesBundleCommandInput extends GetTrustStoreCaCertificatesBundleInput {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCaCertificatesBundleCommand}.
 */
export interface GetTrustStoreCaCertificatesBundleCommandOutput extends GetTrustStoreCaCertificatesBundleOutput, __MetadataBearer {}

/**
 * <p>Retrieves the ca certificate bundle.</p>
 *          <p>This action returns a pre-signed S3 URI which is
 *       active for ten minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, GetTrustStoreCaCertificatesBundleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, GetTrustStoreCaCertificatesBundleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // GetTrustStoreCaCertificatesBundleInput
 *   TrustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCaCertificatesBundleCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreCaCertificatesBundleOutput
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCaCertificatesBundleCommandInput - {@link GetTrustStoreCaCertificatesBundleCommandInput}
 * @returns {@link GetTrustStoreCaCertificatesBundleCommandOutput}
 * @see {@link GetTrustStoreCaCertificatesBundleCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCaCertificatesBundleCommandOutput} for command's `response` shape.
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
export class GetTrustStoreCaCertificatesBundleCommand extends command<GetTrustStoreCaCertificatesBundleCommandInput, GetTrustStoreCaCertificatesBundleCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustStoreCaCertificatesBundle",
  GetTrustStoreCaCertificatesBundle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreCaCertificatesBundleInput;
      output: GetTrustStoreCaCertificatesBundleOutput;
    };
    sdk: {
      input: GetTrustStoreCaCertificatesBundleCommandInput;
      output: GetTrustStoreCaCertificatesBundleCommandOutput;
    };
  };
}
