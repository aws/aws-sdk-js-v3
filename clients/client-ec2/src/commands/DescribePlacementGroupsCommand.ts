// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_4";
import { DescribePlacementGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified placement groups or all of your placement groups.
 *
 * > **Note:** To describe a specific placement group that is *shared* with your account, you must specify the ID of the placement group using the `GroupId` parameter. Specifying the name of a *shared* placement group using the `GroupNames` parameter will result in an error.
 *
 * For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePlacementGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePlacementGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribePlacementGroupsRequest
 *   GroupIds: [ // PlacementGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   GroupNames: [ // PlacementGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribePlacementGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlacementGroupsResult
 * //   PlacementGroups: [ // PlacementGroupList
 * //     { // PlacementGroup
 * //       GroupName: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       Strategy: "cluster" || "spread" || "partition" || "precision-time",
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
 * //       LinkedGroupId: "STRING_VALUE",
 * //       Operator: { // OperatorResponse
 * //         Managed: true || false,
 * //         Principal: "STRING_VALUE",
 * //         HiddenByDefault: true || false,
 * //       },
 * //       ParentGroupId: "STRING_VALUE",
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribePlacementGroupsCommand extends command<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribePlacementGroups",
  DescribePlacementGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePlacementGroupsRequest;
      output: DescribePlacementGroupsResult;
    };
    sdk: {
      input: DescribePlacementGroupsCommandInput;
      output: DescribePlacementGroupsCommandOutput;
    };
  };
}
