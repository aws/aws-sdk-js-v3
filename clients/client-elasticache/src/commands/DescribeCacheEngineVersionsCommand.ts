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
  CacheEngineVersionMessage,
  CacheEngineVersionMessageFilterSensitiveLog,
  DescribeCacheEngineVersionsMessage,
  DescribeCacheEngineVersionsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeCacheEngineVersionsCommand,
  serializeAws_queryDescribeCacheEngineVersionsCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandInput extends DescribeCacheEngineVersionsMessage {}
/**
 * The output of {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandOutput extends CacheEngineVersionMessage, __MetadataBearer {}

/**
 * <p>Returns a list of the available cache
 *             engines and their versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheEngineVersionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheEngineVersionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @example DescribeCacheEngineVersions
 * ```javascript
 * // Lists the details for up to 25 Memcached and Redis cache engine versions.
 * const input = {};
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheEngineVersions": [
 *     {
 *       "CacheEngineDescription": "memcached",
 *       "CacheEngineVersionDescription": "memcached version 1.4.14",
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "Engine": "memcached",
 *       "EngineVersion": "1.4.14"
 *     },
 *     {
 *       "CacheEngineDescription": "memcached",
 *       "CacheEngineVersionDescription": "memcached version 1.4.24",
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "Engine": "memcached",
 *       "EngineVersion": "1.4.24"
 *     },
 *     {
 *       "CacheEngineDescription": "memcached",
 *       "CacheEngineVersionDescription": "memcached version 1.4.33",
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "Engine": "memcached",
 *       "EngineVersion": "1.4.33"
 *     },
 *     {
 *       "CacheEngineDescription": "memcached",
 *       "CacheEngineVersionDescription": "memcached version 1.4.5",
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "Engine": "memcached",
 *       "EngineVersion": "1.4.5"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.6.13",
 *       "CacheParameterGroupFamily": "redis2.6",
 *       "Engine": "redis",
 *       "EngineVersion": "2.6.13"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.19",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.19"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.21",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.21"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.22 R5",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.22"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.23 R4",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.23"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.24 R3",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.24"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 2.8.6",
 *       "CacheParameterGroupFamily": "redis2.8",
 *       "Engine": "redis",
 *       "EngineVersion": "2.8.6"
 *     },
 *     {
 *       "CacheEngineDescription": "Redis",
 *       "CacheEngineVersionDescription": "redis version 3.2.4",
 *       "CacheParameterGroupFamily": "redis3.2",
 *       "Engine": "redis",
 *       "EngineVersion": "3.2.4"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describecacheengineversions-1475012638790
 * ```
 *
 */
export class DescribeCacheEngineVersionsCommand extends $Command<
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
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

  constructor(readonly input: DescribeCacheEngineVersionsCommandInput) {
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
  ): Handler<DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheEngineVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheEngineVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCacheEngineVersionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CacheEngineVersionMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCacheEngineVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCacheEngineVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheEngineVersionsCommandOutput> {
    return deserializeAws_queryDescribeCacheEngineVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
