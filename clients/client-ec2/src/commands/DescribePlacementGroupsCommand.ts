// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_4";
import { de_DescribePlacementGroupsCommand, se_DescribePlacementGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePlacementGroupsCommand}.
 */
export interface DescribePlacementGroupsCommandInput extends DescribePlacementGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlacementGroupsCommand}.
 */
export interface DescribePlacementGroupsCommandOutput extends DescribePlacementGroupsResult, __MetadataBearer {}

/**
 * <p>Describes the specified placement groups or all of your placement groups. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePlacementGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePlacementGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePlacementGroupsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   GroupNames: [ // PlacementGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   GroupIds: [ // PlacementGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribePlacementGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlacementGroupsResult
 * //   PlacementGroups: [ // PlacementGroupList
 * //     { // PlacementGroup
 * //       GroupName: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       Strategy: "cluster" || "spread" || "partition",
 * //       PartitionCount: Number("int"),
 * //       GroupId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GroupArn: "STRING_VALUE",
 * //       SpreadLevel: "host" || "rack",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePlacementGroupsCommandInput - {@link DescribePlacementGroupsCommandInput}
 * @returns {@link DescribePlacementGroupsCommandOutput}
 * @see {@link DescribePlacementGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribePlacementGroupsCommand extends $Command
  .classBuilder<
    DescribePlacementGroupsCommandInput,
    DescribePlacementGroupsCommandOutput,
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
  .s("AmazonEC2", "DescribePlacementGroups", {})
  .n("EC2Client", "DescribePlacementGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePlacementGroupsCommand)
  .de(de_DescribePlacementGroupsCommand)
  .build() {}
