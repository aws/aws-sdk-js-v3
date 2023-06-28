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

import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/models_1";
import { de_DescribeTableRestoreStatusCommand, se_DescribeTableRestoreStatusCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableRestoreStatusCommand}.
 */
export interface DescribeTableRestoreStatusCommandInput extends DescribeTableRestoreStatusMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTableRestoreStatusCommand}.
 */
export interface DescribeTableRestoreStatusCommandOutput extends TableRestoreStatusMessage, __MetadataBearer {}

/**
 * @public
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeTableRestoreStatusMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   TableRestoreRequestId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // TableRestoreStatusMessage
 * //   TableRestoreStatusDetails: [ // TableRestoreStatusList
 * //     { // TableRestoreStatus
 * //       TableRestoreRequestId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "CANCELED",
 * //       Message: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       ProgressInMegaBytes: Number("long"),
 * //       TotalDataInMegaBytes: Number("long"),
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       SnapshotIdentifier: "STRING_VALUE",
 * //       SourceDatabaseName: "STRING_VALUE",
 * //       SourceSchemaName: "STRING_VALUE",
 * //       SourceTableName: "STRING_VALUE",
 * //       TargetDatabaseName: "STRING_VALUE",
 * //       TargetSchemaName: "STRING_VALUE",
 * //       NewTableName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTableRestoreStatusCommandInput - {@link DescribeTableRestoreStatusCommandInput}
 * @returns {@link DescribeTableRestoreStatusCommandOutput}
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link TableRestoreNotFoundFault} (client fault)
 *  <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeTableRestoreStatusCommand extends $Command<
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
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
  constructor(readonly input: DescribeTableRestoreStatusCommandInput) {
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
  ): Handler<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTableRestoreStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeTableRestoreStatusCommand";
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
  private serialize(input: DescribeTableRestoreStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTableRestoreStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableRestoreStatusCommandOutput> {
    return de_DescribeTableRestoreStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
