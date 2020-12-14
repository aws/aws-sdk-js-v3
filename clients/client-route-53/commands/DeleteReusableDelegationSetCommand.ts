import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteReusableDelegationSetCommand,
  serializeAws_restXmlDeleteReusableDelegationSetCommand,
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

export type DeleteReusableDelegationSetCommandInput = DeleteReusableDelegationSetRequest;
export type DeleteReusableDelegationSetCommandOutput = DeleteReusableDelegationSetResponse & __MetadataBearer;

/**
 * <p>Deletes a reusable delegation set.</p>
 * 		       <important>
 * 			         <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p>
 * 		       </important>
 * 		       <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a>
 * 			request and specify the ID of the reusable delegation set that you want to delete.</p>
 */
export class DeleteReusableDelegationSetCommand extends $Command<
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReusableDelegationSetCommandInput) {
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
  ): Handler<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteReusableDelegationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReusableDelegationSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReusableDelegationSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReusableDelegationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteReusableDelegationSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReusableDelegationSetCommandOutput> {
    return deserializeAws_restXmlDeleteReusableDelegationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
