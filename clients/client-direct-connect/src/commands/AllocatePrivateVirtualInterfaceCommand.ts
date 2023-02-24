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
  AllocatePrivateVirtualInterfaceRequest,
  AllocatePrivateVirtualInterfaceRequestFilterSensitiveLog,
  VirtualInterface,
  VirtualInterfaceFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand,
  serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

export interface AllocatePrivateVirtualInterfaceCommandInput extends AllocatePrivateVirtualInterfaceRequest {}
export interface AllocatePrivateVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * <p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p>
 *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
 *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocatePrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class AllocatePrivateVirtualInterfaceCommand extends $Command<
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
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

  constructor(readonly input: AllocatePrivateVirtualInterfaceCommandInput) {
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
  ): Handler<AllocatePrivateVirtualInterfaceCommandInput, AllocatePrivateVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocatePrivateVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocatePrivateVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocatePrivateVirtualInterfaceRequestFilterSensitiveLog,
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
    input: AllocatePrivateVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllocatePrivateVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
