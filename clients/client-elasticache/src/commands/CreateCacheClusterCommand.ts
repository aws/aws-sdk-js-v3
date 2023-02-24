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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  CreateCacheClusterMessage,
  CreateCacheClusterMessageFilterSensitiveLog,
  CreateCacheClusterResult,
  CreateCacheClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateCacheClusterCommand,
  serializeAws_queryCreateCacheClusterCommand,
} from "../protocols/Aws_query";

export interface CreateCacheClusterCommandInput extends CreateCacheClusterMessage {}
export interface CreateCacheClusterCommandOutput extends CreateCacheClusterResult, __MetadataBearer {}

/**
 * <p>Creates a cluster. All nodes in the
 *             cluster run the same protocol-compliant cache engine software, either Memcached
 *             or Redis.</p>
 *          <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class CreateCacheClusterCommand extends $Command<
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: CreateCacheClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCacheClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCacheClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheClusterCommandOutput> {
    return deserializeAws_queryCreateCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
