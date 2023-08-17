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
import { AddTagsToResourceMessage, TagListMessage } from "../models/models_0";
import { de_AddTagsToResourceCommand, se_AddTagsToResourceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceMessage {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * @public
 * <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags
 *             to categorize and track all your ElastiCache resources, with the exception of global
 *             replication group. When you add or remove tags on replication groups, those actions will
 *             be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
 *          <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon
 *             generates a cost allocation report as a comma-separated value (CSV) file with your usage
 *             and costs aggregated by your tags. You can apply tags that represent business categories
 *             (such as cost centers, application names, or owners) to organize your costs across
 *             multiple services.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in
 *                 Amazon ElastiCache</a> in the <i>ElastiCache User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AddTagsToResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AddTagsToResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // AddTagsToResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * // { // TagListMessage
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 *
 * @throws {@link InvalidARNFault} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 *             resource.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ReservedCacheNodeNotFoundFault} (client fault)
 *  <p>The requested reserved cache node was not found.</p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The requested snapshot name does not refer to an existing snapshot.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example AddTagsToResource
 * ```javascript
 * // Adds up to 10 tags, key/value pairs, to a cluster or snapshot resource.
 * const input = {
 *   "ResourceName": "arn:aws:elasticache:us-east-1:1234567890:cluster:my-mem-cluster",
 *   "Tags": [
 *     {
 *       "Key": "APIVersion",
 *       "Value": "20150202"
 *     },
 *     {
 *       "Key": "Service",
 *       "Value": "ElastiCache"
 *     }
 *   ]
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TagList": [
 *     {
 *       "Key": "APIVersion",
 *       "Value": "20150202"
 *     },
 *     {
 *       "Key": "Service",
 *       "Value": "ElastiCache"
 *     }
 *   ]
 * }
 * *\/
 * // example id: addtagstoresource-1482430264385
 * ```
 *
 */
export class AddTagsToResourceCommand extends $Command<
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
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
  constructor(readonly input: AddTagsToResourceCommandInput) {
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
  ): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTagsToResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "AddTagsToResourceCommand";
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
  private serialize(input: AddTagsToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddTagsToResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToResourceCommandOutput> {
    return de_AddTagsToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
