// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlobalSettingsInput } from "../models/models_0";
import { UpdateGlobalSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandInput extends UpdateGlobalSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandOutput extends __MetadataBearer {}

/**
 * Update whether the Amazon Web Services account is opted into organization sharing and discovery integration features.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateGlobalSettingsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateGlobalSettingsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateGlobalSettingsInput
 *   OrganizationSharingStatus: "ENABLED" || "DISABLED",
 *   DiscoveryIntegrationStatus: "ENABLED" || "DISABLED",
 *   JiraConfiguration: { // AccountJiraConfigurationInput
 *     IssueManagementStatus: "ENABLED" || "DISABLED",
 *     IssueManagementType: "AUTO" || "MANUAL",
 *     JiraProjectKey: "STRING_VALUE",
 *     IntegrationStatus: "NOT_CONFIGURED",
 *   },
 * };
 * const command = new UpdateGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGlobalSettingsCommandInput - {@link UpdateGlobalSettingsCommandInput}
 * @returns {@link UpdateGlobalSettingsCommandOutput}
 * @see {@link UpdateGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class UpdateGlobalSettingsCommand extends command<UpdateGlobalSettingsCommandInput, UpdateGlobalSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlobalSettings",
  UpdateGlobalSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlobalSettingsInput;
      output: {};
    };
    sdk: {
      input: UpdateGlobalSettingsCommandInput;
      output: UpdateGlobalSettingsCommandOutput;
    };
  };
}
