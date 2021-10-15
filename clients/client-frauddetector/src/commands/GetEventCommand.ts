import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetEventRequest, GetEventResult } from "../models/models_0";
import { deserializeAws_json1_1GetEventCommand, serializeAws_json1_1GetEventCommand } from "../protocols/Aws_json1_1";

export interface GetEventCommandInput extends GetEventRequest {}
export interface GetEventCommandOutput extends GetEventResult, __MetadataBearer {}

/**
 * <p>Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventCommandInput} for command's `input` shape.
 * @see {@link GetEventCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEventCommand extends $Command<
  GetEventCommandInput,
  GetEventCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventCommandInput, GetEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEventResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventCommandOutput> {
    return deserializeAws_json1_1GetEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
