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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  StopReplicationRequest,
  StopReplicationResponse,
  StopReplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StopReplicationCommand, se_StopReplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandInput extends StopReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandOutput extends StopReplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StopReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StopReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StopReplicationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationResponse
 * //   sourceServer: { // SourceServer
 * //     sourceServerID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     recoveryInstanceId: "STRING_VALUE",
 * //     lastLaunchResult: "STRING_VALUE",
 * //     dataReplicationInfo: { // DataReplicationInfo
 * //       lagDuration: "STRING_VALUE",
 * //       etaDateTime: "STRING_VALUE",
 * //       replicatedDisks: [ // DataReplicationInfoReplicatedDisks
 * //         { // DataReplicationInfoReplicatedDisk
 * //           deviceName: "STRING_VALUE",
 * //           totalStorageBytes: Number("long"),
 * //           replicatedStorageBytes: Number("long"),
 * //           rescannedStorageBytes: Number("long"),
 * //           backloggedStorageBytes: Number("long"),
 * //         },
 * //       ],
 * //       dataReplicationState: "STRING_VALUE",
 * //       dataReplicationInitiation: { // DataReplicationInitiation
 * //         startDateTime: "STRING_VALUE",
 * //         nextAttemptDateTime: "STRING_VALUE",
 * //         steps: [ // DataReplicationInitiationSteps
 * //           { // DataReplicationInitiationStep
 * //             name: "STRING_VALUE",
 * //             status: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       dataReplicationError: { // DataReplicationError
 * //         error: "STRING_VALUE",
 * //         rawError: "STRING_VALUE",
 * //       },
 * //       stagingAvailabilityZone: "STRING_VALUE",
 * //     },
 * //     lifeCycle: { // LifeCycle
 * //       addedToServiceDateTime: "STRING_VALUE",
 * //       firstByteDateTime: "STRING_VALUE",
 * //       elapsedReplicationDuration: "STRING_VALUE",
 * //       lastSeenByServiceDateTime: "STRING_VALUE",
 * //       lastLaunch: { // LifeCycleLastLaunch
 * //         initiated: { // LifeCycleLastLaunchInitiated
 * //           apiCallDateTime: "STRING_VALUE",
 * //           jobID: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //         },
 * //         status: "STRING_VALUE",
 * //       },
 * //     },
 * //     sourceProperties: { // SourceProperties
 * //       lastUpdatedDateTime: "STRING_VALUE",
 * //       recommendedInstanceType: "STRING_VALUE",
 * //       identificationHints: { // IdentificationHints
 * //         fqdn: "STRING_VALUE",
 * //         hostname: "STRING_VALUE",
 * //         vmWareUuid: "STRING_VALUE",
 * //         awsInstanceID: "STRING_VALUE",
 * //       },
 * //       networkInterfaces: [ // NetworkInterfaces
 * //         { // NetworkInterface
 * //           macAddress: "STRING_VALUE",
 * //           ips: [ // IPsList
 * //             "STRING_VALUE",
 * //           ],
 * //           isPrimary: true || false,
 * //         },
 * //       ],
 * //       disks: [ // Disks
 * //         { // Disk
 * //           deviceName: "STRING_VALUE",
 * //           bytes: Number("long"),
 * //         },
 * //       ],
 * //       cpus: [ // Cpus
 * //         { // CPU
 * //           cores: Number("long"),
 * //           modelName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ramBytes: Number("long"),
 * //       os: { // OS
 * //         fullString: "STRING_VALUE",
 * //       },
 * //       supportsNitroInstances: true || false,
 * //     },
 * //     stagingArea: { // StagingArea
 * //       status: "STRING_VALUE",
 * //       stagingAccountID: "STRING_VALUE",
 * //       stagingSourceServerArn: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     sourceCloudProperties: { // SourceCloudProperties
 * //       originAccountID: "STRING_VALUE",
 * //       originRegion: "STRING_VALUE",
 * //       originAvailabilityZone: "STRING_VALUE",
 * //     },
 * //     replicationDirection: "STRING_VALUE",
 * //     reversedDirectionSourceServerArn: "STRING_VALUE",
 * //     sourceNetworkID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopReplicationCommandInput - {@link StopReplicationCommandInput}
 * @returns {@link StopReplicationCommandOutput}
 * @see {@link StopReplicationCommandInput} for command's `input` shape.
 * @see {@link StopReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class StopReplicationCommand extends $Command<
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
  DrsClientResolvedConfig
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
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopReplicationCommandInput, StopReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StopReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StopReplicationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
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
