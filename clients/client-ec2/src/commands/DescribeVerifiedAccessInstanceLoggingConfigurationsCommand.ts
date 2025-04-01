// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
  DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
} from "../models/models_5";
import {
  de_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  se_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}.
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput
  extends DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}.
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput
  extends DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Amazon Web Services Verified Access instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessInstanceLoggingConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessInstanceLoggingConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessInstanceLoggingConfigurationsRequest
 *   VerifiedAccessInstanceIds: [ // VerifiedAccessInstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessInstanceLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessInstanceLoggingConfigurationsResult
 * //   LoggingConfigurations: [ // VerifiedAccessInstanceLoggingConfigurationList
 * //     { // VerifiedAccessInstanceLoggingConfiguration
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       AccessLogs: { // VerifiedAccessLogs
 * //         S3: { // VerifiedAccessLogS3Destination
 * //           Enabled: true || false,
 * //           DeliveryStatus: { // VerifiedAccessLogDeliveryStatus
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           BucketName: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //         CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestination
 * //           Enabled: true || false,
 * //           DeliveryStatus: {
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           LogGroup: "STRING_VALUE",
 * //         },
 * //         KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestination
 * //           Enabled: true || false,
 * //           DeliveryStatus: {
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           DeliveryStream: "STRING_VALUE",
 * //         },
 * //         LogVersion: "STRING_VALUE",
 * //         IncludeTrustContext: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput - {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput}
 * @returns {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput}
 * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVerifiedAccessInstanceLoggingConfigurationsCommand extends $Command
  .classBuilder<
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
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
  .s("AmazonEC2", "DescribeVerifiedAccessInstanceLoggingConfigurations", {})
  .n("EC2Client", "DescribeVerifiedAccessInstanceLoggingConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand)
  .de(de_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVerifiedAccessInstanceLoggingConfigurationsRequest;
      output: DescribeVerifiedAccessInstanceLoggingConfigurationsResult;
    };
    sdk: {
      input: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput;
      output: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput;
    };
  };
}
