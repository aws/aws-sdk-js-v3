// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { PutAgentPreferencesRequest, PutAgentPreferencesResponse } from "../models/models_0";
import { PutAgentPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAgentPreferencesCommand}.
 */
export interface PutAgentPreferencesCommandInput extends PutAgentPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutAgentPreferencesCommand}.
 */
export interface PutAgentPreferencesCommandOutput extends PutAgentPreferencesResponse, __MetadataBearer {}

/**
 * <p>Creates or replaces the caller's Well-Architected Agent preferences. Each supplied update sets the desired state of one preference. Preferences not named in the request are left unchanged. Enabling or disabling is performed synchronously, so a failure to reach the requested state is returned as a modeled exception rather than a FAILED status. On success the operation returns an empty response. Call GetAgentPreferences to read the resulting state. The account the preferences belong to is inferred from the caller's authorization context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, PutAgentPreferencesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, PutAgentPreferencesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // PutAgentPreferencesRequest
 *   preferences: [ // PreferenceUpdates // required
 *     { // PreferenceUpdate
 *       key: "ORG_INTEGRATION", // required
 *       state: "ENABLED" || "DISABLED", // required
 *     },
 *   ],
 * };
 * const command = new PutAgentPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAgentPreferencesCommandInput - {@link PutAgentPreferencesCommandInput}
 * @returns {@link PutAgentPreferencesCommandOutput}
 * @see {@link PutAgentPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutAgentPreferencesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class PutAgentPreferencesCommand extends command<PutAgentPreferencesCommandInput, PutAgentPreferencesCommandOutput>(
  _ep1,
  _mw0,
  "PutAgentPreferences",
  PutAgentPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAgentPreferencesRequest;
      output: {};
    };
    sdk: {
      input: PutAgentPreferencesCommandInput;
      output: PutAgentPreferencesCommandOutput;
    };
  };
}
