import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { UpdateApiCacheRequest, UpdateApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApiCacheCommand,
  serializeAws_restJson1UpdateApiCacheCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateApiCacheCommandInput extends UpdateApiCacheRequest {}
export interface UpdateApiCacheCommandOutput extends UpdateApiCacheResponse, __MetadataBearer {}

/**
 * <p>Updates the cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateApiCacheCommand extends $Command<
  UpdateApiCacheCommandInput,
  UpdateApiCacheCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateApiCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApiCacheResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApiCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApiCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApiCacheCommandOutput> {
    return deserializeAws_restJson1UpdateApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
