// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
} from "../models/models_0";
import { DeregisterTaskFromMaintenanceWindow } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

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
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeregisterTaskFromMaintenanceWindow", {})
  .n("SSMClient", "DeregisterTaskFromMaintenanceWindowCommand")
  .sc(DeregisterTaskFromMaintenanceWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTaskFromMaintenanceWindowRequest;
      output: DeregisterTaskFromMaintenanceWindowResult;
    };
    sdk: {
      input: DeregisterTaskFromMaintenanceWindowCommandInput;
      output: DeregisterTaskFromMaintenanceWindowCommandOutput;
    };
  };
}
