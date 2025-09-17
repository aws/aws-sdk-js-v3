// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetPublicKeyRequest, GetPublicKeyResponse } from "../models/models_0";
import { de_GetPublicKeyCommand, se_GetPublicKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandInput extends GetPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandOutput extends GetPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Gets information for the specified public key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetPublicKeyCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetPublicKeyCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetPublicKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyResponse
 * //   publicKey: { // PublicKey
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     publicKeyMaterial: "STRING_VALUE",
 * //     fingerprint: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPublicKeyCommandInput - {@link GetPublicKeyCommandInput}
 * @returns {@link GetPublicKeyCommandOutput}
 * @see {@link GetPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class GetPublicKeyCommand extends $Command
  .classBuilder<
    GetPublicKeyCommandInput,
    GetPublicKeyCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetPublicKey", {})
  .n("IVSRealTimeClient", "GetPublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_GetPublicKeyCommand)
  .de(de_GetPublicKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicKeyRequest;
      output: GetPublicKeyResponse;
    };
    sdk: {
      input: GetPublicKeyCommandInput;
      output: GetPublicKeyCommandOutput;
    };
  };
}
