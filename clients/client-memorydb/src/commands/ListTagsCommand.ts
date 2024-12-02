// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { de_ListTagsCommand, se_ListTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsCommand}.
 */
export interface ListTagsCommandInput extends ListTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsCommand}.
 */
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {}

/**
 * <p>Lists all tags currently on a named resource.
 *
 *          A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources.
 *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListTagsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListTagsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // ListTagsRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsResponse
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsCommandInput - {@link ListTagsCommandInput}
 * @returns {@link ListTagsCommandOutput}
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidARNFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *  <p>The specified multi-Region cluster does not exist.</p>
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *  <p>The specified multi-Region parameter group does not exist.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class ListTagsCommand extends $Command
  .classBuilder<
    ListTagsCommandInput,
    ListTagsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "ListTags", {})
  .n("MemoryDBClient", "ListTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsCommand)
  .de(de_ListTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsRequest;
      output: ListTagsResponse;
    };
    sdk: {
      input: ListTagsCommandInput;
      output: ListTagsCommandOutput;
    };
  };
}
