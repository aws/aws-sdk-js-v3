// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/models_0";
import { de_DescribeCacheEngineVersionsCommand, se_DescribeCacheEngineVersionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandInput extends DescribeCacheEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandOutput extends CacheEngineVersionMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the available cache engines and their versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheEngineVersionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheEngineVersionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheEngineVersionsMessage
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   CacheParameterGroupFamily: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DefaultOnly: true || false,
 * };
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // CacheEngineVersionMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheEngineVersions: [ // CacheEngineVersionList
 * //     { // CacheEngineVersion
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheParameterGroupFamily: "STRING_VALUE",
 * //       CacheEngineDescription: "STRING_VALUE",
 * //       CacheEngineVersionDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheEngineVersionsCommandInput - {@link DescribeCacheEngineVersionsCommandInput}
 * @returns {@link DescribeCacheEngineVersionsCommandOutput}
 * @see {@link DescribeCacheEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeCacheEngineVersions",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeCacheEngineVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheEngineVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheEngineVersionsCommandOutput> {
    return de_DescribeCacheEngineVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
