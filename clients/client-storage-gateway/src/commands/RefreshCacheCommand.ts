// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RefreshCacheInput, RefreshCacheOutput } from "../models/models_0";
import { de_RefreshCacheCommand, se_RefreshCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Refreshes the cached inventory of objects for the specified file share. This operation
 *          finds objects in the Amazon S3 bucket that were added, removed, or replaced since
 *          the gateway last listed the bucket's contents and cached the results. This operation
 *          does not import files into the S3 File Gateway cache storage. It only updates the cached
 *          inventory to reflect changes in the inventory of the objects in the S3 bucket. This
 *          operation is only supported in the S3 File Gateway types.</p>
 *          <p>You can subscribe to be notified through an Amazon CloudWatch event when your
 *             <code>RefreshCache</code> operation completes. For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification">Getting
 *             notified about file operations</a> in the <i>Amazon S3 File Gateway User
 *             Guide</i>. This operation is Only supported for S3 File Gateways.</p>
 *          <p>When this API is called, it only initiates the refresh operation. When the API call
 *          completes and returns a success code, it doesn't necessarily mean that the file
 *          refresh has completed. You should use the refresh-complete notification to determine that
 *          the operation has completed before you check for new files on the gateway file share. You
 *          can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code>
 *          operation completes.</p>
 *          <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two
 *          refreshes at any time. We recommend using the refresh-complete CloudWatch event
 *          notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification">Getting
 *             notified about file operations</a> in the <i>Amazon S3 File Gateway User
 *             Guide</i>.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>Wait at least 60 seconds between consecutive RefreshCache API requests.</p>
 *                </li>
 *                <li>
 *                   <p>If you invoke the RefreshCache API when two requests are already being
 *                   processed, any new request will cause an
 *                      <code>InvalidGatewayRequestException</code> error because too many requests
 *                   were sent to the server.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <note>
 *             <p>The S3 bucket name does not need to be included when entering the list of folders in
 *             the FolderList parameter.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification">Getting
 *             notified about file operations</a> in the <i>Amazon S3 File Gateway User
 *             Guide</i>.</p>
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
export class RefreshCacheCommand extends $Command
  .classBuilder<
    RefreshCacheCommandInput,
    RefreshCacheCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "RefreshCache", {})
  .n("StorageGatewayClient", "RefreshCacheCommand")
  .f(void 0, void 0)
  .ser(se_RefreshCacheCommand)
  .de(de_RefreshCacheCommand)
  .build() {
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
