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

import { RestoreTableFromClusterSnapshotMessage, RestoreTableFromClusterSnapshotResult } from "../models/models_1";
import {
  de_RestoreTableFromClusterSnapshotCommand,
  se_RestoreTableFromClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableFromClusterSnapshotCommand}.
 */
export interface RestoreTableFromClusterSnapshotCommandInput extends RestoreTableFromClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreTableFromClusterSnapshotCommand}.
 */
export interface RestoreTableFromClusterSnapshotCommandOutput
  extends RestoreTableFromClusterSnapshotResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 *             create the new table within the Amazon Redshift cluster that the snapshot was taken
 *             from.</p>
 *          <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
 *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 *             overwrite an existing table in a cluster with a restored table. If you want to replace
 *             your original table with a new, restored table, then rename or drop your original table
 *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
 *             original table, then you can pass the original name of the table as the
 *                 <code>NewTableName</code> parameter value in the call to
 *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
 *             table with the table created from the snapshot.</p>
 *          <p>You can't use this operation to restore tables with
 *             <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreTableFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreTableFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // RestoreTableFromClusterSnapshotMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   SourceDatabaseName: "STRING_VALUE", // required
 *   SourceSchemaName: "STRING_VALUE",
 *   SourceTableName: "STRING_VALUE", // required
 *   TargetDatabaseName: "STRING_VALUE",
 *   TargetSchemaName: "STRING_VALUE",
 *   NewTableName: "STRING_VALUE", // required
 *   EnableCaseSensitiveIdentifier: true || false,
 * };
 * const command = new RestoreTableFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableFromClusterSnapshotResult
 * //   TableRestoreStatus: { // TableRestoreStatus
 * //     TableRestoreRequestId: "STRING_VALUE",
 * //     Status: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "CANCELED",
 * //     Message: "STRING_VALUE",
 * //     RequestTime: new Date("TIMESTAMP"),
 * //     ProgressInMegaBytes: Number("long"),
 * //     TotalDataInMegaBytes: Number("long"),
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     SnapshotIdentifier: "STRING_VALUE",
 * //     SourceDatabaseName: "STRING_VALUE",
 * //     SourceSchemaName: "STRING_VALUE",
 * //     SourceTableName: "STRING_VALUE",
 * //     TargetDatabaseName: "STRING_VALUE",
 * //     TargetSchemaName: "STRING_VALUE",
 * //     NewTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreTableFromClusterSnapshotCommandInput - {@link RestoreTableFromClusterSnapshotCommandInput}
 * @returns {@link RestoreTableFromClusterSnapshotCommandOutput}
 * @see {@link RestoreTableFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link InProgressTableRestoreQuotaExceededFault} (client fault)
 *  <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidTableRestoreArgumentFault} (client fault)
 *  <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class RestoreTableFromClusterSnapshotCommand extends $Command<
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
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
  constructor(readonly input: RestoreTableFromClusterSnapshotCommandInput) {
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
  ): Handler<RestoreTableFromClusterSnapshotCommandInput, RestoreTableFromClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreTableFromClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RestoreTableFromClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "RestoreTableFromClusterSnapshot",
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
  private serialize(
    input: RestoreTableFromClusterSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RestoreTableFromClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput> {
    return de_RestoreTableFromClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
