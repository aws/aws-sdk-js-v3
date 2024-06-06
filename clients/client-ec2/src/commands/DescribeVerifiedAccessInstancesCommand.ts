// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVerifiedAccessInstancesRequest, DescribeVerifiedAccessInstancesResult } from "../models/models_5";
import {
  de_DescribeVerifiedAccessInstancesCommand,
  se_DescribeVerifiedAccessInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandInput extends DescribeVerifiedAccessInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandOutput
  extends DescribeVerifiedAccessInstancesResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Amazon Web Services Verified Access instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessInstancesRequest
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
 * const command = new DescribeVerifiedAccessInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessInstancesResult
 * //   VerifiedAccessInstances: [ // VerifiedAccessInstanceList
 * //     { // VerifiedAccessInstance
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VerifiedAccessTrustProviders: [ // VerifiedAccessTrustProviderCondensedList
 * //         { // VerifiedAccessTrustProviderCondensed
 * //           VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           TrustProviderType: "user" || "device",
 * //           UserTrustProviderType: "iam-identity-center" || "oidc",
 * //           DeviceTrustProviderType: "jamf" || "crowdstrike" || "jumpcloud",
 * //         },
 * //       ],
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FipsEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessInstancesCommandInput - {@link DescribeVerifiedAccessInstancesCommandInput}
 * @returns {@link DescribeVerifiedAccessInstancesCommandOutput}
 * @see {@link DescribeVerifiedAccessInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeVerifiedAccessInstancesCommand extends $Command
  .classBuilder<
    DescribeVerifiedAccessInstancesCommandInput,
    DescribeVerifiedAccessInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeVerifiedAccessInstances", {})
  .n("EC2Client", "DescribeVerifiedAccessInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVerifiedAccessInstancesCommand)
  .de(de_DescribeVerifiedAccessInstancesCommand)
  .build() {}
