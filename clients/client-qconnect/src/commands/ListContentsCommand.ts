// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListContentsRequest, ListContentsResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListContents } from "../schemas/schemas_16_Content";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContentsCommand}.
 */
export interface ListContentsCommandInput extends ListContentsRequest {}
/**
 * @public
 *
 * The output of {@link ListContentsCommand}.
 */
export interface ListContentsCommandOutput extends ListContentsResponse, __MetadataBearer {}

/**
 * <p>Lists the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListContentsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListContentsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListContentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new ListContentsCommand(input);
 * const response = await client.send(command);
 * // { // ListContentsResponse
 * //   contentSummaries: [ // ContentSummaryList // required
 * //     { // ContentSummary
 * //       contentArn: "STRING_VALUE", // required
 * //       contentId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       revisionId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       metadata: { // ContentMetadata // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContentsCommandInput - {@link ListContentsCommandInput}
 * @returns {@link ListContentsCommandOutput}
 * @see {@link ListContentsCommandInput} for command's `input` shape.
 * @see {@link ListContentsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ListContentsCommand extends $Command
  .classBuilder<
    ListContentsCommandInput,
    ListContentsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListContents", {})
  .n("QConnectClient", "ListContentsCommand")
  .sc(ListContents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContentsRequest;
      output: ListContentsResponse;
    };
    sdk: {
      input: ListContentsCommandInput;
      output: ListContentsCommandOutput;
    };
  };
}
