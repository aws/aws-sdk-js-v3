import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyDateRangeKpiRequest, GetJourneyDateRangeKpiResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetJourneyDateRangeKpiCommand,
  serializeAws_restJson1GetJourneyDateRangeKpiCommand,
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

export interface GetJourneyDateRangeKpiCommandInput extends GetJourneyDateRangeKpiRequest {}
export interface GetJourneyDateRangeKpiCommandOutput extends GetJourneyDateRangeKpiResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetJourneyDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetJourneyDateRangeKpiCommand extends $Command<
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJourneyDateRangeKpiCommandInput) {
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
  ): Handler<GetJourneyDateRangeKpiCommandInput, GetJourneyDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyDateRangeKpiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJourneyDateRangeKpiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJourneyDateRangeKpiResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJourneyDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJourneyDateRangeKpiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJourneyDateRangeKpiCommandOutput> {
    return deserializeAws_restJson1GetJourneyDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
