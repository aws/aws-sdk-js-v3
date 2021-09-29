import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteVirtualInterfaceRequest, DeleteVirtualInterfaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVirtualInterfaceCommand,
  serializeAws_json1_1DeleteVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteVirtualInterfaceCommandInput extends DeleteVirtualInterfaceRequest {}
export interface DeleteVirtualInterfaceCommandOutput extends DeleteVirtualInterfaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteVirtualInterfaceCommand extends $Command<
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVirtualInterfaceCommandInput) {
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
  ): Handler<DeleteVirtualInterfaceCommandInput, DeleteVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualInterfaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVirtualInterfaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1DeleteVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
