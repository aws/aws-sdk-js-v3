// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDlpSettingRequest, CreateDlpSettingResponse } from "../models/models_3";
import { CreateDlpSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDlpSettingCommand}.
 */
export interface CreateDlpSettingCommandInput extends CreateDlpSettingRequest {}
/**
 * @public
 *
 * The output of {@link CreateDlpSettingCommand}.
 */
export interface CreateDlpSettingCommandOutput extends CreateDlpSettingResponse, __MetadataBearer {}

/**
 * <p>Creates a data loss prevention (DLP) setting configuration for an Amazon Web Services account. A DLP setting defines the DLP provider, the enforcement behavior, and the Quick capabilities that the setting applies to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDlpSettingCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDlpSettingCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateDlpSettingRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DlpSettingId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ProviderType: "MICROSOFT_PURVIEW", // required
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
 *   ProviderOutageAction: "ALLOW" || "WARN" || "BLOCK", // required
 *   Enabled: true || false, // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDlpSettingCommand(input);
 * const response = await client.send(command);
 * // { // CreateDlpSettingResponse
 * //   Arn: "STRING_VALUE", // required
 * //   DlpSettingId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDlpSettingCommandInput - {@link CreateDlpSettingCommandInput}
 * @returns {@link CreateDlpSettingCommandOutput}
 * @see {@link CreateDlpSettingCommandInput} for command's `input` shape.
 * @see {@link CreateDlpSettingCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateDlpSettingCommand extends command<CreateDlpSettingCommandInput, CreateDlpSettingCommandOutput>(
  _ep0,
  _mw0,
  "CreateDlpSetting",
  CreateDlpSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDlpSettingRequest;
      output: CreateDlpSettingResponse;
    };
    sdk: {
      input: CreateDlpSettingCommandInput;
      output: CreateDlpSettingCommandOutput;
    };
  };
}
