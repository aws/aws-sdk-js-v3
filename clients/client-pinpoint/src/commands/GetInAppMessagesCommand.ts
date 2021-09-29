import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetInAppMessagesRequest, GetInAppMessagesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetInAppMessagesCommand,
  serializeAws_restJson1GetInAppMessagesCommand,
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

export interface GetInAppMessagesCommandInput extends GetInAppMessagesRequest {}
export interface GetInAppMessagesCommandOutput extends GetInAppMessagesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the in-app messages targeted for the provided endpoint ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetInAppMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetInAppMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetInAppMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInAppMessagesCommandInput} for command's `input` shape.
 * @see {@link GetInAppMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetInAppMessagesCommand extends $Command<
  GetInAppMessagesCommandInput,
  GetInAppMessagesCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInAppMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInAppMessagesCommandInput, GetInAppMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetInAppMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInAppMessagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInAppMessagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInAppMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInAppMessagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInAppMessagesCommandOutput> {
    return deserializeAws_restJson1GetInAppMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
