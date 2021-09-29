import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { GetDeviceFleetReportRequest, GetDeviceFleetReportResponse } from "../models/models_2";
import {
  deserializeAws_json1_1GetDeviceFleetReportCommand,
  serializeAws_json1_1GetDeviceFleetReportCommand,
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

export interface GetDeviceFleetReportCommandInput extends GetDeviceFleetReportRequest {}
export interface GetDeviceFleetReportCommandOutput extends GetDeviceFleetReportResponse, __MetadataBearer {}

/**
 * <p>Describes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetDeviceFleetReportCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetDeviceFleetReportCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetDeviceFleetReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceFleetReportCommandInput} for command's `input` shape.
 * @see {@link GetDeviceFleetReportCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDeviceFleetReportCommand extends $Command<
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeviceFleetReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceFleetReportCommandInput, GetDeviceFleetReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetDeviceFleetReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceFleetReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceFleetReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceFleetReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDeviceFleetReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceFleetReportCommandOutput> {
    return deserializeAws_json1_1GetDeviceFleetReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
