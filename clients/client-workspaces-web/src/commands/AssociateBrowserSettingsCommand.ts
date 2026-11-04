// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateBrowserSettingsRequest, AssociateBrowserSettingsResponse } from "../models/models_0";
import { AssociateBrowserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateBrowserSettingsCommand}.
 */
export interface AssociateBrowserSettingsCommandInput extends AssociateBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateBrowserSettingsCommand}.
 */
export interface AssociateBrowserSettingsCommandOutput extends AssociateBrowserSettingsResponse, __MetadataBearer {}

/**
 * Associates a browser settings resource with a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateBrowserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   browserSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateBrowserSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   browserSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateBrowserSettingsCommandInput - {@link AssociateBrowserSettingsCommandInput}
 * @returns {@link AssociateBrowserSettingsCommandOutput}
 * @see {@link AssociateBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateBrowserSettingsCommandOutput} for command's `response` shape.
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
export class AssociateBrowserSettingsCommand extends command<AssociateBrowserSettingsCommandInput, AssociateBrowserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateBrowserSettings",
  AssociateBrowserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateBrowserSettingsRequest;
      output: AssociateBrowserSettingsResponse;
    };
    sdk: {
      input: AssociateBrowserSettingsCommandInput;
      output: AssociateBrowserSettingsCommandOutput;
    };
  };
}
