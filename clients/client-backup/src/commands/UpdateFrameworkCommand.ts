// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFrameworkInput, UpdateFrameworkOutput } from "../models/models_0";
import { UpdateFramework } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFrameworkCommand}.
 */
export interface UpdateFrameworkCommandInput extends UpdateFrameworkInput {}
/**
 * @public
 *
 * The output of {@link UpdateFrameworkCommand}.
 */
export interface UpdateFrameworkCommandOutput extends UpdateFrameworkOutput, __MetadataBearer {}

/**
 * <p>Updates the specified framework.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 *   FrameworkDescription: "STRING_VALUE",
 *   FrameworkControls: [ // FrameworkControls
 *     { // FrameworkControl
 *       ControlName: "STRING_VALUE", // required
 *       ControlInputParameters: [ // ControlInputParameters
 *         { // ControlInputParameter
 *           ParameterName: "STRING_VALUE",
 *           ParameterValue: "STRING_VALUE",
 *         },
 *       ],
 *       ControlScope: { // ControlScope
 *         ComplianceResourceIds: [ // ComplianceResourceIdList
 *           "STRING_VALUE",
 *         ],
 *         ComplianceResourceTypes: [ // ResourceTypeList
 *           "STRING_VALUE",
 *         ],
 *         Tags: { // stringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new UpdateFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateFrameworkCommandInput - {@link UpdateFrameworkCommandInput}
 * @returns {@link UpdateFrameworkCommandOutput}
 * @see {@link UpdateFrameworkCommandInput} for command's `input` shape.
 * @see {@link UpdateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
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
export class UpdateFrameworkCommand extends $Command
  .classBuilder<
    UpdateFrameworkCommandInput,
    UpdateFrameworkCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateFramework", {})
  .n("BackupClient", "UpdateFrameworkCommand")
  .sc(UpdateFramework)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFrameworkInput;
      output: UpdateFrameworkOutput;
    };
    sdk: {
      input: UpdateFrameworkCommandInput;
      output: UpdateFrameworkCommandOutput;
    };
  };
}
