// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGatewayInput, DeleteGatewayOutput } from "../models/models_0";
import { de_DeleteGatewayCommand, se_DeleteGatewayCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandInput extends DeleteGatewayInput {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandOutput extends DeleteGatewayOutput, __MetadataBearer {}

/**
 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
 *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
 *          not delete the gateway virtual machine (VM) from your host computer.</p>
 *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
 *          volumes are not deleted upon deleting the gateway, however, pending snapshots will not
 *          complete. After you delete a gateway, your next step is to remove it from your
 *          environment.</p>
 *          <important>
 *             <p>You no longer pay software charges after the gateway is deleted; however, your
 *             existing Amazon EBS snapshots persist and you will continue to be billed for these
 *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
 *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
 *             can delete your snapshots using the Amazon EC2 console. For more information, see the
 *                <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail
 *             page</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteGatewayInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGatewayCommandInput - {@link DeleteGatewayCommandInput}
 * @returns {@link DeleteGatewayCommandOutput}
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
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
 * @example To delete a gatgeway
 * ```javascript
 * // This operation deletes the gateway, but not the gateway's VM from the host computer.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteGatewayCommand extends $Command
  .classBuilder<
    DeleteGatewayCommandInput,
    DeleteGatewayCommandOutput,
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
  .s("StorageGateway_20130630", "DeleteGateway", {})
  .n("StorageGatewayClient", "DeleteGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGatewayCommand)
  .de(de_DeleteGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayInput;
      output: DeleteGatewayOutput;
    };
    sdk: {
      input: DeleteGatewayCommandInput;
      output: DeleteGatewayCommandOutput;
    };
  };
}
