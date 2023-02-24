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
  CreateSipMediaApplicationCallRequest,
  CreateSipMediaApplicationCallRequestFilterSensitiveLog,
  CreateSipMediaApplicationCallResponse,
  CreateSipMediaApplicationCallResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipMediaApplicationCallCommand,
  serializeAws_restJson1CreateSipMediaApplicationCallCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSipMediaApplicationCallCommandInput extends CreateSipMediaApplicationCallRequest {}
export interface CreateSipMediaApplicationCallCommandOutput
  extends CreateSipMediaApplicationCallResponse,
    __MetadataBearer {}

/**
 * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified
 * <code>sipMediaApplicationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreateSipMediaApplicationCallCommand extends $Command<
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
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

  constructor(readonly input: CreateSipMediaApplicationCallCommandInput) {
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
  ): Handler<CreateSipMediaApplicationCallCommandInput, CreateSipMediaApplicationCallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSipMediaApplicationCallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateSipMediaApplicationCallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationCallRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSipMediaApplicationCallResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSipMediaApplicationCallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSipMediaApplicationCallCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSipMediaApplicationCallCommandOutput> {
    return deserializeAws_restJson1CreateSipMediaApplicationCallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
