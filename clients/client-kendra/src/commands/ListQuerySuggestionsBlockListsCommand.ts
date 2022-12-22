// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  ListQuerySuggestionsBlockListsRequest,
  ListQuerySuggestionsBlockListsRequestFilterSensitiveLog,
  ListQuerySuggestionsBlockListsResponse,
  ListQuerySuggestionsBlockListsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand,
  serializeAws_json1_1ListQuerySuggestionsBlockListsCommand,
} from "../protocols/Aws_json1_1";

export interface ListQuerySuggestionsBlockListsCommandInput extends ListQuerySuggestionsBlockListsRequest {}
export interface ListQuerySuggestionsBlockListsCommandOutput
  extends ListQuerySuggestionsBlockListsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the block lists used for query suggestions for an index.</p>
 *          <p>For information on the current quota limits for block lists, see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
 *                 for Amazon Kendra</a>.</p>
 *          <p>
 *             <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListQuerySuggestionsBlockListsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListQuerySuggestionsBlockListsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListQuerySuggestionsBlockListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuerySuggestionsBlockListsCommandInput} for command's `input` shape.
 * @see {@link ListQuerySuggestionsBlockListsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class ListQuerySuggestionsBlockListsCommand extends $Command<
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListQuerySuggestionsBlockListsCommandInput) {
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
  ): Handler<ListQuerySuggestionsBlockListsCommandInput, ListQuerySuggestionsBlockListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQuerySuggestionsBlockListsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListQuerySuggestionsBlockListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQuerySuggestionsBlockListsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQuerySuggestionsBlockListsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListQuerySuggestionsBlockListsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQuerySuggestionsBlockListsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListQuerySuggestionsBlockListsCommandOutput> {
    return deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
