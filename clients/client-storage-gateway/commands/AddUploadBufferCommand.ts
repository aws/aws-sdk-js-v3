import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddUploadBufferInput, AddUploadBufferOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AddUploadBufferCommand,
  serializeAws_json1_1AddUploadBufferCommand,
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

export type AddUploadBufferCommandInput = AddUploadBufferInput;
export type AddUploadBufferCommandOutput = AddUploadBufferOutput & __MetadataBearer;

/**
 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
 *          This operation is supported for the stored volume, cached volume and tape gateway
 *          types.</p>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add upload buffer, and one or more disk IDs that you want to configure as upload
 *          buffer.</p>
 */
export class AddUploadBufferCommand extends $Command<
  AddUploadBufferCommandInput,
  AddUploadBufferCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddUploadBufferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddUploadBufferCommandInput, AddUploadBufferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AddUploadBufferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddUploadBufferInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddUploadBufferOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddUploadBufferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddUploadBufferCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddUploadBufferCommandOutput> {
    return deserializeAws_json1_1AddUploadBufferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
