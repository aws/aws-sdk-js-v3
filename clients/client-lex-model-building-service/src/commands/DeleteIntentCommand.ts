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
import { DeleteIntentRequest, DeleteIntentRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIntentCommand,
  serializeAws_restJson1DeleteIntentCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteIntentCommandInput extends DeleteIntentRequest {}
export interface DeleteIntentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes all versions of the intent, including the
 *         <code>$LATEST</code> version. To delete a specific version of the
 *       intent, use the <a>DeleteIntentVersion</a> operation.</p>
 *          <p> You can delete a version of an intent only if it is not
 *       referenced. To delete an intent that is referred to in one or more bots
 *       (see <a>how-it-works</a>), you must remove those references
 *       first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception, it
 *         provides an example reference that shows where the intent is referenced.
 *         To remove the reference to the intent, either update the bot or delete
 *         it. If you get the same exception when you attempt to delete the intent
 *         again, repeat until the intent has no references and the call to
 *           <code>DeleteIntent</code> is successful. </p>
 *          </note>
 *
 *          <p> This operation requires permission for the
 *         <code>lex:DeleteIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class DeleteIntentCommand extends $Command<
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
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

  constructor(readonly input: DeleteIntentCommandInput) {
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
  ): Handler<DeleteIntentCommandInput, DeleteIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteIntentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIntentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIntentCommandOutput> {
    return deserializeAws_restJson1DeleteIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
