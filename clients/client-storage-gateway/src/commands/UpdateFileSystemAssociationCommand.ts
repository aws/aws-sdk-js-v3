// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateFileSystemAssociationInput,
  UpdateFileSystemAssociationInputFilterSensitiveLog,
  UpdateFileSystemAssociationOutput,
} from "../models/models_0";
import { de_UpdateFileSystemAssociationCommand, se_UpdateFileSystemAssociationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFileSystemAssociationCommand}.
 */
export interface UpdateFileSystemAssociationCommandInput extends UpdateFileSystemAssociationInput {}
/**
 * @public
 *
 * The output of {@link UpdateFileSystemAssociationCommand}.
 */
export interface UpdateFileSystemAssociationCommandOutput extends UpdateFileSystemAssociationOutput, __MetadataBearer {}

/**
 * <p>Updates a file system association. This operation is only supported in the FSx File
 *          Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateFileSystemAssociationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateFileSystemAssociationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateFileSystemAssociationInput
 *   FileSystemAssociationARN: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   AuditDestinationARN: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 * };
 * const command = new UpdateFileSystemAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFileSystemAssociationOutput
 * //   FileSystemAssociationARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFileSystemAssociationCommandInput - {@link UpdateFileSystemAssociationCommandInput}
 * @returns {@link UpdateFileSystemAssociationCommandOutput}
 * @see {@link UpdateFileSystemAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemAssociationCommandOutput} for command's `response` shape.
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
export class UpdateFileSystemAssociationCommand extends $Command
  .classBuilder<
    UpdateFileSystemAssociationCommandInput,
    UpdateFileSystemAssociationCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateFileSystemAssociation", {})
  .n("StorageGatewayClient", "UpdateFileSystemAssociationCommand")
  .f(UpdateFileSystemAssociationInputFilterSensitiveLog, void 0)
  .ser(se_UpdateFileSystemAssociationCommand)
  .de(de_UpdateFileSystemAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFileSystemAssociationInput;
      output: UpdateFileSystemAssociationOutput;
    };
    sdk: {
      input: UpdateFileSystemAssociationCommandInput;
      output: UpdateFileSystemAssociationCommandOutput;
    };
  };
}
