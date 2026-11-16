// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetAgentPreferencesRequest, GetAgentPreferencesResponse } from "../models/models_0";
import { GetAgentPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentPreferencesCommand}.
 */
export interface GetAgentPreferencesCommandInput extends GetAgentPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentPreferencesCommand}.
 */
export interface GetAgentPreferencesCommandOutput extends GetAgentPreferencesResponse, __MetadataBearer {}

/**
 * <p>Returns the caller's complete set of Well-Architected Agent preferences with their current states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentPreferencesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentPreferencesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = {};
 * const command = new GetAgentPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentPreferencesResponse
 * //   preferences: [ // PreferenceEntries // required
 * //     { // PreferenceEntry
 * //       key: "ORG_INTEGRATION", // required
 * //       status: "ENABLED" || "DISABLED" || "FAILED", // required
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAgentPreferencesCommandInput - {@link GetAgentPreferencesCommandInput}
 * @returns {@link GetAgentPreferencesCommandOutput}
 * @see {@link GetAgentPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetAgentPreferencesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
export class GetAgentPreferencesCommand extends command<GetAgentPreferencesCommandInput, GetAgentPreferencesCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentPreferences",
  GetAgentPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAgentPreferencesResponse;
    };
    sdk: {
      input: GetAgentPreferencesCommandInput;
      output: GetAgentPreferencesCommandOutput;
    };
  };
}
