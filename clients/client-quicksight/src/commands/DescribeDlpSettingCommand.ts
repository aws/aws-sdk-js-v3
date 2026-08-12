// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDlpSettingRequest, DescribeDlpSettingResponse } from "../models/models_4";
import { DescribeDlpSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDlpSettingCommand}.
 */
export interface DescribeDlpSettingCommandInput extends DescribeDlpSettingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDlpSettingCommand}.
 */
export interface DescribeDlpSettingCommandOutput extends DescribeDlpSettingResponse, __MetadataBearer {}

/**
 * <p>Describes the full configuration of a DLP setting in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDlpSettingCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDlpSettingCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDlpSettingRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DlpSettingId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDlpSettingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDlpSettingResponse
 * //   DlpSetting: { // DlpSettingDetails
 * //     DlpSettingId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Status: "ACTIVE" || "INACTIVE", // required
 * //     ProviderType: "MICROSOFT_PURVIEW", // required
 * //     ProviderConfig: { // ProviderConfig Union: only one key present
 * //       MicrosoftPurview: { // MicrosoftPurviewProviderConfig
 * //         Credentials: { // MicrosoftPurviewCredentials
 * //           SecretArn: "STRING_VALUE", // required
 * //         },
 * //         LabelActionMappings: [ // LabelActionMappingList // required
 * //           { // LabelActionMapping
 * //             LabelId: "STRING_VALUE", // required
 * //             LabelName: "STRING_VALUE", // required
 * //             Action: "ALLOW" || "WARN" || "BLOCK", // required
 * //           },
 * //         ],
 * //         UnmappedAction: "ALLOW" || "WARN" || "BLOCK", // required
 * //       },
 * //     },
 * //     ProviderOutageAction: "ALLOW" || "WARN" || "BLOCK", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDlpSettingCommandInput - {@link DescribeDlpSettingCommandInput}
 * @returns {@link DescribeDlpSettingCommandOutput}
 * @see {@link DescribeDlpSettingCommandInput} for command's `input` shape.
 * @see {@link DescribeDlpSettingCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeDlpSettingCommand extends command<DescribeDlpSettingCommandInput, DescribeDlpSettingCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDlpSetting",
  DescribeDlpSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDlpSettingRequest;
      output: DescribeDlpSettingResponse;
    };
    sdk: {
      input: DescribeDlpSettingCommandInput;
      output: DescribeDlpSettingCommandOutput;
    };
  };
}
