// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportPlaybackKeyPairRequest, ImportPlaybackKeyPairResponse } from "../models/models_0";
import { ImportPlaybackKeyPair$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportPlaybackKeyPairCommand}.
 */
export interface ImportPlaybackKeyPairCommandInput extends ImportPlaybackKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link ImportPlaybackKeyPairCommand}.
 */
export interface ImportPlaybackKeyPairCommandOutput extends ImportPlaybackKeyPairResponse, __MetadataBearer {}

/**
 * <p>Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ImportPlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ImportPlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ImportPlaybackKeyPairRequest
 *   publicKeyMaterial: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportPlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // ImportPlaybackKeyPairResponse
 * //   keyPair: { // PlaybackKeyPair
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     fingerprint: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportPlaybackKeyPairCommandInput - {@link ImportPlaybackKeyPairCommandInput}
 * @returns {@link ImportPlaybackKeyPairCommandOutput}
 * @see {@link ImportPlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportPlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p>Your account is pending verification.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ImportPlaybackKeyPairCommand extends command<ImportPlaybackKeyPairCommandInput, ImportPlaybackKeyPairCommandOutput>(
  _ep0,
  _mw0,
  "ImportPlaybackKeyPair",
  ImportPlaybackKeyPair$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportPlaybackKeyPairRequest;
      output: ImportPlaybackKeyPairResponse;
    };
    sdk: {
      input: ImportPlaybackKeyPairCommandInput;
      output: ImportPlaybackKeyPairCommandOutput;
    };
  };
}
