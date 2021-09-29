import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateClassificationJobRequest, UpdateClassificationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClassificationJobCommand,
  serializeAws_restJson1UpdateClassificationJobCommand,
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

export interface UpdateClassificationJobCommandInput extends UpdateClassificationJobRequest {}
export interface UpdateClassificationJobCommandOutput extends UpdateClassificationJobResponse, __MetadataBearer {}

/**
 * <p>Changes the status of a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateClassificationJobCommand extends $Command<
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClassificationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClassificationJobCommandInput, UpdateClassificationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateClassificationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClassificationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClassificationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClassificationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateClassificationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClassificationJobCommandOutput> {
    return deserializeAws_restJson1UpdateClassificationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
