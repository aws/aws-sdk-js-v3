import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeWorkingStorageInput, DescribeWorkingStorageOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkingStorageCommand,
  serializeAws_json1_1DescribeWorkingStorageCommand,
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

export type DescribeWorkingStorageCommandInput = DescribeWorkingStorageInput;
export type DescribeWorkingStorageCommandOutput = DescribeWorkingStorageOutput & __MetadataBearer;

/**
 * <p>Returns information about the working storage of a gateway. This operation is only
 *          supported in the stored volumes gateway type. This operation is deprecated in cached
 *          volumes API version (20120630). Use DescribeUploadBuffer instead.</p>
 *
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the
 *             DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p>
 *          </note>
 *
 *          <p>The response includes disk IDs that are configured as working storage, and it includes
 *          the amount of working storage allocated and used.</p>
 */
export class DescribeWorkingStorageCommand extends $Command<
  DescribeWorkingStorageCommandInput,
  DescribeWorkingStorageCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkingStorageCommandInput) {
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
  ): Handler<DescribeWorkingStorageCommandInput, DescribeWorkingStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeWorkingStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkingStorageInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkingStorageOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkingStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkingStorageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkingStorageCommandOutput> {
    return deserializeAws_json1_1DescribeWorkingStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
