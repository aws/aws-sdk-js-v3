// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import { DisassociateMacSecKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.
 *
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
 *
 * One or more parameters are not valid.
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *
 * A server-side error occurred.
 *
 * @throws {@link DirectConnectServiceException}
 *
 * Base exception class for all service exceptions from DirectConnect service.
 *
 * @public
 */
export class DisassociateMacSecKeyCommand extends command<DisassociateMacSecKeyCommandInput, DisassociateMacSecKeyCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateMacSecKey",
  DisassociateMacSecKey$
) {
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
