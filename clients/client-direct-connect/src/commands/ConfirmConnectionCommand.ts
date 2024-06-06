// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmConnectionRequest, ConfirmConnectionResponse } from "../models/models_0";
import { de_ConfirmConnectionCommand, se_ConfirmConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmConnectionCommand}.
 */
export interface ConfirmConnectionCommandInput extends ConfirmConnectionRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmConnectionCommand}.
 */
export interface ConfirmConnectionCommandOutput extends ConfirmConnectionResponse, __MetadataBearer {}

/**
 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
 *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
 *       remains in this state until the owner confirms creation of the hosted connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmConnectionRequest
 *   connectionId: "STRING_VALUE", // required
 * };
 * const command = new ConfirmConnectionCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmConnectionResponse
 * //   connectionState: "ordering" || "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * // };
 *
 * ```
 *
 * @param ConfirmConnectionCommandInput - {@link ConfirmConnectionCommandInput}
 * @returns {@link ConfirmConnectionCommandOutput}
 * @see {@link ConfirmConnectionCommandInput} for command's `input` shape.
 * @see {@link ConfirmConnectionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ConfirmConnectionCommand extends $Command
  .classBuilder<
    ConfirmConnectionCommandInput,
    ConfirmConnectionCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "ConfirmConnection", {})
  .n("DirectConnectClient", "ConfirmConnectionCommand")
  .f(void 0, void 0)
  .ser(se_ConfirmConnectionCommand)
  .de(de_ConfirmConnectionCommand)
  .build() {}
