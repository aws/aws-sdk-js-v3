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
import { StartReplicationMessage, StartReplicationResponse } from "../models/models_1";
import { de_StartReplicationCommand, se_StartReplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartReplicationCommand}.
 */
export interface StartReplicationCommandInput extends StartReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StartReplicationCommand}.
 */
export interface StartReplicationCommandOutput extends StartReplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a given DMS Serverless replication configuration, DMS connects to the source endpoint and
 *          collects the metadata to analyze the replication workload. Using this metadata, DMS then
 *          computes and provisions the required capacity and starts replicating to the target endpoint
 *          using the server resources that DMS has provisioned for the DMS Serverless replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartReplicationMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   StartReplicationType: "STRING_VALUE", // required
 *   CdcStartTime: new Date("TIMESTAMP"),
 *   CdcStartPosition: "STRING_VALUE",
 *   CdcStopPosition: "STRING_VALUE",
 * };
 * const command = new StartReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartReplicationResponse
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
 * @param StartReplicationCommandInput - {@link StartReplicationCommandInput}
 * @returns {@link StartReplicationCommandOutput}
 * @see {@link StartReplicationCommandInput} for command's `input` shape.
 * @see {@link StartReplicationCommandOutput} for command's `response` shape.
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
export class StartReplicationCommand extends $Command<
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
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
  constructor(readonly input: StartReplicationCommandInput) {
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
  ): Handler<StartReplicationCommandInput, StartReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "StartReplication",
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
  private serialize(input: StartReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReplicationCommandOutput> {
    return de_StartReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
