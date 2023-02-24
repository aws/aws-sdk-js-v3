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
  StopContactStreamingRequest,
  StopContactStreamingRequestFilterSensitiveLog,
  StopContactStreamingResponse,
  StopContactStreamingResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StopContactStreamingCommand,
  serializeAws_restJson1StopContactStreamingCommand,
} from "../protocols/Aws_restJson1";

export interface StopContactStreamingCommandInput extends StopContactStreamingRequest {}
export interface StopContactStreamingCommandOutput extends StopContactStreamingResponse, __MetadataBearer {}

/**
 * <p> Ends message streaming on a specified contact. To restart message streaming on that
 *    contact, call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a>
 *    API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactStreamingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactStreamingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StopContactStreamingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContactStreamingCommandInput} for command's `input` shape.
 * @see {@link StopContactStreamingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class StopContactStreamingCommand extends $Command<
  StopContactStreamingCommandInput,
  StopContactStreamingCommandOutput,
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

  constructor(readonly input: StopContactStreamingCommandInput) {
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
  ): Handler<StopContactStreamingCommandInput, StopContactStreamingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopContactStreamingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StopContactStreamingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopContactStreamingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopContactStreamingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopContactStreamingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopContactStreamingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopContactStreamingCommandOutput> {
    return deserializeAws_restJson1StopContactStreamingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
