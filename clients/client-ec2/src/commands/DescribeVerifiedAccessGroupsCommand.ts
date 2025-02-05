// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVerifiedAccessGroupsRequest, DescribeVerifiedAccessGroupsResult } from "../models/models_5";
import { de_DescribeVerifiedAccessGroupsCommand, se_DescribeVerifiedAccessGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessGroupsCommand}.
 */
export interface DescribeVerifiedAccessGroupsCommandInput extends DescribeVerifiedAccessGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessGroupsCommand}.
 */
export interface DescribeVerifiedAccessGroupsCommandOutput
  extends DescribeVerifiedAccessGroupsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Verified Access groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessGroupsRequest
 *   VerifiedAccessGroupIds: [ // VerifiedAccessGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   VerifiedAccessInstanceId: "STRING_VALUE",
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
 * const command = new DescribeVerifiedAccessGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessGroupsResult
 * //   VerifiedAccessGroups: [ // VerifiedAccessGroupList
 * //     { // VerifiedAccessGroup
 * //       VerifiedAccessGroupId: "STRING_VALUE",
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       VerifiedAccessGroupArn: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //         CustomerManagedKeyEnabled: true || false,
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessGroupsCommandInput - {@link DescribeVerifiedAccessGroupsCommandInput}
 * @returns {@link DescribeVerifiedAccessGroupsCommandOutput}
 * @see {@link DescribeVerifiedAccessGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeVerifiedAccessGroupsCommand extends $Command
  .classBuilder<
    DescribeVerifiedAccessGroupsCommandInput,
    DescribeVerifiedAccessGroupsCommandOutput,
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
  .s("AmazonEC2", "DescribeVerifiedAccessGroups", {})
  .n("EC2Client", "DescribeVerifiedAccessGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVerifiedAccessGroupsCommand)
  .de(de_DescribeVerifiedAccessGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVerifiedAccessGroupsRequest;
      output: DescribeVerifiedAccessGroupsResult;
    };
    sdk: {
      input: DescribeVerifiedAccessGroupsCommandInput;
      output: DescribeVerifiedAccessGroupsCommandOutput;
    };
  };
}
