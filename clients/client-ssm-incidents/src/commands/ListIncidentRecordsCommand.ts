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

import { ListIncidentRecordsInput, ListIncidentRecordsOutput } from "../models/models_0";
import { de_ListIncidentRecordsCommand, se_ListIncidentRecordsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIncidentRecordsCommand}.
 */
export interface ListIncidentRecordsCommandInput extends ListIncidentRecordsInput {}
/**
 * @public
 *
 * The output of {@link ListIncidentRecordsCommand}.
 */
export interface ListIncidentRecordsCommandOutput extends ListIncidentRecordsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
 *       Resource Name (ARN) of the incident record you want to update. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListIncidentRecordsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListIncidentRecordsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListIncidentRecordsInput
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
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIncidentRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListIncidentRecordsOutput
 * //   incidentRecordSummaries: [ // IncidentRecordSummaryList // required
 * //     { // IncidentRecordSummary
 * //       arn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       impact: Number("int"), // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       resolvedTime: new Date("TIMESTAMP"),
 * //       incidentRecordSource: { // IncidentRecordSource
 * //         createdBy: "STRING_VALUE", // required
 * //         invokedBy: "STRING_VALUE",
 * //         resourceArn: "STRING_VALUE",
 * //         source: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIncidentRecordsCommandInput - {@link ListIncidentRecordsCommandInput}
 * @returns {@link ListIncidentRecordsCommandOutput}
 * @see {@link ListIncidentRecordsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentRecordsCommandOutput} for command's `response` shape.
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
export class ListIncidentRecordsCommand extends $Command<
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
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
  constructor(readonly input: ListIncidentRecordsCommandInput) {
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
  ): Handler<ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIncidentRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "ListIncidentRecordsCommand";
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
  private serialize(input: ListIncidentRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIncidentRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIncidentRecordsCommandOutput> {
    return de_ListIncidentRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
