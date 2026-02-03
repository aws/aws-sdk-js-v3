// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCollectionGroupsRequest, ListCollectionGroupsResponse } from "../models/models_0";
import type {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { ListCollectionGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollectionGroupsCommand}.
 */
export interface ListCollectionGroupsCommandInput extends ListCollectionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollectionGroupsCommand}.
 */
export interface ListCollectionGroupsCommandOutput extends ListCollectionGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of collection groups. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListCollectionGroupsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListCollectionGroupsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListCollectionGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollectionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollectionGroupsResponse
 * //   collectionGroupSummaries: [ // CollectionGroupSummaries
 * //     { // CollectionGroupSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       numberOfCollections: Number("int"),
 * //       createdDate: Number("long"),
 * //       capacityLimits: { // CollectionGroupCapacityLimits
 * //         maxIndexingCapacityInOCU: Number("float"),
 * //         maxSearchCapacityInOCU: Number("float"),
 * //         minIndexingCapacityInOCU: Number("float"),
 * //         minSearchCapacityInOCU: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollectionGroupsCommandInput - {@link ListCollectionGroupsCommandInput}
 * @returns {@link ListCollectionGroupsCommandOutput}
 * @see {@link ListCollectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListCollectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class ListCollectionGroupsCommand extends $Command
  .classBuilder<
    ListCollectionGroupsCommandInput,
    ListCollectionGroupsCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "ListCollectionGroups", {})
  .n("OpenSearchServerlessClient", "ListCollectionGroupsCommand")
  .sc(ListCollectionGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollectionGroupsRequest;
      output: ListCollectionGroupsResponse;
    };
    sdk: {
      input: ListCollectionGroupsCommandInput;
      output: ListCollectionGroupsCommandOutput;
    };
  };
}
