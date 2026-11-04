// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAttachedFileUploadRequest, StartAttachedFileUploadResponse } from "../models/models_3";
import { StartAttachedFileUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAttachedFileUploadCommand}.
 */
export interface StartAttachedFileUploadCommandInput extends StartAttachedFileUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartAttachedFileUploadCommand}.
 */
export interface StartAttachedFileUploadCommandOutput extends StartAttachedFileUploadResponse, __MetadataBearer {}

/**
 * Provides a pre-signed Amazon S3 URL in response for uploading your content.
 *
 * > **Important:** You may only use this API to upload attachments to a [Connect Customer Case](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html), [Connect Customer Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), or [Connect Customer Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartAttachedFileUploadCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartAttachedFileUploadCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartAttachedFileUploadRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   FileName: "STRING_VALUE", // required
 *   FileSizeInBytes: Number("long"), // required
 *   UrlExpiryInSeconds: Number("int"),
 *   FileUseCaseType: "CONTACT_ANALYSIS" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_REDACTED" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "ATTACHMENT" || "VOICE_RECORDING", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 *   CreatedBy: { // CreatedByInfo Union: only one key present
 *     ConnectUserArn: "STRING_VALUE",
 *     AWSIdentityArn: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAttachedFileUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartAttachedFileUploadResponse
 * //   FileArn: "STRING_VALUE",
 * //   FileId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   FileStatus: "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED" || "DRAFTING",
 * //   CreatedBy: { // CreatedByInfo Union: only one key present
 * //     ConnectUserArn: "STRING_VALUE",
 * //     AWSIdentityArn: "STRING_VALUE",
 * //   },
 * //   UploadUrlMetadata: { // UploadUrlMetadata
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
 * @param StartAttachedFileUploadCommandInput - {@link StartAttachedFileUploadCommandInput}
 * @returns {@link StartAttachedFileUploadCommandOutput}
 * @see {@link StartAttachedFileUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachedFileUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StartAttachedFileUploadCommand extends command<StartAttachedFileUploadCommandInput, StartAttachedFileUploadCommandOutput>(
  _ep0,
  _mw0,
  "StartAttachedFileUpload",
  StartAttachedFileUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAttachedFileUploadRequest;
      output: StartAttachedFileUploadResponse;
    };
    sdk: {
      input: StartAttachedFileUploadCommandInput;
      output: StartAttachedFileUploadCommandOutput;
    };
  };
}
