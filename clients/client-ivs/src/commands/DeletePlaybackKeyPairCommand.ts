// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePlaybackKeyPairRequest, DeletePlaybackKeyPairResponse } from "../models/models_0";
import { DeletePlaybackKeyPair$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePlaybackKeyPairCommand}.
 */
export interface DeletePlaybackKeyPairCommandInput extends DeletePlaybackKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlaybackKeyPairCommand}.
 */
export interface DeletePlaybackKeyPairCommandOutput extends DeletePlaybackKeyPairResponse, __MetadataBearer {}

/**
 * Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s `privateKey`. For more information, see [Setting Up Private Channels](https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html) in the *Amazon IVS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeletePlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeletePlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeletePlaybackKeyPairRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlaybackKeyPairCommandInput - {@link DeletePlaybackKeyPairCommandInput}
 * @returns {@link DeletePlaybackKeyPairCommandOutput}
 * @see {@link DeletePlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class DeletePlaybackKeyPairCommand extends command<DeletePlaybackKeyPairCommandInput, DeletePlaybackKeyPairCommandOutput>(
  _ep0,
  _mw0,
  "DeletePlaybackKeyPair",
  DeletePlaybackKeyPair$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlaybackKeyPairRequest;
      output: {};
    };
    sdk: {
      input: DeletePlaybackKeyPairCommandInput;
      output: DeletePlaybackKeyPairCommandOutput;
    };
  };
}
