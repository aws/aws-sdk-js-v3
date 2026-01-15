// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetCollectionGroupRequest, BatchGetCollectionGroupResponse } from "../models/models_0";
import type {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { BatchGetCollectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCollectionGroupCommand}.
 */
export interface BatchGetCollectionGroupCommandInput extends BatchGetCollectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCollectionGroupCommand}.
 */
export interface BatchGetCollectionGroupCommandOutput extends BatchGetCollectionGroupResponse, __MetadataBearer {}

/**
 * <p>Returns attributes for one or more collection groups, including capacity limits and the number of collections in each group. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetCollectionGroupCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetCollectionGroupCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetCollectionGroupRequest
 *   ids: [ // CollectionGroupIds
 *     "STRING_VALUE",
 *   ],
 *   names: [ // CollectionGroupNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCollectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCollectionGroupResponse
 * //   collectionGroupDetails: [ // CollectionGroupDetails
 * //     { // CollectionGroupDetail
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       standbyReplicas: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       createdDate: Number("long"),
 * //       capacityLimits: { // CollectionGroupCapacityLimits
 * //         maxIndexingCapacityInOCU: Number("float"),
 * //         maxSearchCapacityInOCU: Number("float"),
 * //         minIndexingCapacityInOCU: Number("float"),
 * //         minSearchCapacityInOCU: Number("float"),
 * //       },
 * //       numberOfCollections: Number("int"),
 * //     },
 * //   ],
 * //   collectionGroupErrorDetails: [ // CollectionGroupErrorDetails
 * //     { // CollectionGroupErrorDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCollectionGroupCommandInput - {@link BatchGetCollectionGroupCommandInput}
 * @returns {@link BatchGetCollectionGroupCommandOutput}
 * @see {@link BatchGetCollectionGroupCommandInput} for command's `input` shape.
 * @see {@link BatchGetCollectionGroupCommandOutput} for command's `response` shape.
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
export class BatchGetCollectionGroupCommand extends $Command
  .classBuilder<
    BatchGetCollectionGroupCommandInput,
    BatchGetCollectionGroupCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "BatchGetCollectionGroup", {})
  .n("OpenSearchServerlessClient", "BatchGetCollectionGroupCommand")
  .sc(BatchGetCollectionGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCollectionGroupRequest;
      output: BatchGetCollectionGroupResponse;
    };
    sdk: {
      input: BatchGetCollectionGroupCommandInput;
      output: BatchGetCollectionGroupCommandOutput;
    };
  };
}
