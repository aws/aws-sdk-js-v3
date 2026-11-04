// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Use this operation to add tags to a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html).
 *
 * When you add tags to multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html).
 *
 * You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, TagResourceCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, TagResourceCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // { // TagResourceResponse
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
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The specified parameter value is not valid.
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
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of tags allowed per resource.
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
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: TagResourceResponse;
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
