// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFileSharesInput, ListFileSharesOutput } from "../models/models_0";
import { ListFileShares } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a list of the file shares for a specific S3 File Gateway, or the list of file
 *          shares that belong to the calling Amazon Web Services account. This operation is only
 *          supported for S3 File Gateways.</p>
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
export class ListFileSharesCommand extends $Command
  .classBuilder<
    ListFileSharesCommandInput,
    ListFileSharesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ListFileShares", {})
  .n("StorageGatewayClient", "ListFileSharesCommand")
  .sc(ListFileShares)
  .build() {
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
