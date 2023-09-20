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
import { CreateCacheSecurityGroupMessage, CreateCacheSecurityGroupResult } from "../models/models_0";
import { de_CreateCacheSecurityGroupCommand, se_CreateCacheSecurityGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCacheSecurityGroupCommand}.
 */
export interface CreateCacheSecurityGroupCommandInput extends CreateCacheSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheSecurityGroupCommand}.
 */
export interface CreateCacheSecurityGroupCommandOutput extends CreateCacheSecurityGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cache security group. Use a cache security group to control access to
 *             one or more clusters.</p>
 *          <p>Cache security groups are only used when you are creating a cluster outside of an
 *             Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a
 *             VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheSecurityGroupMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheSecurityGroupResult
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
 * @param CreateCacheSecurityGroupCommandInput - {@link CreateCacheSecurityGroupCommandInput}
 * @returns {@link CreateCacheSecurityGroupCommandOutput}
 * @see {@link CreateCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSecurityGroupAlreadyExistsFault} (client fault)
 *  <p>A cache security group with the specified name already exists.</p>
 *
 * @throws {@link CacheSecurityGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             security groups.</p>
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
 * @example CreateCacheSecurityGroup
 * ```javascript
 * // Creates an ElastiCache security group. ElastiCache security groups are only for clusters not running in an AWS VPC.
 * const input = {
 *   "CacheSecurityGroupName": "my-cache-sec-grp",
 *   "Description": "Example ElastiCache security group."
 * };
 * const command = new CreateCacheSecurityGroupCommand(input);
 * await client.send(command);
 * // example id: createcachesecuritygroup-1483041506604
 * ```
 *
 */
export class CreateCacheSecurityGroupCommand extends $Command<
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
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
  constructor(readonly input: CreateCacheSecurityGroupCommandInput) {
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
  ): Handler<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CreateCacheSecurityGroup",
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
  private serialize(input: CreateCacheSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCacheSecurityGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheSecurityGroupCommandOutput> {
    return de_CreateCacheSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
