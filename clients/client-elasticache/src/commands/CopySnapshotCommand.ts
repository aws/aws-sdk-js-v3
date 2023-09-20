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
import { CopySnapshotMessage, CopySnapshotResult } from "../models/models_0";
import { de_CopySnapshotCommand, se_CopySnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandInput extends CopySnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Makes a copy of an existing snapshot.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 *          <important>
 *             <p>Users or groups that have permissions to use the <code>CopySnapshot</code>
 *                 operation can create their own Amazon S3 buckets and copy snapshots to it. To
 *                 control access to your snapshots, use an IAM policy to control who has the ability
 *                 to use the <code>CopySnapshot</code> operation. For more information about using IAM
 *                 to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting
 *                     Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication & Access
 *                     Control</a>.</p>
 *          </important>
 *          <p>You could receive the following error messages.</p>
 *          <p class="title">
 *             <b>Error Messages</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b> The S3 bucket %s is outside of
 *                     the region.</p>
 *                <p>
 *                   <b>Solution:</b> Create an Amazon S3 bucket in the
 *                     same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User
 *                     Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b> The S3 bucket %s does not
 *                     exist.</p>
 *                <p>
 *                   <b>Solution:</b> Create an Amazon S3 bucket in the
 *                     same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User
 *                     Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b> The S3 bucket %s is not owned
 *                     by the authenticated user.</p>
 *                <p>
 *                   <b>Solution:</b> Create an Amazon S3 bucket in the
 *                     same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User
 *                     Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b> The authenticated user does
 *                     not have sufficient permissions to perform the desired activity.</p>
 *                <p>
 *                   <b>Solution:</b> Contact your system administrator
 *                     to get the needed permissions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b> The S3 bucket %s already
 *                     contains an object with key %s.</p>
 *                <p>
 *                   <b>Solution:</b> Give the
 *                         <code>TargetSnapshotName</code> a new and unique value. If exporting a
 *                     snapshot, you could alternatively create a new Amazon S3 bucket and use this
 *                     same value for <code>TargetSnapshotName</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b> ElastiCache has not been
 *                     granted READ permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b> Add List and Read permissions on
 *                     the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the
 *                     ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b> ElastiCache has not been
 *                     granted WRITE permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b> Add Upload/Delete permissions on
 *                     the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the
 *                     ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b> ElastiCache has not been
 *                     granted READ_ACP permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b> Add View Permissions on the bucket.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the
 *                     ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopySnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopySnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CopySnapshotMessage
 *   SourceSnapshotName: "STRING_VALUE", // required
 *   TargetSnapshotName: "STRING_VALUE", // required
 *   TargetBucket: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopySnapshotResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotName: "STRING_VALUE",
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     ReplicationGroupDescription: "STRING_VALUE",
 * //     CacheClusterId: "STRING_VALUE",
 * //     SnapshotStatus: "STRING_VALUE",
 * //     SnapshotSource: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     NumCacheNodes: Number("int"),
 * //     PreferredAvailabilityZone: "STRING_VALUE",
 * //     PreferredOutpostArn: "STRING_VALUE",
 * //     CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     TopicArn: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     CacheParameterGroupName: "STRING_VALUE",
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     NumNodeGroups: Number("int"),
 * //     AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //     NodeSnapshots: [ // NodeSnapshotList
 * //       { // NodeSnapshot
 * //         CacheClusterId: "STRING_VALUE",
 * //         NodeGroupId: "STRING_VALUE",
 * //         CacheNodeId: "STRING_VALUE",
 * //         NodeGroupConfiguration: { // NodeGroupConfiguration
 * //           NodeGroupId: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //           ReplicaCount: Number("int"),
 * //           PrimaryAvailabilityZone: "STRING_VALUE",
 * //           ReplicaAvailabilityZones: [ // AvailabilityZonesList
 * //             "STRING_VALUE",
 * //           ],
 * //           PrimaryOutpostArn: "STRING_VALUE",
 * //           ReplicaOutpostArns: [ // OutpostArnsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         CacheSize: "STRING_VALUE",
 * //         CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //         SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     DataTiering: "enabled" || "disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopySnapshotCommandInput - {@link CopySnapshotCommandInput}
 * @returns {@link CopySnapshotCommandOutput}
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidSnapshotStateFault} (client fault)
 *  <p>The current state of the snapshot does not allow the requested operation to
 *             occur.</p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a snapshot with the given name.</p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The requested snapshot name does not refer to an existing snapshot.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of
 *             snapshots.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CopySnapshot
 * ```javascript
 * // Copies a snapshot to a specified name.
 * const input = {
 *   "SourceSnapshotName": "my-snapshot",
 *   "TargetBucket": "",
 *   "TargetSnapshotName": "my-snapshot-copy"
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Snapshot": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterCreateTime": "2016-12-21T22:24:04.955Z",
 *     "CacheClusterId": "my-redis4",
 *     "CacheNodeType": "cache.m3.large",
 *     "CacheParameterGroupName": "default.redis3.2",
 *     "CacheSubnetGroupName": "default",
 *     "Engine": "redis",
 *     "EngineVersion": "3.2.4",
 *     "NodeSnapshots": [
 *       {
 *         "CacheNodeCreateTime": "2016-12-21T22:24:04.955Z",
 *         "CacheNodeId": "0001",
 *         "CacheSize": "3 MB",
 *         "SnapshotCreateTime": "2016-12-28T07:00:52Z"
 *       }
 *     ],
 *     "NumCacheNodes": 1,
 *     "Port": 6379,
 *     "PreferredAvailabilityZone": "us-east-1c",
 *     "PreferredMaintenanceWindow": "tue:09:30-tue:10:30",
 *     "SnapshotName": "my-snapshot-copy",
 *     "SnapshotRetentionLimit": 7,
 *     "SnapshotSource": "manual",
 *     "SnapshotStatus": "creating",
 *     "SnapshotWindow": "07:00-08:00",
 *     "VpcId": "vpc-3820329f3"
 *   }
 * }
 * *\/
 * // example id: copysnapshot-1482961393820
 * ```
 *
 */
export class CopySnapshotCommand extends $Command<
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
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
  constructor(readonly input: CopySnapshotCommandInput) {
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
  ): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopySnapshotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CopySnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CopySnapshot",
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
  private serialize(input: CopySnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopySnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopySnapshotCommandOutput> {
    return de_CopySnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
