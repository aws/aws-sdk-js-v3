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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListContributorInsightsCommand,
  serializeAws_json1_0ListContributorInsightsCommand,
} from "../protocols/Aws_json1_0";

export interface ListContributorInsightsCommandInput extends ListContributorInsightsInput {}
export interface ListContributorInsightsCommandOutput extends ListContributorInsightsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link ListContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListContributorInsightsCommand extends $Command<
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContributorInsightsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListContributorInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContributorInsightsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListContributorInsightsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContributorInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListContributorInsightsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContributorInsightsCommandOutput> {
    return deserializeAws_json1_0ListContributorInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
