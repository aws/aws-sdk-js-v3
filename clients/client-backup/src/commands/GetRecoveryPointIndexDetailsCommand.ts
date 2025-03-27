// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecoveryPointIndexDetailsInput, GetRecoveryPointIndexDetailsOutput } from "../models/models_0";
import {
  de_GetRecoveryPointIndexDetailsCommand,
  se_GetRecoveryPointIndexDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecoveryPointIndexDetailsCommand}.
 */
export interface GetRecoveryPointIndexDetailsCommandInput extends GetRecoveryPointIndexDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPointIndexDetailsCommand}.
 */
export interface GetRecoveryPointIndexDetailsCommandOutput
  extends GetRecoveryPointIndexDetailsOutput,
    __MetadataBearer {}

/**
 * <p>This operation returns the metadata and details specific to
 *          the backup index associated with the specified recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRecoveryPointIndexDetailsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRecoveryPointIndexDetailsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRecoveryPointIndexDetailsInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPointIndexDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPointIndexDetailsOutput
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   SourceResourceArn: "STRING_VALUE",
 * //   IndexCreationDate: new Date("TIMESTAMP"),
 * //   IndexDeletionDate: new Date("TIMESTAMP"),
 * //   IndexCompletionDate: new Date("TIMESTAMP"),
 * //   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //   IndexStatusMessage: "STRING_VALUE",
 * //   TotalItemsIndexed: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetRecoveryPointIndexDetailsCommandInput - {@link GetRecoveryPointIndexDetailsCommandInput}
 * @returns {@link GetRecoveryPointIndexDetailsCommandOutput}
 * @see {@link GetRecoveryPointIndexDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointIndexDetailsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class GetRecoveryPointIndexDetailsCommand extends $Command
  .classBuilder<
    GetRecoveryPointIndexDetailsCommandInput,
    GetRecoveryPointIndexDetailsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetRecoveryPointIndexDetails", {})
  .n("BackupClient", "GetRecoveryPointIndexDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetRecoveryPointIndexDetailsCommand)
  .de(de_GetRecoveryPointIndexDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryPointIndexDetailsInput;
      output: GetRecoveryPointIndexDetailsOutput;
    };
    sdk: {
      input: GetRecoveryPointIndexDetailsCommandInput;
      output: GetRecoveryPointIndexDetailsCommandOutput;
    };
  };
}
