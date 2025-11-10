// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessPreviewsRequest, ListAccessPreviewsResponse } from "../models/models_0";
import { ListAccessPreviews } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPreviewsCommand}.
 */
export interface ListAccessPreviewsCommandInput extends ListAccessPreviewsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPreviewsCommand}.
 */
export interface ListAccessPreviewsCommandOutput extends ListAccessPreviewsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of access previews for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAccessPreviewsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAccessPreviewsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListAccessPreviewsRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccessPreviewsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPreviewsResponse
 * //   accessPreviews: [ // AccessPreviewsList // required
 * //     { // AccessPreviewSummary
 * //       id: "STRING_VALUE", // required
 * //       analyzerArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       statusReason: { // AccessPreviewStatusReason
 * //         code: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPreviewsCommandInput - {@link ListAccessPreviewsCommandInput}
 * @returns {@link ListAccessPreviewsCommandOutput}
 * @see {@link ListAccessPreviewsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPreviewsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class ListAccessPreviewsCommand extends $Command
  .classBuilder<
    ListAccessPreviewsCommandInput,
    ListAccessPreviewsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "ListAccessPreviews", {})
  .n("AccessAnalyzerClient", "ListAccessPreviewsCommand")
  .sc(ListAccessPreviews)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPreviewsRequest;
      output: ListAccessPreviewsResponse;
    };
    sdk: {
      input: ListAccessPreviewsCommandInput;
      output: ListAccessPreviewsCommandOutput;
    };
  };
}
