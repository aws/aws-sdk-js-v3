import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ViewBillingRequest, ViewBillingResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ViewBillingCommand,
  serializeAws_json1_1ViewBillingCommand,
} from "../protocols/Aws_json1_1";
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

export type ViewBillingCommandInput = ViewBillingRequest;
export type ViewBillingCommandOutput = ViewBillingResponse & __MetadataBearer;

/**
 * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
 */
export class ViewBillingCommand extends $Command<
  ViewBillingCommandInput,
  ViewBillingCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ViewBillingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ViewBillingCommandInput, ViewBillingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ViewBillingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ViewBillingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ViewBillingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ViewBillingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ViewBillingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ViewBillingCommandOutput> {
    return deserializeAws_json1_1ViewBillingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
