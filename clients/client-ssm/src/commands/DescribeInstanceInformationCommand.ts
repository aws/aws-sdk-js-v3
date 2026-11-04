// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import { DescribeInstanceInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceInformationCommand}.
 */
export interface DescribeInstanceInformationCommandInput extends DescribeInstanceInformationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceInformationCommand}.
 */
export interface DescribeInstanceInformationCommandOutput extends DescribeInstanceInformationResult, __MetadataBearer {}

/**
 * Provides information about one or more of your managed nodes, including the operating system platform, SSM Agent version, association status, and IP address. This operation does not return information for nodes that are either Stopped or Terminated.
 *
 * If you specify one or more node IDs, the operation returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.
 *
 * > **Note:** The `IamRole` field returned for this API operation is the role assigned to an Amazon EC2 instance configured with a Systems Manager Quick Setup host management configuration or the role assigned to an on-premises managed node.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceInformationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInstanceInformationRequest
 *   InstanceInformationFilterList: [ // InstanceInformationFilterList
 *     { // InstanceInformationFilter
 *       key: "InstanceIds" || "AgentVersion" || "PingStatus" || "PlatformTypes" || "ActivationIds" || "IamRole" || "ResourceType" || "AssociationStatus", // required
 *       valueSet: [ // InstanceInformationFilterValueSet // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Filters: [ // InstanceInformationStringFilterList
 *     { // InstanceInformationStringFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceInformationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceInformationResult
 * //   InstanceInformationList: [ // InstanceInformationList
 * //     { // InstanceInformation
 * //       InstanceId: "STRING_VALUE",
 * //       PingStatus: "Online" || "ConnectionLost" || "Inactive",
 * //       LastPingDateTime: new Date("TIMESTAMP"),
 * //       AgentVersion: "STRING_VALUE",
 * //       IsLatestVersion: true || false,
 * //       PlatformType: "Windows" || "Linux" || "MacOS",
 * //       PlatformName: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       ActivationId: "STRING_VALUE",
 * //       IamRole: "STRING_VALUE",
 * //       RegistrationDate: new Date("TIMESTAMP"),
 * //       ResourceType: "ManagedInstance" || "EC2Instance",
 * //       Name: "STRING_VALUE",
 * //       IPAddress: "STRING_VALUE",
 * //       ComputerName: "STRING_VALUE",
 * //       AssociationStatus: "STRING_VALUE",
 * //       LastAssociationExecutionDate: new Date("TIMESTAMP"),
 * //       LastSuccessfulAssociationExecutionDate: new Date("TIMESTAMP"),
 * //       AssociationOverview: { // InstanceAggregatedAssociationOverview
 * //         DetailedStatus: "STRING_VALUE",
 * //         InstanceAssociationStatusAggregatedCount: { // InstanceAssociationStatusAggregatedCount
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //       SourceId: "STRING_VALUE",
 * //       SourceType: "AWS::EC2::Instance" || "AWS::IoT::Thing" || "AWS::SSM::ManagedInstance" || "Microsoft.Compute/virtualMachines",
 * //       SourceLocation: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceInformationCommandInput - {@link DescribeInstanceInformationCommandInput}
 * @returns {@link DescribeInstanceInformationCommandOutput}
 * @see {@link DescribeInstanceInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceInformationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *
 * The specified key isn't valid.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidInstanceInformationFilterValue} (client fault)
 *
 * The specified filter value isn't valid.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeInstanceInformationCommand extends command<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceInformation",
  DescribeInstanceInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceInformationRequest;
      output: DescribeInstanceInformationResult;
    };
    sdk: {
      input: DescribeInstanceInformationCommandInput;
      output: DescribeInstanceInformationCommandOutput;
    };
  };
}
