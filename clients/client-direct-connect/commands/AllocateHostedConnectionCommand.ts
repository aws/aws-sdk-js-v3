import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateHostedConnectionRequest, Connection } from "../models/models_0";
import {
  deserializeAws_json1_1AllocateHostedConnectionCommand,
  serializeAws_json1_1AllocateHostedConnectionCommand,
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

export type AllocateHostedConnectionCommandInput = AllocateHostedConnectionRequest;
export type AllocateHostedConnectionCommandOutput = Connection & __MetadataBearer;

/**
 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
 *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 */
export class AllocateHostedConnectionCommand extends $Command<
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocateHostedConnectionCommandInput) {
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
  ): Handler<AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocateHostedConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateHostedConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connection.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateHostedConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocateHostedConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateHostedConnectionCommandOutput> {
    return deserializeAws_json1_1AllocateHostedConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
