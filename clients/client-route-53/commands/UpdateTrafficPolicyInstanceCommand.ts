import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse } from "../models/models_0";
import {
  deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand,
  serializeAws_restXmlUpdateTrafficPolicyInstanceCommand,
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

export type UpdateTrafficPolicyInstanceCommandInput = UpdateTrafficPolicyInstanceRequest;
export type UpdateTrafficPolicyInstanceCommandOutput = UpdateTrafficPolicyInstanceResponse & __MetadataBearer;

/**
 * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p>
 * 		       <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name
 * 			(such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant
 * 					the differences are between the existing resource record sets and the new resource record sets. </p>
 * 			         </li>
 *             <li>
 * 				           <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name
 * 					(such as example.com) by using the new resource record sets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p>
 * 			         </li>
 *          </ol>
 */
export class UpdateTrafficPolicyInstanceCommand extends $Command<
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTrafficPolicyInstanceCommandInput) {
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
  ): Handler<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateTrafficPolicyInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrafficPolicyInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrafficPolicyInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrafficPolicyInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateTrafficPolicyInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTrafficPolicyInstanceCommandOutput> {
    return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
