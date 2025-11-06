// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse } from "../models/models_1";
import { de_ListDocumentMetadataHistoryCommand, se_ListDocumentMetadataHistoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentMetadataHistoryCommand}.
 */
export interface ListDocumentMetadataHistoryCommandInput extends ListDocumentMetadataHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentMetadataHistoryCommand}.
 */
export interface ListDocumentMetadataHistoryCommandOutput
  extends ListDocumentMetadataHistoryResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>Amazon Web Services Systems Manager Change Manager will no longer be open to new
 *   customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
 *   continue to use the service as normal. For more information, see
 * <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-availability-change.html">Amazon Web Services Systems Manager Change Manager availability change</a>.</p>
 *          </important>
 *          <p>Information about approval reviews for a version of a change template in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentMetadataHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListDocumentMetadataHistoryRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   Metadata: "DocumentReviews", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDocumentMetadataHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentMetadataHistoryResponse
 * //   Name: "STRING_VALUE",
 * //   DocumentVersion: "STRING_VALUE",
 * //   Author: "STRING_VALUE",
 * //   Metadata: { // DocumentMetadataResponseInfo
 * //     ReviewerResponse: [ // DocumentReviewerResponseList
 * //       { // DocumentReviewerResponseSource
 * //         CreateTime: new Date("TIMESTAMP"),
 * //         UpdatedTime: new Date("TIMESTAMP"),
 * //         ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //         Comment: [ // DocumentReviewCommentList
 * //           { // DocumentReviewCommentSource
 * //             Type: "Comment",
 * //             Content: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Reviewer: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentMetadataHistoryCommandInput - {@link ListDocumentMetadataHistoryCommandInput}
 * @returns {@link ListDocumentMetadataHistoryCommandOutput}
 * @see {@link ListDocumentMetadataHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDocumentMetadataHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListDocumentMetadataHistoryCommand extends $Command
  .classBuilder<
    ListDocumentMetadataHistoryCommandInput,
    ListDocumentMetadataHistoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListDocumentMetadataHistory", {})
  .n("SSMClient", "ListDocumentMetadataHistoryCommand")
  .f(void 0, void 0)
  .ser(se_ListDocumentMetadataHistoryCommand)
  .de(de_ListDocumentMetadataHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDocumentMetadataHistoryRequest;
      output: ListDocumentMetadataHistoryResponse;
    };
    sdk: {
      input: ListDocumentMetadataHistoryCommandInput;
      output: ListDocumentMetadataHistoryCommandOutput;
    };
  };
}
