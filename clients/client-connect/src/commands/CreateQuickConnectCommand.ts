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
  CreateQuickConnectRequest,
  CreateQuickConnectRequestFilterSensitiveLog,
  CreateQuickConnectResponse,
  CreateQuickConnectResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateQuickConnectCommand,
  serializeAws_restJson1CreateQuickConnectCommand,
} from "../protocols/Aws_restJson1";

export interface CreateQuickConnectCommandInput extends CreateQuickConnectRequest {}
export interface CreateQuickConnectCommandOutput extends CreateQuickConnectResponse, __MetadataBearer {}

/**
 * <p>Creates a quick connect for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuickConnectCommandInput} for command's `input` shape.
 * @see {@link CreateQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class CreateQuickConnectCommand extends $Command<
  CreateQuickConnectCommandInput,
  CreateQuickConnectCommandOutput,
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

  constructor(readonly input: CreateQuickConnectCommandInput) {
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
  ): Handler<CreateQuickConnectCommandInput, CreateQuickConnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateQuickConnectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateQuickConnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateQuickConnectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateQuickConnectResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQuickConnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateQuickConnectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQuickConnectCommandOutput> {
    return deserializeAws_restJson1CreateQuickConnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
