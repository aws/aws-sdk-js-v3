// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecoveryPointsByLegalHoldInput, ListRecoveryPointsByLegalHoldOutput } from "../models/models_0";
import {
  de_ListRecoveryPointsByLegalHoldCommand,
  se_ListRecoveryPointsByLegalHoldCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByLegalHoldCommand}.
 */
export interface ListRecoveryPointsByLegalHoldCommandInput extends ListRecoveryPointsByLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByLegalHoldCommand}.
 */
export interface ListRecoveryPointsByLegalHoldCommandOutput
  extends ListRecoveryPointsByLegalHoldOutput,
    __MetadataBearer {}

/**
 * <p>This action returns recovery point ARNs (Amazon Resource Names) of the
 *          specified legal hold.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRecoveryPointsByLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByLegalHoldOutput
 * //   RecoveryPoints: [ // RecoveryPointsList
 * //     { // RecoveryPointMember
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByLegalHoldCommandInput - {@link ListRecoveryPointsByLegalHoldCommandInput}
 * @returns {@link ListRecoveryPointsByLegalHoldCommandOutput}
 * @see {@link ListRecoveryPointsByLegalHoldCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class ListRecoveryPointsByLegalHoldCommand extends $Command
  .classBuilder<
    ListRecoveryPointsByLegalHoldCommandInput,
    ListRecoveryPointsByLegalHoldCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListRecoveryPointsByLegalHold", {})
  .n("BackupClient", "ListRecoveryPointsByLegalHoldCommand")
  .f(void 0, void 0)
  .ser(se_ListRecoveryPointsByLegalHoldCommand)
  .de(de_ListRecoveryPointsByLegalHoldCommand)
  .build() {}
