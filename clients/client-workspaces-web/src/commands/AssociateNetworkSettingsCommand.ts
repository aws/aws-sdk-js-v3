// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateNetworkSettingsRequest, AssociateNetworkSettingsResponse } from "../models/models_0";
import { AssociateNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateNetworkSettingsCommand}.
 */
export interface AssociateNetworkSettingsCommandInput extends AssociateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateNetworkSettingsCommand}.
 */
export interface AssociateNetworkSettingsCommandOutput extends AssociateNetworkSettingsResponse, __MetadataBearer {}

/**
 * Associates a network settings resource with a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateNetworkSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   networkSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateNetworkSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   networkSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateNetworkSettingsCommandInput - {@link AssociateNetworkSettingsCommandInput}
 * @returns {@link AssociateNetworkSettingsCommandOutput}
 * @see {@link AssociateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class AssociateNetworkSettingsCommand extends command<AssociateNetworkSettingsCommandInput, AssociateNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateNetworkSettings",
  AssociateNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateNetworkSettingsRequest;
      output: AssociateNetworkSettingsResponse;
    };
    sdk: {
      input: AssociateNetworkSettingsCommandInput;
      output: AssociateNetworkSettingsCommandOutput;
    };
  };
}
