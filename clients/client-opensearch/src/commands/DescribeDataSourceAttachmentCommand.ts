// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDataSourceAttachmentRequest, DescribeDataSourceAttachmentResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DescribeDataSourceAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSourceAttachmentCommand}.
 */
export interface DescribeDataSourceAttachmentCommandInput extends DescribeDataSourceAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSourceAttachmentCommand}.
 */
export interface DescribeDataSourceAttachmentCommandOutput extends DescribeDataSourceAttachmentResponse, __MetadataBearer {}

/**
 * <p>Returns the current status and details of a specific data source attachment for an OpenSearch application. Throws a <code>ResourceNotFoundException</code> if no attachment record exists for the specified application and data source combination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDataSourceAttachmentCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDataSourceAttachmentCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDataSourceAttachmentRequest
 *   id: "STRING_VALUE", // required
 *   dataSourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSourceAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSourceAttachmentResponse
 * //   attachmentId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   dataSourceArn: "STRING_VALUE",
 * //   status: "PENDING" || "ATTACHED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeDataSourceAttachmentCommandInput - {@link DescribeDataSourceAttachmentCommandInput}
 * @returns {@link DescribeDataSourceAttachmentCommandOutput}
 * @see {@link DescribeDataSourceAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceAttachmentCommandOutput} for command's `response` shape.
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
export class DescribeDataSourceAttachmentCommand extends $Command
  .classBuilder<
    DescribeDataSourceAttachmentCommandInput,
    DescribeDataSourceAttachmentCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "DescribeDataSourceAttachment", {})
  .n("OpenSearchClient", "DescribeDataSourceAttachmentCommand")
  .sc(DescribeDataSourceAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSourceAttachmentRequest;
      output: DescribeDataSourceAttachmentResponse;
    };
    sdk: {
      input: DescribeDataSourceAttachmentCommandInput;
      output: DescribeDataSourceAttachmentCommandOutput;
    };
  };
}
