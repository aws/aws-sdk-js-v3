import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListComplianceSummariesCommand,
  serializeAws_json1_1ListComplianceSummariesCommand,
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

export type ListComplianceSummariesCommandInput = ListComplianceSummariesRequest;
export type ListComplianceSummariesCommandOutput = ListComplianceSummariesResult & __MetadataBearer;

/**
 * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
 *    example, this call can return State Manager associations, patches, or custom compliance types
 *    according to the filter criteria that you specify.</p>
 */
export class ListComplianceSummariesCommand extends $Command<
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListComplianceSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListComplianceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComplianceSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListComplianceSummariesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComplianceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListComplianceSummariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceSummariesCommandOutput> {
    return deserializeAws_json1_1ListComplianceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
