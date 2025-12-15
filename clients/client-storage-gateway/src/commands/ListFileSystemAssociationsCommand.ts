// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFileSystemAssociationsInput, ListFileSystemAssociationsOutput } from "../models/models_0";
import { ListFileSystemAssociations$ } from "../schemas/schemas_0";
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
 * The input for {@link ListFileSystemAssociationsCommand}.
 */
export interface ListFileSystemAssociationsCommandInput extends ListFileSystemAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListFileSystemAssociationsCommand}.
 */
export interface ListFileSystemAssociationsCommandOutput extends ListFileSystemAssociationsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a
 *          summary of a file system association. This operation is only supported for FSx File
 *          Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListFileSystemAssociationsInput
 *   GatewayARN: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFileSystemAssociationsOutput
 * //   Marker: "STRING_VALUE",
 * //   NextMarker: "STRING_VALUE",
 * //   FileSystemAssociationSummaryList: [ // FileSystemAssociationSummaryList
 * //     { // FileSystemAssociationSummary
 * //       FileSystemAssociationId: "STRING_VALUE",
 * //       FileSystemAssociationARN: "STRING_VALUE",
 * //       FileSystemAssociationStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFileSystemAssociationsCommandInput - {@link ListFileSystemAssociationsCommandInput}
 * @returns {@link ListFileSystemAssociationsCommandOutput}
 * @see {@link ListFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFileSystemAssociationsCommandOutput} for command's `response` shape.
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
export class ListFileSystemAssociationsCommand extends $Command
  .classBuilder<
    ListFileSystemAssociationsCommandInput,
    ListFileSystemAssociationsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ListFileSystemAssociations", {})
  .n("StorageGatewayClient", "ListFileSystemAssociationsCommand")
  .sc(ListFileSystemAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFileSystemAssociationsInput;
      output: ListFileSystemAssociationsOutput;
    };
    sdk: {
      input: ListFileSystemAssociationsCommandInput;
      output: ListFileSystemAssociationsCommandOutput;
    };
  };
}
