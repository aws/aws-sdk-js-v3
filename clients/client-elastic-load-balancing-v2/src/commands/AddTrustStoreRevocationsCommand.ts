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
import { AddTrustStoreRevocationsInput, AddTrustStoreRevocationsOutput } from "../models/models_0";
import { de_AddTrustStoreRevocationsCommand, se_AddTrustStoreRevocationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds the specified revocation file to the specified trust store.</p>
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
 *  <p>The provided revocation file is an invalid format, or uses an incorrect algorithm.</p>
 *
 * @throws {@link RevocationContentNotFoundException} (client fault)
 *  <p>The specified revocation file does not exist.</p>
 *
 * @throws {@link TooManyTrustStoreRevocationEntriesException} (client fault)
 *  <p>The specified trust store has too many revocation entries.</p>
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
export class AddTrustStoreRevocationsCommand extends $Command
  .classBuilder<
    AddTrustStoreRevocationsCommandInput,
    AddTrustStoreRevocationsCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "AddTrustStoreRevocations", {})
  .n("ElasticLoadBalancingV2Client", "AddTrustStoreRevocationsCommand")
  .f(void 0, void 0)
  .ser(se_AddTrustStoreRevocationsCommand)
  .de(de_AddTrustStoreRevocationsCommand)
  .build() {
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
