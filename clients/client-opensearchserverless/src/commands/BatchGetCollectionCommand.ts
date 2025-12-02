// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetCollectionRequest, BatchGetCollectionResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { BatchGetCollection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCollectionCommand}.
 */
export interface BatchGetCollectionCommandInput extends BatchGetCollectionRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCollectionCommand}.
 */
export interface BatchGetCollectionCommandOutput extends BatchGetCollectionResponse, __MetadataBearer {}

/**
 * <p>Returns attributes for one or more collections, including the collection endpoint, the OpenSearch Dashboards endpoint, and FIPS-compliant endpoints. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetCollectionCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetCollectionCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetCollectionRequest
 *   ids: [ // CollectionIds
 *     "STRING_VALUE",
 *   ],
 *   names: [ // CollectionNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCollectionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCollectionResponse
 * //   collectionDetails: [ // CollectionDetails
 * //     { // CollectionDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       kmsKeyArn: "STRING_VALUE",
 * //       standbyReplicas: "STRING_VALUE",
 * //       vectorOptions: { // VectorOptions
 * //         ServerlessVectorAcceleration: "STRING_VALUE", // required
 * //       },
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //       collectionEndpoint: "STRING_VALUE",
 * //       dashboardEndpoint: "STRING_VALUE",
 * //       fipsEndpoints: { // FipsEndpoints
 * //         collectionEndpoint: "STRING_VALUE",
 * //         dashboardEndpoint: "STRING_VALUE",
 * //       },
 * //       failureCode: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   collectionErrorDetails: [ // CollectionErrorDetails
 * //     { // CollectionErrorDetail
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
 * @param BatchGetCollectionCommandInput - {@link BatchGetCollectionCommandInput}
 * @returns {@link BatchGetCollectionCommandOutput}
 * @see {@link BatchGetCollectionCommandInput} for command's `input` shape.
 * @see {@link BatchGetCollectionCommandOutput} for command's `response` shape.
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
export class BatchGetCollectionCommand extends $Command
  .classBuilder<
    BatchGetCollectionCommandInput,
    BatchGetCollectionCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "BatchGetCollection", {})
  .n("OpenSearchServerlessClient", "BatchGetCollectionCommand")
  .sc(BatchGetCollection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCollectionRequest;
      output: BatchGetCollectionResponse;
    };
    sdk: {
      input: BatchGetCollectionCommandInput;
      output: BatchGetCollectionCommandOutput;
    };
  };
}
