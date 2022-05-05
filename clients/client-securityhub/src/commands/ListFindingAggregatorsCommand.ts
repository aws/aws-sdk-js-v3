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

import { ListFindingAggregatorsRequest, ListFindingAggregatorsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListFindingAggregatorsCommand,
  serializeAws_restJson1ListFindingAggregatorsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface ListFindingAggregatorsCommandInput extends ListFindingAggregatorsRequest {}
export interface ListFindingAggregatorsCommandOutput extends ListFindingAggregatorsResponse, __MetadataBearer {}

/**
 * <p>If finding aggregation is enabled, then <code>ListFindingAggregators</code> returns the ARN of the finding aggregator. You can run this operation from any Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListFindingAggregatorsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListFindingAggregatorsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListFindingAggregatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingAggregatorsCommandInput} for command's `input` shape.
 * @see {@link ListFindingAggregatorsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class ListFindingAggregatorsCommand extends $Command<
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFindingAggregatorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingAggregatorsCommandInput, ListFindingAggregatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListFindingAggregatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFindingAggregatorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFindingAggregatorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFindingAggregatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFindingAggregatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingAggregatorsCommandOutput> {
    return deserializeAws_restJson1ListFindingAggregatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
