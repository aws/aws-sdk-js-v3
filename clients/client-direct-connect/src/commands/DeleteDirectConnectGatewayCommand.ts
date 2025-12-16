// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDirectConnectGatewayRequest, DeleteDirectConnectGatewayResult } from "../models/models_0";
import { DeleteDirectConnectGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectConnectGatewayCommand}.
 */
export interface DeleteDirectConnectGatewayCommandInput extends DeleteDirectConnectGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectConnectGatewayCommand}.
 */
export interface DeleteDirectConnectGatewayCommandOutput extends DeleteDirectConnectGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
 *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
 *       with the Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteDirectConnectGatewayRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectConnectGatewayResult
 * //   directConnectGateway: { // DirectConnectGateway
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayName: "STRING_VALUE",
 * //     amazonSideAsn: Number("long"),
 * //     ownerAccount: "STRING_VALUE",
 * //     directConnectGatewayState: "pending" || "available" || "deleting" || "deleted",
 * //     stateChangeError: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDirectConnectGatewayCommandInput - {@link DeleteDirectConnectGatewayCommandInput}
 * @returns {@link DeleteDirectConnectGatewayCommandOutput}
 * @see {@link DeleteDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayCommandOutput} for command's `response` shape.
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
export class DeleteDirectConnectGatewayCommand extends $Command
  .classBuilder<
    DeleteDirectConnectGatewayCommandInput,
    DeleteDirectConnectGatewayCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DeleteDirectConnectGateway", {})
  .n("DirectConnectClient", "DeleteDirectConnectGatewayCommand")
  .sc(DeleteDirectConnectGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectConnectGatewayRequest;
      output: DeleteDirectConnectGatewayResult;
    };
    sdk: {
      input: DeleteDirectConnectGatewayCommandInput;
      output: DeleteDirectConnectGatewayCommandOutput;
    };
  };
}
