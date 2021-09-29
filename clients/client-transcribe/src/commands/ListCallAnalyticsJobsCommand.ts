import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListCallAnalyticsJobsRequest, ListCallAnalyticsJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCallAnalyticsJobsCommand,
  serializeAws_json1_1ListCallAnalyticsJobsCommand,
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

export interface ListCallAnalyticsJobsCommandInput extends ListCallAnalyticsJobsRequest {}
export interface ListCallAnalyticsJobsCommandOutput extends ListCallAnalyticsJobsResponse, __MetadataBearer {}

/**
 * <p>List call analytics jobs with a specified status or substring that matches their names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListCallAnalyticsJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCallAnalyticsJobsCommandInput} for command's `input` shape.
 * @see {@link ListCallAnalyticsJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCallAnalyticsJobsCommand extends $Command<
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCallAnalyticsJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCallAnalyticsJobsCommandInput, ListCallAnalyticsJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListCallAnalyticsJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCallAnalyticsJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCallAnalyticsJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCallAnalyticsJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCallAnalyticsJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCallAnalyticsJobsCommandOutput> {
    return deserializeAws_json1_1ListCallAnalyticsJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
