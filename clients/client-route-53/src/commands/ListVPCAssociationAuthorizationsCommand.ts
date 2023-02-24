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
  ListVPCAssociationAuthorizationsRequest,
  ListVPCAssociationAuthorizationsRequestFilterSensitiveLog,
  ListVPCAssociationAuthorizationsResponse,
  ListVPCAssociationAuthorizationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListVPCAssociationAuthorizationsCommand,
  serializeAws_restXmlListVPCAssociationAuthorizationsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListVPCAssociationAuthorizationsCommandInput extends ListVPCAssociationAuthorizationsRequest {}
export interface ListVPCAssociationAuthorizationsCommandOutput
  extends ListVPCAssociationAuthorizationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the VPCs that were created by other accounts and that can be associated
 * 			with a specified hosted zone because you've submitted one or more
 * 				<code>CreateVPCAssociationAuthorization</code> requests. </p>
 *          <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child
 * 			element for each VPC that can be associated with the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListVPCAssociationAuthorizationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListVPCAssociationAuthorizationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListVPCAssociationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVPCAssociationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCAssociationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListVPCAssociationAuthorizationsCommand extends $Command<
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
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

  constructor(readonly input: ListVPCAssociationAuthorizationsCommandInput) {
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
  ): Handler<ListVPCAssociationAuthorizationsCommandInput, ListVPCAssociationAuthorizationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVPCAssociationAuthorizationsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListVPCAssociationAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVPCAssociationAuthorizationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVPCAssociationAuthorizationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListVPCAssociationAuthorizationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListVPCAssociationAuthorizationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVPCAssociationAuthorizationsCommandOutput> {
    return deserializeAws_restXmlListVPCAssociationAuthorizationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
