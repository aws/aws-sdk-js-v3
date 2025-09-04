// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityConfigsRequest, ListSecurityConfigsResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_ListSecurityConfigsCommand, se_ListSecurityConfigsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityConfigsCommand}.
 */
export interface ListSecurityConfigsCommandInput extends ListSecurityConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityConfigsCommand}.
 */
export interface ListSecurityConfigsCommandOutput extends ListSecurityConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListSecurityConfigsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListSecurityConfigsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListSecurityConfigsRequest
 *   type: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSecurityConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityConfigsResponse
 * //   securityConfigSummaries: [ // SecurityConfigSummaries
 * //     { // SecurityConfigSummary
 * //       id: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       configVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityConfigsCommandInput - {@link ListSecurityConfigsCommandInput}
 * @returns {@link ListSecurityConfigsCommandOutput}
 * @see {@link ListSecurityConfigsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigsCommandOutput} for command's `response` shape.
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
export class ListSecurityConfigsCommand extends $Command
  .classBuilder<
    ListSecurityConfigsCommandInput,
    ListSecurityConfigsCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "ListSecurityConfigs", {})
  .n("OpenSearchServerlessClient", "ListSecurityConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListSecurityConfigsCommand)
  .de(de_ListSecurityConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityConfigsRequest;
      output: ListSecurityConfigsResponse;
    };
    sdk: {
      input: ListSecurityConfigsCommandInput;
      output: ListSecurityConfigsCommandOutput;
    };
  };
}
