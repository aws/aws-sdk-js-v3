// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeParameterGroupsRequest, DescribeParameterGroupsResponse } from "../models/models_0";
import { de_DescribeParameterGroupsCommand, se_DescribeParameterGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeParameterGroupsCommand}.
 */
export interface DescribeParameterGroupsCommandInput extends DescribeParameterGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeParameterGroupsCommand}.
 */
export interface DescribeParameterGroupsCommandOutput extends DescribeParameterGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of parameter group descriptions. If a parameter group name is
 *             specified, the list will contain only the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeParameterGroupsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeParameterGroupsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const input = { // DescribeParameterGroupsRequest
 *   ParameterGroupNames: [ // ParameterGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeParameterGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ParameterGroups: [ // ParameterGroupList
 * //     { // ParameterGroup
 * //       ParameterGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeParameterGroupsCommandInput - {@link DescribeParameterGroupsCommandInput}
 * @returns {@link DescribeParameterGroupsCommandOutput}
 * @see {@link DescribeParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class DescribeParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeParameterGroupsCommandInput,
    DescribeParameterGroupsCommandOutput,
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
  .s("AmazonDAXV3", "DescribeParameterGroups", {})
  .n("DAXClient", "DescribeParameterGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeParameterGroupsCommand)
  .de(de_DescribeParameterGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeParameterGroupsRequest;
      output: DescribeParameterGroupsResponse;
    };
    sdk: {
      input: DescribeParameterGroupsCommandInput;
      output: DescribeParameterGroupsCommandOutput;
    };
  };
}
