// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableAutoScalingSettingsRequest, GetTableAutoScalingSettingsResponse } from "../models/models_0";
import { GetTableAutoScalingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetTableAutoScalingSettingsCommandOutput extends GetTableAutoScalingSettingsResponse, __MetadataBearer {}

/**
 * Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included.
 *
 * Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * > **Important:** `GetTableAutoScalingSettings` can't be used as an action in an IAM policy.
 *
 * To define permissions for `GetTableAutoScalingSettings`, you must allow the following two actions in the IAM policy statement's `Action` element:
 *
 * - `application-autoscaling:DescribeScalableTargets`
 * - `application-autoscaling:DescribeScalingPolicies`
 *
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
 *
 * You don't have sufficient access permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Amazon Keyspaces was unable to fully process this request because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation exceeded the service quota for this resource. For more information on service quotas, see [Quotas](https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed due to an invalid or malformed request.
 *
 * @throws {@link KeyspacesServiceException}
 *
 * Base exception class for all service exceptions from Keyspaces service.
 *
 * @public
 */
export class GetTableAutoScalingSettingsCommand extends command<GetTableAutoScalingSettingsCommandInput, GetTableAutoScalingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetTableAutoScalingSettings",
  GetTableAutoScalingSettings$
) {
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
