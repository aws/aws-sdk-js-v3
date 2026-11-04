// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInstancePropertiesRequest, DescribeInstancePropertiesResult } from "../models/models_0";
import { DescribeInstanceProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstancePropertiesCommand}.
 */
export interface DescribeInstancePropertiesCommandInput extends DescribeInstancePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePropertiesCommand}.
 */
export interface DescribeInstancePropertiesCommandOutput extends DescribeInstancePropertiesResult, __MetadataBearer {}

/**
 * An API operation used by the Systems Manager console to display information about Systems Manager managed nodes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePropertiesRequest
 *   InstancePropertyFilterList: [ // InstancePropertyFilterList
 *     { // InstancePropertyFilter
 *       key: "InstanceIds" || "AgentVersion" || "PingStatus" || "PlatformTypes" || "DocumentName" || "ActivationIds" || "IamRole" || "ResourceType" || "AssociationStatus", // required
 *       valueSet: [ // InstancePropertyFilterValueSet // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   FiltersWithOperator: [ // InstancePropertyStringFilterList
 *     { // InstancePropertyStringFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstancePropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePropertiesResult
 * //   InstanceProperties: [ // InstanceProperties
 * //     { // InstanceProperty
 * //       Name: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstanceRole: "STRING_VALUE",
 * //       KeyName: "STRING_VALUE",
 * //       InstanceState: "STRING_VALUE",
 * //       Architecture: "STRING_VALUE",
 * //       IPAddress: "STRING_VALUE",
 * //       LaunchTime: new Date("TIMESTAMP"),
 * //       PingStatus: "Online" || "ConnectionLost" || "Inactive",
 * //       LastPingDateTime: new Date("TIMESTAMP"),
 * //       AgentVersion: "STRING_VALUE",
 * //       PlatformType: "Windows" || "Linux" || "MacOS",
 * //       PlatformName: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       ActivationId: "STRING_VALUE",
 * //       IamRole: "STRING_VALUE",
 * //       RegistrationDate: new Date("TIMESTAMP"),
 * //       ResourceType: "STRING_VALUE",
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
 * //       AvailabilityZone: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePropertiesCommandInput - {@link DescribeInstancePropertiesCommandInput}
 * @returns {@link DescribeInstancePropertiesCommandOutput}
 * @see {@link DescribeInstancePropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePropertiesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidActivationId} (client fault)
 *
 * The activation ID isn't valid. Verify that you entered the correct ActivationId or ActivationCode and try again.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
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
 * @throws {@link InvalidInstancePropertyFilterValue} (client fault)
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
export class DescribeInstancePropertiesCommand extends command<DescribeInstancePropertiesCommandInput, DescribeInstancePropertiesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceProperties",
  DescribeInstanceProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancePropertiesRequest;
      output: DescribeInstancePropertiesResult;
    };
    sdk: {
      input: DescribeInstancePropertiesCommandInput;
      output: DescribeInstancePropertiesCommandOutput;
    };
  };
}
