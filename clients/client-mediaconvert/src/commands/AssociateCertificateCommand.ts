import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { AssociateCertificateRequest, AssociateCertificateResponse } from "../models/models_1";
import {
  deserializeAws_restJson1AssociateCertificateCommand,
  serializeAws_restJson1AssociateCertificateCommand,
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

export interface AssociateCertificateCommandInput extends AssociateCertificateRequest {}
export interface AssociateCertificateCommandOutput extends AssociateCertificateResponse, __MetadataBearer {}

/**
 * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, AssociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, AssociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateCertificateCommand extends $Command<
  AssociateCertificateCommandInput,
  AssociateCertificateCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateCertificateCommandInput) {
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
  ): Handler<AssociateCertificateCommandInput, AssociateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "AssociateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCertificateCommandOutput> {
    return deserializeAws_restJson1AssociateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
