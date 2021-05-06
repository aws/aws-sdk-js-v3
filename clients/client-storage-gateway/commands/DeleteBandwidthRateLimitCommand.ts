import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBandwidthRateLimitCommand,
  serializeAws_json1_1DeleteBandwidthRateLimitCommand,
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

export interface DeleteBandwidthRateLimitCommandInput extends DeleteBandwidthRateLimitInput {}
export interface DeleteBandwidthRateLimitCommandOutput extends DeleteBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 *          download bandwidth rate limit, or you can delete both. If you delete only one of the
 *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
 *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported for
 *          the stored volume, cached volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBandwidthRateLimitCommand extends $Command<
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBandwidthRateLimitCommandInput) {
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
  ): Handler<DeleteBandwidthRateLimitCommandInput, DeleteBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBandwidthRateLimitInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBandwidthRateLimitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBandwidthRateLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBandwidthRateLimitCommandOutput> {
    return deserializeAws_json1_1DeleteBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
