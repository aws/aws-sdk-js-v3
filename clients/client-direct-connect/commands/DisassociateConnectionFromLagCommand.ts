import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConnectionFromLagCommand,
  serializeAws_json1_1DisassociateConnectionFromLagCommand,
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

export type DisassociateConnectionFromLagCommandInput = DisassociateConnectionFromLagRequest;
export type DisassociateConnectionFromLagCommandOutput = Connection & __MetadataBearer;

/**
 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
 *       interrupted and re-established as a standalone connection (the connection is not
 *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
 *       If the LAG has associated virtual interfaces or hosted connections, they remain
 *       associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is
 *       automatically converted to an interconnect.</p>
 *          <p>If disassociating the connection would cause the LAG to fall below its setting for
 *       minimum number of operational connections, the request fails, except when it's the last
 *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
 *       an empty LAG with no physical connections. </p>
 */
export class DisassociateConnectionFromLagCommand extends $Command<
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateConnectionFromLagCommandInput) {
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
  ): Handler<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DisassociateConnectionFromLagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateConnectionFromLagRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connection.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateConnectionFromLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConnectionFromLagCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateConnectionFromLagCommandOutput> {
    return deserializeAws_json1_1DisassociateConnectionFromLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
