import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateLoadBalancerAttributeRequest, UpdateLoadBalancerAttributeResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateLoadBalancerAttributeCommand,
  serializeAws_json1_1UpdateLoadBalancerAttributeCommand,
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

export interface UpdateLoadBalancerAttributeCommandInput extends UpdateLoadBalancerAttributeRequest {}
export interface UpdateLoadBalancerAttributeCommandOutput extends UpdateLoadBalancerAttributeResult, __MetadataBearer {}

/**
 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at
 *       a time.</p>
 *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateLoadBalancerAttributeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateLoadBalancerAttributeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateLoadBalancerAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoadBalancerAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateLoadBalancerAttributeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateLoadBalancerAttributeCommand extends $Command<
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLoadBalancerAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateLoadBalancerAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLoadBalancerAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLoadBalancerAttributeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLoadBalancerAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLoadBalancerAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLoadBalancerAttributeCommandOutput> {
    return deserializeAws_json1_1UpdateLoadBalancerAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
