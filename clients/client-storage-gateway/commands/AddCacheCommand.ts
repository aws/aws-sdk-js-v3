import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddCacheInput, AddCacheOutput } from "../models/models_0";
import { deserializeAws_json1_1AddCacheCommand, serializeAws_json1_1AddCacheCommand } from "../protocols/Aws_json1_1";
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

export type AddCacheCommandInput = AddCacheInput;
export type AddCacheCommandOutput = AddCacheOutput & __MetadataBearer;

/**
 * <p>Configures one or more gateway local disks as cache for a gateway. This operation is
 *          only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How AWS Storage Gateway works (architecture)</a>.</p>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add cache, and one or more disk IDs that you want to configure as cache.</p>
 */
export class AddCacheCommand extends $Command<
  AddCacheCommandInput,
  AddCacheCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddCacheCommandInput) {
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
  ): Handler<AddCacheCommandInput, AddCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AddCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddCacheInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddCacheOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddCacheCommandOutput> {
    return deserializeAws_json1_1AddCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
