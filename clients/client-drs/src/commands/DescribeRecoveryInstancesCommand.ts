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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  DescribeRecoveryInstancesRequest,
  DescribeRecoveryInstancesResponse,
  DescribeRecoveryInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeRecoveryInstancesCommand, se_DescribeRecoveryInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoveryInstancesCommand}.
 */
export interface DescribeRecoveryInstancesCommandInput extends DescribeRecoveryInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecoveryInstancesCommand}.
 */
export interface DescribeRecoveryInstancesCommandOutput extends DescribeRecoveryInstancesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all Recovery Instances or multiple Recovery Instances by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoveryInstancesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoveryInstancesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // DescribeRecoveryInstancesRequest
 *   filters: { // DescribeRecoveryInstancesRequestFilters
 *     recoveryInstanceIDs: [ // RecoveryInstanceIDs
 *       "STRING_VALUE",
 *     ],
 *     sourceServerIDs: [ // SourceServerIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecoveryInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoveryInstancesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // DescribeRecoveryInstancesItems
 * //     { // RecoveryInstance
 * //       ec2InstanceID: "STRING_VALUE",
 * //       ec2InstanceState: "STRING_VALUE",
 * //       jobID: "STRING_VALUE",
 * //       recoveryInstanceID: "STRING_VALUE",
 * //       sourceServerID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       failback: { // RecoveryInstanceFailback
 * //         failbackClientID: "STRING_VALUE",
 * //         failbackJobID: "STRING_VALUE",
 * //         failbackInitiationTime: "STRING_VALUE",
 * //         state: "STRING_VALUE",
 * //         agentLastSeenByServiceDateTime: "STRING_VALUE",
 * //         failbackClientLastSeenByServiceDateTime: "STRING_VALUE",
 * //         failbackToOriginalServer: true || false,
 * //         firstByteDateTime: "STRING_VALUE",
 * //         elapsedReplicationDuration: "STRING_VALUE",
 * //         failbackLaunchType: "STRING_VALUE",
 * //       },
 * //       dataReplicationInfo: { // RecoveryInstanceDataReplicationInfo
 * //         lagDuration: "STRING_VALUE",
 * //         etaDateTime: "STRING_VALUE",
 * //         replicatedDisks: [ // RecoveryInstanceDataReplicationInfoReplicatedDisks
 * //           { // RecoveryInstanceDataReplicationInfoReplicatedDisk
 * //             deviceName: "STRING_VALUE",
 * //             totalStorageBytes: Number("long"),
 * //             replicatedStorageBytes: Number("long"),
 * //             rescannedStorageBytes: Number("long"),
 * //             backloggedStorageBytes: Number("long"),
 * //           },
 * //         ],
 * //         dataReplicationState: "STRING_VALUE",
 * //         dataReplicationInitiation: { // RecoveryInstanceDataReplicationInitiation
 * //           startDateTime: "STRING_VALUE",
 * //           steps: [ // RecoveryInstanceDataReplicationInitiationSteps
 * //             { // RecoveryInstanceDataReplicationInitiationStep
 * //               name: "STRING_VALUE",
 * //               status: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         dataReplicationError: { // RecoveryInstanceDataReplicationError
 * //           error: "STRING_VALUE",
 * //           rawError: "STRING_VALUE",
 * //         },
 * //         stagingAvailabilityZone: "STRING_VALUE",
 * //       },
 * //       recoveryInstanceProperties: { // RecoveryInstanceProperties
 * //         lastUpdatedDateTime: "STRING_VALUE",
 * //         identificationHints: { // IdentificationHints
 * //           fqdn: "STRING_VALUE",
 * //           hostname: "STRING_VALUE",
 * //           vmWareUuid: "STRING_VALUE",
 * //           awsInstanceID: "STRING_VALUE",
 * //         },
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             macAddress: "STRING_VALUE",
 * //             ips: [ // IPsList
 * //               "STRING_VALUE",
 * //             ],
 * //             isPrimary: true || false,
 * //           },
 * //         ],
 * //         disks: [ // RecoveryInstanceDisks
 * //           { // RecoveryInstanceDisk
 * //             internalDeviceName: "STRING_VALUE",
 * //             bytes: Number("long"),
 * //             ebsVolumeID: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cpus: [ // Cpus
 * //           { // CPU
 * //             cores: Number("long"),
 * //             modelName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ramBytes: Number("long"),
 * //         os: { // OS
 * //           fullString: "STRING_VALUE",
 * //         },
 * //       },
 * //       pointInTimeSnapshotDateTime: "STRING_VALUE",
 * //       isDrill: true || false,
 * //       originEnvironment: "STRING_VALUE",
 * //       originAvailabilityZone: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRecoveryInstancesCommandInput - {@link DescribeRecoveryInstancesCommandInput}
 * @returns {@link DescribeRecoveryInstancesCommandOutput}
 * @see {@link DescribeRecoveryInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryInstancesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
export class DescribeRecoveryInstancesCommand extends $Command<
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
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
  constructor(readonly input: DescribeRecoveryInstancesCommandInput) {
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
  ): Handler<DescribeRecoveryInstancesCommandInput, DescribeRecoveryInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecoveryInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeRecoveryInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeRecoveryInstancesResponseFilterSensitiveLog,
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
  private serialize(input: DescribeRecoveryInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRecoveryInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecoveryInstancesCommandOutput> {
    return de_DescribeRecoveryInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
