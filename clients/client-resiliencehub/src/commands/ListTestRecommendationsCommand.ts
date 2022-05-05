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

import { ListTestRecommendationsRequest, ListTestRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTestRecommendationsCommand,
  serializeAws_restJson1ListTestRecommendationsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface ListTestRecommendationsCommandInput extends ListTestRecommendationsRequest {}
export interface ListTestRecommendationsCommandOutput extends ListTestRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Lists the test recommendations for the Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListTestRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListTestRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new ListTestRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListTestRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class ListTestRecommendationsCommand extends $Command<
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
  ResiliencehubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTestRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestRecommendationsCommandInput, ListTestRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListTestRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTestRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTestRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTestRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTestRecommendationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestRecommendationsCommandOutput> {
    return deserializeAws_restJson1ListTestRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
