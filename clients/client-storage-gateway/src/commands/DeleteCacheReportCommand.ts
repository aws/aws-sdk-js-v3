// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCacheReportInput, DeleteCacheReportOutput } from "../models/models_0";
import { DeleteCacheReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCacheReportCommand}.
 */
export interface DeleteCacheReportCommandInput extends DeleteCacheReportInput {}
/**
 * @public
 *
 * The output of {@link DeleteCacheReportCommand}.
 */
export interface DeleteCacheReportCommandOutput extends DeleteCacheReportOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the
 *          report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You
 *          can use <code>CancelCacheReport</code> to cancel an IN-PROGRESS report.</p>
 *          <note>
 *             <p>
 *                <code>DeleteCacheReport</code> does not delete the report object from your Amazon S3 bucket.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteCacheReportCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteCacheReportCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteCacheReportInput
 *   CacheReportARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteCacheReportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCacheReportOutput
 * //   CacheReportARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCacheReportCommandInput - {@link DeleteCacheReportCommandInput}
 * @returns {@link DeleteCacheReportCommandOutput}
 * @see {@link DeleteCacheReportCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheReportCommandOutput} for command's `response` shape.
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
export class DeleteCacheReportCommand extends command<DeleteCacheReportCommandInput, DeleteCacheReportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCacheReport",
  DeleteCacheReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheReportInput;
      output: DeleteCacheReportOutput;
    };
    sdk: {
      input: DeleteCacheReportCommandInput;
      output: DeleteCacheReportCommandOutput;
    };
  };
}
