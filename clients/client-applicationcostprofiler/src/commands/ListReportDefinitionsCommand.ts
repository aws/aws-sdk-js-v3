import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { ListReportDefinitionsRequest, ListReportDefinitionsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListReportDefinitionsCommand,
  serializeAws_restJson1ListReportDefinitionsCommand,
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

export interface ListReportDefinitionsCommandInput extends ListReportDefinitionsRequest {}
export interface ListReportDefinitionsCommandOutput extends ListReportDefinitionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
 *          <p>The maximum number of reports is one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ListReportDefinitionsCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ListReportDefinitionsCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ListReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReportDefinitionsCommand extends $Command<
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReportDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReportDefinitionsCommandInput, ListReportDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "ListReportDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReportDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReportDefinitionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReportDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReportDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListReportDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
