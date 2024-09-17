// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DeletePublicKeyRequest, DeletePublicKeyResponse } from "../models/models_0";
import { de_DeletePublicKeyCommand, se_DeletePublicKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePublicKeyCommand}.
 */
export interface DeletePublicKeyCommandInput extends DeletePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublicKeyCommand}.
 */
export interface DeletePublicKeyCommandOutput extends DeletePublicKeyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified public key used to sign stage participant tokens.
 * 	  This invalidates future participant tokens generated using the key pair’s private key.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeletePublicKeyCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeletePublicKeyCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeletePublicKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePublicKeyCommandInput - {@link DeletePublicKeyCommandInput}
 * @returns {@link DeletePublicKeyCommandOutput}
 * @see {@link DeletePublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeletePublicKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 * @public
 */
export class DeletePublicKeyCommand extends $Command
  .classBuilder<
    DeletePublicKeyCommandInput,
    DeletePublicKeyCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "DeletePublicKey", {})
  .n("IVSRealTimeClient", "DeletePublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeletePublicKeyCommand)
  .de(de_DeletePublicKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublicKeyRequest;
      output: {};
    };
    sdk: {
      input: DeletePublicKeyCommandInput;
      output: DeletePublicKeyCommandOutput;
    };
  };
}
