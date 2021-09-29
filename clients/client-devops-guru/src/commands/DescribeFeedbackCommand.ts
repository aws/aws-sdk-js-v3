import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { DescribeFeedbackRequest, DescribeFeedbackResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFeedbackCommand,
  serializeAws_restJson1DescribeFeedbackCommand,
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

export interface DescribeFeedbackCommandInput extends DescribeFeedbackRequest {}
export interface DescribeFeedbackCommandOutput extends DescribeFeedbackResponse, __MetadataBearer {}

/**
 * <p>
 * 			Returns the most recent feedback submitted in the current AWS account and Region.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeFeedbackCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeFeedbackCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeFeedbackCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFeedbackCommand extends $Command<
  DescribeFeedbackCommandInput,
  DescribeFeedbackCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFeedbackCommandOutput> {
    return deserializeAws_restJson1DescribeFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
