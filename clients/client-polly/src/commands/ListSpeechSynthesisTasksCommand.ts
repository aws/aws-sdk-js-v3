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

import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1ListSpeechSynthesisTasksCommand,
  serializeAws_restJson1ListSpeechSynthesisTasksCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListSpeechSynthesisTasksCommand}.
 */
export interface ListSpeechSynthesisTasksCommandInput extends ListSpeechSynthesisTasksInput {}
/**
 * @public
 *
 * The output of {@link ListSpeechSynthesisTasksCommand}.
 */
export interface ListSpeechSynthesisTasksCommandOutput extends ListSpeechSynthesisTasksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of SpeechSynthesisTask objects ordered by their
 *       creation date. This operation can filter the tasks by their status, for
 *       example, allowing users to list only tasks that are completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListSpeechSynthesisTasksCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListSpeechSynthesisTasksCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new ListSpeechSynthesisTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSpeechSynthesisTasksCommandInput - {@link ListSpeechSynthesisTasksCommandInput}
 * @returns {@link ListSpeechSynthesisTasksCommandOutput}
 * @see {@link ListSpeechSynthesisTasksCommandInput} for command's `input` shape.
 * @see {@link ListSpeechSynthesisTasksCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The NextToken is invalid. Verify that it's spelled correctly, and
 *       then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 *
 */
export class ListSpeechSynthesisTasksCommand extends $Command<
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListSpeechSynthesisTasksCommandInput) {
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
  ): Handler<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSpeechSynthesisTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListSpeechSynthesisTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListSpeechSynthesisTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSpeechSynthesisTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpeechSynthesisTasksCommandOutput> {
    return deserializeAws_restJson1ListSpeechSynthesisTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
