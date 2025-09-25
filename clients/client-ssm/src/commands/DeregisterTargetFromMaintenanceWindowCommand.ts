// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
} from "../models/models_0";
import { DeregisterTargetFromMaintenanceWindow } from "../schemas/schemas_31_Window";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTargetFromMaintenanceWindowCommand}.
 */
export interface DeregisterTargetFromMaintenanceWindowCommandInput
  extends DeregisterTargetFromMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTargetFromMaintenanceWindowCommand}.
 */
export interface DeregisterTargetFromMaintenanceWindowCommandOutput
  extends DeregisterTargetFromMaintenanceWindowResult,
    __MetadataBearer {}

/**
 * <p>Removes a target from a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeregisterTargetFromMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTargetId: "STRING_VALUE", // required
 *   Safe: true || false,
 * };
 * const command = new DeregisterTargetFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTargetFromMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterTargetFromMaintenanceWindowCommandInput - {@link DeregisterTargetFromMaintenanceWindowCommandInput}
 * @returns {@link DeregisterTargetFromMaintenanceWindowCommandOutput}
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link TargetInUseException} (client fault)
 *  <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow
 *    operation, but the target is still referenced in a task.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeregisterTargetFromMaintenanceWindowCommand extends $Command
  .classBuilder<
    DeregisterTargetFromMaintenanceWindowCommandInput,
    DeregisterTargetFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeregisterTargetFromMaintenanceWindow", {})
  .n("SSMClient", "DeregisterTargetFromMaintenanceWindowCommand")
  .sc(DeregisterTargetFromMaintenanceWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTargetFromMaintenanceWindowRequest;
      output: DeregisterTargetFromMaintenanceWindowResult;
    };
    sdk: {
      input: DeregisterTargetFromMaintenanceWindowCommandInput;
      output: DeregisterTargetFromMaintenanceWindowCommandOutput;
    };
  };
}
