import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpdateAnswerInput, UpdateAnswerOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAnswerCommand,
  serializeAws_restJson1UpdateAnswerCommand,
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

export interface UpdateAnswerCommandInput extends UpdateAnswerInput {}
export interface UpdateAnswerCommandOutput extends UpdateAnswerOutput, __MetadataBearer {}

/**
 * <p>Update the answer to a specific question in a workload review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnswerCommandInput} for command's `input` shape.
 * @see {@link UpdateAnswerCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAnswerCommand extends $Command<
  UpdateAnswerCommandInput,
  UpdateAnswerCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAnswerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAnswerCommandInput, UpdateAnswerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateAnswerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAnswerInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAnswerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAnswerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAnswerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAnswerCommandOutput> {
    return deserializeAws_restJson1UpdateAnswerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
