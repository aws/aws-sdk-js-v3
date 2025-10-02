// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVirtualInterfaceRequest, DeleteVirtualInterfaceResponse } from "../models/models_0";
import { de_DeleteVirtualInterfaceCommand, se_DeleteVirtualInterfaceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVirtualInterfaceCommand}.
 */
export interface DeleteVirtualInterfaceCommandInput extends DeleteVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVirtualInterfaceCommand}.
 */
export interface DeleteVirtualInterfaceCommandOutput extends DeleteVirtualInterfaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteVirtualInterfaceRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVirtualInterfaceResponse
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
 * // };
 *
 * ```
 *
 * @param DeleteVirtualInterfaceCommandInput - {@link DeleteVirtualInterfaceCommandInput}
 * @returns {@link DeleteVirtualInterfaceCommandOutput}
 * @see {@link DeleteVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DeleteVirtualInterfaceCommand extends $Command
  .classBuilder<
    DeleteVirtualInterfaceCommandInput,
    DeleteVirtualInterfaceCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "DeleteVirtualInterface", {})
  .n("DirectConnectClient", "DeleteVirtualInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVirtualInterfaceCommand)
  .de(de_DeleteVirtualInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVirtualInterfaceRequest;
      output: DeleteVirtualInterfaceResponse;
    };
    sdk: {
      input: DeleteVirtualInterfaceCommandInput;
      output: DeleteVirtualInterfaceCommandOutput;
    };
  };
}
