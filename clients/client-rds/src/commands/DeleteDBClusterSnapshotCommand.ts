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

import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import { de_DeleteDBClusterSnapshotCommand, se_DeleteDBClusterSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandInput extends DeleteDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandOutput extends DeleteDBClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
 *          <note>
 *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
 *             deleted.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     EngineMode: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSystemId: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterSnapshotCommandInput - {@link DeleteDBClusterSnapshotCommandInput}
 * @returns {@link DeleteDBClusterSnapshotCommandOutput}
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To delete a DB cluster snapshot
 * ```javascript
 * //
 * const input = {
 *   "DBClusterSnapshotIdentifier": "mydbclustersnapshot"
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshot": {
 *     "AllocatedStorage": 0,
 *     "AvailabilityZones": [
 *       "us-east-1a",
 *       "us-east-1b",
 *       "us-east-1e"
 *     ],
 *     "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *     "DBClusterIdentifier": "mydbcluster",
 *     "DBClusterSnapshotArn": "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:mydbclustersnapshot",
 *     "DBClusterSnapshotIdentifier": "mydbclustersnapshot",
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     "LicenseModel": "aurora-mysql",
 *     "MasterUsername": "myadmin",
 *     "PercentProgress": 100,
 *     "Port": 0,
 *     "SnapshotCreateTime": "2019-06-18T21:21:00.469Z",
 *     "SnapshotType": "manual",
 *     "Status": "available",
 *     "StorageEncrypted": true,
 *     "VpcId": "vpc-6594f31c"
 *   }
 * }
 * *\/
 * // example id: to-delete-a-db-cluster-snapshot-1679962808509
 * ```
 *
 */
export class DeleteDBClusterSnapshotCommand extends $Command<
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DeleteDBClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteDBClusterSnapshot",
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
  private serialize(input: DeleteDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterSnapshotCommandOutput> {
    return de_DeleteDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
