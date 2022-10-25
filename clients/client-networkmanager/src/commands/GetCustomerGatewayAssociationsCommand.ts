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
  GetCustomerGatewayAssociationsRequest,
  GetCustomerGatewayAssociationsRequestFilterSensitiveLog,
  GetCustomerGatewayAssociationsResponse,
  GetCustomerGatewayAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1GetCustomerGatewayAssociationsCommand,
  serializeAws_restJson1GetCustomerGatewayAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface GetCustomerGatewayAssociationsCommandInput extends GetCustomerGatewayAssociationsRequest {}
export interface GetCustomerGatewayAssociationsCommandOutput
  extends GetCustomerGatewayAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the association information for customer gateways that are associated with
 *             devices and links in your global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetCustomerGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCustomerGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetCustomerGatewayAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class GetCustomerGatewayAssociationsCommand extends $Command<
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
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

  constructor(readonly input: GetCustomerGatewayAssociationsCommandInput) {
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
  ): Handler<GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCustomerGatewayAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetCustomerGatewayAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCustomerGatewayAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCustomerGatewayAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCustomerGatewayAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCustomerGatewayAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCustomerGatewayAssociationsCommandOutput> {
    return deserializeAws_restJson1GetCustomerGatewayAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
