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

import { CopyClusterSnapshotMessage, CopyClusterSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryCopyClusterSnapshotCommand,
  serializeAws_queryCopyClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandInput extends CopyClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyClusterSnapshotCommand}.
 */
export interface CopyClusterSnapshotCommandOutput extends CopyClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 *             The source must be an automated snapshot and it must be in the available
 *             state.</p>
 *          <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
 *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
 *             delete them.</p>
 *          <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CopyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CopyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CopyClusterSnapshotCommandInput - {@link CopyClusterSnapshotCommandInput}
 * @returns {@link CopyClusterSnapshotCommandOutput}
 * @see {@link CopyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link ClusterSnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 *
 */
export class CopyClusterSnapshotCommand extends $Command<
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CopyClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CopyClusterSnapshotCommand";
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
  private serialize(input: CopyClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyClusterSnapshotCommandOutput> {
    return deserializeAws_queryCopyClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
