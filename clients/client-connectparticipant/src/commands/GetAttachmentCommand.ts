// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAttachmentRequest, GetAttachmentResponse } from "../models/models_0";
import { GetAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * > **Note:**
 * >
 * > - The participant role `CUSTOM_BOT` is not permitted to access attachments customers may upload. An `AccessDeniedException` can indicate that the participant may be a CUSTOM_BOT, and it doesn't have access to attachments.
 * > - `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
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
 *   UrlContentDisposition: "INLINE" || "ATTACHMENT",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon Connect service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Amazon Connect.
 *
 * @throws {@link ConnectParticipantServiceException}
 *
 * Base exception class for all service exceptions from ConnectParticipant service.
 *
 * @public
 */
export class GetAttachmentCommand extends command<GetAttachmentCommandInput, GetAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "GetAttachment",
  GetAttachment$
) {
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
