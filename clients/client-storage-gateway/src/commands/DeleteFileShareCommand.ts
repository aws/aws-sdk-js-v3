// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteFileShareInput, DeleteFileShareOutput } from "../models/models_0";
import { DeleteFileShare$ } from "../schemas/schemas_0";
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
 * The input for {@link DeleteFileShareCommand}.
 */
export interface DeleteFileShareCommandInput extends DeleteFileShareInput {}
/**
 * @public
 *
 * The output of {@link DeleteFileShareCommand}.
 */
export interface DeleteFileShareCommandOutput extends DeleteFileShareOutput, __MetadataBearer {}

/**
 * <p>Deletes a file share from an S3 File Gateway. This operation is only supported for S3
 *          File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteFileShareInput
 *   FileShareARN: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteFileShareCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFileShareOutput
 * //   FileShareARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteFileShareCommandInput - {@link DeleteFileShareCommandInput}
 * @returns {@link DeleteFileShareCommandOutput}
 * @see {@link DeleteFileShareCommandInput} for command's `input` shape.
 * @see {@link DeleteFileShareCommandOutput} for command's `response` shape.
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
export class DeleteFileShareCommand extends $Command
  .classBuilder<
    DeleteFileShareCommandInput,
    DeleteFileShareCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DeleteFileShare", {})
  .n("StorageGatewayClient", "DeleteFileShareCommand")
  .sc(DeleteFileShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileShareInput;
      output: DeleteFileShareOutput;
    };
    sdk: {
      input: DeleteFileShareCommandInput;
      output: DeleteFileShareCommandOutput;
    };
  };
}
