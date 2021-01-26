import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddWorkingStorageInput, AddWorkingStorageOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AddWorkingStorageCommand,
  serializeAws_json1_1AddWorkingStorageCommand,
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

export type AddWorkingStorageCommandInput = AddWorkingStorageInput;
export type AddWorkingStorageCommandOutput = AddWorkingStorageOutput & __MetadataBearer;

/**
 * <p>Configures one or more gateway local disks as working storage for a gateway. This
 *          operation is only supported in the stored volume gateway type. This operation is deprecated
 *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
 *          instead.</p>
 *
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
 *             gateway.</p>
 *          </note>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add working storage, and one or more disk IDs that you want to configure as working
 *          storage.</p>
 */
export class AddWorkingStorageCommand extends $Command<
  AddWorkingStorageCommandInput,
  AddWorkingStorageCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddWorkingStorageCommandInput) {
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
  ): Handler<AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AddWorkingStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddWorkingStorageInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddWorkingStorageOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddWorkingStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddWorkingStorageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddWorkingStorageCommandOutput> {
    return deserializeAws_json1_1AddWorkingStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
