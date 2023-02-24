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
  AssociateConnectionWithLagRequest,
  AssociateConnectionWithLagRequestFilterSensitiveLog,
  Connection,
  ConnectionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateConnectionWithLagCommand,
  serializeAws_json1_1AssociateConnectionWithLagCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateConnectionWithLagCommandInput extends AssociateConnectionWithLagRequest {}
export interface AssociateConnectionWithLagCommandOutput extends Connection, __MetadataBearer {}

/**
 * <p>Associates an existing connection with a link aggregation group (LAG). The connection
 *       is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is
 *       interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its
 *       bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
 *       currently associated with a different LAG; however, if removing the connection would cause
 *       the original LAG to fall below its setting for minimum number of operational connections,
 *       the request fails.</p>
 *          <p>Any virtual interfaces that are directly associated with the connection are
 *       automatically re-associated with the LAG. If the connection was originally associated
 *       with a different LAG, the virtual interfaces remain associated with the original
 *       LAG.</p>
 *          <p>For interconnects, any hosted connections are automatically re-associated with the
 *       LAG. If the interconnect was originally associated with a different LAG, the hosted
 *       connections remain associated with the original LAG.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateConnectionWithLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateConnectionWithLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateConnectionWithLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConnectionWithLagCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionWithLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class AssociateConnectionWithLagCommand extends $Command<
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
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

  constructor(readonly input: AssociateConnectionWithLagCommandInput) {
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
  ): Handler<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateConnectionWithLagCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AssociateConnectionWithLagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateConnectionWithLagRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConnectionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateConnectionWithLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateConnectionWithLagCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateConnectionWithLagCommandOutput> {
    return deserializeAws_json1_1AssociateConnectionWithLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
