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
  ConfirmPublicVirtualInterfaceRequest,
  ConfirmPublicVirtualInterfaceRequestFilterSensitiveLog,
  ConfirmPublicVirtualInterfaceResponse,
  ConfirmPublicVirtualInterfaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand,
  serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

export interface ConfirmPublicVirtualInterfaceCommandInput extends ConfirmPublicVirtualInterfaceRequest {}
export interface ConfirmPublicVirtualInterfaceCommandOutput
  extends ConfirmPublicVirtualInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p>
 *          <p>After the virtual interface owner makes this call, the specified virtual interface is
 *       created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmPublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmPublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmPublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmPublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class ConfirmPublicVirtualInterfaceCommand extends $Command<
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
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

  constructor(readonly input: ConfirmPublicVirtualInterfaceCommandInput) {
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
  ): Handler<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmPublicVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmPublicVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmPublicVirtualInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfirmPublicVirtualInterfaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmPublicVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmPublicVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
