import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeConnectorsRequest, DescribeConnectorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorsCommand,
  serializeAws_restJson1DescribeConnectorsCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeConnectorsCommandInput = DescribeConnectorsRequest;
export type DescribeConnectorsCommandOutput = DescribeConnectorsResponse & __MetadataBearer;

/**
 * <p>
 *   Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow.
 *   If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
 * </p>
 */
export class DescribeConnectorsCommand extends $Command<
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConnectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorsCommandOutput> {
    return deserializeAws_restJson1DescribeConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
