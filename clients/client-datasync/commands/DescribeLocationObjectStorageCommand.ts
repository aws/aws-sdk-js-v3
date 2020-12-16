import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationObjectStorageRequest, DescribeLocationObjectStorageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLocationObjectStorageCommand,
  serializeAws_json1_1DescribeLocationObjectStorageCommand,
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

export type DescribeLocationObjectStorageCommandInput = DescribeLocationObjectStorageRequest;
export type DescribeLocationObjectStorageCommandOutput = DescribeLocationObjectStorageResponse & __MetadataBearer;

/**
 * <p>Returns metadata about a self-managed object storage server location. For more information
 *       about self-managed object storage locations, see <a>create-object-location</a>.</p>
 */
export class DescribeLocationObjectStorageCommand extends $Command<
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocationObjectStorageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationObjectStorageCommandInput, DescribeLocationObjectStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationObjectStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocationObjectStorageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocationObjectStorageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocationObjectStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationObjectStorageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationObjectStorageCommandOutput> {
    return deserializeAws_json1_1DescribeLocationObjectStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
