// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvictFilesFailingUploadInput, EvictFilesFailingUploadOutput } from "../models/models_0";
import { EvictFilesFailingUpload } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvictFilesFailingUploadCommand}.
 */
export interface EvictFilesFailingUploadCommandInput extends EvictFilesFailingUploadInput {}
/**
 * @public
 *
 * The output of {@link EvictFilesFailingUploadCommand}.
 */
export interface EvictFilesFailingUploadCommandOutput extends EvictFilesFailingUploadOutput, __MetadataBearer {}

/**
 * <p>Starts a process that cleans the specified file share's cache of file entries that are
 *          failing upload to Amazon S3. This API operation reports success if the request is
 *          received with valid arguments, and there are no other cache clean operations currently
 *          in-progress for the specified file share. After a successful request, the cache clean
 *          operation occurs asynchronously and reports progress using CloudWatch logs and
 *          notifications.</p>
 *          <important>
 *             <p>If <code>ForceRemove</code> is set to <code>True</code>, the cache clean operation
 *             will delete file data from the gateway which might otherwise be recoverable. We
 *             recommend using this operation only after all other methods to clear files failing
 *             upload have been exhausted, and if your business need outweighs the potential data
 *             loss.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, EvictFilesFailingUploadCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, EvictFilesFailingUploadCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // EvictFilesFailingUploadInput
 *   FileShareARN: "STRING_VALUE", // required
 *   ForceRemove: true || false,
 * };
 * const command = new EvictFilesFailingUploadCommand(input);
 * const response = await client.send(command);
 * // { // EvictFilesFailingUploadOutput
 * //   NotificationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvictFilesFailingUploadCommandInput - {@link EvictFilesFailingUploadCommandInput}
 * @returns {@link EvictFilesFailingUploadCommandOutput}
 * @see {@link EvictFilesFailingUploadCommandInput} for command's `input` shape.
 * @see {@link EvictFilesFailingUploadCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class EvictFilesFailingUploadCommand extends $Command
  .classBuilder<
    EvictFilesFailingUploadCommandInput,
    EvictFilesFailingUploadCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "EvictFilesFailingUpload", {})
  .n("StorageGatewayClient", "EvictFilesFailingUploadCommand")
  .sc(EvictFilesFailingUpload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvictFilesFailingUploadInput;
      output: EvictFilesFailingUploadOutput;
    };
    sdk: {
      input: EvictFilesFailingUploadCommandInput;
      output: EvictFilesFailingUploadCommandOutput;
    };
  };
}
