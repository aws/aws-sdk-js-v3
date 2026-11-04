// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePublicKeyRequest, DeletePublicKeyResponse } from "../models/models_0";
import { DeletePublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified public key used to sign stage participant tokens. This invalidates future participant tokens generated using the key pair’s private key.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeletePublicKeyCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeletePublicKeyCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class DeletePublicKeyCommand extends command<DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeletePublicKey",
  DeletePublicKey$
) {
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
