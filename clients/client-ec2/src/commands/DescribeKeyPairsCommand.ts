// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/models_4";
import { DescribeKeyPairs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyPairsCommand}.
 */
export interface DescribeKeyPairsCommandInput extends DescribeKeyPairsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyPairsCommand}.
 */
export interface DescribeKeyPairsCommandOutput extends DescribeKeyPairsResult, __MetadataBearer {}

/**
 * <p>Describes the specified key pairs or all of your key pairs.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a>
 * 				in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeKeyPairsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeKeyPairsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeKeyPairsRequest
 *   KeyNames: [ // KeyNameStringList
 *     "STRING_VALUE",
 *   ],
 *   KeyPairIds: [ // KeyPairIdStringList
 *     "STRING_VALUE",
 *   ],
 *   IncludePublicKey: true || false,
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyPairsResult
 * //   KeyPairs: [ // KeyPairList
 * //     { // KeyPairInfo
 * //       KeyPairId: "STRING_VALUE",
 * //       KeyType: "rsa" || "ed25519",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PublicKey: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       KeyName: "STRING_VALUE",
 * //       KeyFingerprint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeKeyPairsCommandInput - {@link DescribeKeyPairsCommandInput}
 * @returns {@link DescribeKeyPairsCommandOutput}
 * @see {@link DescribeKeyPairsCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To display a key pair
 * ```javascript
 * // This example displays the fingerprint for the specified key.
 * const input = {
 *   KeyNames: [
 *     "my-key-pair"
 *   ]
 * };
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyPairs: [
 *     {
 *       KeyFingerprint: "1f:51:ae:28:bf:89:e9:d8:1f:25:5d:37:2d:7d:b8:ca:9f:f5:f1:6f",
 *       KeyName: "my-key-pair"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeKeyPairsCommand extends $Command
  .classBuilder<
    DescribeKeyPairsCommandInput,
    DescribeKeyPairsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeKeyPairs", {})
  .n("EC2Client", "DescribeKeyPairsCommand")
  .sc(DescribeKeyPairs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyPairsRequest;
      output: DescribeKeyPairsResult;
    };
    sdk: {
      input: DescribeKeyPairsCommandInput;
      output: DescribeKeyPairsCommandOutput;
    };
  };
}
