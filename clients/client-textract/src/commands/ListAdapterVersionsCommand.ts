// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAdapterVersionsRequest, ListAdapterVersionsResponse } from "../models/models_0";
import { de_ListAdapterVersionsCommand, se_ListAdapterVersionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAdapterVersionsCommand}.
 */
export interface ListAdapterVersionsCommandInput extends ListAdapterVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAdapterVersionsCommand}.
 */
export interface ListAdapterVersionsCommandOutput extends ListAdapterVersionsResponse, __MetadataBearer {}

/**
 * <p>List all version of an adapter that meet the specified filtration criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, ListAdapterVersionsCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, ListAdapterVersionsCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const input = { // ListAdapterVersionsRequest
 *   AdapterId: "STRING_VALUE",
 *   AfterCreationTime: new Date("TIMESTAMP"),
 *   BeforeCreationTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAdapterVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAdapterVersionsResponse
 * //   AdapterVersions: [ // AdapterVersionList
 * //     { // AdapterVersionOverview
 * //       AdapterId: "STRING_VALUE",
 * //       AdapterVersion: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FeatureTypes: [ // FeatureTypes
 * //         "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //       ],
 * //       Status: "ACTIVE" || "AT_RISK" || "DEPRECATED" || "CREATION_ERROR" || "CREATION_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdapterVersionsCommandInput - {@link ListAdapterVersionsCommandInput}
 * @returns {@link ListAdapterVersionsCommandOutput}
 * @see {@link ListAdapterVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAdapterVersionsCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 *
 * @public
 */
export class ListAdapterVersionsCommand extends $Command
  .classBuilder<
    ListAdapterVersionsCommandInput,
    ListAdapterVersionsCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "ListAdapterVersions", {})
  .n("TextractClient", "ListAdapterVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAdapterVersionsCommand)
  .de(de_ListAdapterVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdapterVersionsRequest;
      output: ListAdapterVersionsResponse;
    };
    sdk: {
      input: ListAdapterVersionsCommandInput;
      output: ListAdapterVersionsCommandOutput;
    };
  };
}
