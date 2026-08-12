// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDlpSettingRequest, DeleteDlpSettingResponse } from "../models/models_3";
import { DeleteDlpSetting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDlpSettingCommand}.
 */
export interface DeleteDlpSettingCommandInput extends DeleteDlpSettingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDlpSettingCommand}.
 */
export interface DeleteDlpSettingCommandOutput extends DeleteDlpSettingResponse, __MetadataBearer {}

/**
 * <p>Deletes a DLP setting configuration from an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDlpSettingCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDlpSettingCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteDlpSettingRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DlpSettingId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDlpSettingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDlpSettingResponse
 * //   Arn: "STRING_VALUE", // required
 * //   DlpSettingId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDlpSettingCommandInput - {@link DeleteDlpSettingCommandInput}
 * @returns {@link DeleteDlpSettingCommandOutput}
 * @see {@link DeleteDlpSettingCommandInput} for command's `input` shape.
 * @see {@link DeleteDlpSettingCommandOutput} for command's `response` shape.
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
export class DeleteDlpSettingCommand extends command<DeleteDlpSettingCommandInput, DeleteDlpSettingCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDlpSetting",
  DeleteDlpSetting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDlpSettingRequest;
      output: DeleteDlpSettingResponse;
    };
    sdk: {
      input: DeleteDlpSettingCommandInput;
      output: DeleteDlpSettingCommandOutput;
    };
  };
}
