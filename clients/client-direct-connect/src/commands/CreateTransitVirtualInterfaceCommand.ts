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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  CreateTransitVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceRequestFilterSensitiveLog,
  CreateTransitVirtualInterfaceResult,
  CreateTransitVirtualInterfaceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateTransitVirtualInterfaceCommand,
  serializeAws_json1_1CreateTransitVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

export interface CreateTransitVirtualInterfaceCommandInput extends CreateTransitVirtualInterfaceRequest {}
export interface CreateTransitVirtualInterfaceCommandOutput
  extends CreateTransitVirtualInterfaceResult,
    __MetadataBearer {}

/**
 * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p>
 *          <important>
 *             <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p>
 *          </important>
 *          <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class CreateTransitVirtualInterfaceCommand extends $Command<
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: CreateTransitVirtualInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTransitVirtualInterfaceCommandInput, CreateTransitVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTransitVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateTransitVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitVirtualInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitVirtualInterfaceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransitVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTransitVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1CreateTransitVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
