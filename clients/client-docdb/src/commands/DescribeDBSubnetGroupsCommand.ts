// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_0";
import { DescribeDBSubnetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDBSubnetGroupsCommand}.
 */
export interface DescribeDBSubnetGroupsCommandInput extends DescribeDBSubnetGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSubnetGroupsCommand}.
 */
export interface DescribeDBSubnetGroupsCommandOutput extends DBSubnetGroupMessage, __MetadataBearer {}

/**
 * Returns a list of `DBSubnetGroup` descriptions. If a `DBSubnetGroupName` is specified, the list will contain only the descriptions of the specified `DBSubnetGroup`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBSubnetGroupsMessage
 *   DBSubnetGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBSubnetGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSubnetGroups: [ // DBSubnetGroups
 * //     { // DBSubnetGroup
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       DBSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSubnetGroupArn: "STRING_VALUE",
 * //       SupportedNetworkTypes: [ // NetworkTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSubnetGroupsCommandInput - {@link DescribeDBSubnetGroupsCommandInput}
 * @returns {@link DescribeDBSubnetGroupsCommandOutput}
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * `DBSubnetGroupName` doesn't refer to an existing subnet group.
 *
 * @throws {@link DocDBServiceException}
 *
 * Base exception class for all service exceptions from DocDB service.
 *
 * @public
 */
export class DescribeDBSubnetGroupsCommand extends command<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDBSubnetGroups",
  DescribeDBSubnetGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSubnetGroupsMessage;
      output: DBSubnetGroupMessage;
    };
    sdk: {
      input: DescribeDBSubnetGroupsCommandInput;
      output: DescribeDBSubnetGroupsCommandOutput;
    };
  };
}
