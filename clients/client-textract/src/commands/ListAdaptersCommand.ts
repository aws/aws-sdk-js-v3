// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAdaptersRequest, ListAdaptersResponse } from "../models/models_0";
import { ListAdapters } from "../schemas/schemas_3_Adapter";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAdaptersCommand}.
 */
export interface ListAdaptersCommandInput extends ListAdaptersRequest {}
/**
 * @public
 *
 * The output of {@link ListAdaptersCommand}.
 */
export interface ListAdaptersCommandOutput extends ListAdaptersResponse, __MetadataBearer {}

/**
 * <p>Lists all adapters that match the specified filtration criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, ListAdaptersCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, ListAdaptersCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // ListAdaptersRequest
 *   AfterCreationTime: new Date("TIMESTAMP"),
 *   BeforeCreationTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAdaptersCommand(input);
 * const response = await client.send(command);
 * // { // ListAdaptersResponse
 * //   Adapters: [ // AdapterList
 * //     { // AdapterOverview
 * //       AdapterId: "STRING_VALUE",
 * //       AdapterName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FeatureTypes: [ // FeatureTypes
 * //         "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdaptersCommandInput - {@link ListAdaptersCommandInput}
 * @returns {@link ListAdaptersCommandOutput}
 * @see {@link ListAdaptersCommandInput} for command's `input` shape.
 * @see {@link ListAdaptersCommandOutput} for command's `response` shape.
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
export class ListAdaptersCommand extends $Command
  .classBuilder<
    ListAdaptersCommandInput,
    ListAdaptersCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Textract", "ListAdapters", {})
  .n("TextractClient", "ListAdaptersCommand")
  .sc(ListAdapters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdaptersRequest;
      output: ListAdaptersResponse;
    };
    sdk: {
      input: ListAdaptersCommandInput;
      output: ListAdaptersCommandOutput;
    };
  };
}
