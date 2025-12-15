// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateMacSecKeyRequest, AssociateMacSecKeyResponse } from "../models/models_0";
import { AssociateMacSecKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection.</p>
 *          <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p>
 *          <p>For information about MAC Security (MACsec) key considerations, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
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
export class AssociateMacSecKeyCommand extends $Command
  .classBuilder<
    AssociateMacSecKeyCommandInput,
    AssociateMacSecKeyCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "AssociateMacSecKey", {})
  .n("DirectConnectClient", "AssociateMacSecKeyCommand")
  .sc(AssociateMacSecKey$)
  .build() {
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
