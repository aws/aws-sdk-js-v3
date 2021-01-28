import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/models_5";
import {
  deserializeAws_ec2SearchTransitGatewayRoutesCommand,
  serializeAws_ec2SearchTransitGatewayRoutesCommand,
} from "../protocols/Aws_ec2";
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

export type SearchTransitGatewayRoutesCommandInput = SearchTransitGatewayRoutesRequest;
export type SearchTransitGatewayRoutesCommandOutput = SearchTransitGatewayRoutesResult & __MetadataBearer;

/**
 * <p>Searches for routes in the specified transit gateway route table.</p>
 */
export class SearchTransitGatewayRoutesCommand extends $Command<
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchTransitGatewayRoutesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchTransitGatewayRoutesCommandInput, SearchTransitGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchTransitGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchTransitGatewayRoutesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchTransitGatewayRoutesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchTransitGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SearchTransitGatewayRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchTransitGatewayRoutesCommandOutput> {
    return deserializeAws_ec2SearchTransitGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
