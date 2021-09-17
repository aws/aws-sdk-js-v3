import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyRequest, GetJourneyResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetJourneyCommand,
  serializeAws_restJson1GetJourneyCommand,
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

export interface GetJourneyCommandInput extends GetJourneyRequest {}
export interface GetJourneyCommandOutput extends GetJourneyResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status, configuration, and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyCommandInput} for command's `input` shape.
 * @see {@link GetJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetJourneyCommand extends $Command<
  GetJourneyCommandInput,
  GetJourneyCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJourneyCommandInput) {
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
  ): Handler<GetJourneyCommandInput, GetJourneyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJourneyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJourneyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJourneyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJourneyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJourneyCommandOutput> {
    return deserializeAws_restJson1GetJourneyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
