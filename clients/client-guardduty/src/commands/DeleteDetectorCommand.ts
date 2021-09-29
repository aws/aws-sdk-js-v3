import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteDetectorRequest, DeleteDetectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDetectorCommand,
  serializeAws_restJson1DeleteDetectorCommand,
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

export interface DeleteDetectorCommandInput extends DeleteDetectorRequest {}
export interface DeleteDetectorCommandOutput extends DeleteDetectorResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDetectorCommand extends $Command<
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDetectorCommandInput, DeleteDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DeleteDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDetectorCommandOutput> {
    return deserializeAws_restJson1DeleteDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
