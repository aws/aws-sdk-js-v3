import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportsForReportGroupInput, ListReportsForReportGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListReportsForReportGroupCommand,
  serializeAws_json1_1ListReportsForReportGroupCommand,
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

export type ListReportsForReportGroupCommandInput = ListReportsForReportGroupInput;
export type ListReportsForReportGroupCommandOutput = ListReportsForReportGroupOutput & __MetadataBearer;

/**
 * <p>
 *       Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *     </p>
 */
export class ListReportsForReportGroupCommand extends $Command<
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReportsForReportGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListReportsForReportGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReportsForReportGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListReportsForReportGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReportsForReportGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReportsForReportGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReportsForReportGroupCommandOutput> {
    return deserializeAws_json1_1ListReportsForReportGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
