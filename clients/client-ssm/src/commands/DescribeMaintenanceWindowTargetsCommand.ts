// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
} from "../models/models_0";
import { DescribeMaintenanceWindowTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeMaintenanceWindowTargetsCommandOutput extends DescribeMaintenanceWindowTargetsResult, __MetadataBearer {}

/**
 * Lists the targets registered with the maintenance window.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeMaintenanceWindowTargetsCommand extends command<DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMaintenanceWindowTargets",
  DescribeMaintenanceWindowTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowTargetsRequest;
      output: DescribeMaintenanceWindowTargetsResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowTargetsCommandInput;
      output: DescribeMaintenanceWindowTargetsCommandOutput;
    };
  };
}
