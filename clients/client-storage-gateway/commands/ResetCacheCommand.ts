import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ResetCacheInput, ResetCacheOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ResetCacheCommand,
  serializeAws_json1_1ResetCacheCommand,
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

export type ResetCacheCommandInput = ResetCacheInput;
export type ResetCacheCommandOutput = ResetCacheOutput & __MetadataBearer;

/**
 * <p>Resets all cache disks that have encountered an error and makes the disks available for
 *          reconfiguration as cache storage. If your cache disk encounters an error, the gateway
 *          prevents read and write operations on virtual tapes in the gateway. For example, an error
 *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
 *          gateway loses its cache storage. At this point, you can reconfigure the disks as cache
 *          disks. This operation is only supported in the cached volume and tape types.</p>
 *
 *          <important>
 *             <p>If the cache disk you are resetting contains data that has not been uploaded to
 *             Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no
 *             configured cache disks left in the gateway, so you must configure at least one new cache
 *             disk for your gateway to function properly.</p>
 *          </important>
 */
export class ResetCacheCommand extends $Command<
  ResetCacheCommandInput,
  ResetCacheCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetCacheCommandInput) {
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
  ): Handler<ResetCacheCommandInput, ResetCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ResetCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetCacheInput.filterSensitiveLog,
      outputFilterSensitiveLog: ResetCacheOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResetCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetCacheCommandOutput> {
    return deserializeAws_json1_1ResetCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
