// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstancePropertiesRequest,
  DescribeInstancePropertiesResult,
  DescribeInstancePropertiesResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeInstancePropertiesCommand, se_DescribeInstancePropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>An API operation used by the Systems Manager console to display information about Systems Manager managed
 *    nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePropertiesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePropertiesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 * //       SourceType: "AWS::EC2::Instance" || "AWS::IoT::Thing" || "AWS::SSM::ManagedInstance",
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidActivationId} (client fault)
 *  <p>The activation ID isn't valid. Verify that you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInstancePropertyFilterValue} (client fault)
 *  <p>The specified filter value isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DescribeInstancePropertiesCommand extends $Command
  .classBuilder<
    DescribeInstancePropertiesCommandInput,
    DescribeInstancePropertiesCommandOutput,
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
  .s("AmazonSSM", "DescribeInstanceProperties", {})
  .n("SSMClient", "DescribeInstancePropertiesCommand")
  .f(void 0, DescribeInstancePropertiesResultFilterSensitiveLog)
  .ser(se_DescribeInstancePropertiesCommand)
  .de(de_DescribeInstancePropertiesCommand)
  .build() {
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
