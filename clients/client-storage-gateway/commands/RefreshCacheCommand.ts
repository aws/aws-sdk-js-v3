import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RefreshCacheInput, RefreshCacheOutput } from "../models/models_0";
import {
  deserializeAws_json1_1RefreshCacheCommand,
  serializeAws_json1_1RefreshCacheCommand,
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

export type RefreshCacheCommandInput = RefreshCacheInput;
export type RefreshCacheCommandOutput = RefreshCacheOutput & __MetadataBearer;

/**
 * <p>Refreshes the cache for the specified file share. This operation finds objects in the
 *          Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the
 *          bucket's contents and cached the results. This operation is only supported in the file
 *          gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your
 *          RefreshCache operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 *
 *          <p>When this API is called, it only initiates the refresh operation. When the API call
 *          completes and returns a success code, it doesn't necessarily mean that the file
 *          refresh has completed. You should use the refresh-complete notification to determine that
 *          the operation has completed before you check for new files on the gateway file share. You
 *          can subscribe to be notified through an CloudWatch event when your
 *             <code>RefreshCache</code> operation completes.</p>
 *
 *          <p>Throttle limit: This API is asynchronous so the gateway will accept no more than two
 *          refreshes at any time. We recommend using the refresh-complete CloudWatch event
 *          notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 *
 *          <p>If you invoke the RefreshCache API when two requests are already being processed, any
 *          new request will cause an <code>InvalidGatewayRequestException</code> error because too
 *          many requests were sent to the server.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>AWS Storage Gateway
 *             User Guide</i>.</p>
 */
export class RefreshCacheCommand extends $Command<
  RefreshCacheCommandInput,
  RefreshCacheCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshCacheCommandInput) {
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
  ): Handler<RefreshCacheCommandInput, RefreshCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "RefreshCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshCacheInput.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshCacheOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshCacheCommandOutput> {
    return deserializeAws_json1_1RefreshCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
