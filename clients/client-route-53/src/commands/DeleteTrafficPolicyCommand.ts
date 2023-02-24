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
  DeleteTrafficPolicyRequest,
  DeleteTrafficPolicyRequestFilterSensitiveLog,
  DeleteTrafficPolicyResponse,
  DeleteTrafficPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteTrafficPolicyCommand,
  serializeAws_restXmlDeleteTrafficPolicyCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DeleteTrafficPolicyCommandInput extends DeleteTrafficPolicyRequest {}
export interface DeleteTrafficPolicyCommandOutput extends DeleteTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a traffic policy.</p>
 *          <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that
 * 			it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
 *             </li>
 *             <li>
 *                <p> There's no way to get a list of deleted policies.</p>
 *             </li>
 *             <li>
 *                <p>If you retain the ID of the policy, you can get information about the policy,
 * 					including the traffic policy document, by running <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DeleteTrafficPolicyCommand extends $Command<
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
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

  constructor(readonly input: DeleteTrafficPolicyCommandInput) {
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
  ): Handler<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTrafficPolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteTrafficPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteTrafficPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTrafficPolicyCommandOutput> {
    return deserializeAws_restXmlDeleteTrafficPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
