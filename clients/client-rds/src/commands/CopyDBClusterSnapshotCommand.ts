// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

import {
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotMessageFilterSensitiveLog,
  CopyDBClusterSnapshotResult,
  CopyDBClusterSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCopyDBClusterSnapshotCommand,
  serializeAws_queryCopyDBClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {}
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a snapshot of a DB cluster.</p>
 *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code>
 *           must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
 *          <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case,
 *             the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the
 *             destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy
 *             an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the
 *             following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to
 *               encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot
 *                     identifier for the encrypted DB cluster snapshot to be copied. This identifier
 *                     must be in the ARN format for the source Amazon Web Services Region and is the same value as
 *                     the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p>
 *             </li>
 *          </ul>
 *          <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified
 *           by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p>
 *          <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html">
 *               Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *                 Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CopyDBClusterSnapshotCommand extends $Command<
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBClusterSnapshotCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyDBClusterSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CopyDBClusterSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyDBClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDBClusterSnapshotCommandOutput> {
    return deserializeAws_queryCopyDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
