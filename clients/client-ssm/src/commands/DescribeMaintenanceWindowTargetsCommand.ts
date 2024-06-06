// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
  DescribeMaintenanceWindowTargetsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  de_DescribeMaintenanceWindowTargetsCommand,
  se_DescribeMaintenanceWindowTargetsCommand,
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
 * The input for {@link DescribeMaintenanceWindowTargetsCommand}.
 */
export interface DescribeMaintenanceWindowTargetsCommandInput extends DescribeMaintenanceWindowTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowTargetsCommand}.
 */
export interface DescribeMaintenanceWindowTargetsCommandOutput
  extends DescribeMaintenanceWindowTargetsResult,
    __MetadataBearer {}

/**
 * <p>Lists the targets registered with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowTargetsRequest
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
 * const command = new DescribeMaintenanceWindowTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowTargetsResult
 * //   Targets: [ // MaintenanceWindowTargetList
 * //     { // MaintenanceWindowTarget
 * //       WindowId: "STRING_VALUE",
 * //       WindowTargetId: "STRING_VALUE",
 * //       ResourceType: "INSTANCE" || "RESOURCE_GROUP",
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       OwnerInformation: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowTargetsCommandInput - {@link DescribeMaintenanceWindowTargetsCommandInput}
 * @returns {@link DescribeMaintenanceWindowTargetsCommandOutput}
 * @see {@link DescribeMaintenanceWindowTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowTargetsCommandOutput} for command's `response` shape.
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
export class DescribeMaintenanceWindowTargetsCommand extends $Command
  .classBuilder<
    DescribeMaintenanceWindowTargetsCommandInput,
    DescribeMaintenanceWindowTargetsCommandOutput,
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
  .s("AmazonSSM", "DescribeMaintenanceWindowTargets", {})
  .n("SSMClient", "DescribeMaintenanceWindowTargetsCommand")
  .f(void 0, DescribeMaintenanceWindowTargetsResultFilterSensitiveLog)
  .ser(se_DescribeMaintenanceWindowTargetsCommand)
  .de(de_DescribeMaintenanceWindowTargetsCommand)
  .build() {}
