// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeACLsRequest, DescribeACLsResponse } from "../models/models_0";
import { de_DescribeACLsCommand, se_DescribeACLsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeACLsCommand}.
 */
export interface DescribeACLsCommandInput extends DescribeACLsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeACLsCommand}.
 */
export interface DescribeACLsCommandOutput extends DescribeACLsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of ACLs</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeACLsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeACLsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeACLsRequest
 *   ACLName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeACLsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeACLsResponse
 * //   ACLs: [ // ACLList
 * //     { // ACL
 * //       Name: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       UserNames: [ // UserNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       PendingChanges: { // ACLPendingChanges
 * //         UserNamesToRemove: [
 * //           "STRING_VALUE",
 * //         ],
 * //         UserNamesToAdd: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Clusters: [ // ACLClusterNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeACLsCommandInput - {@link DescribeACLsCommandInput}
 * @returns {@link DescribeACLsCommandOutput}
 * @see {@link DescribeACLsCommandInput} for command's `input` shape.
 * @see {@link DescribeACLsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class DescribeACLsCommand extends $Command
  .classBuilder<
    DescribeACLsCommandInput,
    DescribeACLsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "DescribeACLs", {})
  .n("MemoryDBClient", "DescribeACLsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeACLsCommand)
  .de(de_DescribeACLsCommand)
  .build() {}
