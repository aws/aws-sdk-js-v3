import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListBusinessReportSchedulesRequest, ListBusinessReportSchedulesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListBusinessReportSchedulesCommand,
  serializeAws_json1_1ListBusinessReportSchedulesCommand,
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

export type ListBusinessReportSchedulesCommandInput = ListBusinessReportSchedulesRequest;
export type ListBusinessReportSchedulesCommandOutput = ListBusinessReportSchedulesResponse & __MetadataBearer;

/**
 * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
 */
export class ListBusinessReportSchedulesCommand extends $Command<
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBusinessReportSchedulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListBusinessReportSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBusinessReportSchedulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBusinessReportSchedulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBusinessReportSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBusinessReportSchedulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBusinessReportSchedulesCommandOutput> {
    return deserializeAws_json1_1ListBusinessReportSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
