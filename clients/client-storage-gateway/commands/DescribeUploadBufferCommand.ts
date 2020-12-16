import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeUploadBufferInput, DescribeUploadBufferOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUploadBufferCommand,
  serializeAws_json1_1DescribeUploadBufferCommand,
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

export type DescribeUploadBufferCommandInput = DescribeUploadBufferInput;
export type DescribeUploadBufferCommandOutput = DescribeUploadBufferOutput & __MetadataBearer;

/**
 * <p>Returns information about the upload buffer of a gateway. This operation is supported
 *          for the stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as upload buffer space, and it
 *          includes the amount of upload buffer space allocated and used.</p>
 */
export class DescribeUploadBufferCommand extends $Command<
  DescribeUploadBufferCommandInput,
  DescribeUploadBufferCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUploadBufferCommandInput) {
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
  ): Handler<DescribeUploadBufferCommandInput, DescribeUploadBufferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeUploadBufferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUploadBufferInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUploadBufferOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUploadBufferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUploadBufferCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUploadBufferCommandOutput> {
    return deserializeAws_json1_1DescribeUploadBufferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
