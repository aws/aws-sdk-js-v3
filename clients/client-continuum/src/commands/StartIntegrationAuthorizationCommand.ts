// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartIntegrationAuthorizationInput, StartIntegrationAuthorizationOutput } from "../models/models_0";
import { StartIntegrationAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartIntegrationAuthorizationCommand}.
 */
export interface StartIntegrationAuthorizationCommandInput extends StartIntegrationAuthorizationInput {}
/**
 * @public
 *
 * The output of {@link StartIntegrationAuthorizationCommand}.
 */
export interface StartIntegrationAuthorizationCommandOutput extends StartIntegrationAuthorizationOutput, __MetadataBearer {}

/**
 * Starts an OAuth authorization for a new integration and returns the values the caller sends to the provider's authorization endpoint. The authorization belongs to the calling AWS account, can be redeemed once by CreateIntegration from that same account, and expires after ten minutes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, StartIntegrationAuthorizationCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, StartIntegrationAuthorizationCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // StartIntegrationAuthorizationInput
 *   providerType: "GITHUB", // required
 *   name: "STRING_VALUE",
 * };
 * const command = new StartIntegrationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // StartIntegrationAuthorizationOutput
 * //   state: "STRING_VALUE", // required
 * //   codeChallenge: "STRING_VALUE", // required
 * //   codeChallengeMethod: "S256", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartIntegrationAuthorizationCommandInput - {@link StartIntegrationAuthorizationCommandInput}
 * @returns {@link StartIntegrationAuthorizationCommandOutput}
 * @see {@link StartIntegrationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartIntegrationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class StartIntegrationAuthorizationCommand extends command<StartIntegrationAuthorizationCommandInput, StartIntegrationAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "StartIntegrationAuthorization",
  StartIntegrationAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartIntegrationAuthorizationInput;
      output: StartIntegrationAuthorizationOutput;
    };
    sdk: {
      input: StartIntegrationAuthorizationCommandInput;
      output: StartIntegrationAuthorizationCommandOutput;
    };
  };
}
