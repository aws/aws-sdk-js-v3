import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutInsightSelectorsCommand,
  serializeAws_json1_1PutInsightSelectorsCommand,
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

export type PutInsightSelectorsCommandInput = PutInsightSelectorsRequest;
export type PutInsightSelectorsCommandOutput = PutInsightSelectorsResponse & __MetadataBearer;

/**
 * <p>Lets you enable Insights event logging by specifying the Insights
 *          selectors that you want to enable on an existing trail. You also use
 *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
 *          In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.</p>
 */
export class PutInsightSelectorsCommand extends $Command<
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInsightSelectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "PutInsightSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInsightSelectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInsightSelectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInsightSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInsightSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInsightSelectorsCommandOutput> {
    return deserializeAws_json1_1PutInsightSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
