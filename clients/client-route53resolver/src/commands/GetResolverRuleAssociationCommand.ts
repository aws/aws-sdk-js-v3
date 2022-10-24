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

import {
  GetResolverRuleAssociationRequest,
  GetResolverRuleAssociationRequestFilterSensitiveLog,
  GetResolverRuleAssociationResponse,
  GetResolverRuleAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetResolverRuleAssociationCommand,
  serializeAws_json1_1GetResolverRuleAssociationCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface GetResolverRuleAssociationCommandInput extends GetResolverRuleAssociationRequest {}
export interface GetResolverRuleAssociationCommandOutput extends GetResolverRuleAssociationResponse, __MetadataBearer {}

/**
 * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverRuleAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class GetResolverRuleAssociationCommand extends $Command<
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: GetResolverRuleAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResolverRuleAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverRuleAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverRuleAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResolverRuleAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResolverRuleAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverRuleAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverRuleAssociationCommandOutput> {
    return deserializeAws_json1_1GetResolverRuleAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
