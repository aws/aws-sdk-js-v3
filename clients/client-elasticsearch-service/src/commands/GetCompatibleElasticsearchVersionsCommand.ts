// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCompatibleElasticsearchVersionsRequest,
  GetCompatibleElasticsearchVersionsResponse,
} from "../models/models_0";
import {
  de_GetCompatibleElasticsearchVersionsCommand,
  se_GetCompatibleElasticsearchVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCompatibleElasticsearchVersionsCommand}.
 */
export interface GetCompatibleElasticsearchVersionsCommandInput extends GetCompatibleElasticsearchVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetCompatibleElasticsearchVersionsCommand}.
 */
export interface GetCompatibleElasticsearchVersionsCommandOutput
  extends GetCompatibleElasticsearchVersionsResponse,
    __MetadataBearer {}

/**
 * <p>
 *         Returns a list of upgrade compatible Elastisearch versions.
 *         You can optionally pass a
 *         <code>
 *           <a>DomainName</a>
 *         </code>
 *         to get all upgrade compatible Elasticsearch versions for that specific domain.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // GetCompatibleElasticsearchVersionsRequest
 *   DomainName: "STRING_VALUE",
 * };
 * const command = new GetCompatibleElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCompatibleElasticsearchVersionsResponse
 * //   CompatibleElasticsearchVersions: [ // CompatibleElasticsearchVersionsList
 * //     { // CompatibleVersionsMap
 * //       SourceVersion: "STRING_VALUE",
 * //       TargetVersions: [ // ElasticsearchVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCompatibleElasticsearchVersionsCommandInput - {@link GetCompatibleElasticsearchVersionsCommandInput}
 * @returns {@link GetCompatibleElasticsearchVersionsCommandOutput}
 * @see {@link GetCompatibleElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class GetCompatibleElasticsearchVersionsCommand extends $Command
  .classBuilder<
    GetCompatibleElasticsearchVersionsCommandInput,
    GetCompatibleElasticsearchVersionsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "GetCompatibleElasticsearchVersions", {})
  .n("ElasticsearchServiceClient", "GetCompatibleElasticsearchVersionsCommand")
  .f(void 0, void 0)
  .ser(se_GetCompatibleElasticsearchVersionsCommand)
  .de(de_GetCompatibleElasticsearchVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCompatibleElasticsearchVersionsRequest;
      output: GetCompatibleElasticsearchVersionsResponse;
    };
    sdk: {
      input: GetCompatibleElasticsearchVersionsCommandInput;
      output: GetCompatibleElasticsearchVersionsCommandOutput;
    };
  };
}
