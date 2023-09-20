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
import { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/models_0";
import { de_DescribeCacheParameterGroupsCommand, se_DescribeCacheParameterGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheParameterGroupsCommand}.
 */
export interface DescribeCacheParameterGroupsCommandInput extends DescribeCacheParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheParameterGroupsCommand}.
 */
export interface DescribeCacheParameterGroupsCommandOutput extends CacheParameterGroupsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of cache parameter group descriptions. If a cache parameter group name
 *             is specified, the list contains only the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParameterGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParameterGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheParameterGroupsMessage
 *   CacheParameterGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheParameterGroups: [ // CacheParameterGroupList
 * //     { // CacheParameterGroup
 * //       CacheParameterGroupName: "STRING_VALUE",
 * //       CacheParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsGlobal: true || false,
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheParameterGroupsCommandInput - {@link DescribeCacheParameterGroupsCommandInput}
 * @returns {@link DescribeCacheParameterGroupsCommandOutput}
 * @see {@link DescribeCacheParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeCacheParameterGroups
 * ```javascript
 * // Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
 * const input = {
 *   "CacheParameterGroupName": "custom-mem1-4"
 * };
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheParameterGroups": [
 *     {
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "CacheParameterGroupName": "custom-mem1-4",
 *       "Description": "Custom memcache param group"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describecacheparametergroups-1483045457557
 * ```
 *
 */
export class DescribeCacheParameterGroupsCommand extends $Command<
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
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
  constructor(readonly input: DescribeCacheParameterGroupsCommandInput) {
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
  ): Handler<DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheParameterGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeCacheParameterGroups",
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
  private serialize(input: DescribeCacheParameterGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheParameterGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheParameterGroupsCommandOutput> {
    return de_DescribeCacheParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
