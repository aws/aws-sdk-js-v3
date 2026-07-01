// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateUserSettingsRequest, AssociateUserSettingsResponse } from "../models/models_0";
import { AssociateUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateUserSettingsCommand}.
 */
export interface AssociateUserSettingsCommandInput extends AssociateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserSettingsCommand}.
 */
export interface AssociateUserSettingsCommandOutput extends AssociateUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Associates a user settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateUserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   userSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   userSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateUserSettingsCommandInput - {@link AssociateUserSettingsCommandInput}
 * @returns {@link AssociateUserSettingsCommandOutput}
 * @see {@link AssociateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class AssociateUserSettingsCommand extends command<AssociateUserSettingsCommandInput, AssociateUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateUserSettings",
  AssociateUserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateUserSettingsRequest;
      output: AssociateUserSettingsResponse;
    };
    sdk: {
      input: AssociateUserSettingsCommandInput;
      output: AssociateUserSettingsCommandOutput;
    };
  };
}
