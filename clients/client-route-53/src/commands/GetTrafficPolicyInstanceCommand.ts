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
  GetTrafficPolicyInstanceRequest,
  GetTrafficPolicyInstanceRequestFilterSensitiveLog,
  GetTrafficPolicyInstanceResponse,
  GetTrafficPolicyInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetTrafficPolicyInstanceCommand,
  serializeAws_restXmlGetTrafficPolicyInstanceCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetTrafficPolicyInstanceCommandInput extends GetTrafficPolicyInstanceRequest {}
export interface GetTrafficPolicyInstanceCommandOutput extends GetTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified traffic policy instance.</p>
 *          <note>
 *             <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an
 * 					<code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while
 * 				Amazon Route 53 creates the resource record sets that are specified in the traffic
 * 				policy definition. For more information, see the <code>State</code> response
 * 				element.</p>
 *          </note>
 *          <note>
 *             <p>In the Route 53 console, traffic policy instances are known as policy
 * 				records.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetTrafficPolicyInstanceCommand extends $Command<
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
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

  constructor(readonly input: GetTrafficPolicyInstanceCommandInput) {
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
  ): Handler<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrafficPolicyInstanceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetTrafficPolicyInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTrafficPolicyInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTrafficPolicyInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTrafficPolicyInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetTrafficPolicyInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrafficPolicyInstanceCommandOutput> {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
