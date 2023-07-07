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
import { DescribeReplicationsMessage, DescribeReplicationsResponse } from "../models/models_0";
import { de_DescribeReplicationsCommand, se_DescribeReplicationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationsCommand}.
 */
export interface DescribeReplicationsCommandInput extends DescribeReplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationsCommand}.
 */
export interface DescribeReplicationsCommandOutput extends DescribeReplicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details on replication progress by returning status information for one or more
 *          provisioned DMS Serverless replications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationsMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationsResponse
 * //   Marker: "STRING_VALUE",
 * //   Replications: [ // ReplicationList
 * //     { // Replication
 * //       ReplicationConfigIdentifier: "STRING_VALUE",
 * //       ReplicationConfigArn: "STRING_VALUE",
 * //       SourceEndpointArn: "STRING_VALUE",
 * //       TargetEndpointArn: "STRING_VALUE",
 * //       ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       Status: "STRING_VALUE",
 * //       ProvisionData: { // ProvisionData
 * //         ProvisionState: "STRING_VALUE",
 * //         ProvisionedCapacityUnits: Number("int"),
 * //         DateProvisioned: new Date("TIMESTAMP"),
 * //         IsNewProvisioningAvailable: true || false,
 * //         DateNewProvisioningDataAvailable: new Date("TIMESTAMP"),
 * //         ReasonForNewProvisioningData: "STRING_VALUE",
 * //       },
 * //       StopReason: "STRING_VALUE",
 * //       FailureMessages: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationStats: { // ReplicationStats
 * //         FullLoadProgressPercent: Number("int"),
 * //         ElapsedTimeMillis: Number("long"),
 * //         TablesLoaded: Number("int"),
 * //         TablesLoading: Number("int"),
 * //         TablesQueued: Number("int"),
 * //         TablesErrored: Number("int"),
 * //         FreshStartDate: new Date("TIMESTAMP"),
 * //         StartDate: new Date("TIMESTAMP"),
 * //         StopDate: new Date("TIMESTAMP"),
 * //         FullLoadStartDate: new Date("TIMESTAMP"),
 * //         FullLoadFinishDate: new Date("TIMESTAMP"),
 * //       },
 * //       StartReplicationType: "STRING_VALUE",
 * //       CdcStartTime: new Date("TIMESTAMP"),
 * //       CdcStartPosition: "STRING_VALUE",
 * //       CdcStopPosition: "STRING_VALUE",
 * //       RecoveryCheckpoint: "STRING_VALUE",
 * //       ReplicationCreateTime: new Date("TIMESTAMP"),
 * //       ReplicationUpdateTime: new Date("TIMESTAMP"),
 * //       ReplicationLastStopTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationsCommandInput - {@link DescribeReplicationsCommandInput}
 * @returns {@link DescribeReplicationsCommandOutput}
 * @see {@link DescribeReplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeReplicationsCommand extends $Command<
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
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
  constructor(readonly input: DescribeReplicationsCommandInput) {
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
  ): Handler<DescribeReplicationsCommandInput, DescribeReplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationsCommand";
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
  private serialize(input: DescribeReplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReplicationsCommandOutput> {
    return de_DescribeReplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
