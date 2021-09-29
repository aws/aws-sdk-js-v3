import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeQuerySuggestionsConfigRequest, DescribeQuerySuggestionsConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand,
  serializeAws_json1_1DescribeQuerySuggestionsConfigCommand,
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

export interface DescribeQuerySuggestionsConfigCommandInput extends DescribeQuerySuggestionsConfigRequest {}
export interface DescribeQuerySuggestionsConfigCommandOutput
  extends DescribeQuerySuggestionsConfigResponse,
    __MetadataBearer {}

/**
 * <p>Describes the settings of query suggestions for an index.</p>
 *         <p>This is used to check the current settings applied
 *             to query suggestions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeQuerySuggestionsConfigCommand extends $Command<
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeQuerySuggestionsConfigCommandInput) {
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
  ): Handler<DescribeQuerySuggestionsConfigCommandInput, DescribeQuerySuggestionsConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribeQuerySuggestionsConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeQuerySuggestionsConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeQuerySuggestionsConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeQuerySuggestionsConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeQuerySuggestionsConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput> {
    return deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
