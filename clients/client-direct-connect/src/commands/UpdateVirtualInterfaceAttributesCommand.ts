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
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand,
  serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateVirtualInterfaceAttributesCommand}.
 */
export interface UpdateVirtualInterfaceAttributesCommandInput extends UpdateVirtualInterfaceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualInterfaceAttributesCommand}.
 */
export interface UpdateVirtualInterfaceAttributesCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified attributes of the specified virtual private interface.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual q
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateVirtualInterfaceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateVirtualInterfaceAttributesCommandInput - {@link UpdateVirtualInterfaceAttributesCommandInput}
 * @returns {@link UpdateVirtualInterfaceAttributesCommandOutput}
 * @see {@link UpdateVirtualInterfaceAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualInterfaceAttributesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 *
 */
export class UpdateVirtualInterfaceAttributesCommand extends $Command<
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateVirtualInterfaceAttributesCommandInput) {
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
  ): Handler<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVirtualInterfaceAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateVirtualInterfaceAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: UpdateVirtualInterfaceAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
