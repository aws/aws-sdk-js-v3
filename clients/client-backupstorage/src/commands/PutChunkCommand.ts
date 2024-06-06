// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutChunkInput, PutChunkInputFilterSensitiveLog, PutChunkOutput } from "../models/models_0";
import { de_PutChunkCommand, se_PutChunkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutChunkCommand}.
 */
export interface PutChunkCommandInput extends Omit<PutChunkInput, "Data"> {
  Data: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutChunkCommand}.
 */
export interface PutChunkCommandOutput extends PutChunkOutput, __MetadataBearer {}

/**
 * Upload chunk.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, PutChunkCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, PutChunkCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // PutChunkInput
 *   BackupJobId: "STRING_VALUE", // required
 *   UploadId: "STRING_VALUE", // required
 *   ChunkIndex: Number("long"), // required
 *   Data: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   Length: Number("long"), // required
 *   Checksum: "STRING_VALUE", // required
 *   ChecksumAlgorithm: "SHA256", // required
 * };
 * const command = new PutChunkCommand(input);
 * const response = await client.send(command);
 * // { // PutChunkOutput
 * //   ChunkChecksum: "STRING_VALUE", // required
 * //   ChunkChecksumAlgorithm: "SHA256", // required
 * // };
 *
 * ```
 *
 * @param PutChunkCommandInput - {@link PutChunkCommandInput}
 * @returns {@link PutChunkCommandOutput}
 * @see {@link PutChunkCommandInput} for command's `input` shape.
 * @see {@link PutChunkCommandOutput} for command's `response` shape.
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
export class PutChunkCommand extends $Command
  .classBuilder<
    PutChunkCommandInput,
    PutChunkCommandOutput,
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
  .s("CryoStorageFrontendService", "PutChunk", {})
  .n("BackupStorageClient", "PutChunkCommand")
  .f(PutChunkInputFilterSensitiveLog, void 0)
  .ser(se_PutChunkCommand)
  .de(de_PutChunkCommand)
  .build() {}
