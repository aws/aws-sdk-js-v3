import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetExperimentTemplateRequest, GetExperimentTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetExperimentTemplateCommand,
  serializeAws_restJson1GetExperimentTemplateCommand,
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

export interface GetExperimentTemplateCommandInput extends GetExperimentTemplateRequest {}
export interface GetExperimentTemplateCommandOutput extends GetExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link GetExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetExperimentTemplateCommand extends $Command<
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
  FisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExperimentTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExperimentTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentTemplateCommandOutput> {
    return deserializeAws_restJson1GetExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
