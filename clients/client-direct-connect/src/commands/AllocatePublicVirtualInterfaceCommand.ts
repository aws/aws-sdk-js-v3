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
  AllocatePublicVirtualInterfaceRequest,
  AllocatePublicVirtualInterfaceRequestFilterSensitiveLog,
  VirtualInterface,
  VirtualInterfaceFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand,
  serializeAws_json1_1AllocatePublicVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

export interface AllocatePublicVirtualInterfaceCommandInput extends AllocatePublicVirtualInterfaceRequest {}
export interface AllocatePublicVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * <p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p>
 *          <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p>
 *          <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>.
 *       Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p>
 *          <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocatePublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class AllocatePublicVirtualInterfaceCommand extends $Command<
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
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

  constructor(readonly input: AllocatePublicVirtualInterfaceCommandInput) {
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
  ): Handler<AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocatePublicVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocatePublicVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocatePublicVirtualInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterfaceFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AllocatePublicVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocatePublicVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllocatePublicVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
