import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { GetJobTemplateRequest, GetJobTemplateResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetJobTemplateCommand,
  serializeAws_restJson1GetJobTemplateCommand,
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

export interface GetJobTemplateCommandInput extends GetJobTemplateRequest {}
export interface GetJobTemplateCommandOutput extends GetJobTemplateResponse, __MetadataBearer {}

/**
 * Retrieve the JSON for a specific job template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobTemplateCommandInput} for command's `input` shape.
 * @see {@link GetJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetJobTemplateCommand extends $Command<
  GetJobTemplateCommandInput,
  GetJobTemplateCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobTemplateCommandInput, GetJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "GetJobTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJobTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobTemplateCommandOutput> {
    return deserializeAws_restJson1GetJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
