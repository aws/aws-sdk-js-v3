import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateProgramRequest, CreateProgramResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateProgramCommand,
  serializeAws_restJson1CreateProgramCommand,
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

export interface CreateProgramCommandInput extends CreateProgramRequest {}
export interface CreateProgramCommandOutput extends CreateProgramResponse, __MetadataBearer {}

/**
 * <p>Creates a program.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProgramCommandInput} for command's `input` shape.
 * @see {@link CreateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateProgramCommand extends $Command<
  CreateProgramCommandInput,
  CreateProgramCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProgramCommandInput, CreateProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "CreateProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProgramRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProgramResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProgramCommandOutput> {
    return deserializeAws_restJson1CreateProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
