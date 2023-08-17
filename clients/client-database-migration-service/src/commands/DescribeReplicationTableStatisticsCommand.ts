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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTableStatisticsMessage,
  DescribeReplicationTableStatisticsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationTableStatisticsCommand,
  se_DescribeReplicationTableStatisticsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTableStatisticsCommand}.
 */
export interface DescribeReplicationTableStatisticsCommandInput extends DescribeReplicationTableStatisticsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTableStatisticsCommand}.
 */
export interface DescribeReplicationTableStatisticsCommandOutput
  extends DescribeReplicationTableStatisticsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns table and schema statistics for one or more provisioned replications that use a
 *          given DMS Serverless replication configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTableStatisticsMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
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
 * const command = new DescribeReplicationTableStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTableStatisticsResponse
 * //   ReplicationConfigArn: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTableStatistics: [ // ReplicationTableStatisticsList
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
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTableStatisticsCommandInput - {@link DescribeReplicationTableStatisticsCommandInput}
 * @returns {@link DescribeReplicationTableStatisticsCommandOutput}
 * @see {@link DescribeReplicationTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTableStatisticsCommandOutput} for command's `response` shape.
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
 */
export class DescribeReplicationTableStatisticsCommand extends $Command<
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
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
  constructor(readonly input: DescribeReplicationTableStatisticsCommandInput) {
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
  ): Handler<DescribeReplicationTableStatisticsCommandInput, DescribeReplicationTableStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationTableStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTableStatisticsCommand";
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
  private serialize(
    input: DescribeReplicationTableStatisticsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReplicationTableStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTableStatisticsCommandOutput> {
    return de_DescribeReplicationTableStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
