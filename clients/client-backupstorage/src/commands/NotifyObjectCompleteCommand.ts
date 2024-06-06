// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  NotifyObjectCompleteInput,
  NotifyObjectCompleteInputFilterSensitiveLog,
  NotifyObjectCompleteOutput,
} from "../models/models_0";
import { de_NotifyObjectCompleteCommand, se_NotifyObjectCompleteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyObjectCompleteCommand}.
 */
export interface NotifyObjectCompleteCommandInput extends Omit<NotifyObjectCompleteInput, "MetadataBlob"> {
  MetadataBlob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link NotifyObjectCompleteCommand}.
 */
export interface NotifyObjectCompleteCommandOutput extends NotifyObjectCompleteOutput, __MetadataBearer {}

/**
 * Complete upload
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, NotifyObjectCompleteCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, NotifyObjectCompleteCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // NotifyObjectCompleteInput
 *   BackupJobId: "STRING_VALUE", // required
 *   UploadId: "STRING_VALUE", // required
 *   ObjectChecksum: "STRING_VALUE", // required
 *   ObjectChecksumAlgorithm: "SUMMARY", // required
 *   MetadataString: "STRING_VALUE",
 *   MetadataBlob: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 *   MetadataBlobLength: Number("long"),
 *   MetadataBlobChecksum: "STRING_VALUE",
 *   MetadataBlobChecksumAlgorithm: "SHA256",
 * };
 * const command = new NotifyObjectCompleteCommand(input);
 * const response = await client.send(command);
 * // { // NotifyObjectCompleteOutput
 * //   ObjectChecksum: "STRING_VALUE", // required
 * //   ObjectChecksumAlgorithm: "SUMMARY", // required
 * // };
 *
 * ```
 *
 * @param NotifyObjectCompleteCommandInput - {@link NotifyObjectCompleteCommandInput}
 * @returns {@link NotifyObjectCompleteCommandOutput}
 * @see {@link NotifyObjectCompleteCommandInput} for command's `input` shape.
 * @see {@link NotifyObjectCompleteCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 *
 * @throws {@link KMSInvalidKeyUsageException} (client fault)
 *  Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
 *
 * @throws {@link NotReadableInputStreamException} (client fault)
 *  Retryalble exception. Indicated issues while reading an input stream due to the networking issues or connection drop on the client side.
 *
 * @throws {@link RetryableException} (server fault)
 *  Retryable exception. In general indicates internal failure that can be fixed by retry.
 *
 * @throws {@link ServiceInternalException} (server fault)
 *  Deprecated. To be removed from the model.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Retryable exception, indicates internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Increased rate over throttling limits. Can be retried with exponential backoff.
 *
 * @throws {@link BackupStorageServiceException}
 * <p>Base exception class for all service exceptions from BackupStorage service.</p>
 *
 * @public
 */
export class NotifyObjectCompleteCommand extends $Command
  .classBuilder<
    NotifyObjectCompleteCommandInput,
    NotifyObjectCompleteCommandOutput,
    BackupStorageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupStorageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoStorageFrontendService", "NotifyObjectComplete", {})
  .n("BackupStorageClient", "NotifyObjectCompleteCommand")
  .f(NotifyObjectCompleteInputFilterSensitiveLog, void 0)
  .ser(se_NotifyObjectCompleteCommand)
  .de(de_NotifyObjectCompleteCommand)
  .build() {}
