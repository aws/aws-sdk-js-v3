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
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import { de_CreateCacheParameterGroupCommand, se_CreateCacheParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCacheParameterGroupCommand}.
 */
export interface CreateCacheParameterGroupCommandInput extends CreateCacheParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheParameterGroupCommand}.
 */
export interface CreateCacheParameterGroupCommandOutput extends CreateCacheParameterGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter
 *             group is a collection of parameters and their values that are applied to all of the
 *             nodes in any cluster or replication group using the CacheParameterGroup.</p>
 *          <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter
 *             group for the CacheParameterGroupFamily. To customize the newly created
 *             CacheParameterGroup you can change the values of specific parameters. For more
 *             information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and
 *                         Parameter Groups</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheParameterGroupMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   CacheParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheParameterGroupResult
 * //   CacheParameterGroup: { // CacheParameterGroup
 * //     CacheParameterGroupName: "STRING_VALUE",
 * //     CacheParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     IsGlobal: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCacheParameterGroupCommandInput - {@link CreateCacheParameterGroupCommandInput}
 * @returns {@link CreateCacheParameterGroupCommandOutput}
 * @see {@link CreateCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A cache parameter group with the requested name already exists.</p>
 *
 * @throws {@link CacheParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of cache
 *             security groups.</p>
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *  <p>The current state of the cache parameter group does not allow the requested operation
 *             to occur.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CreateCacheParameterGroup
 * ```javascript
 * // Creates the Amazon ElastiCache parameter group custom-redis2-8.
 * const input = {
 *   "CacheParameterGroupFamily": "redis2.8",
 *   "CacheParameterGroupName": "custom-redis2-8",
 *   "Description": "Custom Redis 2.8 parameter group."
 * };
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheParameterGroup": {
 *     "CacheParameterGroupFamily": "redis2.8",
 *     "CacheParameterGroupName": "custom-redis2-8",
 *     "Description": "Custom Redis 2.8 parameter group."
 *   }
 * }
 * *\/
 * // example id: createcacheparametergroup-1474997699362
 * ```
 *
 */
export class CreateCacheParameterGroupCommand extends $Command<
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
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
  constructor(readonly input: CreateCacheParameterGroupCommandInput) {
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
  ): Handler<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CreateCacheParameterGroup",
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
  private serialize(input: CreateCacheParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCacheParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCacheParameterGroupCommandOutput> {
    return de_CreateCacheParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
