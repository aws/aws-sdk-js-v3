// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DefineSuggesterRequest, DefineSuggesterResponse } from "../models/models_0";
import { de_DefineSuggesterCommand, se_DefineSuggesterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DefineSuggesterCommand}.
 */
export interface DefineSuggesterCommandInput extends DefineSuggesterRequest {}
/**
 * @public
 *
 * The output of {@link DefineSuggesterCommand}.
 */
export interface DefineSuggesterCommandOutput extends DefineSuggesterResponse, __MetadataBearer {}

/**
 * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudSearchClient(config);
 * const input = { // DefineSuggesterRequest
 *   DomainName: "STRING_VALUE", // required
 *   Suggester: { // Suggester
 *     SuggesterName: "STRING_VALUE", // required
 *     DocumentSuggesterOptions: { // DocumentSuggesterOptions
 *       SourceField: "STRING_VALUE", // required
 *       FuzzyMatching: "none" || "low" || "high",
 *       SortExpression: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new DefineSuggesterCommand(input);
 * const response = await client.send(command);
 * // { // DefineSuggesterResponse
 * //   Suggester: { // SuggesterStatus
 * //     Options: { // Suggester
 * //       SuggesterName: "STRING_VALUE", // required
 * //       DocumentSuggesterOptions: { // DocumentSuggesterOptions
 * //         SourceField: "STRING_VALUE", // required
 * //         FuzzyMatching: "none" || "low" || "high",
 * //         SortExpression: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DefineSuggesterCommandInput - {@link DefineSuggesterCommandInput}
 * @returns {@link DefineSuggesterCommandOutput}
 * @see {@link DefineSuggesterCommandInput} for command's `input` shape.
 * @see {@link DefineSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 * @public
 */
export class DefineSuggesterCommand extends $Command
  .classBuilder<
    DefineSuggesterCommandInput,
    DefineSuggesterCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("A9SearchCloudConfigService2013", "DefineSuggester", {})
  .n("CloudSearchClient", "DefineSuggesterCommand")
  .f(void 0, void 0)
  .ser(se_DefineSuggesterCommand)
  .de(de_DefineSuggesterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DefineSuggesterRequest;
      output: DefineSuggesterResponse;
    };
    sdk: {
      input: DefineSuggesterCommandInput;
      output: DefineSuggesterCommandOutput;
    };
  };
}
