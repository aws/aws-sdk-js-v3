// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAttachmentUploadRequest, StartAttachmentUploadResponse } from "../models/models_0";
import { StartAttachmentUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAttachmentUploadCommand}.
 */
export interface StartAttachmentUploadCommandInput extends StartAttachmentUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartAttachmentUploadCommand}.
 */
export interface StartAttachmentUploadCommandOutput extends StartAttachmentUploadResponse, __MetadataBearer {}

/**
 * Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * > **Note:** `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, StartAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, StartAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // StartAttachmentUploadRequest
 *   ContentType: "STRING_VALUE", // required
 *   AttachmentSizeInBytes: Number("long"), // required
 *   AttachmentName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new StartAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartAttachmentUploadResponse
 * //   AttachmentId: "STRING_VALUE",
 * //   UploadMetadata: { // UploadMetadata
 * //     Url: "STRING_VALUE",
 * //     UrlExpiry: "STRING_VALUE",
 * //     HeadersToInclude: { // UrlMetadataSignedHeaders
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAttachmentUploadCommandInput - {@link StartAttachmentUploadCommandInput}
 * @returns {@link StartAttachmentUploadCommandOutput}
 * @see {@link StartAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachmentUploadCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of attachments per contact exceeds the quota.
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
export class StartAttachmentUploadCommand extends command<StartAttachmentUploadCommandInput, StartAttachmentUploadCommandOutput>(
  _ep0,
  _mw0,
  "StartAttachmentUpload",
  StartAttachmentUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAttachmentUploadRequest;
      output: StartAttachmentUploadResponse;
    };
    sdk: {
      input: StartAttachmentUploadCommandInput;
      output: StartAttachmentUploadCommandOutput;
    };
  };
}
