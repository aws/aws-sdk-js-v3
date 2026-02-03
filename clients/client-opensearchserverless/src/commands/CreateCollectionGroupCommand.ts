// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCollectionGroupRequest, CreateCollectionGroupResponse } from "../models/models_0";
import type {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { CreateCollectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCollectionGroupCommand}.
 */
export interface CreateCollectionGroupCommandInput extends CreateCollectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateCollectionGroupCommand}.
 */
export interface CreateCollectionGroupCommandOutput extends CreateCollectionGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a collection group within OpenSearch Serverless. Collection groups let you manage OpenSearch Compute Units (OCUs) at a group level, with multiple collections sharing the group's capacity limits.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-collection-groups.html">Managing collection groups</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateCollectionGroupCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateCollectionGroupCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateCollectionGroupRequest
 *   name: "STRING_VALUE", // required
 *   standbyReplicas: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   capacityLimits: { // CollectionGroupCapacityLimits
 *     maxIndexingCapacityInOCU: Number("float"),
 *     maxSearchCapacityInOCU: Number("float"),
 *     minIndexingCapacityInOCU: Number("float"),
 *     minSearchCapacityInOCU: Number("float"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCollectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollectionGroupResponse
 * //   createCollectionGroupDetail: { // CreateCollectionGroupDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     standbyReplicas: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     createdDate: Number("long"),
 * //     capacityLimits: { // CollectionGroupCapacityLimits
 * //       maxIndexingCapacityInOCU: Number("float"),
 * //       maxSearchCapacityInOCU: Number("float"),
 * //       minIndexingCapacityInOCU: Number("float"),
 * //       minSearchCapacityInOCU: Number("float"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCollectionGroupCommandInput - {@link CreateCollectionGroupCommandInput}
 * @returns {@link CreateCollectionGroupCommandOutput}
 * @see {@link CreateCollectionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCollectionGroupCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
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
export class CreateCollectionGroupCommand extends $Command
  .classBuilder<
    CreateCollectionGroupCommandInput,
    CreateCollectionGroupCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "CreateCollectionGroup", {})
  .n("OpenSearchServerlessClient", "CreateCollectionGroupCommand")
  .sc(CreateCollectionGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollectionGroupRequest;
      output: CreateCollectionGroupResponse;
    };
    sdk: {
      input: CreateCollectionGroupCommandInput;
      output: CreateCollectionGroupCommandOutput;
    };
  };
}
