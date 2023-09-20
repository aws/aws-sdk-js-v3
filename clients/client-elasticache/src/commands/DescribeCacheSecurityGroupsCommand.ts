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
import { CacheSecurityGroupMessage, DescribeCacheSecurityGroupsMessage } from "../models/models_0";
import { de_DescribeCacheSecurityGroupsCommand, se_DescribeCacheSecurityGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheSecurityGroupsCommand}.
 */
export interface DescribeCacheSecurityGroupsCommandInput extends DescribeCacheSecurityGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheSecurityGroupsCommand}.
 */
export interface DescribeCacheSecurityGroupsCommandOutput extends CacheSecurityGroupMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of cache security group descriptions. If a cache security group name is
 *             specified, the list contains only the description of that group. This applicable only
 *             when you have ElastiCache in Classic setup </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheSecurityGroupsMessage
 *   CacheSecurityGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // CacheSecurityGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheSecurityGroups: [ // CacheSecurityGroups
 * //     { // CacheSecurityGroup
 * //       OwnerId: "STRING_VALUE",
 * //       CacheSecurityGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EC2SecurityGroups: [ // EC2SecurityGroupList
 * //         { // EC2SecurityGroup
 * //           Status: "STRING_VALUE",
 * //           EC2SecurityGroupName: "STRING_VALUE",
 * //           EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheSecurityGroupsCommandInput - {@link DescribeCacheSecurityGroupsCommandInput}
 * @returns {@link DescribeCacheSecurityGroupsCommandOutput}
 * @see {@link DescribeCacheSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
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
 * @example DescribeCacheSecurityGroups
 * ```javascript
 * // Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group.
 * const input = {
 *   "CacheSecurityGroupName": "my-sec-group"
 * };
 * const command = new DescribeCacheSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: describecachesecuritygroups-1483047200801
 * ```
 *
 */
export class DescribeCacheSecurityGroupsCommand extends $Command<
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
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
  constructor(readonly input: DescribeCacheSecurityGroupsCommandInput) {
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
  ): Handler<DescribeCacheSecurityGroupsCommandInput, DescribeCacheSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeCacheSecurityGroups",
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
  private serialize(input: DescribeCacheSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheSecurityGroupsCommandOutput> {
    return de_DescribeCacheSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
