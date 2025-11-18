// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTieringConfigurationInput, GetTieringConfigurationOutput } from "../models/models_0";
import { GetTieringConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTieringConfigurationCommand}.
 */
export interface GetTieringConfigurationCommandInput extends GetTieringConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetTieringConfigurationCommand}.
 */
export interface GetTieringConfigurationCommandOutput extends GetTieringConfigurationOutput, __MetadataBearer {}

/**
 * <p>Returns <code>TieringConfiguration</code> details for the specified
 *          <code>TieringConfigurationName</code>. The details are the body of a tiering configuration
 *          in JSON format, in addition to configuration metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetTieringConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetTieringConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetTieringConfigurationInput
 *   TieringConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new GetTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTieringConfigurationOutput
 * //   TieringConfiguration: { // TieringConfiguration
 * //     TieringConfigurationName: "STRING_VALUE", // required
 * //     TieringConfigurationArn: "STRING_VALUE",
 * //     BackupVaultName: "STRING_VALUE", // required
 * //     ResourceSelection: [ // ResourceSelections // required
 * //       { // ResourceSelection
 * //         Resources: [ // ResourceArns // required
 * //           "STRING_VALUE",
 * //         ],
 * //         TieringDownSettingsInDays: Number("int"), // required
 * //         ResourceType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTieringConfigurationCommandInput - {@link GetTieringConfigurationCommandInput}
 * @returns {@link GetTieringConfigurationCommandOutput}
 * @see {@link GetTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTieringConfigurationCommandOutput} for command's `response` shape.
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
export class GetTieringConfigurationCommand extends $Command
  .classBuilder<
    GetTieringConfigurationCommandInput,
    GetTieringConfigurationCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetTieringConfiguration", {})
  .n("BackupClient", "GetTieringConfigurationCommand")
  .sc(GetTieringConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTieringConfigurationInput;
      output: GetTieringConfigurationOutput;
    };
    sdk: {
      input: GetTieringConfigurationCommandInput;
      output: GetTieringConfigurationCommandOutput;
    };
  };
}
