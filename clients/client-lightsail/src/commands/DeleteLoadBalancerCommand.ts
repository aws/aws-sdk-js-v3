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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerRequestFilterSensitiveLog,
  DeleteLoadBalancerResult,
  DeleteLoadBalancerResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLoadBalancerCommand,
  serializeAws_json1_1DeleteLoadBalancerCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteLoadBalancerCommandInput extends DeleteLoadBalancerRequest {}
export interface DeleteLoadBalancerCommandOutput extends DeleteLoadBalancerResult, __MetadataBearer {}

/**
 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the
 *       load balancer is deleted, you will need to create a new load balancer, create a new
 *       certificate, and verify domain ownership again.</p>
 *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteLoadBalancerCommand extends $Command<
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DeleteLoadBalancerCommandInput) {
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
  ): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoadBalancerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoadBalancerResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLoadBalancerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoadBalancerCommandOutput> {
    return deserializeAws_json1_1DeleteLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
