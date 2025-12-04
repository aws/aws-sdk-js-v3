// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import { DisassociateMacSecKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMacSecKeyCommand}.
 */
export interface DisassociateMacSecKeyCommandInput extends DisassociateMacSecKeyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMacSecKeyCommand}.
 */
export interface DisassociateMacSecKeyCommandOutput extends DisassociateMacSecKeyResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DisassociateMacSecKeyRequest
 *   connectionId: "STRING_VALUE", // required
 *   secretARN: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMacSecKeyResponse
 * //   connectionId: "STRING_VALUE",
 * //   macSecKeys: [ // MacSecKeyList
 * //     { // MacSecKey
 * //       secretARN: "STRING_VALUE",
 * //       ckn: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       startOn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateMacSecKeyCommandInput - {@link DisassociateMacSecKeyCommandInput}
 * @returns {@link DisassociateMacSecKeyCommandOutput}
 * @see {@link DisassociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateMacSecKeyCommandOutput} for command's `response` shape.
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
export class DisassociateMacSecKeyCommand extends $Command
  .classBuilder<
    DisassociateMacSecKeyCommandInput,
    DisassociateMacSecKeyCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DisassociateMacSecKey", {})
  .n("DirectConnectClient", "DisassociateMacSecKeyCommand")
  .sc(DisassociateMacSecKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMacSecKeyRequest;
      output: DisassociateMacSecKeyResponse;
    };
    sdk: {
      input: DisassociateMacSecKeyCommandInput;
      output: DisassociateMacSecKeyCommandOutput;
    };
  };
}
