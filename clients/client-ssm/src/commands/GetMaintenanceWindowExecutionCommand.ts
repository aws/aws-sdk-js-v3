// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult } from "../models/models_1";
import {
  de_GetMaintenanceWindowExecutionCommand,
  se_GetMaintenanceWindowExecutionCommand,
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
 * The input for {@link GetMaintenanceWindowExecutionCommand}.
 */
export interface GetMaintenanceWindowExecutionCommandInput extends GetMaintenanceWindowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowExecutionCommand}.
 */
export interface GetMaintenanceWindowExecutionCommandOutput
  extends GetMaintenanceWindowExecutionResult,
    __MetadataBearer {}

/**
 * <p>Retrieves details about a specific a maintenance window execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowExecutionRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowExecutionResult
 * //   WindowExecutionId: "STRING_VALUE",
 * //   TaskIds: [ // MaintenanceWindowExecutionTaskIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //   StatusDetails: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowExecutionCommandInput - {@link GetMaintenanceWindowExecutionCommandInput}
 * @returns {@link GetMaintenanceWindowExecutionCommandOutput}
 * @see {@link GetMaintenanceWindowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionCommandOutput} for command's `response` shape.
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
export class GetMaintenanceWindowExecutionCommand extends $Command
  .classBuilder<
    GetMaintenanceWindowExecutionCommandInput,
    GetMaintenanceWindowExecutionCommandOutput,
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
  .s("AmazonSSM", "GetMaintenanceWindowExecution", {})
  .n("SSMClient", "GetMaintenanceWindowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetMaintenanceWindowExecutionCommand)
  .de(de_GetMaintenanceWindowExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMaintenanceWindowExecutionRequest;
      output: GetMaintenanceWindowExecutionResult;
    };
    sdk: {
      input: GetMaintenanceWindowExecutionCommandInput;
      output: GetMaintenanceWindowExecutionCommandOutput;
    };
  };
}
