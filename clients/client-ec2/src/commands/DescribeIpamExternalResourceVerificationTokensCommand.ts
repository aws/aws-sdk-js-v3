// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeIpamExternalResourceVerificationTokensRequest,
  DescribeIpamExternalResourceVerificationTokensResult,
} from "../models/models_4";
import {
  de_DescribeIpamExternalResourceVerificationTokensCommand,
  se_DescribeIpamExternalResourceVerificationTokensCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamExternalResourceVerificationTokensCommand}.
 */
export interface DescribeIpamExternalResourceVerificationTokensCommandInput
  extends DescribeIpamExternalResourceVerificationTokensRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamExternalResourceVerificationTokensCommand}.
 */
export interface DescribeIpamExternalResourceVerificationTokensCommandOutput
  extends DescribeIpamExternalResourceVerificationTokensResult,
    __MetadataBearer {}

/**
 * <p>Describe verification tokens. A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamExternalResourceVerificationTokensCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamExternalResourceVerificationTokensCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamExternalResourceVerificationTokensRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IpamExternalResourceVerificationTokenIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamExternalResourceVerificationTokensCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamExternalResourceVerificationTokensResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamExternalResourceVerificationTokens: [ // IpamExternalResourceVerificationTokenSet
 * //     { // IpamExternalResourceVerificationToken
 * //       IpamExternalResourceVerificationTokenId: "STRING_VALUE",
 * //       IpamExternalResourceVerificationTokenArn: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       TokenValue: "STRING_VALUE",
 * //       TokenName: "STRING_VALUE",
 * //       NotAfter: new Date("TIMESTAMP"),
 * //       Status: "valid" || "expired",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamExternalResourceVerificationTokensCommandInput - {@link DescribeIpamExternalResourceVerificationTokensCommandInput}
 * @returns {@link DescribeIpamExternalResourceVerificationTokensCommandOutput}
 * @see {@link DescribeIpamExternalResourceVerificationTokensCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamExternalResourceVerificationTokensCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeIpamExternalResourceVerificationTokensCommand extends $Command
  .classBuilder<
    DescribeIpamExternalResourceVerificationTokensCommandInput,
    DescribeIpamExternalResourceVerificationTokensCommandOutput,
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
  .s("AmazonEC2", "DescribeIpamExternalResourceVerificationTokens", {})
  .n("EC2Client", "DescribeIpamExternalResourceVerificationTokensCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIpamExternalResourceVerificationTokensCommand)
  .de(de_DescribeIpamExternalResourceVerificationTokensCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamExternalResourceVerificationTokensRequest;
      output: DescribeIpamExternalResourceVerificationTokensResult;
    };
    sdk: {
      input: DescribeIpamExternalResourceVerificationTokensCommandInput;
      output: DescribeIpamExternalResourceVerificationTokensCommandOutput;
    };
  };
}
