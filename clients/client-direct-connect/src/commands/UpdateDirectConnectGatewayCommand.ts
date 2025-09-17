// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDirectConnectGatewayRequest, UpdateDirectConnectGatewayResponse } from "../models/models_0";
import { de_UpdateDirectConnectGatewayCommand, se_UpdateDirectConnectGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectConnectGatewayCommand}.
 */
export interface UpdateDirectConnectGatewayCommandInput extends UpdateDirectConnectGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectConnectGatewayCommand}.
 */
export interface UpdateDirectConnectGatewayCommandOutput extends UpdateDirectConnectGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates the name of a current Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateDirectConnectGatewayRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   newDirectConnectGatewayName: "STRING_VALUE", // required
 * };
 * const command = new UpdateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectConnectGatewayResponse
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
 * @param UpdateDirectConnectGatewayCommandInput - {@link UpdateDirectConnectGatewayCommandInput}
 * @returns {@link UpdateDirectConnectGatewayCommandOutput}
 * @see {@link UpdateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayCommandOutput} for command's `response` shape.
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
export class UpdateDirectConnectGatewayCommand extends $Command
  .classBuilder<
    UpdateDirectConnectGatewayCommandInput,
    UpdateDirectConnectGatewayCommandOutput,
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
  .s("OvertureService", "UpdateDirectConnectGateway", {})
  .n("DirectConnectClient", "UpdateDirectConnectGatewayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDirectConnectGatewayCommand)
  .de(de_UpdateDirectConnectGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectConnectGatewayRequest;
      output: UpdateDirectConnectGatewayResponse;
    };
    sdk: {
      input: UpdateDirectConnectGatewayCommandInput;
      output: UpdateDirectConnectGatewayCommandOutput;
    };
  };
}
