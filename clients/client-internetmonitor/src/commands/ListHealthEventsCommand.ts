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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { ListHealthEventsInput, ListHealthEventsOutput } from "../models/models_0";
import { de_ListHealthEventsCommand, se_ListHealthEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHealthEventsCommand}.
 */
export interface ListHealthEventsCommandInput extends ListHealthEventsInput {}
/**
 * @public
 *
 * The output of {@link ListHealthEventsCommand}.
 */
export interface ListHealthEventsCommandOutput extends ListHealthEventsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end time and
 * 			the status.</p>
 *          <note>
 *             <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, ListHealthEventsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, ListHealthEventsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const input = { // ListHealthEventsInput
 *   MonitorName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   EventStatus: "STRING_VALUE",
 * };
 * const command = new ListHealthEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListHealthEventsOutput
 * //   HealthEvents: [ // HealthEventList // required
 * //     { // HealthEvent
 * //       EventArn: "STRING_VALUE", // required
 * //       EventId: "STRING_VALUE", // required
 * //       StartedAt: new Date("TIMESTAMP"), // required
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       ImpactedLocations: [ // ImpactedLocationsList // required
 * //         { // ImpactedLocation
 * //           ASName: "STRING_VALUE", // required
 * //           ASNumber: Number("long"), // required
 * //           Country: "STRING_VALUE", // required
 * //           Subdivision: "STRING_VALUE",
 * //           Metro: "STRING_VALUE",
 * //           City: "STRING_VALUE",
 * //           Latitude: Number("double"),
 * //           Longitude: Number("double"),
 * //           CountryCode: "STRING_VALUE",
 * //           SubdivisionCode: "STRING_VALUE",
 * //           ServiceLocation: "STRING_VALUE",
 * //           Status: "STRING_VALUE", // required
 * //           CausedBy: { // NetworkImpairment
 * //             Networks: [ // NetworkList // required
 * //               { // Network
 * //                 ASName: "STRING_VALUE", // required
 * //                 ASNumber: Number("long"), // required
 * //               },
 * //             ],
 * //             AsPath: [ // required
 * //               {
 * //                 ASName: "STRING_VALUE", // required
 * //                 ASNumber: Number("long"), // required
 * //               },
 * //             ],
 * //             NetworkEventType: "STRING_VALUE", // required
 * //           },
 * //           InternetHealth: { // InternetHealth
 * //             Availability: { // AvailabilityMeasurement
 * //               ExperienceScore: Number("double"),
 * //               PercentOfTotalTrafficImpacted: Number("double"),
 * //               PercentOfClientLocationImpacted: Number("double"),
 * //             },
 * //             Performance: { // PerformanceMeasurement
 * //               ExperienceScore: Number("double"),
 * //               PercentOfTotalTrafficImpacted: Number("double"),
 * //               PercentOfClientLocationImpacted: Number("double"),
 * //               RoundTripTime: { // RoundTripTime
 * //                 P50: Number("double"),
 * //                 P90: Number("double"),
 * //                 P95: Number("double"),
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE", // required
 * //       PercentOfTotalTrafficImpacted: Number("double"),
 * //       ImpactType: "STRING_VALUE", // required
 * //       HealthScoreThreshold: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHealthEventsCommandInput - {@link ListHealthEventsCommandInput}
 * @returns {@link ListHealthEventsCommandOutput}
 * @see {@link ListHealthEventsCommandInput} for command's `input` shape.
 * @see {@link ListHealthEventsCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 */
export class ListHealthEventsCommand extends $Command<
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput,
  InternetMonitorClientResolvedConfig
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
  constructor(readonly input: ListHealthEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHealthEventsCommandInput, ListHealthEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHealthEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "ListHealthEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InternetMonitor20210603",
        operation: "ListHealthEvents",
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
  private serialize(input: ListHealthEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHealthEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHealthEventsCommandOutput> {
    return de_ListHealthEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
