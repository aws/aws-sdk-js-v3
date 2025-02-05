// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateApplicationSettingsInput,
  UpdateApplicationSettingsInputFilterSensitiveLog,
  UpdateApplicationSettingsOutput,
} from "../models/models_0";
import { de_UpdateApplicationSettingsCommand, se_UpdateApplicationSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsOutput, __MetadataBearer {}

/**
 * <p>Updates the settings of an application registered with AWS Systems Manager for
 *          SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SsmSapClient(config);
 * const input = { // UpdateApplicationSettingsInput
 *   ApplicationId: "STRING_VALUE", // required
 *   CredentialsToAddOrUpdate: [ // ApplicationCredentialList
 *     { // ApplicationCredential
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "ADMIN", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 *   CredentialsToRemove: [
 *     {
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "ADMIN", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Backint: { // BackintConfig
 *     BackintMode: "AWSBackup", // required
 *     EnsureNoBackupInProcess: true || false, // required
 *   },
 *   DatabaseArn: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationSettingsOutput
 * //   Message: "STRING_VALUE",
 * //   OperationIds: [ // OperationIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateApplicationSettingsCommandInput - {@link UpdateApplicationSettingsCommandInput}
 * @returns {@link UpdateApplicationSettingsCommandOutput}
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is not authorized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 * @public
 */
export class UpdateApplicationSettingsCommand extends $Command
  .classBuilder<
    UpdateApplicationSettingsCommandInput,
    UpdateApplicationSettingsCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SsmSap", "UpdateApplicationSettings", {})
  .n("SsmSapClient", "UpdateApplicationSettingsCommand")
  .f(UpdateApplicationSettingsInputFilterSensitiveLog, void 0)
  .ser(se_UpdateApplicationSettingsCommand)
  .de(de_UpdateApplicationSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationSettingsInput;
      output: UpdateApplicationSettingsOutput;
    };
    sdk: {
      input: UpdateApplicationSettingsCommandInput;
      output: UpdateApplicationSettingsCommandOutput;
    };
  };
}
