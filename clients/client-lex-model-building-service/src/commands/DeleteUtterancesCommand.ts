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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteUtterancesRequest, DeleteUtterancesRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteUtterancesCommand,
  serializeAws_restJson1DeleteUtterancesCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteUtterancesCommandInput extends DeleteUtterancesRequest {}
export interface DeleteUtterancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes stored utterances.</p>
 *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
 *       are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the
 *       ability of your bot to respond to user input.</p>
 *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
 *       stored utterances for a specific user. When you use the
 *         <code>DeleteUtterances</code> operation, utterances stored for improving
 *       your bot's ability to respond to user input are deleted immediately.
 *       Utterances stored for use with the <code>GetUtterancesView</code>
 *       operation are deleted after 15 days.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteUtterances</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteUtterancesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteUtterancesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteUtterancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUtterancesCommandInput} for command's `input` shape.
 * @see {@link DeleteUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class DeleteUtterancesCommand extends $Command<
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: DeleteUtterancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteUtterancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteUtterancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUtterancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUtterancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUtterancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUtterancesCommandOutput> {
    return deserializeAws_restJson1DeleteUtterancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
