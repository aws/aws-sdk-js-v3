// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAttachmentRequest, GetAttachmentResponse } from "../models/models_0";
import { de_GetAttachmentCommand, se_GetAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttachmentCommand}.
 */
export interface GetAttachmentCommandInput extends GetAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link GetAttachmentCommand}.
 */
export interface GetAttachmentCommandOutput extends GetAttachmentResponse, __MetadataBearer {}

/**
 * <p>Provides a pre-signed URL for download of a completed attachment. This is an
 *             asynchronous API for use with active contacts.</p>
 *          <p>For security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>. </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The participant role <code>CUSTOM_BOT</code> is not permitted to access
 *                         attachments customers may upload. An <code>AccessDeniedException</code> can
 *                         indicate that the participant may be a CUSTOM_BOT, and it doesn't have
 *                         access to attachments.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>ConnectionToken</code> is used for invoking this API instead of
 *                             <code>ParticipantToken</code>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetAttachmentCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetAttachmentCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // GetAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 *   UrlExpiryInSeconds: Number("int"),
 * };
 * const command = new GetAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // GetAttachmentResponse
 * //   Url: "STRING_VALUE",
 * //   UrlExpiry: "STRING_VALUE",
 * //   AttachmentSizeInBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetAttachmentCommandInput - {@link GetAttachmentCommandInput}
 * @returns {@link GetAttachmentCommandOutput}
 * @see {@link GetAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
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
export class GetAttachmentCommand extends $Command
  .classBuilder<
    GetAttachmentCommandInput,
    GetAttachmentCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectParticipantServiceLambda", "GetAttachment", {})
  .n("ConnectParticipantClient", "GetAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_GetAttachmentCommand)
  .de(de_GetAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttachmentRequest;
      output: GetAttachmentResponse;
    };
    sdk: {
      input: GetAttachmentCommandInput;
      output: GetAttachmentCommandOutput;
    };
  };
}
