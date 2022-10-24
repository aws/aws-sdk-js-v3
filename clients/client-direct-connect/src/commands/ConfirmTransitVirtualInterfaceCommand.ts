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
  ConfirmTransitVirtualInterfaceRequest,
  ConfirmTransitVirtualInterfaceRequestFilterSensitiveLog,
  ConfirmTransitVirtualInterfaceResponse,
  ConfirmTransitVirtualInterfaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand,
  serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

export interface ConfirmTransitVirtualInterfaceCommandInput extends ConfirmTransitVirtualInterfaceRequest {}
export interface ConfirmTransitVirtualInterfaceCommandOutput
  extends ConfirmTransitVirtualInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p>
 *
 *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ConfirmTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link ConfirmTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class ConfirmTransitVirtualInterfaceCommand extends $Command<
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
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

  constructor(readonly input: ConfirmTransitVirtualInterfaceCommandInput) {
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
  ): Handler<ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmTransitVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmTransitVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmTransitVirtualInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfirmTransitVirtualInterfaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConfirmTransitVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmTransitVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
