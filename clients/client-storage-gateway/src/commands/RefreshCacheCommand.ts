// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RefreshCacheInput, RefreshCacheOutput } from "../models/models_0";
import { RefreshCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RefreshCacheCommand}.
 */
export interface RefreshCacheCommandInput extends RefreshCacheInput {}
/**
 * @public
 *
 * The output of {@link RefreshCacheCommand}.
 */
export interface RefreshCacheCommandOutput extends RefreshCacheOutput, __MetadataBearer {}

/**
 * Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types.
 *
 * You can subscribe to be notified through an Amazon CloudWatch event when your `RefreshCache` operation completes. For more information, see [Getting notified about file operations](https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification) in the *Amazon S3 File Gateway User Guide*. This operation is Only supported for S3 File Gateways.
 *
 * When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your `RefreshCache` operation completes.
 *
 * Throttle limit: This API is asynchronous, so the gateway will accept no more than two refreshes at any time. We recommend using the refresh-complete CloudWatch event notification before issuing additional requests. For more information, see [Getting notified about file operations](https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification) in the *Amazon S3 File Gateway User Guide*.
 *
 * > **Important:**
 * >
 * > - Wait at least 60 seconds between consecutive RefreshCache API requests.
 * > - If you invoke the RefreshCache API when two requests are already being processed, any new request will cause an `InvalidGatewayRequestException` error because too many requests were sent to the server.
 *
 * > **Note:** The S3 bucket name does not need to be included when entering the list of folders in the FolderList parameter.
 *
 * For more information, see [Getting notified about file operations](https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification) in the *Amazon S3 File Gateway User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RefreshCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RefreshCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // RefreshCacheInput
 *   FileShareARN: "STRING_VALUE", // required
 *   FolderList: [ // FolderList
 *     "STRING_VALUE",
 *   ],
 *   Recursive: true || false,
 * };
 * const command = new RefreshCacheCommand(input);
 * const response = await client.send(command);
 * // { // RefreshCacheOutput
 * //   FileShareARN: "STRING_VALUE",
 * //   NotificationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RefreshCacheCommandInput - {@link RefreshCacheCommandInput}
 * @returns {@link RefreshCacheCommandOutput}
 * @see {@link RefreshCacheCommandInput} for command's `input` shape.
 * @see {@link RefreshCacheCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
 *
 * @public
 */
export class RefreshCacheCommand extends command<RefreshCacheCommandInput, RefreshCacheCommandOutput>(
  _ep0,
  _mw0,
  "RefreshCache",
  RefreshCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RefreshCacheInput;
      output: RefreshCacheOutput;
    };
    sdk: {
      input: RefreshCacheCommandInput;
      output: RefreshCacheCommandOutput;
    };
  };
}
