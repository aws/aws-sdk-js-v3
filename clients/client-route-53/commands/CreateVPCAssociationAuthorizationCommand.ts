import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import {
  CreateVPCAssociationAuthorizationRequest,
  CreateVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand,
  serializeAws_restXmlCreateVPCAssociationAuthorizationCommand,
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

export type CreateVPCAssociationAuthorizationCommandInput = CreateVPCAssociationAuthorizationRequest;
export type CreateVPCAssociationAuthorizationCommandOutput = CreateVPCAssociationAuthorizationResponse &
  __MetadataBearer;

/**
 * <p>Authorizes the AWS account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code>
 * 			request to associate the VPC with a specified hosted zone that was created by a different account.
 * 			To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the
 * 			hosted zone. After you authorize the association, use the account that created the VPC to submit an
 * 			<code>AssociateVPCWithHostedZone</code> request.</p>
 * 		       <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone
 * 			that you created by using a different account, you must submit one authorization request for each VPC.</p>
 *          </note>
 */
export class CreateVPCAssociationAuthorizationCommand extends $Command<
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVPCAssociationAuthorizationCommandInput) {
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
  ): Handler<CreateVPCAssociationAuthorizationCommandInput, CreateVPCAssociationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVPCAssociationAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVPCAssociationAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateVPCAssociationAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateVPCAssociationAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVPCAssociationAuthorizationCommandOutput> {
    return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
