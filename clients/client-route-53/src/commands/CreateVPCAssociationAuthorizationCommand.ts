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
  CreateVPCAssociationAuthorizationRequest,
  CreateVPCAssociationAuthorizationRequestFilterSensitiveLog,
  CreateVPCAssociationAuthorizationResponse,
  CreateVPCAssociationAuthorizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand,
  serializeAws_restXmlCreateVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface CreateVPCAssociationAuthorizationCommandInput extends CreateVPCAssociationAuthorizationRequest {}
export interface CreateVPCAssociationAuthorizationCommandOutput
  extends CreateVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Authorizes the Amazon Web Services account that created a specified VPC to submit an
 * 				<code>AssociateVPCWithHostedZone</code> request to associate the VPC with a
 * 			specified hosted zone that was created by a different account. To submit a
 * 				<code>CreateVPCAssociationAuthorization</code> request, you must use the account
 * 			that created the hosted zone. After you authorize the association, use the account that
 * 			created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p>
 *          <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with
 * 				a hosted zone that you created by using a different account, you must submit one
 * 				authorization request for each VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class CreateVPCAssociationAuthorizationCommand extends $Command<
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVPCAssociationAuthorizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateVPCAssociationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVPCAssociationAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVPCAssociationAuthorizationResponseFilterSensitiveLog,
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
