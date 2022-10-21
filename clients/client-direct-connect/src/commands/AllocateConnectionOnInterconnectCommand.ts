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
  AllocateConnectionOnInterconnectRequest,
  AllocateConnectionOnInterconnectRequestFilterSensitiveLog,
  Connection,
  ConnectionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AllocateConnectionOnInterconnectCommand,
  serializeAws_json1_1AllocateConnectionOnInterconnectCommand,
} from "../protocols/Aws_json1_1";

export interface AllocateConnectionOnInterconnectCommandInput extends AllocateConnectionOnInterconnectRequest {}
export interface AllocateConnectionOnInterconnectCommandOutput extends Connection, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
 *          <p>Creates a hosted connection on an interconnect.</p>
 *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateConnectionOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateConnectionOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateConnectionOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateConnectionOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link AllocateConnectionOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class AllocateConnectionOnInterconnectCommand extends $Command<
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
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

  constructor(readonly input: AllocateConnectionOnInterconnectCommandInput) {
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
  ): Handler<AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocateConnectionOnInterconnectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocateConnectionOnInterconnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateConnectionOnInterconnectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConnectionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AllocateConnectionOnInterconnectCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocateConnectionOnInterconnectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllocateConnectionOnInterconnectCommandOutput> {
    return deserializeAws_json1_1AllocateConnectionOnInterconnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
