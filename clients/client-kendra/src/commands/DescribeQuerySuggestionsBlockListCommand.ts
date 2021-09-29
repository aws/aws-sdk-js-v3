import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  DescribeQuerySuggestionsBlockListRequest,
  DescribeQuerySuggestionsBlockListResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand,
  serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand,
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

export interface DescribeQuerySuggestionsBlockListCommandInput extends DescribeQuerySuggestionsBlockListRequest {}
export interface DescribeQuerySuggestionsBlockListCommandOutput
  extends DescribeQuerySuggestionsBlockListResponse,
    __MetadataBearer {}

/**
 * <p>Describes a block list used for query suggestions for an index.</p>
 *         <p>This is used to check the current settings that are applied to a
 *             block list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeQuerySuggestionsBlockListCommand extends $Command<
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeQuerySuggestionsBlockListCommandInput) {
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
  ): Handler<DescribeQuerySuggestionsBlockListCommandInput, DescribeQuerySuggestionsBlockListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribeQuerySuggestionsBlockListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeQuerySuggestionsBlockListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeQuerySuggestionsBlockListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeQuerySuggestionsBlockListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeQuerySuggestionsBlockListCommandOutput> {
    return deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
