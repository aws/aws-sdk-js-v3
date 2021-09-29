import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { GetQuerySuggestionsRequest, GetQuerySuggestionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetQuerySuggestionsCommand,
  serializeAws_json1_1GetQuerySuggestionsCommand,
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

export interface GetQuerySuggestionsCommandInput extends GetQuerySuggestionsRequest {}
export interface GetQuerySuggestionsCommandOutput extends GetQuerySuggestionsResponse, __MetadataBearer {}

/**
 * <p>Fetches the queries that are suggested to your users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, GetQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, GetQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new GetQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetQuerySuggestionsCommand extends $Command<
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQuerySuggestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQuerySuggestionsCommandInput, GetQuerySuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "GetQuerySuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQuerySuggestionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetQuerySuggestionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQuerySuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQuerySuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQuerySuggestionsCommandOutput> {
    return deserializeAws_json1_1GetQuerySuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
