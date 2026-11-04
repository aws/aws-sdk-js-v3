// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateMacSecKeyRequest, AssociateMacSecKeyResponse } from "../models/models_0";
import { AssociateMacSecKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateMacSecKeyCommand}.
 */
export interface AssociateMacSecKeyCommandInput extends AssociateMacSecKeyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMacSecKeyCommand}.
 */
export interface AssociateMacSecKeyCommandOutput extends AssociateMacSecKeyResponse, __MetadataBearer {}

/**
 * Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection.
 *
 * You must supply either the `secretARN,` or the CKN/CAK (`ckn` and `cak`) pair in the request.
 *
 * For information about MAC Security (MACsec) key considerations, see [MACsec pre-shared CKN/CAK key considerations](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration) in the *Direct Connect User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // AssociateMacSecKeyRequest
 *   connectionId: "STRING_VALUE", // required
 *   secretARN: "STRING_VALUE",
 *   ckn: "STRING_VALUE",
 *   cak: "STRING_VALUE",
 * };
 * const command = new AssociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateMacSecKeyResponse
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
 * @param AssociateMacSecKeyCommandInput - {@link AssociateMacSecKeyCommandInput}
 * @returns {@link AssociateMacSecKeyCommandOutput}
 * @see {@link AssociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateMacSecKeyCommandOutput} for command's `response` shape.
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
export class AssociateMacSecKeyCommand extends command<AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateMacSecKey",
  AssociateMacSecKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMacSecKeyRequest;
      output: AssociateMacSecKeyResponse;
    };
    sdk: {
      input: AssociateMacSecKeyCommandInput;
      output: AssociateMacSecKeyCommandOutput;
    };
  };
}
