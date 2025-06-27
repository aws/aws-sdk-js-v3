// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsForTargetResult,
} from "../models/models_1";
import {
  de_DescribeMaintenanceWindowsForTargetCommand,
  se_DescribeMaintenanceWindowsForTargetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowsForTargetCommand}.
 */
export interface DescribeMaintenanceWindowsForTargetCommandInput extends DescribeMaintenanceWindowsForTargetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowsForTargetCommand}.
 */
export interface DescribeMaintenanceWindowsForTargetCommandOutput
  extends DescribeMaintenanceWindowsForTargetResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the maintenance window targets or tasks that a managed node is
 *    associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsForTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowsForTargetRequest
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowsForTargetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowsForTargetResult
 * //   WindowIdentities: [ // MaintenanceWindowsForTargetList
 * //     { // MaintenanceWindowIdentityForTarget
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowsForTargetCommandInput - {@link DescribeMaintenanceWindowsForTargetCommandInput}
 * @returns {@link DescribeMaintenanceWindowsForTargetCommandOutput}
 * @see {@link DescribeMaintenanceWindowsForTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsForTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeMaintenanceWindowsForTargetCommand extends $Command
  .classBuilder<
    DescribeMaintenanceWindowsForTargetCommandInput,
    DescribeMaintenanceWindowsForTargetCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribeMaintenanceWindowsForTarget", {})
  .n("SSMClient", "DescribeMaintenanceWindowsForTargetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMaintenanceWindowsForTargetCommand)
  .de(de_DescribeMaintenanceWindowsForTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowsForTargetRequest;
      output: DescribeMaintenanceWindowsForTargetResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowsForTargetCommandInput;
      output: DescribeMaintenanceWindowsForTargetCommandOutput;
    };
  };
}
