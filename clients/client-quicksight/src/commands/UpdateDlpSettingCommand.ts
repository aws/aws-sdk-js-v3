// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDlpSettingRequest, UpdateDlpSettingResponse } from "../models/models_5";
import { UpdateDlpSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDlpSettingCommand}.
 */
export interface UpdateDlpSettingCommandInput extends UpdateDlpSettingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDlpSettingCommand}.
 */
export interface UpdateDlpSettingCommandOutput extends UpdateDlpSettingResponse, __MetadataBearer {}

/**
 * <p>Updates an existing DLP setting configuration in an Amazon Web Services account. Fields that are omitted from the request retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDlpSettingCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDlpSettingCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDlpSettingRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DlpSettingId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ProviderType: "MICROSOFT_PURVIEW",
 *   ProviderConfig: { // ProviderConfig Union: only one key present
 *     MicrosoftPurview: { // MicrosoftPurviewProviderConfig
 *       Credentials: { // MicrosoftPurviewCredentials
 *         SecretArn: "STRING_VALUE", // required
 *       },
 *       LabelActionMappings: [ // LabelActionMappingList // required
 *         { // LabelActionMapping
 *           LabelId: "STRING_VALUE", // required
 *           LabelName: "STRING_VALUE", // required
 *           Action: "ALLOW" || "WARN" || "BLOCK", // required
 *         },
 *       ],
 *       UnmappedAction: "ALLOW" || "WARN" || "BLOCK", // required
 *     },
 *   },
 *   ProviderOutageAction: "ALLOW" || "WARN" || "BLOCK",
 *   Enabled: true || false,
 * };
 * const command = new UpdateDlpSettingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDlpSettingResponse
 * //   Arn: "STRING_VALUE", // required
 * //   DlpSettingId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDlpSettingCommandInput - {@link UpdateDlpSettingCommandInput}
 * @returns {@link UpdateDlpSettingCommandOutput}
 * @see {@link UpdateDlpSettingCommandInput} for command's `input` shape.
 * @see {@link UpdateDlpSettingCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateDlpSettingCommand extends command<UpdateDlpSettingCommandInput, UpdateDlpSettingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDlpSetting",
  UpdateDlpSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDlpSettingRequest;
      output: UpdateDlpSettingResponse;
    };
    sdk: {
      input: UpdateDlpSettingCommandInput;
      output: UpdateDlpSettingCommandOutput;
    };
  };
}
