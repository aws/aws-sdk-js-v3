// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import {
  DeleteVPCAssociationAuthorizationRequest,
  DeleteVPCAssociationAuthorizationRequestFilterSensitiveLog,
  DeleteVPCAssociationAuthorizationResponse,
  DeleteVPCAssociationAuthorizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand,
  serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DeleteVPCAssociationAuthorizationCommandInput extends DeleteVPCAssociationAuthorizationRequest {}
export interface DeleteVPCAssociationAuthorizationCommandOutput
  extends DeleteVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to
 * 			associate a specified VPC with a hosted zone that was created by a different account.
 * 			You must use the account that created the hosted zone to submit a
 * 				<code>DeleteVPCAssociationAuthorization</code> request.</p>
 *          <important>
 *             <p>Sending this request only prevents the Amazon Web Services account that created the
 * 				VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If
 * 				the VPC is already associated with the hosted zone,
 * 					<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from
 * 				the hosted zone. If you want to delete an existing association, use
 * 					<code>DisassociateVPCFromHostedZone</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DeleteVPCAssociationAuthorizationCommand extends $Command<
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
  Route53ClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVPCAssociationAuthorizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVPCAssociationAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVPCAssociationAuthorizationResponseFilterSensitiveLog,
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
