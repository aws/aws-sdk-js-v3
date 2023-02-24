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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import {
  ListDestinationsRequest,
  ListDestinationsRequestFilterSensitiveLog,
  ListDestinationsResponse,
  ListDestinationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDestinationsCommand,
  serializeAws_restJson1ListDestinationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDestinationsCommandInput extends ListDestinationsRequest {}
export interface ListDestinationsCommandOutput extends ListDestinationsResponse, __MetadataBearer {}

/**
 * Grants permission to list destinations
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, ListDestinationsCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 */
export class ListDestinationsCommand extends $Command<
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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

  constructor(readonly input: ListDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDestinationsCommandInput, ListDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "ListDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDestinationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDestinationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDestinationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDestinationsCommandOutput> {
    return deserializeAws_restJson1ListDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
