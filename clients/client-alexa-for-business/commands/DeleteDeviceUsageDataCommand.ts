import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDeviceUsageDataCommand,
  serializeAws_json1_1DeleteDeviceUsageDataCommand,
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

export type DeleteDeviceUsageDataCommandInput = DeleteDeviceUsageDataRequest;
export type DeleteDeviceUsageDataCommandOutput = DeleteDeviceUsageDataResponse & __MetadataBearer;

/**
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 */
export class DeleteDeviceUsageDataCommand extends $Command<
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDeviceUsageDataCommandInput) {
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
  ): Handler<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteDeviceUsageDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeviceUsageDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceUsageDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeviceUsageDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDeviceUsageDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeviceUsageDataCommandOutput> {
    return deserializeAws_json1_1DeleteDeviceUsageDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
