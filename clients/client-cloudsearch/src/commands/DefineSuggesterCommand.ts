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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import {
  DefineSuggesterRequest,
  DefineSuggesterRequestFilterSensitiveLog,
  DefineSuggesterResponse,
  DefineSuggesterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDefineSuggesterCommand,
  serializeAws_queryDefineSuggesterCommand,
} from "../protocols/Aws_query";

export interface DefineSuggesterCommandInput extends DefineSuggesterRequest {}
export interface DefineSuggesterCommandOutput extends DefineSuggesterResponse, __MetadataBearer {}

/**
 * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineSuggesterCommandInput} for command's `input` shape.
 * @see {@link DefineSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class DefineSuggesterCommand extends $Command<
  DefineSuggesterCommandInput,
  DefineSuggesterCommandOutput,
  CloudSearchClientResolvedConfig
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

  constructor(readonly input: DefineSuggesterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DefineSuggesterCommandInput, DefineSuggesterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DefineSuggesterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineSuggesterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineSuggesterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DefineSuggesterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineSuggesterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineSuggesterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineSuggesterCommandOutput> {
    return deserializeAws_queryDefineSuggesterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
