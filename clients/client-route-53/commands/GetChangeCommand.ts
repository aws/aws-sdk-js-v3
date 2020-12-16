import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { deserializeAws_restXmlGetChangeCommand, serializeAws_restXmlGetChangeCommand } from "../protocols/Aws_restXml";
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

export type GetChangeCommandInput = GetChangeRequest;
export type GetChangeCommandOutput = GetChangeResponse & __MetadataBearer;

/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers.
 * 					This is the initial status of all change batch requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p>
 * 			         </li>
 *          </ul>
 */
export class GetChangeCommand extends $Command<
  GetChangeCommandInput,
  GetChangeCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetChangeCommandInput) {
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
  ): Handler<GetChangeCommandInput, GetChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChangeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChangeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetChangeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeCommandOutput> {
    return deserializeAws_restXmlGetChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
