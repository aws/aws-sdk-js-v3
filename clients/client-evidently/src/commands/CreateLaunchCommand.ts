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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { CreateLaunchRequest, CreateLaunchResponse } from "../models/models_0";
import { de_CreateLaunchCommand, se_CreateLaunchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchCommand}.
 */
export interface CreateLaunchCommandInput extends CreateLaunchRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchCommand}.
 */
export interface CreateLaunchCommandOutput extends CreateLaunchResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you
 *       must create the feature to use for the launch.</p>
 *          <p>You can use a launch to safely validate new features by serving them to a specified
 *       percentage of your users while you roll out the feature. You can monitor the performance of
 *       the new feature to help you decide when to ramp up traffic to more users. This helps you
 *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
 *          <p>Don't use this operation to update an existing launch. Instead, use
 *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // CreateLaunchRequest
 *   project: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   scheduledSplitsConfig: { // ScheduledSplitsLaunchConfig
 *     steps: [ // ScheduledSplitConfigList // required
 *       { // ScheduledSplitConfig
 *         startTime: new Date("TIMESTAMP"), // required
 *         groupWeights: { // GroupToWeightMap // required
 *           "<keys>": Number("long"),
 *         },
 *         segmentOverrides: [ // SegmentOverridesList
 *           { // SegmentOverride
 *             segment: "STRING_VALUE", // required
 *             evaluationOrder: Number("long"), // required
 *             weights: { // required
 *               "<keys>": Number("long"),
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   metricMonitors: [ // MetricMonitorConfigList
 *     { // MetricMonitorConfig
 *       metricDefinition: { // MetricDefinitionConfig
 *         name: "STRING_VALUE", // required
 *         entityIdKey: "STRING_VALUE", // required
 *         valueKey: "STRING_VALUE", // required
 *         eventPattern: "STRING_VALUE",
 *         unitLabel: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   groups: [ // LaunchGroupConfigList // required
 *     { // LaunchGroupConfig
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       feature: "STRING_VALUE", // required
 *       variation: "STRING_VALUE", // required
 *     },
 *   ],
 *   randomizationSalt: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLaunchCommand(input);
 * const response = await client.send(command);
 * // { // CreateLaunchResponse
 * //   launch: { // Launch
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     project: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     execution: { // LaunchExecution
 * //       startedTime: new Date("TIMESTAMP"),
 * //       endedTime: new Date("TIMESTAMP"),
 * //     },
 * //     groups: [ // LaunchGroupList
 * //       { // LaunchGroup
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         featureVariations: { // FeatureToVariationMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     metricMonitors: [ // MetricMonitorList
 * //       { // MetricMonitor
 * //         metricDefinition: { // MetricDefinition
 * //           name: "STRING_VALUE",
 * //           entityIdKey: "STRING_VALUE",
 * //           valueKey: "STRING_VALUE",
 * //           eventPattern: "STRING_VALUE",
 * //           unitLabel: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     randomizationSalt: "STRING_VALUE",
 * //     type: "STRING_VALUE", // required
 * //     scheduledSplitsDefinition: { // ScheduledSplitsLaunchDefinition
 * //       steps: [ // ScheduledStepList
 * //         { // ScheduledSplit
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           groupWeights: { // GroupToWeightMap
 * //             "<keys>": Number("long"),
 * //           },
 * //           segmentOverrides: [ // SegmentOverridesList
 * //             { // SegmentOverride
 * //               segment: "STRING_VALUE", // required
 * //               evaluationOrder: Number("long"), // required
 * //               weights: { // required
 * //                 "<keys>": Number("long"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLaunchCommandInput - {@link CreateLaunchCommandInput}
 * @returns {@link CreateLaunchCommandOutput}
 * @see {@link CreateLaunchCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class CreateLaunchCommand extends $Command<
  CreateLaunchCommandInput,
  CreateLaunchCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: CreateLaunchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchCommandInput, CreateLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "CreateLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "CreateLaunch",
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
  private serialize(input: CreateLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLaunchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchCommandOutput> {
    return de_CreateLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
