// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { ListTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html).
 *
 * When you add or remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListTagsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListTagsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
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
 *
 * The specified ACL does not exist.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The specified cluster does not exist.
 *
 * @throws {@link InvalidARNFault} (client fault)
 *
 * The specified Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The cluster is not in a valid state for the requested operation.
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *
 * The specified multi-Region cluster does not exist.
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *
 * The specified multi-Region parameter group does not exist.
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *
 * The specified parameter group does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The required service-linked role was not found.
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *
 * The specified snapshot does not exist.
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *
 * The specified subnet group does not exist.
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *
 * The specified user does not exist.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class ListTagsCommand extends command<ListTagsCommandInput, ListTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListTags",
  ListTags$
) {
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
