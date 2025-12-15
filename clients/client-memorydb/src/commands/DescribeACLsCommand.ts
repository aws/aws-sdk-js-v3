// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DescribeACLsRequest, DescribeACLsResponse } from "../models/models_0";
import { DescribeACLs$ } from "../schemas/schemas_0";

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
 * <p>Returns a list of ACLs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeACLsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeACLsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
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
 *  <p>The specified ACL does not exist.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeACLs", {})
  .n("MemoryDBClient", "DescribeACLsCommand")
  .sc(DescribeACLs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeACLsRequest;
      output: DescribeACLsResponse;
    };
    sdk: {
      input: DescribeACLsCommandInput;
      output: DescribeACLsCommandOutput;
    };
  };
}
