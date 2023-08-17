// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { de_CopyDBClusterSnapshotCommand, se_CopyDBClusterSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies a snapshot of a cluster.</p>
 *          <p>To copy a cluster snapshot from a shared manual cluster snapshot,
 *             <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon
 *             Resource Name (ARN) of the shared cluster snapshot. You can only
 *             copy a shared DB cluster snapshot, whether encrypted or not, in the
 *             same Amazon Web Services Region.</p>
 *          <p>To cancel the copy operation after it is in progress, delete the
 *             target cluster snapshot identified by
 *             <code>TargetDBClusterSnapshotIdentifier</code> while that cluster
 *             snapshot is in the <i>copying</i> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // CopyDBClusterSnapshotMessage
 *   SourceDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   CopyTags: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBClusterSnapshotCommandInput - {@link CopyDBClusterSnapshotCommandInput}
 * @returns {@link CopyDBClusterSnapshotCommandOutput}
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster snapshot with the given identifier.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The provided value isn't a valid cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred when accessing an KMS key.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed number of snapshots.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class CopyDBClusterSnapshotCommand extends $Command<
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
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
  constructor(readonly input: CopyDBClusterSnapshotCommandInput) {
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
  ): Handler<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBClusterSnapshotCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CopyDBClusterSnapshotCommand";
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
  private serialize(input: CopyDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyDBClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDBClusterSnapshotCommandOutput> {
    return de_CopyDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
