// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from "../models/models_0";
import {
  de_DescribeTableReplicaAutoScalingCommand,
  se_DescribeTableReplicaAutoScalingCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableReplicaAutoScalingCommand}.
 */
export interface DescribeTableReplicaAutoScalingCommandInput extends DescribeTableReplicaAutoScalingInput {}
/**
 * @public
 *
 * The output of {@link DescribeTableReplicaAutoScalingCommand}.
 */
export interface DescribeTableReplicaAutoScalingCommandOutput
  extends DescribeTableReplicaAutoScalingOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes auto scaling settings across replicas of the global table at once.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *             of global tables.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeTableReplicaAutoScalingInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTableReplicaAutoScalingOutput
 * //   TableAutoScalingDescription: { // TableAutoScalingDescription
 * //     TableName: "STRING_VALUE",
 * //     TableStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS" || "ARCHIVING" || "ARCHIVED",
 * //     Replicas: [ // ReplicaAutoScalingDescriptionList
 * //       { // ReplicaAutoScalingDescription
 * //         RegionName: "STRING_VALUE",
 * //         GlobalSecondaryIndexes: [ // ReplicaGlobalSecondaryIndexAutoScalingDescriptionList
 * //           { // ReplicaGlobalSecondaryIndexAutoScalingDescription
 * //             IndexName: "STRING_VALUE",
 * //             IndexStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * //             ProvisionedReadCapacityAutoScalingSettings: { // AutoScalingSettingsDescription
 * //               MinimumUnits: Number("long"),
 * //               MaximumUnits: Number("long"),
 * //               AutoScalingDisabled: true || false,
 * //               AutoScalingRoleArn: "STRING_VALUE",
 * //               ScalingPolicies: [ // AutoScalingPolicyDescriptionList
 * //                 { // AutoScalingPolicyDescription
 * //                   PolicyName: "STRING_VALUE",
 * //                   TargetTrackingScalingPolicyConfiguration: { // AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 * //                     DisableScaleIn: true || false,
 * //                     ScaleInCooldown: Number("int"),
 * //                     ScaleOutCooldown: Number("int"),
 * //                     TargetValue: Number("double"), // required
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //             ProvisionedWriteCapacityAutoScalingSettings: {
 * //               MinimumUnits: Number("long"),
 * //               MaximumUnits: Number("long"),
 * //               AutoScalingDisabled: true || false,
 * //               AutoScalingRoleArn: "STRING_VALUE",
 * //               ScalingPolicies: [
 * //                 {
 * //                   PolicyName: "STRING_VALUE",
 * //                   TargetTrackingScalingPolicyConfiguration: {
 * //                     DisableScaleIn: true || false,
 * //                     ScaleInCooldown: Number("int"),
 * //                     ScaleOutCooldown: Number("int"),
 * //                     TargetValue: Number("double"), // required
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         ReplicaProvisionedReadCapacityAutoScalingSettings: {
 * //           MinimumUnits: Number("long"),
 * //           MaximumUnits: Number("long"),
 * //           AutoScalingDisabled: true || false,
 * //           AutoScalingRoleArn: "STRING_VALUE",
 * //           ScalingPolicies: [
 * //             {
 * //               PolicyName: "STRING_VALUE",
 * //               TargetTrackingScalingPolicyConfiguration: {
 * //                 DisableScaleIn: true || false,
 * //                 ScaleInCooldown: Number("int"),
 * //                 ScaleOutCooldown: Number("int"),
 * //                 TargetValue: Number("double"), // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         ReplicaProvisionedWriteCapacityAutoScalingSettings: {
 * //           MinimumUnits: Number("long"),
 * //           MaximumUnits: Number("long"),
 * //           AutoScalingDisabled: true || false,
 * //           AutoScalingRoleArn: "STRING_VALUE",
 * //           ScalingPolicies: [
 * //             {
 * //               PolicyName: "STRING_VALUE",
 * //               TargetTrackingScalingPolicyConfiguration: {
 * //                 DisableScaleIn: true || false,
 * //                 ScaleInCooldown: Number("int"),
 * //                 ScaleOutCooldown: Number("int"),
 * //                 TargetValue: Number("double"), // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         ReplicaStatus: "CREATING" || "CREATION_FAILED" || "UPDATING" || "DELETING" || "ACTIVE" || "REGION_DISABLED" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTableReplicaAutoScalingCommandInput - {@link DescribeTableReplicaAutoScalingCommandInput}
 * @returns {@link DescribeTableReplicaAutoScalingCommandOutput}
 * @see {@link DescribeTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DescribeTableReplicaAutoScalingCommand extends $Command<
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeTableReplicaAutoScalingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTableReplicaAutoScalingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTableReplicaAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeTableReplicaAutoScalingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTableReplicaAutoScalingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableReplicaAutoScalingCommandOutput> {
    return de_DescribeTableReplicaAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
