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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/models_0";
import { de_DescribeTableStatisticsCommand, se_DescribeTableStatisticsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableStatisticsCommand}.
 */
export interface DescribeTableStatisticsCommandInput extends DescribeTableStatisticsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTableStatisticsCommand}.
 */
export interface DescribeTableStatisticsCommandOutput extends DescribeTableStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns table statistics on the database migration task, including table name, rows
 *          inserted, rows updated, and rows deleted.</p>
 *          <p>Note that the "last updated" column the DMS console only indicates the time that DMS
 *          last updated the table statistics record for a table. It does not indicate the time of the
 *          last update to the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeTableStatisticsMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTableStatisticsResponse
 * //   ReplicationTaskArn: "STRING_VALUE",
 * //   TableStatistics: [ // TableStatisticsList
 * //     { // TableStatistics
 * //       SchemaName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       Inserts: Number("long"),
 * //       Deletes: Number("long"),
 * //       Updates: Number("long"),
 * //       Ddls: Number("long"),
 * //       AppliedInserts: Number("long"),
 * //       AppliedDeletes: Number("long"),
 * //       AppliedUpdates: Number("long"),
 * //       AppliedDdls: Number("long"),
 * //       FullLoadRows: Number("long"),
 * //       FullLoadCondtnlChkFailedRows: Number("long"),
 * //       FullLoadErrorRows: Number("long"),
 * //       FullLoadStartTime: new Date("TIMESTAMP"),
 * //       FullLoadEndTime: new Date("TIMESTAMP"),
 * //       FullLoadReloaded: true || false,
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       TableState: "STRING_VALUE",
 * //       ValidationPendingRecords: Number("long"),
 * //       ValidationFailedRecords: Number("long"),
 * //       ValidationSuspendedRecords: Number("long"),
 * //       ValidationState: "STRING_VALUE",
 * //       ValidationStateDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTableStatisticsCommandInput - {@link DescribeTableStatisticsCommandInput}
 * @returns {@link DescribeTableStatisticsCommandOutput}
 * @see {@link DescribeTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeTableStatisticsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe table statistics
 * ```javascript
 * // Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.
 * const input = {
 *   "Marker": "",
 *   "MaxRecords": 123,
 *   "ReplicationTaskArn": ""
 * };
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationTaskArn": "",
 *   "TableStatistics": []
 * }
 * *\/
 * // example id: describe-table-statistics-1481756071890
 * ```
 *
 */
export class DescribeTableStatisticsCommand extends $Command<
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: DescribeTableStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTableStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeTableStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeTableStatistics",
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
  private serialize(input: DescribeTableStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTableStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTableStatisticsCommandOutput> {
    return de_DescribeTableStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
