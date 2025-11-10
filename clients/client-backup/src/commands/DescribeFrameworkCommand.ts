// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFrameworkInput, DescribeFrameworkOutput } from "../models/models_0";
import { DescribeFramework } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFrameworkCommand}.
 */
export interface DescribeFrameworkCommandInput extends DescribeFrameworkInput {}
/**
 * @public
 *
 * The output of {@link DescribeFrameworkCommand}.
 */
export interface DescribeFrameworkCommandOutput extends DescribeFrameworkOutput, __MetadataBearer {}

/**
 * <p>Returns the framework details for the specified <code>FrameworkName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * //   FrameworkDescription: "STRING_VALUE",
 * //   FrameworkControls: [ // FrameworkControls
 * //     { // FrameworkControl
 * //       ControlName: "STRING_VALUE", // required
 * //       ControlInputParameters: [ // ControlInputParameters
 * //         { // ControlInputParameter
 * //           ParameterName: "STRING_VALUE",
 * //           ParameterValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ControlScope: { // ControlScope
 * //         ComplianceResourceIds: [ // ComplianceResourceIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         ComplianceResourceTypes: [ // ResourceTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         Tags: { // stringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   DeploymentStatus: "STRING_VALUE",
 * //   FrameworkStatus: "STRING_VALUE",
 * //   IdempotencyToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFrameworkCommandInput - {@link DescribeFrameworkCommandInput}
 * @returns {@link DescribeFrameworkCommandOutput}
 * @see {@link DescribeFrameworkCommandInput} for command's `input` shape.
 * @see {@link DescribeFrameworkCommandOutput} for command's `response` shape.
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
export class DescribeFrameworkCommand extends $Command
  .classBuilder<
    DescribeFrameworkCommandInput,
    DescribeFrameworkCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeFramework", {})
  .n("BackupClient", "DescribeFrameworkCommand")
  .sc(DescribeFramework)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFrameworkInput;
      output: DescribeFrameworkOutput;
    };
    sdk: {
      input: DescribeFrameworkCommandInput;
      output: DescribeFrameworkCommandOutput;
    };
  };
}
