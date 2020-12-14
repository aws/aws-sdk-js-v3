import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import {
  DeleteVPCAssociationAuthorizationRequest,
  DeleteVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand,
  serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type DeleteVPCAssociationAuthorizationCommandInput = DeleteVPCAssociationAuthorizationRequest;
export type DeleteVPCAssociationAuthorizationCommandOutput = DeleteVPCAssociationAuthorizationResponse &
  __MetadataBearer;

/**
 * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC
 * 			with a hosted zone that was created by a different account. You must use the account that created the hosted zone
 * 			to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p>
 * 		       <important>
 * 			         <p>Sending this request only prevents the AWS account that created the VPC from associating the VPC
 * 				with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone,
 * 				<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone.
 * 				If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p>
 * 		       </important>
 */
export class DeleteVPCAssociationAuthorizationCommand extends $Command<
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVPCAssociationAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVPCAssociationAuthorizationCommandInput, DeleteVPCAssociationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVPCAssociationAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVPCAssociationAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVPCAssociationAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVPCAssociationAuthorizationCommandOutput> {
    return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
