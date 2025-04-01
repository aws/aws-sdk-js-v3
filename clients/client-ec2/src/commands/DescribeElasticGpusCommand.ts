// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/models_4";
import { de_DescribeElasticGpusCommand, se_DescribeElasticGpusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeElasticGpusCommand}.
 */
export interface DescribeElasticGpusCommandInput extends DescribeElasticGpusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticGpusCommand}.
 */
export interface DescribeElasticGpusCommandOutput extends DescribeElasticGpusResult, __MetadataBearer {}

/**
 * <note>
 *             <p>Amazon Elastic Graphics reached end of life on January 8, 2024.</p>
 *          </note>
 *          <p>Describes the Elastic Graphics accelerator associated with your instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeElasticGpusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeElasticGpusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeElasticGpusRequest
 *   ElasticGpuIds: [ // ElasticGpuIdSet
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeElasticGpusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeElasticGpusResult
 * //   ElasticGpuSet: [ // ElasticGpuSet
 * //     { // ElasticGpus
 * //       ElasticGpuId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ElasticGpuType: "STRING_VALUE",
 * //       ElasticGpuHealth: { // ElasticGpuHealth
 * //         Status: "OK" || "IMPAIRED",
 * //       },
 * //       ElasticGpuState: "ATTACHED",
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeElasticGpusCommandInput - {@link DescribeElasticGpusCommandInput}
 * @returns {@link DescribeElasticGpusCommandOutput}
 * @see {@link DescribeElasticGpusCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticGpusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeElasticGpusCommand extends $Command
  .classBuilder<
    DescribeElasticGpusCommandInput,
    DescribeElasticGpusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeElasticGpus", {})
  .n("EC2Client", "DescribeElasticGpusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeElasticGpusCommand)
  .de(de_DescribeElasticGpusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeElasticGpusRequest;
      output: DescribeElasticGpusResult;
    };
    sdk: {
      input: DescribeElasticGpusCommandInput;
      output: DescribeElasticGpusCommandOutput;
    };
  };
}
