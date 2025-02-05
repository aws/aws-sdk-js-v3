// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse } from "../models/models_0";
import { de_DescribeSubnetGroupsCommand, se_DescribeSubnetGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubnetGroupsCommand}.
 */
export interface DescribeSubnetGroupsCommandInput extends DescribeSubnetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubnetGroupsCommand}.
 */
export interface DescribeSubnetGroupsCommandOutput extends DescribeSubnetGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of subnet group descriptions. If a subnet group name is specified,
 *             the list will contain only the description of that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeSubnetGroupsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeSubnetGroupsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DAXClient(config);
 * const input = { // DescribeSubnetGroupsRequest
 *   SubnetGroupNames: [ // SubnetGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubnetGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SubnetGroups: [ // SubnetGroupList
 * //     { // SubnetGroup
 * //       SubnetGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSubnetGroupsCommandInput - {@link DescribeSubnetGroupsCommandInput}
 * @returns {@link DescribeSubnetGroupsCommandOutput}
 * @see {@link DescribeSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 * @public
 */
export class DescribeSubnetGroupsCommand extends $Command
  .classBuilder<
    DescribeSubnetGroupsCommandInput,
    DescribeSubnetGroupsCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDAXV3", "DescribeSubnetGroups", {})
  .n("DAXClient", "DescribeSubnetGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSubnetGroupsCommand)
  .de(de_DescribeSubnetGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSubnetGroupsRequest;
      output: DescribeSubnetGroupsResponse;
    };
    sdk: {
      input: DescribeSubnetGroupsCommandInput;
      output: DescribeSubnetGroupsCommandOutput;
    };
  };
}
