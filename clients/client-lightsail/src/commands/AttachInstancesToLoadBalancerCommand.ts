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
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerRequestFilterSensitiveLog,
  AttachInstancesToLoadBalancerResult,
  AttachInstancesToLoadBalancerResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AttachInstancesToLoadBalancerCommand,
  serializeAws_json1_1AttachInstancesToLoadBalancerCommand,
} from "../protocols/Aws_json1_1";

export interface AttachInstancesToLoadBalancerCommandInput extends AttachInstancesToLoadBalancerRequest {}
export interface AttachInstancesToLoadBalancerCommandOutput
  extends AttachInstancesToLoadBalancerResult,
    __MetadataBearer {}

/**
 * <p>Attaches one or more Lightsail instances to a load balancer.</p>
 *          <p>After some time, the instances are attached to the load balancer and the health check
 *       status is available.</p>
 *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachInstancesToLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachInstancesToLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachInstancesToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInstancesToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class AttachInstancesToLoadBalancerCommand extends $Command<
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
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

  constructor(readonly input: AttachInstancesToLoadBalancerCommandInput) {
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
  ): Handler<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachInstancesToLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachInstancesToLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachInstancesToLoadBalancerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachInstancesToLoadBalancerResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachInstancesToLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachInstancesToLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachInstancesToLoadBalancerCommandOutput> {
    return deserializeAws_json1_1AttachInstancesToLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
