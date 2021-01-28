import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListTagsForResourcesCommand,
  serializeAws_restXmlListTagsForResourcesCommand,
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

export type ListTagsForResourcesCommandInput = ListTagsForResourcesRequest;
export type ListTagsForResourcesCommandOutput = ListTagsForResourcesResponse & __MetadataBearer;

/**
 * <p>Lists tags for up to 10 health checks or hosted zones.</p>
 * 		       <p>For information about using tags for cost allocation, see
 * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
 * 			in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 */
export class ListTagsForResourcesCommand extends $Command<
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForResourcesCommandInput) {
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
  ): Handler<ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTagsForResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListTagsForResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForResourcesCommandOutput> {
    return deserializeAws_restXmlListTagsForResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
