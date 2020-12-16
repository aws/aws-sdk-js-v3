import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeExpressionsCommand,
  serializeAws_queryDescribeExpressionsCommand,
} from "../protocols/Aws_query";
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

export type DescribeExpressionsCommandInput = DescribeExpressionsRequest;
export type DescribeExpressionsCommandOutput = DescribeExpressionsResponse & __MetadataBearer;

/**
 * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeExpressionsCommand extends $Command<
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExpressionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeExpressionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExpressionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExpressionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExpressionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeExpressionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExpressionsCommandOutput> {
    return deserializeAws_queryDescribeExpressionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
