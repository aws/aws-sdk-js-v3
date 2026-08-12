// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDlpSettingsRequest, ListDlpSettingsResponse } from "../models/models_4";
import { ListDlpSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDlpSettingsCommand}.
 */
export interface ListDlpSettingsCommandInput extends ListDlpSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListDlpSettingsCommand}.
 */
export interface ListDlpSettingsCommandOutput extends ListDlpSettingsResponse, __MetadataBearer {}

/**
 * <p>Lists all DLP settings in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDlpSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDlpSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListDlpSettingsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDlpSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListDlpSettingsResponse
 * //   DlpSettingSummaries: [ // DlpSettingSummaryList // required
 * //     { // DlpSettingSummary
 * //       DlpSettingId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Status: "ACTIVE" || "INACTIVE", // required
 * //       ProviderType: "MICROSOFT_PURVIEW", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDlpSettingsCommandInput - {@link ListDlpSettingsCommandInput}
 * @returns {@link ListDlpSettingsCommandOutput}
 * @see {@link ListDlpSettingsCommandInput} for command's `input` shape.
 * @see {@link ListDlpSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListDlpSettingsCommand extends command<ListDlpSettingsCommandInput, ListDlpSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListDlpSettings",
  ListDlpSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDlpSettingsRequest;
      output: ListDlpSettingsResponse;
    };
    sdk: {
      input: ListDlpSettingsCommandInput;
      output: ListDlpSettingsCommandOutput;
    };
  };
}
