// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_1";
import { UpdateDocumentMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services Systems Manager Change Manager availability change](https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-availability-change.html).
 *
 * Updates information related to approval reviews for a specific version of a change template in Change Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *
 * You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *
 * The document version isn't valid or doesn't exist.
 *
 * @throws {@link TooManyUpdates} (client fault)
 *
 * There are concurrent updates for a resource that supports one update at a time.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UpdateDocumentMetadataCommand extends command<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDocumentMetadata",
  UpdateDocumentMetadata$
) {
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
