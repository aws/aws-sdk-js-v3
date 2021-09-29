import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import {
  UpdateFirewallRuleGroupAssociationRequest,
  UpdateFirewallRuleGroupAssociationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand,
  serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand,
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

export interface UpdateFirewallRuleGroupAssociationCommandInput extends UpdateFirewallRuleGroupAssociationRequest {}
export interface UpdateFirewallRuleGroupAssociationCommandOutput
  extends UpdateFirewallRuleGroupAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFirewallRuleGroupAssociationCommand extends $Command<
  UpdateFirewallRuleGroupAssociationCommandInput,
  UpdateFirewallRuleGroupAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallRuleGroupAssociationCommandInput) {
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
  ): Handler<UpdateFirewallRuleGroupAssociationCommandInput, UpdateFirewallRuleGroupAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateFirewallRuleGroupAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallRuleGroupAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallRuleGroupAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFirewallRuleGroupAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFirewallRuleGroupAssociationCommandOutput> {
    return deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
