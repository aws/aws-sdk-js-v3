import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeCacheInput, DescribeCacheOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCacheCommand,
  serializeAws_json1_1DescribeCacheCommand,
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

export type DescribeCacheCommandInput = DescribeCacheInput;
export type DescribeCacheCommandOutput = DescribeCacheOutput & __MetadataBearer;

/**
 * <p>Returns information about the cache of a gateway. This operation is only supported in
 *          the cached volume, tape, and file gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
 *          of cache allocated and used.</p>
 */
export class DescribeCacheCommand extends $Command<
  DescribeCacheCommandInput,
  DescribeCacheCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCacheCommandInput) {
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
  ): Handler<DescribeCacheCommandInput, DescribeCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCacheInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCacheOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCacheCommandOutput> {
    return deserializeAws_json1_1DescribeCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
