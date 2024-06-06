// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartObjectInput, StartObjectOutput } from "../models/models_0";
import { de_StartObjectCommand, se_StartObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartObjectCommand}.
 */
export interface StartObjectCommandInput extends StartObjectInput {}
/**
 * @public
 *
 * The output of {@link StartObjectCommand}.
 */
export interface StartObjectCommandOutput extends StartObjectOutput, __MetadataBearer {}

/**
 * Start upload containing one or many chunks.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, StartObjectCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, StartObjectCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // StartObjectInput
 *   BackupJobId: "STRING_VALUE", // required
 *   ObjectName: "STRING_VALUE", // required
 *   ThrowOnDuplicate: true || false,
 * };
 * const command = new StartObjectCommand(input);
 * const response = await client.send(command);
 * // { // StartObjectOutput
 * //   UploadId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartObjectCommandInput - {@link StartObjectCommandInput}
 * @returns {@link StartObjectCommandOutput}
 * @see {@link StartObjectCommandInput} for command's `input` shape.
 * @see {@link StartObjectCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link DataAlreadyExistsException} (client fault)
 *  Non-retryable exception. Attempted to create already existing object or chunk.
 *     This message contains a checksum of already presented data.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Non-retryable exception. Attempted to make an operation on non-existing or expired resource.
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
export class StartObjectCommand extends $Command
  .classBuilder<
    StartObjectCommandInput,
    StartObjectCommandOutput,
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
  .s("CryoStorageFrontendService", "StartObject", {})
  .n("BackupStorageClient", "StartObjectCommand")
  .f(void 0, void 0)
  .ser(se_StartObjectCommand)
  .de(de_StartObjectCommand)
  .build() {}
