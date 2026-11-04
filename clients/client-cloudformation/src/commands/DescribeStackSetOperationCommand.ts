// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeStackSetOperationInput, DescribeStackSetOperationOutput } from "../models/models_0";
import { DescribeStackSetOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandInput extends DescribeStackSetOperationInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandOutput extends DescribeStackSetOperationOutput, __MetadataBearer {}

/**
 * Returns the description of the specified StackSet operation.
 *
 * > **Note:** This API provides *strongly consistent* reads meaning it will always return the most up-to-date data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackSetOperationInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackSetOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSetOperationOutput
 * //   StackSetOperation: { // StackSetOperation
 * //     OperationId: "STRING_VALUE",
 * //     StackSetId: "STRING_VALUE",
 * //     Action: "CREATE" || "UPDATE" || "DELETE" || "DETECT_DRIFT",
 * //     Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPING" || "STOPPED" || "QUEUED",
 * //     OperationPreferences: { // StackSetOperationPreferences
 * //       RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 * //       RegionOrder: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       FailureToleranceCount: Number("int"),
 * //       FailureTolerancePercentage: Number("int"),
 * //       MaxConcurrentCount: Number("int"),
 * //       MaxConcurrentPercentage: Number("int"),
 * //       ConcurrencyMode: "STRICT_FAILURE_TOLERANCE" || "SOFT_FAILURE_TOLERANCE",
 * //     },
 * //     RetainStacks: true || false,
 * //     AdministrationRoleARN: "STRING_VALUE",
 * //     ExecutionRoleName: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     EndTimestamp: new Date("TIMESTAMP"),
 * //     DeploymentTargets: { // DeploymentTargets
 * //       Accounts: [ // AccountList
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountsUrl: "STRING_VALUE",
 * //       OrganizationalUnitIds: [ // OrganizationalUnitIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountFilterType: "NONE" || "INTERSECTION" || "DIFFERENCE" || "UNION",
 * //     },
 * //     StackSetDriftDetectionDetails: { // StackSetDriftDetectionDetails
 * //       DriftStatus: "DRIFTED" || "IN_SYNC" || "NOT_CHECKED",
 * //       DriftDetectionStatus: "COMPLETED" || "FAILED" || "PARTIAL_SUCCESS" || "IN_PROGRESS" || "STOPPED",
 * //       LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //       TotalStackInstancesCount: Number("int"),
 * //       DriftedStackInstancesCount: Number("int"),
 * //       InSyncStackInstancesCount: Number("int"),
 * //       InProgressStackInstancesCount: Number("int"),
 * //       FailedStackInstancesCount: Number("int"),
 * //     },
 * //     StatusReason: "STRING_VALUE",
 * //     StatusDetails: { // StackSetOperationStatusDetails
 * //       FailedStackInstancesCount: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSetOperationCommandInput - {@link DescribeStackSetOperationCommandInput}
 * @returns {@link DescribeStackSetOperationCommandOutput}
 * @see {@link DescribeStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *
 * The specified ID refers to an operation that doesn't exist.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *
 * The specified StackSet doesn't exist.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class DescribeStackSetOperationCommand extends command<DescribeStackSetOperationCommandInput, DescribeStackSetOperationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStackSetOperation",
  DescribeStackSetOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackSetOperationInput;
      output: DescribeStackSetOperationOutput;
    };
    sdk: {
      input: DescribeStackSetOperationCommandInput;
      output: DescribeStackSetOperationCommandOutput;
    };
  };
}
