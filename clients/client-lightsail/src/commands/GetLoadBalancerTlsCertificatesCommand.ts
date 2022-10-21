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
  GetLoadBalancerTlsCertificatesRequest,
  GetLoadBalancerTlsCertificatesRequestFilterSensitiveLog,
  GetLoadBalancerTlsCertificatesResult,
  GetLoadBalancerTlsCertificatesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand,
  serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand,
} from "../protocols/Aws_json1_1";

export interface GetLoadBalancerTlsCertificatesCommandInput extends GetLoadBalancerTlsCertificatesRequest {}
export interface GetLoadBalancerTlsCertificatesCommandOutput
  extends GetLoadBalancerTlsCertificatesResult,
    __MetadataBearer {}

/**
 * <p>Returns information about the TLS certificates that are associated with the specified
 *       Lightsail load balancer.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One
 *       is active and the other is inactive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerTlsCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerTlsCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerTlsCertificatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetLoadBalancerTlsCertificatesCommand extends $Command<
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
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

  constructor(readonly input: GetLoadBalancerTlsCertificatesCommandInput) {
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
  ): Handler<GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoadBalancerTlsCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerTlsCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoadBalancerTlsCertificatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLoadBalancerTlsCertificatesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetLoadBalancerTlsCertificatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput> {
    return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
