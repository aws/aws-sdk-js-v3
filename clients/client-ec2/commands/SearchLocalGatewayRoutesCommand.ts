import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchLocalGatewayRoutesRequest, SearchLocalGatewayRoutesResult } from "../models/models_5";
import {
  deserializeAws_ec2SearchLocalGatewayRoutesCommand,
  serializeAws_ec2SearchLocalGatewayRoutesCommand,
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

export type SearchLocalGatewayRoutesCommandInput = SearchLocalGatewayRoutesRequest;
export type SearchLocalGatewayRoutesCommandOutput = SearchLocalGatewayRoutesResult & __MetadataBearer;

/**
 * <p>Searches for routes in the specified local gateway route table.</p>
 */
export class SearchLocalGatewayRoutesCommand extends $Command<
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchLocalGatewayRoutesCommandInput) {
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
  ): Handler<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchLocalGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchLocalGatewayRoutesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchLocalGatewayRoutesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchLocalGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SearchLocalGatewayRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchLocalGatewayRoutesCommandOutput> {
    return deserializeAws_ec2SearchLocalGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
