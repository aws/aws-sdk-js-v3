import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateQuerySuggestionsBlockListRequest, CreateQuerySuggestionsBlockListResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand,
  serializeAws_json1_1CreateQuerySuggestionsBlockListCommand,
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

export interface CreateQuerySuggestionsBlockListCommandInput extends CreateQuerySuggestionsBlockListRequest {}
export interface CreateQuerySuggestionsBlockListCommandOutput
  extends CreateQuerySuggestionsBlockListResponse,
    __MetadataBearer {}

/**
 * <p>Creates a block list to exlcude certain queries from suggestions.</p>
 *         <p>Any query that contains words or phrases specified in the block
 *             list is blocked or filtered out from being shown as a suggestion.</p>
 *         <p>You need to provide the file location of your block list text file
 *             in your S3 bucket. In your text file, enter each block word or phrase
 *             on a separate line.</p>
 *         <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link CreateQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateQuerySuggestionsBlockListCommand extends $Command<
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateQuerySuggestionsBlockListCommandInput) {
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
  ): Handler<CreateQuerySuggestionsBlockListCommandInput, CreateQuerySuggestionsBlockListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateQuerySuggestionsBlockListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateQuerySuggestionsBlockListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQuerySuggestionsBlockListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateQuerySuggestionsBlockListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateQuerySuggestionsBlockListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateQuerySuggestionsBlockListCommandOutput> {
    return deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
