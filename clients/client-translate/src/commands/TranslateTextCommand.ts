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
  TranslateTextRequest,
  TranslateTextRequestFilterSensitiveLog,
  TranslateTextResponse,
  TranslateTextResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1TranslateTextCommand,
  serializeAws_json1_1TranslateTextCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

export interface TranslateTextCommandInput extends TranslateTextRequest {}
export interface TranslateTextCommandOutput extends TranslateTextResponse, __MetadataBearer {}

/**
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new TranslateTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TranslateTextCommandInput} for command's `input` shape.
 * @see {@link TranslateTextCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class TranslateTextCommand extends $Command<
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
  TranslateClientResolvedConfig
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

  constructor(readonly input: TranslateTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TranslateTextCommandInput, TranslateTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TranslateTextCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "TranslateTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TranslateTextRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TranslateTextResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TranslateTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TranslateTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TranslateTextCommandOutput> {
    return deserializeAws_json1_1TranslateTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
