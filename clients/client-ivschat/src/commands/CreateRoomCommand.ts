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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  CreateRoomRequest,
  CreateRoomRequestFilterSensitiveLog,
  CreateRoomResponse,
  CreateRoomResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateRoomCommand,
  serializeAws_restJson1CreateRoomCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRoomCommandInput extends CreateRoomRequest {}
export interface CreateRoomCommandOutput extends CreateRoomResponse, __MetadataBearer {}

/**
 * <p>Creates a room that allows clients to connect and pass messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateRoomCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateRoomCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new CreateRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoomCommandInput} for command's `input` shape.
 * @see {@link CreateRoomCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class CreateRoomCommand extends $Command<
  CreateRoomCommandInput,
  CreateRoomCommandOutput,
  IvschatClientResolvedConfig
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

  constructor(readonly input: CreateRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRoomCommandInput, CreateRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRoomCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "CreateRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRoomRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRoomResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRoomCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRoomCommandOutput> {
    return deserializeAws_restJson1CreateRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
