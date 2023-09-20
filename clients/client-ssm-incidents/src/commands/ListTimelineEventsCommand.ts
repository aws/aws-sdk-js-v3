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

import { ListTimelineEventsInput, ListTimelineEventsOutput } from "../models/models_0";
import { de_ListTimelineEventsCommand, se_ListTimelineEventsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTimelineEventsCommand}.
 */
export interface ListTimelineEventsCommandInput extends ListTimelineEventsInput {}
/**
 * @public
 *
 * The output of {@link ListTimelineEventsCommand}.
 */
export interface ListTimelineEventsCommandOutput extends ListTimelineEventsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists timeline events for the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListTimelineEventsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListTimelineEventsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListTimelineEventsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   filters: [ // FilterList
 *     { // Filter
 *       key: "STRING_VALUE", // required
 *       condition: { // Condition Union: only one key present
 *         before: new Date("TIMESTAMP"),
 *         after: new Date("TIMESTAMP"),
 *         equals: { // AttributeValueList Union: only one key present
 *           stringValues: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           integerValues: [ // IntegerList
 *             Number("int"),
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   sortBy: "STRING_VALUE",
 *   sortOrder: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTimelineEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListTimelineEventsOutput
 * //   eventSummaries: [ // EventSummaryList // required
 * //     { // EventSummary
 * //       incidentRecordArn: "STRING_VALUE", // required
 * //       eventId: "STRING_VALUE", // required
 * //       eventTime: new Date("TIMESTAMP"), // required
 * //       eventUpdatedTime: new Date("TIMESTAMP"), // required
 * //       eventType: "STRING_VALUE", // required
 * //       eventReferences: [ // EventReferenceList
 * //         { // EventReference Union: only one key present
 * //           resource: "STRING_VALUE",
 * //           relatedItemId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTimelineEventsCommandInput - {@link ListTimelineEventsCommandInput}
 * @returns {@link ListTimelineEventsCommandOutput}
 * @see {@link ListTimelineEventsCommandInput} for command's `input` shape.
 * @see {@link ListTimelineEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 */
export class ListTimelineEventsCommand extends $Command<
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
  SSMIncidentsClientResolvedConfig
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
  constructor(readonly input: ListTimelineEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTimelineEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "ListTimelineEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SSMIncidents",
        operation: "ListTimelineEvents",
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
  private serialize(input: ListTimelineEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTimelineEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTimelineEventsCommandOutput> {
    return de_ListTimelineEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
