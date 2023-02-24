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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListHoursOfOperationsRequest,
  ListHoursOfOperationsRequestFilterSensitiveLog,
  ListHoursOfOperationsResponse,
  ListHoursOfOperationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListHoursOfOperationsCommand,
  serializeAws_restJson1ListHoursOfOperationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListHoursOfOperationsCommandInput extends ListHoursOfOperationsRequest {}
export interface ListHoursOfOperationsCommandOutput extends ListHoursOfOperationsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the hours of operation for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
 *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link ListHoursOfOperationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListHoursOfOperationsCommand extends $Command<
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListHoursOfOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHoursOfOperationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListHoursOfOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHoursOfOperationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHoursOfOperationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHoursOfOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListHoursOfOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHoursOfOperationsCommandOutput> {
    return deserializeAws_restJson1ListHoursOfOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
