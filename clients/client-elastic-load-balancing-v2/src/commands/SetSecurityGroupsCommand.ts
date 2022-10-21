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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  SetSecurityGroupsInput,
  SetSecurityGroupsInputFilterSensitiveLog,
  SetSecurityGroupsOutput,
  SetSecurityGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetSecurityGroupsCommand,
  serializeAws_querySetSecurityGroupsCommand,
} from "../protocols/Aws_query";

export interface SetSecurityGroupsCommandInput extends SetSecurityGroupsInput {}
export interface SetSecurityGroupsCommandOutput extends SetSecurityGroupsOutput, __MetadataBearer {}

/**
 * <p>Associates the specified security groups with the specified Application Load Balancer. The
 *       specified security groups override the previously associated security groups.</p>
 *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
 *       Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link SetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 */
export class SetSecurityGroupsCommand extends $Command<
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: SetSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSecurityGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetSecurityGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSecurityGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSecurityGroupsCommandOutput> {
    return deserializeAws_querySetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
