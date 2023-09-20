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
import { StartLaunchRequest, StartLaunchResponse } from "../models/models_0";
import { de_StartLaunchCommand, se_StartLaunchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartLaunchCommand}.
 */
export interface StartLaunchCommandInput extends StartLaunchRequest {}
/**
 * @public
 *
 * The output of {@link StartLaunchCommand}.
 */
export interface StartLaunchCommandOutput extends StartLaunchResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an existing launch. To create a launch,
 *        use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StartLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StartLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // StartLaunchRequest
 *   project: "STRING_VALUE", // required
 *   launch: "STRING_VALUE", // required
 * };
 * const command = new StartLaunchCommand(input);
 * const response = await client.send(command);
 * // { // StartLaunchResponse
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
 * @param StartLaunchCommandInput - {@link StartLaunchCommandInput}
 * @returns {@link StartLaunchCommandOutput}
 * @see {@link StartLaunchCommandInput} for command's `input` shape.
 * @see {@link StartLaunchCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class StartLaunchCommand extends $Command<
  StartLaunchCommandInput,
  StartLaunchCommandOutput,
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
  constructor(readonly input: StartLaunchCommandInput) {
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
  ): Handler<StartLaunchCommandInput, StartLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "StartLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "StartLaunch",
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
  private serialize(input: StartLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartLaunchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartLaunchCommandOutput> {
    return de_StartLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
