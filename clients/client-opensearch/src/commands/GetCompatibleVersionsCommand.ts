// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCompatibleVersionsRequest, GetCompatibleVersionsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetCompatibleVersionsCommand, se_GetCompatibleVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCompatibleVersionsCommand}.
 */
export interface GetCompatibleVersionsCommandInput extends GetCompatibleVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetCompatibleVersionsCommand}.
 */
export interface GetCompatibleVersionsCommandOutput extends GetCompatibleVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
 *    to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetCompatibleVersionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetCompatibleVersionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // GetCompatibleVersionsRequest
 *   DomainName: "STRING_VALUE",
 * };
 * const command = new GetCompatibleVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCompatibleVersionsResponse
 * //   CompatibleVersions: [ // CompatibleVersionsList
 * //     { // CompatibleVersionsMap
 * //       SourceVersion: "STRING_VALUE",
 * //       TargetVersions: [ // VersionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCompatibleVersionsCommandInput - {@link GetCompatibleVersionsCommandInput}
 * @returns {@link GetCompatibleVersionsCommandOutput}
 * @see {@link GetCompatibleVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 * @public
 */
export class GetCompatibleVersionsCommand extends $Command
  .classBuilder<
    GetCompatibleVersionsCommandInput,
    GetCompatibleVersionsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "GetCompatibleVersions", {})
  .n("OpenSearchClient", "GetCompatibleVersionsCommand")
  .f(void 0, void 0)
  .ser(se_GetCompatibleVersionsCommand)
  .de(de_GetCompatibleVersionsCommand)
  .build() {}
