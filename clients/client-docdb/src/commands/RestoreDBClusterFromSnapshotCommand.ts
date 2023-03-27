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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryRestoreDBClusterFromSnapshotCommand,
  serializeAws_queryRestoreDBClusterFromSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandOutput
  extends RestoreDBClusterFromSnapshotResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cluster from a snapshot or cluster snapshot.</p>
 *         <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p>
 *         <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // RestoreDBClusterFromSnapshotMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtection: true || false,
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreDBClusterFromSnapshotCommandInput - {@link RestoreDBClusterFromSnapshotCommandInput}
 * @returns {@link RestoreDBClusterFromSnapshotCommandOutput}
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing snapshot. </p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *  <p>The cluster doesn't have enough capacity for the current operation.</p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The provided value isn't a valid cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the snapshot doesn't allow deletion.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred when accessing an KMS key.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
 *
 *
 */
export class RestoreDBClusterFromSnapshotCommand extends $Command<
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: RestoreDBClusterFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "RestoreDBClusterFromSnapshotCommand";
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
  private serialize(input: RestoreDBClusterFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
