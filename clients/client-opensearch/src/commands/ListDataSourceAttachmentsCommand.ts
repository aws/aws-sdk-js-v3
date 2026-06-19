// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataSourceAttachmentsRequest, ListDataSourceAttachmentsResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListDataSourceAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourceAttachmentsCommand}.
 */
export interface ListDataSourceAttachmentsCommandInput extends ListDataSourceAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSourceAttachmentsCommand}.
 */
export interface ListDataSourceAttachmentsCommandOutput extends ListDataSourceAttachmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all data source attachments for an OpenSearch application, including attachments in all states (<code>PENDING</code>, <code>ATTACHED</code>, and <code>FAILED</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDataSourceAttachmentsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDataSourceAttachmentsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListDataSourceAttachmentsRequest
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataSourceAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceAttachmentsResponse
 * //   attachments: [ // DataSourceAttachmentSummaryList
 * //     { // DataSourceAttachmentSummary
 * //       attachmentId: "STRING_VALUE",
 * //       dataSourceArn: "STRING_VALUE",
 * //       status: "PENDING" || "ATTACHED" || "FAILED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceAttachmentsCommandInput - {@link ListDataSourceAttachmentsCommandInput}
 * @returns {@link ListDataSourceAttachmentsCommandOutput}
 * @see {@link ListDataSourceAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class ListDataSourceAttachmentsCommand extends $Command
  .classBuilder<
    ListDataSourceAttachmentsCommandInput,
    ListDataSourceAttachmentsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListDataSourceAttachments", {})
  .n("OpenSearchClient", "ListDataSourceAttachmentsCommand")
  .sc(ListDataSourceAttachments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSourceAttachmentsRequest;
      output: ListDataSourceAttachmentsResponse;
    };
    sdk: {
      input: ListDataSourceAttachmentsCommandInput;
      output: ListDataSourceAttachmentsCommandOutput;
    };
  };
}
