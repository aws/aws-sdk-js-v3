// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateMaintenanceWindowRequest, UpdateMaintenanceWindowResult } from "../models/models_1";
import { UpdateMaintenanceWindow$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceWindowCommand}.
 */
export interface UpdateMaintenanceWindowCommandInput extends UpdateMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceWindowCommand}.
 */
export interface UpdateMaintenanceWindowCommandOutput extends UpdateMaintenanceWindowResult, __MetadataBearer {}

/**
 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Schedule: "STRING_VALUE",
 *   ScheduleTimezone: "STRING_VALUE",
 *   ScheduleOffset: Number("int"),
 *   Duration: Number("int"),
 *   Cutoff: Number("int"),
 *   AllowUnassociatedTargets: true || false,
 *   Enabled: true || false,
 *   Replace: true || false,
 * };
 * const command = new UpdateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StartDate: "STRING_VALUE",
 * //   EndDate: "STRING_VALUE",
 * //   Schedule: "STRING_VALUE",
 * //   ScheduleTimezone: "STRING_VALUE",
 * //   ScheduleOffset: Number("int"),
 * //   Duration: Number("int"),
 * //   Cutoff: Number("int"),
 * //   AllowUnassociatedTargets: true || false,
 * //   Enabled: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceWindowCommandInput - {@link UpdateMaintenanceWindowCommandInput}
 * @returns {@link UpdateMaintenanceWindowCommandOutput}
 * @see {@link UpdateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowCommandOutput} for command's `response` shape.
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
export class UpdateMaintenanceWindowCommand extends $Command
  .classBuilder<
    UpdateMaintenanceWindowCommandInput,
    UpdateMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateMaintenanceWindow", {})
  .n("SSMClient", "UpdateMaintenanceWindowCommand")
  .sc(UpdateMaintenanceWindow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMaintenanceWindowRequest;
      output: UpdateMaintenanceWindowResult;
    };
    sdk: {
      input: UpdateMaintenanceWindowCommandInput;
      output: UpdateMaintenanceWindowCommandOutput;
    };
  };
}
