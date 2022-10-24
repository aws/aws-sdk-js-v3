// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  ResetDistributionCacheRequest,
  ResetDistributionCacheRequestFilterSensitiveLog,
  ResetDistributionCacheResult,
  ResetDistributionCacheResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ResetDistributionCacheCommand,
  serializeAws_json1_1ResetDistributionCacheCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class ResetDistributionCacheCommand extends $Command<
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetDistributionCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ResetDistributionCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetDistributionCacheRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetDistributionCacheResultFilterSensitiveLog,
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
