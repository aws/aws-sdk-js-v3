// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApplicationSettingsInput, UpdateApplicationSettingsOutput } from "../models/models_0";
import { UpdateApplicationSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

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
 * <p>Updates the settings of an application registered with AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "UpdateApplicationSettings", {})
  .n("SsmSapClient", "UpdateApplicationSettingsCommand")
  .sc(UpdateApplicationSettings$)
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
