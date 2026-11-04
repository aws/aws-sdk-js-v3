// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult } from "../models/models_0";
import { DescribeMaintenanceWindows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandInput extends DescribeMaintenanceWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandOutput extends DescribeMaintenanceWindowsResult, __MetadataBearer {}

/**
 * Retrieves the maintenance windows in an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowsRequest
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
 * const command = new DescribeMaintenanceWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowsResult
 * //   WindowIdentities: [ // MaintenanceWindowIdentityList
 * //     { // MaintenanceWindowIdentity
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Duration: Number("int"),
 * //       Cutoff: Number("int"),
 * //       Schedule: "STRING_VALUE",
 * //       ScheduleTimezone: "STRING_VALUE",
 * //       ScheduleOffset: Number("int"),
 * //       EndDate: "STRING_VALUE",
 * //       StartDate: "STRING_VALUE",
 * //       NextExecutionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowsCommandInput - {@link DescribeMaintenanceWindowsCommandInput}
 * @returns {@link DescribeMaintenanceWindowsCommandOutput}
 * @see {@link DescribeMaintenanceWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
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
export class DescribeMaintenanceWindowsCommand extends command<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMaintenanceWindows",
  DescribeMaintenanceWindows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMaintenanceWindowsRequest;
      output: DescribeMaintenanceWindowsResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowsCommandInput;
      output: DescribeMaintenanceWindowsCommandOutput;
    };
  };
}
