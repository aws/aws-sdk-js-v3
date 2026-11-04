// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrustStoreInput, CreateTrustStoreOutput } from "../models/models_0";
import { CreateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandInput extends CreateTrustStoreInput {}
/**
 * @public
 *
 * The output of {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreOutput, __MetadataBearer {}

/**
 * Creates a trust store.
 *
 * For more information, see [Mutual TLS for Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/mutual-authentication.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateTrustStoreCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateTrustStoreCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateTrustStoreInput
 *   Name: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Bucket: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Key: "STRING_VALUE", // required
 *   CaCertificatesBundleS3ObjectVersion: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustStoreOutput
 * //   TrustStores: [ // TrustStores
 * //     { // TrustStore
 * //       Name: "STRING_VALUE",
 * //       TrustStoreArn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING",
 * //       NumberOfCaCertificates: Number("int"),
 * //       TotalRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTrustStoreCommandInput - {@link CreateTrustStoreCommandInput}
 * @returns {@link CreateTrustStoreCommandOutput}
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CaCertificatesBundleNotFoundException} (client fault)
 *
 * The specified ca certificate bundle does not exist.
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *
 * A tag key was specified more than once.
 *
 * @throws {@link DuplicateTrustStoreNameException} (client fault)
 *
 * A trust store with the specified name already exists.
 *
 * @throws {@link InvalidCaCertificatesBundleException} (client fault)
 *
 * The specified ca certificate bundle is in an invalid format, or corrupt.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You've reached the limit on the number of tags for this resource.
 *
 * @throws {@link TooManyTrustStoresException} (client fault)
 *
 * You've reached the limit on the number of trust stores for your Amazon Web Services account.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @public
 */
export class CreateTrustStoreCommand extends command<CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrustStore",
  CreateTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustStoreInput;
      output: CreateTrustStoreOutput;
    };
    sdk: {
      input: CreateTrustStoreCommandInput;
      output: CreateTrustStoreCommandOutput;
    };
  };
}
