// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListCoverageStatisticsRequest, ListCoverageStatisticsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCoverageStatisticsCommand,
  serializeAws_restJson1ListCoverageStatisticsCommand,
} from "../protocols/Aws_restJson1";

export interface ListCoverageStatisticsCommandInput extends ListCoverageStatisticsRequest {}
export interface ListCoverageStatisticsCommandOutput extends ListCoverageStatisticsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Inspector coverage statistics for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCoverageStatisticsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCoverageStatisticsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new ListCoverageStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoverageStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListCoverageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class ListCoverageStatisticsCommand extends $Command<
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
  Inspector2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCoverageStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCoverageStatisticsCommandInput, ListCoverageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListCoverageStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCoverageStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCoverageStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCoverageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCoverageStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoverageStatisticsCommandOutput> {
    return deserializeAws_restJson1ListCoverageStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
