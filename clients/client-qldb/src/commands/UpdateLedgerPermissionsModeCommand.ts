// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLedgerPermissionsModeRequest, UpdateLedgerPermissionsModeResponse } from "../models/models_0";
import {
  de_UpdateLedgerPermissionsModeCommand,
  se_UpdateLedgerPermissionsModeCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLedgerPermissionsModeCommand}.
 */
export interface UpdateLedgerPermissionsModeCommandInput extends UpdateLedgerPermissionsModeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLedgerPermissionsModeCommand}.
 */
export interface UpdateLedgerPermissionsModeCommandOutput
  extends UpdateLedgerPermissionsModeResponse,
    __MetadataBearer {}

/**
 * <p>Updates the permissions mode of a ledger.</p>
 *          <important>
 *             <p>Before you switch to the <code>STANDARD</code> permissions mode, you must first
 *             create all required IAM policies and table tags to avoid disruption to your users. To
 *             learn more, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-management.basics.html#ledger-mgmt.basics.update-permissions.migrating">Migrating to the standard permissions mode</a> in the <i>Amazon QLDB
 *                Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerPermissionsModeCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerPermissionsModeCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QLDBClient(config);
 * const input = { // UpdateLedgerPermissionsModeRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionsMode: "ALLOW_ALL" || "STANDARD", // required
 * };
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLedgerPermissionsModeResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   PermissionsMode: "ALLOW_ALL" || "STANDARD",
 * // };
 *
 * ```
 *
 * @param UpdateLedgerPermissionsModeCommandInput - {@link UpdateLedgerPermissionsModeCommandInput}
 * @returns {@link UpdateLedgerPermissionsModeCommandOutput}
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 * @public
 */
export class UpdateLedgerPermissionsModeCommand extends $Command
  .classBuilder<
    UpdateLedgerPermissionsModeCommandInput,
    UpdateLedgerPermissionsModeCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "UpdateLedgerPermissionsMode", {})
  .n("QLDBClient", "UpdateLedgerPermissionsModeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLedgerPermissionsModeCommand)
  .de(de_UpdateLedgerPermissionsModeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLedgerPermissionsModeRequest;
      output: UpdateLedgerPermissionsModeResponse;
    };
    sdk: {
      input: UpdateLedgerPermissionsModeCommandInput;
      output: UpdateLedgerPermissionsModeCommandOutput;
    };
  };
}
