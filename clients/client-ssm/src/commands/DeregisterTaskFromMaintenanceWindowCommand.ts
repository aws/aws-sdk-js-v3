// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
} from "../models/models_0";
import {
  de_DeregisterTaskFromMaintenanceWindowCommand,
  se_DeregisterTaskFromMaintenanceWindowCommand,
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
 * The input for {@link DeregisterTaskFromMaintenanceWindowCommand}.
 */
export interface DeregisterTaskFromMaintenanceWindowCommandInput extends DeregisterTaskFromMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTaskFromMaintenanceWindowCommand}.
 */
export interface DeregisterTaskFromMaintenanceWindowCommandOutput
  extends DeregisterTaskFromMaintenanceWindowResult,
    __MetadataBearer {}

/**
 * <p>Removes a task from a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTaskFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTaskFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeregisterTaskFromMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTaskId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterTaskFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTaskFromMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterTaskFromMaintenanceWindowCommandInput - {@link DeregisterTaskFromMaintenanceWindowCommandInput}
 * @returns {@link DeregisterTaskFromMaintenanceWindowCommandOutput}
 * @see {@link DeregisterTaskFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskFromMaintenanceWindowCommandOutput} for command's `response` shape.
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
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DeregisterTaskFromMaintenanceWindowCommand extends $Command
  .classBuilder<
    DeregisterTaskFromMaintenanceWindowCommandInput,
    DeregisterTaskFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeregisterTaskFromMaintenanceWindow", {})
  .n("SSMClient", "DeregisterTaskFromMaintenanceWindowCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterTaskFromMaintenanceWindowCommand)
  .de(de_DeregisterTaskFromMaintenanceWindowCommand)
  .build() {}
