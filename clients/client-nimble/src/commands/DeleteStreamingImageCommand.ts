import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStreamingImageRequest, DeleteStreamingImageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteStreamingImageCommand,
  serializeAws_restJson1DeleteStreamingImageCommand,
} from "../protocols/Aws_restJson1";
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

export interface DeleteStreamingImageCommandInput extends DeleteStreamingImageRequest {}
export interface DeleteStreamingImageCommandOutput extends DeleteStreamingImageResponse, __MetadataBearer {}

/**
 * <p>Delete streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingImageCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteStreamingImageCommand extends $Command<
  DeleteStreamingImageCommandInput,
  DeleteStreamingImageCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStreamingImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStreamingImageCommandInput, DeleteStreamingImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "DeleteStreamingImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamingImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStreamingImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamingImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteStreamingImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamingImageCommandOutput> {
    return deserializeAws_restJson1DeleteStreamingImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
