// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPlaybackKeyPairRequest, GetPlaybackKeyPairResponse } from "../models/models_0";
import { GetPlaybackKeyPair$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPlaybackKeyPairCommand}.
 */
export interface GetPlaybackKeyPairCommandInput extends GetPlaybackKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaybackKeyPairCommand}.
 */
export interface GetPlaybackKeyPairCommandOutput extends GetPlaybackKeyPairResponse, __MetadataBearer {}

/**
 * Gets a specified playback authorization key pair and returns the `arn` and `fingerprint`. The `privateKey` held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see [Setting Up Private Channels](https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html) in the *Amazon IVS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetPlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetPlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetPlaybackKeyPairRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaybackKeyPairResponse
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
 * @param GetPlaybackKeyPairCommandInput - {@link GetPlaybackKeyPairCommandInput}
 * @returns {@link GetPlaybackKeyPairCommandOutput}
 * @see {@link GetPlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
export class GetPlaybackKeyPairCommand extends command<GetPlaybackKeyPairCommandInput, GetPlaybackKeyPairCommandOutput>(
  _ep0,
  _mw0,
  "GetPlaybackKeyPair",
  GetPlaybackKeyPair$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlaybackKeyPairRequest;
      output: GetPlaybackKeyPairResponse;
    };
    sdk: {
      input: GetPlaybackKeyPairCommandInput;
      output: GetPlaybackKeyPairCommandOutput;
    };
  };
}
