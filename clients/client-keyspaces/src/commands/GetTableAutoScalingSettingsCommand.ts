// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import type { GetTableAutoScalingSettingsRequest, GetTableAutoScalingSettingsResponse } from "../models/models_0";
import { GetTableAutoScalingSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableAutoScalingSettingsCommand}.
 */
export interface GetTableAutoScalingSettingsCommandInput extends GetTableAutoScalingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetTableAutoScalingSettingsCommand}.
 */
export interface GetTableAutoScalingSettingsCommandOutput
  extends GetTableAutoScalingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included.</p> <p>Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html">Managing throughput capacity automatically with Amazon Keyspaces auto scaling</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <important> <p> <code>GetTableAutoScalingSettings</code> can't be used as an action in an IAM policy.</p> </important> <p>To define permissions for <code>GetTableAutoScalingSettings</code>, you must allow the following two actions in the IAM policy statement's <code>Action</code> element:</p> <ul> <li> <p> <code>application-autoscaling:DescribeScalableTargets</code> </p> </li> <li> <p> <code>application-autoscaling:DescribeScalingPolicies</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetTableAutoScalingSettingsCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetTableAutoScalingSettingsCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // GetTableAutoScalingSettingsRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tableName: "STRING_VALUE", // required
 * };
 * const command = new GetTableAutoScalingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetTableAutoScalingSettingsResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   tableName: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   autoScalingSpecification: { // AutoScalingSpecification
 * //     writeCapacityAutoScaling: { // AutoScalingSettings
 * //       autoScalingDisabled: true || false,
 * //       minimumUnits: Number("long"),
 * //       maximumUnits: Number("long"),
 * //       scalingPolicy: { // AutoScalingPolicy
 * //         targetTrackingScalingPolicyConfiguration: { // TargetTrackingScalingPolicyConfiguration
 * //           disableScaleIn: true || false,
 * //           scaleInCooldown: Number("int"),
 * //           scaleOutCooldown: Number("int"),
 * //           targetValue: Number("double"), // required
 * //         },
 * //       },
 * //     },
 * //     readCapacityAutoScaling: {
 * //       autoScalingDisabled: true || false,
 * //       minimumUnits: Number("long"),
 * //       maximumUnits: Number("long"),
 * //       scalingPolicy: {
 * //         targetTrackingScalingPolicyConfiguration: {
 * //           disableScaleIn: true || false,
 * //           scaleInCooldown: Number("int"),
 * //           scaleOutCooldown: Number("int"),
 * //           targetValue: Number("double"), // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   replicaSpecifications: [ // ReplicaAutoScalingSpecificationList
 * //     { // ReplicaAutoScalingSpecification
 * //       region: "STRING_VALUE",
 * //       autoScalingSpecification: {
 * //         writeCapacityAutoScaling: {
 * //           autoScalingDisabled: true || false,
 * //           minimumUnits: Number("long"),
 * //           maximumUnits: Number("long"),
 * //           scalingPolicy: {
 * //             targetTrackingScalingPolicyConfiguration: {
 * //               disableScaleIn: true || false,
 * //               scaleInCooldown: Number("int"),
 * //               scaleOutCooldown: Number("int"),
 * //               targetValue: Number("double"), // required
 * //             },
 * //           },
 * //         },
 * //         readCapacityAutoScaling: {
 * //           autoScalingDisabled: true || false,
 * //           minimumUnits: Number("long"),
 * //           maximumUnits: Number("long"),
 * //           scalingPolicy: {
 * //             targetTrackingScalingPolicyConfiguration: {
 * //               disableScaleIn: true || false,
 * //               scaleInCooldown: Number("int"),
 * //               scaleOutCooldown: Number("int"),
 * //               targetValue: Number("double"), // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTableAutoScalingSettingsCommandInput - {@link GetTableAutoScalingSettingsCommandInput}
 * @returns {@link GetTableAutoScalingSettingsCommandOutput}
 * @see {@link GetTableAutoScalingSettingsCommandInput} for command's `input` shape.
 * @see {@link GetTableAutoScalingSettingsCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource. For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 *
 * @public
 */
export class GetTableAutoScalingSettingsCommand extends $Command
  .classBuilder<
    GetTableAutoScalingSettingsCommandInput,
    GetTableAutoScalingSettingsCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "GetTableAutoScalingSettings", {})
  .n("KeyspacesClient", "GetTableAutoScalingSettingsCommand")
  .sc(GetTableAutoScalingSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableAutoScalingSettingsRequest;
      output: GetTableAutoScalingSettingsResponse;
    };
    sdk: {
      input: GetTableAutoScalingSettingsCommandInput;
      output: GetTableAutoScalingSettingsCommandOutput;
    };
  };
}
