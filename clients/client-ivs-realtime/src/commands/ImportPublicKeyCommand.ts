// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ImportPublicKeyRequest, ImportPublicKeyResponse } from "../models/models_0";
import { ImportPublicKey } from "../schemas/schemas_10_Public";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportPublicKeyCommand}.
 */
export interface ImportPublicKeyCommandInput extends ImportPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link ImportPublicKeyCommand}.
 */
export interface ImportPublicKeyCommandOutput extends ImportPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Import a public key to be used for signing stage participant tokens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ImportPublicKeyCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ImportPublicKeyCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // ImportPublicKeyRequest
 *   publicKeyMaterial: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportPublicKeyResponse
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
 * @param ImportPublicKeyCommandInput - {@link ImportPublicKeyCommandInput}
 * @returns {@link ImportPublicKeyCommandOutput}
 * @see {@link ImportPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
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
export class ImportPublicKeyCommand extends $Command
  .classBuilder<
    ImportPublicKeyCommandInput,
    ImportPublicKeyCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ImportPublicKey", {})
  .n("IVSRealTimeClient", "ImportPublicKeyCommand")
  .sc(ImportPublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportPublicKeyRequest;
      output: ImportPublicKeyResponse;
    };
    sdk: {
      input: ImportPublicKeyCommandInput;
      output: ImportPublicKeyCommandOutput;
    };
  };
}
