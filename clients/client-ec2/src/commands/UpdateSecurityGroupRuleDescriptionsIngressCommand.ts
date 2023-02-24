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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  UpdateSecurityGroupRuleDescriptionsIngressRequest,
  UpdateSecurityGroupRuleDescriptionsIngressRequestFilterSensitiveLog,
  UpdateSecurityGroupRuleDescriptionsIngressResult,
  UpdateSecurityGroupRuleDescriptionsIngressResultFilterSensitiveLog,
} from "../models/models_7";
import {
  deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand,
  serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand,
} from "../protocols/Aws_ec2";

export interface UpdateSecurityGroupRuleDescriptionsIngressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsIngressRequest {}
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsIngressResult,
    __MetadataBearer {}

/**
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one previously.
 * 		    You can remove a description for a security group rule by omitting the description
 * 		    parameter in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateSecurityGroupRuleDescriptionsIngressCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput> {
    return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
