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

import {
  CreateTransitGatewayRouteTableAttachmentRequest,
  CreateTransitGatewayRouteTableAttachmentRequestFilterSensitiveLog,
  CreateTransitGatewayRouteTableAttachmentResponse,
  CreateTransitGatewayRouteTableAttachmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand,
  serializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateTransitGatewayRouteTableAttachmentCommandInput
  extends CreateTransitGatewayRouteTableAttachmentRequest {}
export interface CreateTransitGatewayRouteTableAttachmentCommandOutput
  extends CreateTransitGatewayRouteTableAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Creates a transit gateway route table attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateTransitGatewayRouteTableAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateTransitGatewayRouteTableAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateTransitGatewayRouteTableAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayRouteTableAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteTableAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class CreateTransitGatewayRouteTableAttachmentCommand extends $Command<
  CreateTransitGatewayRouteTableAttachmentCommandInput,
  CreateTransitGatewayRouteTableAttachmentCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: CreateTransitGatewayRouteTableAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateTransitGatewayRouteTableAttachmentCommandInput,
    CreateTransitGatewayRouteTableAttachmentCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateTransitGatewayRouteTableAttachmentCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateTransitGatewayRouteTableAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayRouteTableAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayRouteTableAttachmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayRouteTableAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> {
    return deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
