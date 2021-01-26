import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import {
  ListTrafficPolicyInstancesByPolicyRequest,
  ListTrafficPolicyInstancesByPolicyResponse,
} from "../models/models_0";
import {
  deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand,
  serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand,
} from "../protocols/Aws_restXml";
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

export type ListTrafficPolicyInstancesByPolicyCommandInput = ListTrafficPolicyInstancesByPolicyRequest;
export type ListTrafficPolicyInstancesByPolicyCommandOutput = ListTrafficPolicyInstancesByPolicyResponse &
  __MetadataBearer;

/**
 * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p>
 * 		       <note>
 * 			         <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request,
 * 				there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For
 * 				more information, see the <code>State</code> response element.</p>
 * 		       </note>
 * 		       <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the
 * 			<code>MaxItems</code> parameter to list them in groups of up to 100.</p>
 */
export class ListTrafficPolicyInstancesByPolicyCommand extends $Command<
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrafficPolicyInstancesByPolicyCommandInput) {
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
  ): Handler<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyInstancesByPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPolicyInstancesByPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListTrafficPolicyInstancesByPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> {
    return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
