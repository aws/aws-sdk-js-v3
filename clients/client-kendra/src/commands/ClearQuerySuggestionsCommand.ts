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
import { ClearQuerySuggestionsRequest, ClearQuerySuggestionsRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1ClearQuerySuggestionsCommand,
  serializeAws_json1_1ClearQuerySuggestionsCommand,
} from "../protocols/Aws_json1_1";

export interface ClearQuerySuggestionsCommandInput extends ClearQuerySuggestionsRequest {}
export interface ClearQuerySuggestionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Clears existing query suggestions from an index.</p>
 *          <p>This deletes existing suggestions only, not the queries
 *             in the query log. After you clear suggestions, Amazon Kendra learns
 *             new suggestions based on new queries added to the query log
 *             from the time you cleared suggestions. If you do not see any
 *             new suggestions, then please allow Amazon Kendra to collect
 *             enough queries to learn new suggestions.</p>
 *          <p>
 *             <code>ClearQuerySuggestions</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ClearQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ClearQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ClearQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClearQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link ClearQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class ClearQuerySuggestionsCommand extends $Command<
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
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

  constructor(readonly input: ClearQuerySuggestionsCommandInput) {
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
  ): Handler<ClearQuerySuggestionsCommandInput, ClearQuerySuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClearQuerySuggestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ClearQuerySuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClearQuerySuggestionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ClearQuerySuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ClearQuerySuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClearQuerySuggestionsCommandOutput> {
    return deserializeAws_json1_1ClearQuerySuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
