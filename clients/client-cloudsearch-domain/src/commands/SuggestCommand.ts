// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SuggestRequest, SuggestResponse } from "../models/models_0";
import { de_SuggestCommand, se_SuggestCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SuggestCommand}.
 */
export interface SuggestCommandInput extends SuggestRequest {}
/**
 * @public
 *
 * The output of {@link SuggestCommand}.
 */
export interface SuggestCommandOutput extends SuggestResponse, __MetadataBearer {}

/**
 * <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p>
 *       <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 *
 *       <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, SuggestCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, SuggestCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * const client = new CloudSearchDomainClient(config);
 * const input = { // SuggestRequest
 *   query: "STRING_VALUE", // required
 *   suggester: "STRING_VALUE", // required
 *   size: Number("long"),
 * };
 * const command = new SuggestCommand(input);
 * const response = await client.send(command);
 * // { // SuggestResponse
 * //   status: { // SuggestStatus
 * //     timems: Number("long"),
 * //     rid: "STRING_VALUE",
 * //   },
 * //   suggest: { // SuggestModel
 * //     query: "STRING_VALUE",
 * //     found: Number("long"),
 * //     suggestions: [ // Suggestions
 * //       { // SuggestionMatch
 * //         suggestion: "STRING_VALUE",
 * //         score: Number("long"),
 * //         id: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SuggestCommandInput - {@link SuggestCommandInput}
 * @returns {@link SuggestCommandOutput}
 * @see {@link SuggestCommandInput} for command's `input` shape.
 * @see {@link SuggestCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
 *
 * @throws {@link SearchException} (client fault)
 *  <p>Information about any problems encountered while processing a search request.</p>
 *
 * @throws {@link CloudSearchDomainServiceException}
 * <p>Base exception class for all service exceptions from CloudSearchDomain service.</p>
 *
 *
 * @public
 */
export class SuggestCommand extends $Command
  .classBuilder<
    SuggestCommandInput,
    SuggestCommandOutput,
    CloudSearchDomainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchDomainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudSearch2013", "Suggest", {})
  .n("CloudSearchDomainClient", "SuggestCommand")
  .f(void 0, void 0)
  .ser(se_SuggestCommand)
  .de(de_SuggestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SuggestRequest;
      output: SuggestResponse;
    };
    sdk: {
      input: SuggestCommandInput;
      output: SuggestCommandOutput;
    };
  };
}
