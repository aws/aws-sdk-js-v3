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
  UpdateQuerySuggestionsConfigRequest,
  UpdateQuerySuggestionsConfigRequestFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand,
  serializeAws_json1_1UpdateQuerySuggestionsConfigCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateQuerySuggestionsConfigCommandInput extends UpdateQuerySuggestionsConfigRequest {}
export interface UpdateQuerySuggestionsConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings of query suggestions for an index.</p>
 *          <p>Amazon Kendra supports partial updates, so you only need to provide
 *             the fields you want to update.</p>
 *          <p>If an update is currently processing (i.e. 'happening'), you
 *             need to wait for the update to finish before making another update.</p>
 *          <p>Updates to query suggestions settings might not take effect right away.
 *             The time for your updated settings to take effect depends on the updates
 *             made and the number of search queries in your index.</p>
 *          <p>You can still enable/disable query suggestions at any time.</p>
 *          <p>
 *             <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class UpdateQuerySuggestionsConfigCommand extends $Command<
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
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

  constructor(readonly input: UpdateQuerySuggestionsConfigCommandInput) {
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
  ): Handler<UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQuerySuggestionsConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UpdateQuerySuggestionsConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateQuerySuggestionsConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateQuerySuggestionsConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateQuerySuggestionsConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput> {
    return deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
