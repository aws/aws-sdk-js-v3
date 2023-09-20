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
import { StopReplicationMessage, StopReplicationResponse } from "../models/models_1";
import { de_StopReplicationCommand, se_StopReplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandInput extends StopReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandOutput extends StopReplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications.
 *          This command doesn't deprovision the stopped replications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StopReplicationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StopReplicationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StopReplicationMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationResponse
 * //   Replication: { // Replication
 * //     ReplicationConfigIdentifier: "STRING_VALUE",
 * //     ReplicationConfigArn: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     Status: "STRING_VALUE",
 * //     ProvisionData: { // ProvisionData
 * //       ProvisionState: "STRING_VALUE",
 * //       ProvisionedCapacityUnits: Number("int"),
 * //       DateProvisioned: new Date("TIMESTAMP"),
 * //       IsNewProvisioningAvailable: true || false,
 * //       DateNewProvisioningDataAvailable: new Date("TIMESTAMP"),
 * //       ReasonForNewProvisioningData: "STRING_VALUE",
 * //     },
 * //     StopReason: "STRING_VALUE",
 * //     FailureMessages: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationStats: { // ReplicationStats
 * //       FullLoadProgressPercent: Number("int"),
 * //       ElapsedTimeMillis: Number("long"),
 * //       TablesLoaded: Number("int"),
 * //       TablesLoading: Number("int"),
 * //       TablesQueued: Number("int"),
 * //       TablesErrored: Number("int"),
 * //       FreshStartDate: new Date("TIMESTAMP"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       StopDate: new Date("TIMESTAMP"),
 * //       FullLoadStartDate: new Date("TIMESTAMP"),
 * //       FullLoadFinishDate: new Date("TIMESTAMP"),
 * //     },
 * //     StartReplicationType: "STRING_VALUE",
 * //     CdcStartTime: new Date("TIMESTAMP"),
 * //     CdcStartPosition: "STRING_VALUE",
 * //     CdcStopPosition: "STRING_VALUE",
 * //     RecoveryCheckpoint: "STRING_VALUE",
 * //     ReplicationCreateTime: new Date("TIMESTAMP"),
 * //     ReplicationUpdateTime: new Date("TIMESTAMP"),
 * //     ReplicationLastStopTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StopReplicationCommandInput - {@link StopReplicationCommandInput}
 * @returns {@link StopReplicationCommandOutput}
 * @see {@link StopReplicationCommandInput} for command's `input` shape.
 * @see {@link StopReplicationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
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
export class StopReplicationCommand extends $Command<
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
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
  constructor(readonly input: StopReplicationCommandInput) {
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
  ): Handler<StopReplicationCommandInput, StopReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StopReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "StopReplication",
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
  private serialize(input: StopReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopReplicationCommandOutput> {
    return de_StopReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
