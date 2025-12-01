// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import { UntagResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {}

/**
 * <p>Use this operation to remove tags on a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>.</p>
 *          <p>When you remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>.</p>
 *          <p>You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
 *          (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
 *          (such as cost centers, application names, or owners) to organize your costs across multiple services.
 *
 *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UntagResourceCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UntagResourceCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // UntagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TagKeys: [ // KeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * // { // UntagResourceResponse
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
 * @param UntagResourceCommandInput - {@link UntagResourceCommandInput}
 * @returns {@link UntagResourceCommandOutput}
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p>The specified ACL does not exist.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The specified cluster does not exist.</p>
 *
 * @throws {@link InvalidARNFault} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The cluster is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *  <p>The specified multi-Region cluster does not exist.</p>
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *  <p>The specified multi-Region parameter group does not exist.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The specified snapshot does not exist.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The specified subnet group does not exist.</p>
 *
 * @throws {@link TagNotFoundFault} (client fault)
 *  <p>The specified tag does not exist.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The specified user does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class UntagResourceCommand extends $Command
  .classBuilder<
    UntagResourceCommandInput,
    UntagResourceCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "UntagResource", {})
  .n("MemoryDBClient", "UntagResourceCommand")
  .sc(UntagResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagResourceRequest;
      output: UntagResourceResponse;
    };
    sdk: {
      input: UntagResourceCommandInput;
      output: UntagResourceCommandOutput;
    };
  };
}
