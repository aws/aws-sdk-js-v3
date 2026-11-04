// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SignPayloadRequest, SignPayloadResponse } from "../models/models_0";
import { SignPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Signs a binary payload and returns a signature envelope.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The allowed number of job-signing requests has been exceeded.
 *
 * This error supersedes the error `ThrottlingException`.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You signing certificate could not be validated.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class SignPayloadCommand extends command<SignPayloadCommandInput, SignPayloadCommandOutput>(
  _ep0,
  _mw0,
  "SignPayload",
  SignPayload$
) {
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
