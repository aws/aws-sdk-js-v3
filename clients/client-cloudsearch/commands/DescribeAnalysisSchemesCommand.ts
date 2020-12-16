import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeAnalysisSchemesCommand,
  serializeAws_queryDescribeAnalysisSchemesCommand,
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

export type DescribeAnalysisSchemesCommandInput = DescribeAnalysisSchemesRequest;
export type DescribeAnalysisSchemesCommandOutput = DescribeAnalysisSchemesResponse & __MetadataBearer;

/**
 * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeAnalysisSchemesCommand extends $Command<
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAnalysisSchemesCommandInput) {
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
  ): Handler<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeAnalysisSchemesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnalysisSchemesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnalysisSchemesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnalysisSchemesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAnalysisSchemesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnalysisSchemesCommandOutput> {
    return deserializeAws_queryDescribeAnalysisSchemesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
