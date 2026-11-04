// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTrustStoreRevocationsInput, AddTrustStoreRevocationsOutput } from "../models/models_0";
import { AddTrustStoreRevocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTrustStoreRevocationsCommand}.
 */
export interface AddTrustStoreRevocationsCommandInput extends AddTrustStoreRevocationsInput {}
/**
 * @public
 *
 * The output of {@link AddTrustStoreRevocationsCommand}.
 */
export interface AddTrustStoreRevocationsCommandOutput extends AddTrustStoreRevocationsOutput, __MetadataBearer {}

/**
 * Adds the specified revocation file to the specified trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddTrustStoreRevocationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddTrustStoreRevocationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // AddTrustStoreRevocationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationContents: [ // RevocationContents
 *     { // RevocationContent
 *       S3Bucket: "STRING_VALUE",
 *       S3Key: "STRING_VALUE",
 *       S3ObjectVersion: "STRING_VALUE",
 *       RevocationType: "CRL",
 *     },
 *   ],
 * };
 * const command = new AddTrustStoreRevocationsCommand(input);
 * const response = await client.send(command);
 * // { // AddTrustStoreRevocationsOutput
 * //   TrustStoreRevocations: [ // TrustStoreRevocations
 * //     { // TrustStoreRevocation
 * //       TrustStoreArn: "STRING_VALUE",
 * //       RevocationId: Number("long"),
 * //       RevocationType: "CRL",
 * //       NumberOfRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddTrustStoreRevocationsCommandInput - {@link AddTrustStoreRevocationsCommandInput}
 * @returns {@link AddTrustStoreRevocationsCommandOutput}
 * @see {@link AddTrustStoreRevocationsCommandInput} for command's `input` shape.
 * @see {@link AddTrustStoreRevocationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidRevocationContentException} (client fault)
 *
 * The provided revocation file is an invalid format, or uses an incorrect algorithm.
 *
 * @throws {@link RevocationContentNotFoundException} (client fault)
 *
 * The specified revocation file does not exist.
 *
 * @throws {@link TooManyTrustStoreRevocationEntriesException} (client fault)
 *
 * The specified trust store has too many revocation entries.
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *
 * The specified trust store does not exist.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @public
 */
export class AddTrustStoreRevocationsCommand extends command<AddTrustStoreRevocationsCommandInput, AddTrustStoreRevocationsCommandOutput>(
  _ep0,
  _mw0,
  "AddTrustStoreRevocations",
  AddTrustStoreRevocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTrustStoreRevocationsInput;
      output: AddTrustStoreRevocationsOutput;
    };
    sdk: {
      input: AddTrustStoreRevocationsCommandInput;
      output: AddTrustStoreRevocationsCommandOutput;
    };
  };
}
