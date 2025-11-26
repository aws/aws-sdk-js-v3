// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "../models/models_0";
import { CompleteAttachmentUpload } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteAttachmentUploadCommand}.
 */
export interface CompleteAttachmentUploadCommandInput extends CompleteAttachmentUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteAttachmentUploadCommand}.
 */
export interface CompleteAttachmentUploadCommandOutput extends CompleteAttachmentUploadResponse, __MetadataBearer {}

/**
 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 *             provided in StartAttachmentUpload API. A conflict exception is thrown when an attachment
 *             with that identifier is already being uploaded.</p>
 *          <p>For security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>. </p>
 *          <note>
 *             <p>
 *                <code>ConnectionToken</code> is used for invoking this API instead of
 *                     <code>ParticipantToken</code>.</p>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CompleteAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CompleteAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // CompleteAttachmentUploadRequest
 *   AttachmentIds: [ // AttachmentIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new CompleteAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteAttachmentUploadCommandInput - {@link CompleteAttachmentUploadCommandInput}
 * @returns {@link CompleteAttachmentUploadCommandOutput}
 * @see {@link CompleteAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation conflicts with the current state of a service resource
 *             associated with the request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of attachments per contact exceeds the quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
 * @throws {@link ConnectParticipantServiceException}
 * <p>Base exception class for all service exceptions from ConnectParticipant service.</p>
 *
 *
 * @public
 */
export class CompleteAttachmentUploadCommand extends $Command
  .classBuilder<
    CompleteAttachmentUploadCommandInput,
    CompleteAttachmentUploadCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectParticipantServiceLambda", "CompleteAttachmentUpload", {})
  .n("ConnectParticipantClient", "CompleteAttachmentUploadCommand")
  .sc(CompleteAttachmentUpload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteAttachmentUploadRequest;
      output: {};
    };
    sdk: {
      input: CompleteAttachmentUploadCommandInput;
      output: CompleteAttachmentUploadCommandOutput;
    };
  };
}
