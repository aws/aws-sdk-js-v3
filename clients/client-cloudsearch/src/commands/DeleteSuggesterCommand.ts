// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/models_0";
import { de_DeleteSuggesterCommand, se_DeleteSuggesterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSuggesterCommand}.
 */
export interface DeleteSuggesterCommandInput extends DeleteSuggesterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSuggesterCommand}.
 */
export interface DeleteSuggesterCommandOutput extends DeleteSuggesterResponse, __MetadataBearer {}

/**
 * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteSuggesterRequest
 *   DomainName: "STRING_VALUE", // required
 *   SuggesterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSuggesterResponse
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
 * @param DeleteSuggesterCommandInput - {@link DeleteSuggesterCommandInput}
 * @returns {@link DeleteSuggesterCommandOutput}
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
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
export class DeleteSuggesterCommand extends $Command
  .classBuilder<
    DeleteSuggesterCommandInput,
    DeleteSuggesterCommandOutput,
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
  .s("A9SearchCloudConfigService2013", "DeleteSuggester", {})
  .n("CloudSearchClient", "DeleteSuggesterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSuggesterCommand)
  .de(de_DeleteSuggesterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSuggesterRequest;
      output: DeleteSuggesterResponse;
    };
    sdk: {
      input: DeleteSuggesterCommandInput;
      output: DeleteSuggesterCommandOutput;
    };
  };
}
