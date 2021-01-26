import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteTrafficPolicyCommand,
  serializeAws_restXmlDeleteTrafficPolicyCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type DeleteTrafficPolicyCommandInput = DeleteTrafficPolicyRequest;
export type DeleteTrafficPolicyCommandOutput = DeleteTrafficPolicyResponse & __MetadataBearer;

/**
 * <p>Deletes a traffic policy.</p>
 * 		       <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes
 * 			the traffic policy. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
 *             </li>
 *             <li>
 *                <p>	There's no way to get a list of deleted policies.</p>
 *             </li>
 *             <li>
 *                <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
 *             </li>
 *          </ul>
 */
export class DeleteTrafficPolicyCommand extends $Command<
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteTrafficPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficPolicyResponse.filterSensitiveLog,
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
