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
  DeleteLexiconInput,
  DeleteLexiconInputFilterSensitiveLog,
  DeleteLexiconOutput,
  DeleteLexiconOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1DeleteLexiconCommand,
  serializeAws_restJson1DeleteLexiconCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteLexiconCommand}.
 */
export interface DeleteLexiconCommandInput extends DeleteLexiconInput {}
/**
 * The output of {@link DeleteLexiconCommand}.
 */
export interface DeleteLexiconCommandOutput extends DeleteLexiconOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for
 *       speech synthesis, nor is it possible to retrieve it using either the
 *         <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, DeleteLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, DeleteLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new DeleteLexiconCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLexiconCommandInput} for command's `input` shape.
 * @see {@link DeleteLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link LexiconNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 *
 * @example To delete a lexicon
 * ```javascript
 * // Deletes a specified pronunciation lexicon stored in an AWS Region.
 * const input = {
 *   "Name": "example"
 * };
 * const command = new DeleteLexiconCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-lexicon-1481922498332
 * ```
 *
 */
export class DeleteLexiconCommand extends $Command<
  DeleteLexiconCommandInput,
  DeleteLexiconCommandOutput,
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

  constructor(readonly input: DeleteLexiconCommandInput) {
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
  ): Handler<DeleteLexiconCommandInput, DeleteLexiconCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLexiconCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "DeleteLexiconCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLexiconInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLexiconOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLexiconCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLexiconCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLexiconCommandOutput> {
    return deserializeAws_restJson1DeleteLexiconCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
