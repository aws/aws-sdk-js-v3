// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/models_0";
import { de_ListDataSourcesCommand, se_ListDataSourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandInput extends ListDataSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandOutput extends ListDataSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the data source connectors that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListDataSourcesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListDataSourcesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // ListDataSourcesRequest
 *   IndexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourcesResponse
 * //   SummaryItems: [ // DataSourceSummaryList
 * //     { // DataSourceSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "S3" || "SHAREPOINT" || "DATABASE" || "SALESFORCE" || "ONEDRIVE" || "SERVICENOW" || "CUSTOM" || "CONFLUENCE" || "GOOGLEDRIVE" || "WEBCRAWLER" || "WORKDOCS" || "FSX" || "SLACK" || "BOX" || "QUIP" || "JIRA" || "GITHUB" || "ALFRESCO" || "TEMPLATE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Status: "CREATING" || "DELETING" || "FAILED" || "UPDATING" || "ACTIVE",
 * //       LanguageCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourcesCommandInput - {@link ListDataSourcesCommandInput}
 * @returns {@link ListDataSourcesCommandOutput}
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class ListDataSourcesCommand extends $Command
  .classBuilder<
    ListDataSourcesCommandInput,
    ListDataSourcesCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "ListDataSources", {})
  .n("KendraClient", "ListDataSourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSourcesCommand)
  .de(de_ListDataSourcesCommand)
  .build() {}
