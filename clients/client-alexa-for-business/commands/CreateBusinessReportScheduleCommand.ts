import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateBusinessReportScheduleRequest, CreateBusinessReportScheduleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBusinessReportScheduleCommand,
  serializeAws_json1_1CreateBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";
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

export interface CreateBusinessReportScheduleCommandInput extends CreateBusinessReportScheduleRequest {}
export interface CreateBusinessReportScheduleCommandOutput
  extends CreateBusinessReportScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
 *          location with a specified daily or weekly interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBusinessReportScheduleCommand extends $Command<
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBusinessReportScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBusinessReportScheduleCommandInput, CreateBusinessReportScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "CreateBusinessReportScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBusinessReportScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBusinessReportScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBusinessReportScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateBusinessReportScheduleCommandOutput> {
    return deserializeAws_json1_1CreateBusinessReportScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
