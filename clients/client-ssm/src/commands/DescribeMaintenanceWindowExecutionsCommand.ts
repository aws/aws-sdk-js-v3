// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMaintenanceWindowExecutionsRequest,
  DescribeMaintenanceWindowExecutionsResult,
} from "../models/models_0";
import {
  de_DescribeMaintenanceWindowExecutionsCommand,
  se_DescribeMaintenanceWindowExecutionsCommand,
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
 * The input for {@link DescribeMaintenanceWindowExecutionsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionsCommandInput extends DescribeMaintenanceWindowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowExecutionsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionsCommandOutput
  extends DescribeMaintenanceWindowExecutionsResult,
    __MetadataBearer {}

/**
 * <p>Lists the executions of a maintenance window. This includes information about when the
 *    maintenance window was scheduled to be active, and information about tasks registered and run
 *    with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowExecutionsRequest
 *   WindowId: "STRING_VALUE", // required
 *   Filters: [ // MaintenanceWindowFilterList
 *     { // MaintenanceWindowFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // MaintenanceWindowFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowExecutionsResult
 * //   WindowExecutions: [ // MaintenanceWindowExecutionList
 * //     { // MaintenanceWindowExecution
 * //       WindowId: "STRING_VALUE",
 * //       WindowExecutionId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //       StatusDetails: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowExecutionsCommandInput - {@link DescribeMaintenanceWindowExecutionsCommandInput}
 * @returns {@link DescribeMaintenanceWindowExecutionsCommandOutput}
 * @see {@link DescribeMaintenanceWindowExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DescribeMaintenanceWindowExecutionsCommand extends $Command
  .classBuilder<
    DescribeMaintenanceWindowExecutionsCommandInput,
    DescribeMaintenanceWindowExecutionsCommandOutput,
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
  .s("AmazonSSM", "DescribeMaintenanceWindowExecutions", {})
  .n("SSMClient", "DescribeMaintenanceWindowExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMaintenanceWindowExecutionsCommand)
  .de(de_DescribeMaintenanceWindowExecutionsCommand)
  .build() {}
