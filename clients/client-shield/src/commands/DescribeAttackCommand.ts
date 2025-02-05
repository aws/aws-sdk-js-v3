// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAttackRequest, DescribeAttackResponse } from "../models/models_0";
import { de_DescribeAttackCommand, se_DescribeAttackCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttackCommand}.
 */
export interface DescribeAttackCommandInput extends DescribeAttackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttackCommand}.
 */
export interface DescribeAttackCommandOutput extends DescribeAttackResponse, __MetadataBearer {}

/**
 * <p>Describes the details of a DDoS attack. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // DescribeAttackRequest
 *   AttackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAttackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttackResponse
 * //   Attack: { // AttackDetail
 * //     AttackId: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     SubResources: [ // SubResourceSummaryList
 * //       { // SubResourceSummary
 * //         Type: "IP" || "URL",
 * //         Id: "STRING_VALUE",
 * //         AttackVectors: [ // SummarizedAttackVectorList
 * //           { // SummarizedAttackVector
 * //             VectorType: "STRING_VALUE", // required
 * //             VectorCounters: [ // SummarizedCounterList
 * //               { // SummarizedCounter
 * //                 Name: "STRING_VALUE",
 * //                 Max: Number("double"),
 * //                 Average: Number("double"),
 * //                 Sum: Number("double"),
 * //                 N: Number("int"),
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Counters: [
 * //           {
 * //             Name: "STRING_VALUE",
 * //             Max: Number("double"),
 * //             Average: Number("double"),
 * //             Sum: Number("double"),
 * //             N: Number("int"),
 * //             Unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     AttackCounters: "<SummarizedCounterList>",
 * //     AttackProperties: [ // AttackProperties
 * //       { // AttackProperty
 * //         AttackLayer: "NETWORK" || "APPLICATION",
 * //         AttackPropertyIdentifier: "DESTINATION_URL" || "REFERRER" || "SOURCE_ASN" || "SOURCE_COUNTRY" || "SOURCE_IP_ADDRESS" || "SOURCE_USER_AGENT" || "WORDPRESS_PINGBACK_REFLECTOR" || "WORDPRESS_PINGBACK_SOURCE",
 * //         TopContributors: [ // TopContributors
 * //           { // Contributor
 * //             Name: "STRING_VALUE",
 * //             Value: Number("long"),
 * //           },
 * //         ],
 * //         Unit: "BITS" || "BYTES" || "PACKETS" || "REQUESTS",
 * //         Total: Number("long"),
 * //       },
 * //     ],
 * //     Mitigations: [ // MitigationList
 * //       { // Mitigation
 * //         MitigationName: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAttackCommandInput - {@link DescribeAttackCommandInput}
 * @returns {@link DescribeAttackCommandOutput}
 * @see {@link DescribeAttackCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class DescribeAttackCommand extends $Command
  .classBuilder<
    DescribeAttackCommandInput,
    DescribeAttackCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DescribeAttack", {})
  .n("ShieldClient", "DescribeAttackCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAttackCommand)
  .de(de_DescribeAttackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAttackRequest;
      output: DescribeAttackResponse;
    };
    sdk: {
      input: DescribeAttackCommandInput;
      output: DescribeAttackCommandOutput;
    };
  };
}
