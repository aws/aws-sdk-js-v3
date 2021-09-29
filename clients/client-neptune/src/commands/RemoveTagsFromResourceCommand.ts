import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RemoveTagsFromResourceMessage } from "../models/models_0";
import {
  deserializeAws_queryRemoveTagsFromResourceCommand,
  serializeAws_queryRemoveTagsFromResourceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface RemoveTagsFromResourceCommandInput extends RemoveTagsFromResourceMessage {}
export interface RemoveTagsFromResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes metadata tags from an Amazon Neptune resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveTagsFromResourceCommand extends $Command<
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTagsFromResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RemoveTagsFromResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTagsFromResourceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveTagsFromResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveTagsFromResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTagsFromResourceCommandOutput> {
    return deserializeAws_queryRemoveTagsFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
