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
  GetTrafficPolicyRequest,
  GetTrafficPolicyRequestFilterSensitiveLog,
  GetTrafficPolicyResponse,
  GetTrafficPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetTrafficPolicyCommand,
  serializeAws_restXmlGetTrafficPolicyCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetTrafficPolicyCommandInput extends GetTrafficPolicyRequest {}
export interface GetTrafficPolicyCommandOutput extends GetTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific traffic policy version.</p>
 *          <p>For information about how of deleting a traffic policy affects the response from
 * 				<code>GetTrafficPolicy</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetTrafficPolicyCommand extends $Command<
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
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

  constructor(readonly input: GetTrafficPolicyCommandInput) {
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
  ): Handler<GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrafficPolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetTrafficPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTrafficPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTrafficPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTrafficPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetTrafficPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrafficPolicyCommandOutput> {
    return deserializeAws_restXmlGetTrafficPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
