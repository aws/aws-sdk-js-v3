import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ResetDistributionCacheRequest, ResetDistributionCacheResult } from "../models/models_1";
import {
  deserializeAws_json1_1ResetDistributionCacheCommand,
  serializeAws_json1_1ResetDistributionCacheCommand,
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

export interface ResetDistributionCacheCommandInput extends ResetDistributionCacheRequest {}
export interface ResetDistributionCacheCommandOutput extends ResetDistributionCacheResult, __MetadataBearer {}

/**
 * <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After resetting the cache, the next time a content request is made, your distribution
 *       pulls, serves, and caches it from the origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ResetDistributionCacheCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ResetDistributionCacheCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ResetDistributionCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDistributionCacheCommandInput} for command's `input` shape.
 * @see {@link ResetDistributionCacheCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetDistributionCacheCommand extends $Command<
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetDistributionCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetDistributionCacheCommandInput, ResetDistributionCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ResetDistributionCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetDistributionCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetDistributionCacheResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetDistributionCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResetDistributionCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetDistributionCacheCommandOutput> {
    return deserializeAws_json1_1ResetDistributionCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
