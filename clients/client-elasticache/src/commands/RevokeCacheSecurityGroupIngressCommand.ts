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
} from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RevokeCacheSecurityGroupIngressMessage, RevokeCacheSecurityGroupIngressResult } from "../models/models_0";
import {
  de_RevokeCacheSecurityGroupIngressCommand,
  se_RevokeCacheSecurityGroupIngressCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeCacheSecurityGroupIngressCommand}.
 */
export interface RevokeCacheSecurityGroupIngressCommandInput extends RevokeCacheSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link RevokeCacheSecurityGroupIngressCommand}.
 */
export interface RevokeCacheSecurityGroupIngressCommandOutput
  extends RevokeCacheSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Revokes ingress from a cache security group. Use this operation to disallow access
 *             from an Amazon EC2 security group that had been previously authorized.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // RevokeCacheSecurityGroupIngressMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupName: "STRING_VALUE", // required
 *   EC2SecurityGroupOwnerId: "STRING_VALUE", // required
 * };
 * const command = new RevokeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeCacheSecurityGroupIngressResult
 * //   CacheSecurityGroup: { // CacheSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     CacheSecurityGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeCacheSecurityGroupIngressCommandInput - {@link RevokeCacheSecurityGroupIngressCommandInput}
 * @returns {@link RevokeCacheSecurityGroupIngressCommandOutput}
 * @see {@link RevokeCacheSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeCacheSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified Amazon EC2 security group is not authorized for the specified cache
 *             security group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
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
 *   "CacheSecurityGroupName": "my-sec-grp",
 *   "EC2SecurityGroupName": "my-ec2-sec-grp",
 *   "EC2SecurityGroupOwnerId": "1234567890"
 * };
 * const command = new RevokeCacheSecurityGroupIngressCommand(input);
 * await client.send(command);
 * // example id: describecachesecuritygroups-1483047200801
 * ```
 *
 */
export class RevokeCacheSecurityGroupIngressCommand extends $Command<
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
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
  constructor(readonly input: RevokeCacheSecurityGroupIngressCommandInput) {
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
  ): Handler<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeCacheSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RevokeCacheSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: RevokeCacheSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RevokeCacheSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeCacheSecurityGroupIngressCommandOutput> {
    return de_RevokeCacheSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
