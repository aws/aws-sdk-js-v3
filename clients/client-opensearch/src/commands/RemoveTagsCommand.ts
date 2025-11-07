// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveTagsRequest } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_RemoveTagsCommand, se_RemoveTagsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandInput extends RemoveTagsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified set of tags from an Amazon OpenSearch Service domain, data
 *             source, or application. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains.html#managedomains-awsresorcetagging"> Tagging Amazon OpenSearch Service resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RemoveTagsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RemoveTagsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // RemoveTagsRequest
 *   ARN: "STRING_VALUE", // required
 *   TagKeys: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsCommandInput - {@link RemoveTagsCommandInput}
 * @returns {@link RemoveTagsCommandOutput}
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class RemoveTagsCommand extends $Command
  .classBuilder<
    RemoveTagsCommandInput,
    RemoveTagsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "RemoveTags", {})
  .n("OpenSearchClient", "RemoveTagsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTagsCommand)
  .de(de_RemoveTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsRequest;
      output: {};
    };
    sdk: {
      input: RemoveTagsCommandInput;
      output: RemoveTagsCommandOutput;
    };
  };
}
