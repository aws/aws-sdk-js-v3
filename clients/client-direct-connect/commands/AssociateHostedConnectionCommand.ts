import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateHostedConnectionRequest, Connection } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateHostedConnectionCommand,
  serializeAws_json1_1AssociateHostedConnectionCommand,
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

export type AssociateHostedConnectionCommandInput = AssociateHostedConnectionRequest;
export type AssociateHostedConnectionCommandOutput = Connection & __MetadataBearer;

/**
 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
 *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
 *       connection with a conflicting VLAN number or IP address, the operation fails. This
 *       action temporarily interrupts the hosted connection's connectivity to AWS as it is being
 *       migrated.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 */
export class AssociateHostedConnectionCommand extends $Command<
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateHostedConnectionCommandInput) {
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
  ): Handler<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AssociateHostedConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateHostedConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connection.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateHostedConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateHostedConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateHostedConnectionCommandOutput> {
    return deserializeAws_json1_1AssociateHostedConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
