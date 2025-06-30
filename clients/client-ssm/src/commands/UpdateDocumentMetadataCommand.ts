// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_2";
import { de_UpdateDocumentMetadataCommand, se_UpdateDocumentMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentMetadataCommand}.
 */
export interface UpdateDocumentMetadataCommandInput extends UpdateDocumentMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentMetadataCommand}.
 */
export interface UpdateDocumentMetadataCommandOutput extends UpdateDocumentMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates information related to approval reviews for a specific version of a change template
 *    in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentMetadataRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentReviews: { // DocumentReviews
 *     Action: "SendForReview" || "UpdateReview" || "Approve" || "Reject", // required
 *     Comment: [ // DocumentReviewCommentList
 *       { // DocumentReviewCommentSource
 *         Type: "Comment",
 *         Content: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateDocumentMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentMetadataCommandInput - {@link UpdateDocumentMetadataCommandInput}
 * @returns {@link UpdateDocumentMetadataCommandOutput}
 * @see {@link UpdateDocumentMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *  <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateDocumentMetadataCommand extends $Command
  .classBuilder<
    UpdateDocumentMetadataCommandInput,
    UpdateDocumentMetadataCommandOutput,
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
  .s("AmazonSSM", "UpdateDocumentMetadata", {})
  .n("SSMClient", "UpdateDocumentMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDocumentMetadataCommand)
  .de(de_UpdateDocumentMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateDocumentMetadataCommandInput;
      output: UpdateDocumentMetadataCommandOutput;
    };
  };
}
