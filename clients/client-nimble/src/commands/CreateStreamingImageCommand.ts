import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStreamingImageRequest, CreateStreamingImageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateStreamingImageCommand,
  serializeAws_restJson1CreateStreamingImageCommand,
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

export interface CreateStreamingImageCommandInput extends CreateStreamingImageRequest {}
export interface CreateStreamingImageCommandOutput extends CreateStreamingImageResponse, __MetadataBearer {}

/**
 * <p>Creates a streaming image resource in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingImageCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStreamingImageCommand extends $Command<
  CreateStreamingImageCommandInput,
  CreateStreamingImageCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamingImageCommandInput) {
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
  ): Handler<CreateStreamingImageCommandInput, CreateStreamingImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStreamingImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamingImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStreamingImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStreamingImageCommandOutput> {
    return deserializeAws_restJson1CreateStreamingImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
