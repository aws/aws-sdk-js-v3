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

import {
  ListLexiconsInput,
  ListLexiconsInputFilterSensitiveLog,
  ListLexiconsOutput,
  ListLexiconsOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1ListLexiconsCommand,
  serializeAws_restJson1ListLexiconsCommand,
} from "../protocols/Aws_restJson1";

export interface ListLexiconsCommandInput extends ListLexiconsInput {}
export interface ListLexiconsCommandOutput extends ListLexiconsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListLexiconsCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListLexiconsCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLexiconsCommandInput} for command's `input` shape.
 * @see {@link ListLexiconsCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 */
export class ListLexiconsCommand extends $Command<
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput,
  PollyClientResolvedConfig
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

  constructor(readonly input: ListLexiconsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLexiconsCommandInput, ListLexiconsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLexiconsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListLexiconsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLexiconsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListLexiconsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLexiconsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLexiconsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLexiconsCommandOutput> {
    return deserializeAws_restJson1ListLexiconsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
