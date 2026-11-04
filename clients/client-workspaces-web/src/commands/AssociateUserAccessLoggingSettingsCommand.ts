// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateUserAccessLoggingSettingsRequest,
  AssociateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import { AssociateUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateUserAccessLoggingSettingsCommand}.
 */
export interface AssociateUserAccessLoggingSettingsCommandInput extends AssociateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserAccessLoggingSettingsCommand}.
 */
export interface AssociateUserAccessLoggingSettingsCommandOutput extends AssociateUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Associates a user access logging settings resource with a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateUserAccessLoggingSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserAccessLoggingSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateUserAccessLoggingSettingsCommandInput - {@link AssociateUserAccessLoggingSettingsCommandInput}
 * @returns {@link AssociateUserAccessLoggingSettingsCommandOutput}
 * @see {@link AssociateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
export class AssociateUserAccessLoggingSettingsCommand extends command<AssociateUserAccessLoggingSettingsCommandInput, AssociateUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateUserAccessLoggingSettings",
  AssociateUserAccessLoggingSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateUserAccessLoggingSettingsRequest;
      output: AssociateUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: AssociateUserAccessLoggingSettingsCommandInput;
      output: AssociateUserAccessLoggingSettingsCommandOutput;
    };
  };
}
