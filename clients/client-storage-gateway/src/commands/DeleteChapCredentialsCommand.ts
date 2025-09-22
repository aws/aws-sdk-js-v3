// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/models_0";
import { DeleteChapCredentials } from "../schemas/schemas_8_SCSI";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChapCredentialsCommand}.
 */
export interface DeleteChapCredentialsCommandInput extends DeleteChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link DeleteChapCredentialsCommand}.
 */
export interface DeleteChapCredentialsCommandOutput extends DeleteChapCredentialsOutput, __MetadataBearer {}

/**
 * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 *   InitiatorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteChapCredentialsOutput
 * //   TargetARN: "STRING_VALUE",
 * //   InitiatorName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteChapCredentialsCommandInput - {@link DeleteChapCredentialsCommandInput}
 * @returns {@link DeleteChapCredentialsCommandOutput}
 * @see {@link DeleteChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteChapCredentialsCommandOutput} for command's `response` shape.
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
 * @example To delete CHAP credentials
 * ```javascript
 * // Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.
 * const input = {
 *   InitiatorName: "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InitiatorName: "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteChapCredentialsCommand extends $Command
  .classBuilder<
    DeleteChapCredentialsCommandInput,
    DeleteChapCredentialsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DeleteChapCredentials", {})
  .n("StorageGatewayClient", "DeleteChapCredentialsCommand")
  .sc(DeleteChapCredentials)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChapCredentialsInput;
      output: DeleteChapCredentialsOutput;
    };
    sdk: {
      input: DeleteChapCredentialsCommandInput;
      output: DeleteChapCredentialsCommandOutput;
    };
  };
}
