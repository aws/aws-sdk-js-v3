// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SignPayloadRequest, SignPayloadResponse } from "../models/models_0";
import { SignPayload } from "../schemas/schemas_3_Signing";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SignPayloadCommand}.
 */
export interface SignPayloadCommandInput extends SignPayloadRequest {}
/**
 * @public
 *
 * The output of {@link SignPayloadCommand}.
 */
export interface SignPayloadCommandOutput extends SignPayloadResponse, __MetadataBearer {}

/**
 * <p>Signs a binary payload and returns a signature envelope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, SignPayloadCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, SignPayloadCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // SignPayloadRequest
 *   profileName: "STRING_VALUE", // required
 *   profileOwner: "STRING_VALUE",
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   payloadFormat: "STRING_VALUE", // required
 * };
 * const command = new SignPayloadCommand(input);
 * const response = await client.send(command);
 * // { // SignPayloadResponse
 * //   jobId: "STRING_VALUE",
 * //   jobOwner: "STRING_VALUE",
 * //   metadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   signature: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param SignPayloadCommandInput - {@link SignPayloadCommandInput}
 * @returns {@link SignPayloadCommandOutput}
 * @see {@link SignPayloadCommandInput} for command's `input` shape.
 * @see {@link SignPayloadCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class SignPayloadCommand extends $Command
  .classBuilder<
    SignPayloadCommandInput,
    SignPayloadCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "SignPayload", {})
  .n("SignerClient", "SignPayloadCommand")
  .sc(SignPayload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SignPayloadRequest;
      output: SignPayloadResponse;
    };
    sdk: {
      input: SignPayloadCommandInput;
      output: SignPayloadCommandOutput;
    };
  };
}
