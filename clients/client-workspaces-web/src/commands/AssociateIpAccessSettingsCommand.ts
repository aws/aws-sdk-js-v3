// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateIpAccessSettingsRequest, AssociateIpAccessSettingsResponse } from "../models/models_0";
import { AssociateIpAccessSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateIpAccessSettingsCommand}.
 */
export interface AssociateIpAccessSettingsCommandInput extends AssociateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIpAccessSettingsCommand}.
 */
export interface AssociateIpAccessSettingsCommandOutput extends AssociateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * Associates an IP access settings resource with a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateIpAccessSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIpAccessSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   ipAccessSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateIpAccessSettingsCommandInput - {@link AssociateIpAccessSettingsCommandInput}
 * @returns {@link AssociateIpAccessSettingsCommandOutput}
 * @see {@link AssociateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class AssociateIpAccessSettingsCommand extends command<AssociateIpAccessSettingsCommandInput, AssociateIpAccessSettingsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateIpAccessSettings",
  AssociateIpAccessSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateIpAccessSettingsRequest;
      output: AssociateIpAccessSettingsResponse;
    };
    sdk: {
      input: AssociateIpAccessSettingsCommandInput;
      output: AssociateIpAccessSettingsCommandOutput;
    };
  };
}
