import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetInsightSelectorsRequest, GetInsightSelectorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetInsightSelectorsCommand,
  serializeAws_json1_1GetInsightSelectorsCommand,
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

export type GetInsightSelectorsCommandInput = GetInsightSelectorsRequest;
export type GetInsightSelectorsCommandOutput = GetInsightSelectorsResponse & __MetadataBearer;

/**
 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows
 *          if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled.
 *          If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails
 *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
 */
export class GetInsightSelectorsCommand extends $Command<
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInsightSelectorsCommandInput) {
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
  ): Handler<GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetInsightSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightSelectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInsightSelectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInsightSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightSelectorsCommandOutput> {
    return deserializeAws_json1_1GetInsightSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
