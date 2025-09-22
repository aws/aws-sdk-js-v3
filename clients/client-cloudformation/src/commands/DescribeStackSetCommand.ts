// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackSetInput, DescribeStackSetOutput } from "../models/models_0";
import { DescribeStackSet } from "../schemas/schemas_6_Stack";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackSetCommand}.
 */
export interface DescribeStackSetCommandInput extends DescribeStackSetInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackSetCommand}.
 */
export interface DescribeStackSetCommandOutput extends DescribeStackSetOutput, __MetadataBearer {}

/**
 * <p>Returns the description of the specified StackSet.</p>
 *          <note>
 *             <p>This API provides <i>strongly consistent</i> reads meaning it will always
 *         return the most up-to-date data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSetOutput
 * //   StackSet: { // StackSet
 * //     StackSetName: "STRING_VALUE",
 * //     StackSetId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "DELETED",
 * //     TemplateBody: "STRING_VALUE",
 * //     Parameters: [ // Parameters
 * //       { // Parameter
 * //         ParameterKey: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //         ResolvedValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Capabilities: [ // Capabilities
 * //       "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //     ],
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StackSetARN: "STRING_VALUE",
 * //     AdministrationRoleARN: "STRING_VALUE",
 * //     ExecutionRoleName: "STRING_VALUE",
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
 * //     AutoDeployment: { // AutoDeployment
 * //       Enabled: true || false,
 * //       RetainStacksOnAccountRemoval: true || false,
 * //     },
 * //     PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED",
 * //     OrganizationalUnitIds: [ // OrganizationalUnitIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ManagedExecution: { // ManagedExecution
 * //       Active: true || false,
 * //     },
 * //     Regions: [ // RegionList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSetCommandInput - {@link DescribeStackSetCommandInput}
 * @returns {@link DescribeStackSetCommandOutput}
 * @see {@link DescribeStackSetCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified StackSet doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackSetCommand extends $Command
  .classBuilder<
    DescribeStackSetCommandInput,
    DescribeStackSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeStackSet", {})
  .n("CloudFormationClient", "DescribeStackSetCommand")
  .sc(DescribeStackSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackSetInput;
      output: DescribeStackSetOutput;
    };
    sdk: {
      input: DescribeStackSetCommandInput;
      output: DescribeStackSetCommandOutput;
    };
  };
}
