// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFileSharesInput, ListFileSharesOutput } from "../models/models_0";
import { ListFileShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFileSharesCommand}.
 */
export interface ListFileSharesCommandInput extends ListFileSharesInput {}
/**
 * @public
 *
 * The output of {@link ListFileSharesCommand}.
 */
export interface ListFileSharesCommandOutput extends ListFileSharesOutput, __MetadataBearer {}

/**
 * Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListFileSharesInput
 *   GatewayARN: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListFileSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListFileSharesOutput
 * //   Marker: "STRING_VALUE",
 * //   NextMarker: "STRING_VALUE",
 * //   FileShareInfoList: [ // FileShareInfoList
 * //     { // FileShareInfo
 * //       FileShareType: "NFS" || "SMB",
 * //       FileShareARN: "STRING_VALUE",
 * //       FileShareId: "STRING_VALUE",
 * //       FileShareStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFileSharesCommandInput - {@link ListFileSharesCommandInput}
 * @returns {@link ListFileSharesCommandOutput}
 * @see {@link ListFileSharesCommandInput} for command's `input` shape.
 * @see {@link ListFileSharesCommandOutput} for command's `response` shape.
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
export class ListFileSharesCommand extends command<ListFileSharesCommandInput, ListFileSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListFileShares",
  ListFileShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFileSharesInput;
      output: ListFileSharesOutput;
    };
    sdk: {
      input: ListFileSharesCommandInput;
      output: ListFileSharesCommandOutput;
    };
  };
}
