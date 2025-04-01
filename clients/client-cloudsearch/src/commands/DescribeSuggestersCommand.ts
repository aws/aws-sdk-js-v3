// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSuggestersRequest, DescribeSuggestersResponse } from "../models/models_0";
import { de_DescribeSuggestersCommand, se_DescribeSuggestersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSuggestersCommand}.
 */
export interface DescribeSuggestersCommandInput extends DescribeSuggestersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSuggestersCommand}.
 */
export interface DescribeSuggestersCommandOutput extends DescribeSuggestersResponse, __MetadataBearer {}

/**
 * <p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries.  Can be limited to specific suggesters by name.  By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeSuggestersRequest
 *   DomainName: "STRING_VALUE", // required
 *   SuggesterNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeSuggestersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSuggestersResponse
 * //   Suggesters: [ // SuggesterStatusList // required
 * //     { // SuggesterStatus
 * //       Options: { // Suggester
 * //         SuggesterName: "STRING_VALUE", // required
 * //         DocumentSuggesterOptions: { // DocumentSuggesterOptions
 * //           SourceField: "STRING_VALUE", // required
 * //           FuzzyMatching: "none" || "low" || "high",
 * //           SortExpression: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSuggestersCommandInput - {@link DescribeSuggestersCommandInput}
 * @returns {@link DescribeSuggestersCommandOutput}
 * @see {@link DescribeSuggestersCommandInput} for command's `input` shape.
 * @see {@link DescribeSuggestersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class DescribeSuggestersCommand extends $Command
  .classBuilder<
    DescribeSuggestersCommandInput,
    DescribeSuggestersCommandOutput,
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
  .s("A9SearchCloudConfigService2013", "DescribeSuggesters", {})
  .n("CloudSearchClient", "DescribeSuggestersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSuggestersCommand)
  .de(de_DescribeSuggestersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSuggestersRequest;
      output: DescribeSuggestersResponse;
    };
    sdk: {
      input: DescribeSuggestersCommandInput;
      output: DescribeSuggestersCommandOutput;
    };
  };
}
