// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import {
  ListHealthEventsInput,
  ListHealthEventsInputFilterSensitiveLog,
  ListHealthEventsOutput,
  ListHealthEventsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListHealthEventsCommand,
  serializeAws_restJson1ListHealthEventsCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network
 * 			cause and status, event start and end time, percentage of total traffic impacted, and status.</p>
 *          <note>
 *             <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, ListHealthEventsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, ListHealthEventsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const command = new ListHealthEventsCommand(input);
 * const response = await client.send(command);
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
      inputFilterSensitiveLog: ListHealthEventsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListHealthEventsOutputFilterSensitiveLog,
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
    return serializeAws_restJson1ListHealthEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHealthEventsCommandOutput> {
    return deserializeAws_restJson1ListHealthEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
