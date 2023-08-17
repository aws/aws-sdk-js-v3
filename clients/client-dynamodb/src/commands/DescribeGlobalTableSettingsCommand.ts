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
import { DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput } from "../models/models_0";
import { de_DescribeGlobalTableSettingsCommand, se_DescribeGlobalTableSettingsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalTableSettingsCommand}.
 */
export interface DescribeGlobalTableSettingsCommandInput extends DescribeGlobalTableSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalTableSettingsCommand}.
 */
export interface DescribeGlobalTableSettingsCommandOutput extends DescribeGlobalTableSettingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes Region-specific settings for a global table.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                 2017.11.29 (Legacy)</a> of global tables. We recommend using
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeGlobalTableSettingsInput
 *   GlobalTableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalTableSettingsOutput
 * //   GlobalTableName: "STRING_VALUE",
 * //   ReplicaSettings: [ // ReplicaSettingsDescriptionList
 * //     { // ReplicaSettingsDescription
 * //       RegionName: "STRING_VALUE", // required
 * //       ReplicaStatus: "CREATING" || "CREATION_FAILED" || "UPDATING" || "DELETING" || "ACTIVE" || "REGION_DISABLED" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
 * //       ReplicaBillingModeSummary: { // BillingModeSummary
 * //         BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //         LastUpdateToPayPerRequestDateTime: new Date("TIMESTAMP"),
 * //       },
 * //       ReplicaProvisionedReadCapacityUnits: Number("long"),
 * //       ReplicaProvisionedReadCapacityAutoScalingSettings: { // AutoScalingSettingsDescription
 * //         MinimumUnits: Number("long"),
 * //         MaximumUnits: Number("long"),
 * //         AutoScalingDisabled: true || false,
 * //         AutoScalingRoleArn: "STRING_VALUE",
 * //         ScalingPolicies: [ // AutoScalingPolicyDescriptionList
 * //           { // AutoScalingPolicyDescription
 * //             PolicyName: "STRING_VALUE",
 * //             TargetTrackingScalingPolicyConfiguration: { // AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 * //               DisableScaleIn: true || false,
 * //               ScaleInCooldown: Number("int"),
 * //               ScaleOutCooldown: Number("int"),
 * //               TargetValue: Number("double"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ReplicaProvisionedWriteCapacityUnits: Number("long"),
 * //       ReplicaProvisionedWriteCapacityAutoScalingSettings: {
 * //         MinimumUnits: Number("long"),
 * //         MaximumUnits: Number("long"),
 * //         AutoScalingDisabled: true || false,
 * //         AutoScalingRoleArn: "STRING_VALUE",
 * //         ScalingPolicies: [
 * //           {
 * //             PolicyName: "STRING_VALUE",
 * //             TargetTrackingScalingPolicyConfiguration: {
 * //               DisableScaleIn: true || false,
 * //               ScaleInCooldown: Number("int"),
 * //               ScaleOutCooldown: Number("int"),
 * //               TargetValue: Number("double"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ReplicaGlobalSecondaryIndexSettings: [ // ReplicaGlobalSecondaryIndexSettingsDescriptionList
 * //         { // ReplicaGlobalSecondaryIndexSettingsDescription
 * //           IndexName: "STRING_VALUE", // required
 * //           IndexStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * //           ProvisionedReadCapacityUnits: Number("long"),
 * //           ProvisionedReadCapacityAutoScalingSettings: {
 * //             MinimumUnits: Number("long"),
 * //             MaximumUnits: Number("long"),
 * //             AutoScalingDisabled: true || false,
 * //             AutoScalingRoleArn: "STRING_VALUE",
 * //             ScalingPolicies: [
 * //               {
 * //                 PolicyName: "STRING_VALUE",
 * //                 TargetTrackingScalingPolicyConfiguration: {
 * //                   DisableScaleIn: true || false,
 * //                   ScaleInCooldown: Number("int"),
 * //                   ScaleOutCooldown: Number("int"),
 * //                   TargetValue: Number("double"), // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           ProvisionedWriteCapacityUnits: Number("long"),
 * //           ProvisionedWriteCapacityAutoScalingSettings: {
 * //             MinimumUnits: Number("long"),
 * //             MaximumUnits: Number("long"),
 * //             AutoScalingDisabled: true || false,
 * //             AutoScalingRoleArn: "STRING_VALUE",
 * //             ScalingPolicies: [
 * //               {
 * //                 PolicyName: "STRING_VALUE",
 * //                 TargetTrackingScalingPolicyConfiguration: {
 * //                   DisableScaleIn: true || false,
 * //                   ScaleInCooldown: Number("int"),
 * //                   ScaleOutCooldown: Number("int"),
 * //                   TargetValue: Number("double"), // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       ReplicaTableClassSummary: { // TableClassSummary
 * //         TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 * //         LastUpdateDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeGlobalTableSettingsCommandInput - {@link DescribeGlobalTableSettingsCommandInput}
 * @returns {@link DescribeGlobalTableSettingsCommandOutput}
 * @see {@link DescribeGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link GlobalTableNotFoundException} (client fault)
 *  <p>The specified global table does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DescribeGlobalTableSettingsCommand extends $Command<
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
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
  constructor(readonly input: DescribeGlobalTableSettingsCommandInput) {
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
  ): Handler<DescribeGlobalTableSettingsCommandInput, DescribeGlobalTableSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalTableSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeGlobalTableSettingsCommand";
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
  private serialize(input: DescribeGlobalTableSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGlobalTableSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGlobalTableSettingsCommandOutput> {
    return de_DescribeGlobalTableSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
