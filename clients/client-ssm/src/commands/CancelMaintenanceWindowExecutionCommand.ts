// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult } from "../models/models_0";
import {
  de_CancelMaintenanceWindowExecutionCommand,
  se_CancelMaintenanceWindowExecutionCommand,
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
 * The input for {@link CancelMaintenanceWindowExecutionCommand}.
 */
export interface CancelMaintenanceWindowExecutionCommandInput extends CancelMaintenanceWindowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelMaintenanceWindowExecutionCommand}.
 */
export interface CancelMaintenanceWindowExecutionCommandOutput
  extends CancelMaintenanceWindowExecutionResult,
    __MetadataBearer {}

/**
 * <p>Stops a maintenance window execution that is already in progress and cancels any tasks in
 *    the window that haven't already starting running. Tasks already in progress will continue to
 *    completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelMaintenanceWindowExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CancelMaintenanceWindowExecutionRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new CancelMaintenanceWindowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // CancelMaintenanceWindowExecutionResult
 * //   WindowExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelMaintenanceWindowExecutionCommandInput - {@link CancelMaintenanceWindowExecutionCommandInput}
 * @returns {@link CancelMaintenanceWindowExecutionCommandOutput}
 * @see {@link CancelMaintenanceWindowExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelMaintenanceWindowExecutionCommandOutput} for command's `response` shape.
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
export class CancelMaintenanceWindowExecutionCommand extends $Command
  .classBuilder<
    CancelMaintenanceWindowExecutionCommandInput,
    CancelMaintenanceWindowExecutionCommandOutput,
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
  .s("AmazonSSM", "CancelMaintenanceWindowExecution", {})
  .n("SSMClient", "CancelMaintenanceWindowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_CancelMaintenanceWindowExecutionCommand)
  .de(de_CancelMaintenanceWindowExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMaintenanceWindowExecutionRequest;
      output: CancelMaintenanceWindowExecutionResult;
    };
    sdk: {
      input: CancelMaintenanceWindowExecutionCommandInput;
      output: CancelMaintenanceWindowExecutionCommandOutput;
    };
  };
}
