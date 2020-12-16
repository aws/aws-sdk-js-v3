import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/models_0";
import {
  deserializeAws_queryDisableInsightRulesCommand,
  serializeAws_queryDisableInsightRulesCommand,
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

export type DisableInsightRulesCommandInput = DisableInsightRulesInput;
export type DisableInsightRulesCommandOutput = DisableInsightRulesOutput & __MetadataBearer;

/**
 * <p>Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do
 * 		not incur costs.</p>
 */
export class DisableInsightRulesCommand extends $Command<
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DisableInsightRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableInsightRulesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisableInsightRulesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableInsightRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableInsightRulesCommandOutput> {
    return deserializeAws_queryDisableInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
