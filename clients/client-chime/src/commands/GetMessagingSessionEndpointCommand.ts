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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetMessagingSessionEndpointRequest,
  GetMessagingSessionEndpointRequestFilterSensitiveLog,
  GetMessagingSessionEndpointResponse,
  GetMessagingSessionEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMessagingSessionEndpointCommand,
  serializeAws_restJson1GetMessagingSessionEndpointCommand,
} from "../protocols/Aws_restJson1";

export interface GetMessagingSessionEndpointCommandInput extends GetMessagingSessionEndpointRequest {}
export interface GetMessagingSessionEndpointCommandOutput
  extends GetMessagingSessionEndpointResponse,
    __MetadataBearer {}

/**
 * <p>The details of the endpoint for the messaging session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMessagingSessionEndpointCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMessagingSessionEndpointCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetMessagingSessionEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMessagingSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMessagingSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetMessagingSessionEndpointCommand extends $Command<
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: GetMessagingSessionEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMessagingSessionEndpointCommandInput, GetMessagingSessionEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMessagingSessionEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetMessagingSessionEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMessagingSessionEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMessagingSessionEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMessagingSessionEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMessagingSessionEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMessagingSessionEndpointCommandOutput> {
    return deserializeAws_restJson1GetMessagingSessionEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
