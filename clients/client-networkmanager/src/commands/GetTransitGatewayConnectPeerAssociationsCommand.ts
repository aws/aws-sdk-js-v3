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
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsRequestFilterSensitiveLog,
  GetTransitGatewayConnectPeerAssociationsResponse,
  GetTransitGatewayConnectPeerAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand,
  serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface GetTransitGatewayConnectPeerAssociationsCommandInput
  extends GetTransitGatewayConnectPeerAssociationsRequest {}
export interface GetTransitGatewayConnectPeerAssociationsCommandOutput
  extends GetTransitGatewayConnectPeerAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class GetTransitGatewayConnectPeerAssociationsCommand extends $Command<
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
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

  constructor(readonly input: GetTransitGatewayConnectPeerAssociationsCommandInput) {
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
    GetTransitGatewayConnectPeerAssociationsCommandInput,
    GetTransitGatewayConnectPeerAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetTransitGatewayConnectPeerAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayConnectPeerAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayConnectPeerAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayConnectPeerAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> {
    return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
