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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetScheduleInput, GetScheduleOutput } from "../models/models_0";
import { de_GetScheduleCommand, se_GetScheduleCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetScheduleCommand}.
 */
export interface GetScheduleCommandInput extends GetScheduleInput {}
/**
 * @public
 *
 * The output of {@link GetScheduleCommand}.
 */
export interface GetScheduleCommandOutput extends GetScheduleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const input = { // GetScheduleInput
 *   Name: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE",
 * };
 * const command = new GetScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduleOutput
 * //   Arn: "STRING_VALUE",
 * //   GroupName: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ScheduleExpression: "STRING_VALUE",
 * //   StartDate: new Date("TIMESTAMP"),
 * //   EndDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   ScheduleExpressionTimezone: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModificationDate: new Date("TIMESTAMP"),
 * //   KmsKeyArn: "STRING_VALUE",
 * //   Target: { // Target
 * //     Arn: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //     DeadLetterConfig: { // DeadLetterConfig
 * //       Arn: "STRING_VALUE",
 * //     },
 * //     RetryPolicy: { // RetryPolicy
 * //       MaximumEventAgeInSeconds: Number("int"),
 * //       MaximumRetryAttempts: Number("int"),
 * //     },
 * //     Input: "STRING_VALUE",
 * //     EcsParameters: { // EcsParameters
 * //       TaskDefinitionArn: "STRING_VALUE", // required
 * //       TaskCount: Number("int"),
 * //       LaunchType: "STRING_VALUE",
 * //       NetworkConfiguration: { // NetworkConfiguration
 * //         awsvpcConfiguration: { // AwsVpcConfiguration
 * //           Subnets: [ // Subnets // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroups: [ // SecurityGroups
 * //             "STRING_VALUE",
 * //           ],
 * //           AssignPublicIp: "STRING_VALUE",
 * //         },
 * //       },
 * //       PlatformVersion: "STRING_VALUE",
 * //       Group: "STRING_VALUE",
 * //       CapacityProviderStrategy: [ // CapacityProviderStrategy
 * //         { // CapacityProviderStrategyItem
 * //           capacityProvider: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //           base: Number("int"),
 * //         },
 * //       ],
 * //       EnableECSManagedTags: true || false,
 * //       EnableExecuteCommand: true || false,
 * //       PlacementConstraints: [ // PlacementConstraints
 * //         { // PlacementConstraint
 * //           type: "STRING_VALUE",
 * //           expression: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PlacementStrategy: [ // PlacementStrategies
 * //         { // PlacementStrategy
 * //           type: "STRING_VALUE",
 * //           field: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PropagateTags: "STRING_VALUE",
 * //       ReferenceId: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     EventBridgeParameters: { // EventBridgeParameters
 * //       DetailType: "STRING_VALUE", // required
 * //       Source: "STRING_VALUE", // required
 * //     },
 * //     KinesisParameters: { // KinesisParameters
 * //       PartitionKey: "STRING_VALUE", // required
 * //     },
 * //     SageMakerPipelineParameters: { // SageMakerPipelineParameters
 * //       PipelineParameterList: [ // SageMakerPipelineParameterList
 * //         { // SageMakerPipelineParameter
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     SqsParameters: { // SqsParameters
 * //       MessageGroupId: "STRING_VALUE",
 * //     },
 * //   },
 * //   FlexibleTimeWindow: { // FlexibleTimeWindow
 * //     Mode: "STRING_VALUE", // required
 * //     MaximumWindowInMinutes: Number("int"),
 * //   },
 * //   ActionAfterCompletion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScheduleCommandInput - {@link GetScheduleCommandInput}
 * @returns {@link GetScheduleCommandOutput}
 * @see {@link GetScheduleCommandInput} for command's `input` shape.
 * @see {@link GetScheduleCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error encountered while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SchedulerServiceException}
 * <p>Base exception class for all service exceptions from Scheduler service.</p>
 *
 */
export class GetScheduleCommand extends $Command<
  GetScheduleCommandInput,
  GetScheduleCommandOutput,
  SchedulerClientResolvedConfig
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
  constructor(readonly input: GetScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchedulerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScheduleCommandInput, GetScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetScheduleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "GetScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSChronosService",
        operation: "GetSchedule",
      },
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
  private serialize(input: GetScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScheduleCommandOutput> {
    return de_GetScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
