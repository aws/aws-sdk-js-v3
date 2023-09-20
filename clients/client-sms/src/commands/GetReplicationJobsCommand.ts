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

import { GetReplicationJobsRequest, GetReplicationJobsResponse } from "../models/models_0";
import { de_GetReplicationJobsCommand, se_GetReplicationJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationJobsCommand}.
 */
export interface GetReplicationJobsCommandInput extends GetReplicationJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetReplicationJobsCommand}.
 */
export interface GetReplicationJobsCommandOutput extends GetReplicationJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified replication job or all of your replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationJobsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationJobsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetReplicationJobsRequest
 *   replicationJobId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetReplicationJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetReplicationJobsResponse
 * //   replicationJobList: [ // ReplicationJobList
 * //     { // ReplicationJob
 * //       replicationJobId: "STRING_VALUE",
 * //       serverId: "STRING_VALUE",
 * //       serverType: "VIRTUAL_MACHINE",
 * //       vmServer: { // VmServer
 * //         vmServerAddress: { // VmServerAddress
 * //           vmManagerId: "STRING_VALUE",
 * //           vmId: "STRING_VALUE",
 * //         },
 * //         vmName: "STRING_VALUE",
 * //         vmManagerName: "STRING_VALUE",
 * //         vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //         vmPath: "STRING_VALUE",
 * //       },
 * //       seedReplicationTime: new Date("TIMESTAMP"),
 * //       frequency: Number("int"),
 * //       runOnce: true || false,
 * //       nextReplicationRunStartTime: new Date("TIMESTAMP"),
 * //       licenseType: "AWS" || "BYOL",
 * //       roleName: "STRING_VALUE",
 * //       latestAmiId: "STRING_VALUE",
 * //       state: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED" || "COMPLETED" || "PAUSED_ON_FAILURE" || "FAILING",
 * //       statusMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       numberOfRecentAmisToKeep: Number("int"),
 * //       encrypted: true || false,
 * //       kmsKeyId: "STRING_VALUE",
 * //       replicationRunList: [ // ReplicationRunList
 * //         { // ReplicationRun
 * //           replicationRunId: "STRING_VALUE",
 * //           state: "PENDING" || "MISSED" || "ACTIVE" || "FAILED" || "COMPLETED" || "DELETING" || "DELETED",
 * //           type: "ON_DEMAND" || "AUTOMATIC",
 * //           stageDetails: { // ReplicationRunStageDetails
 * //             stage: "STRING_VALUE",
 * //             stageProgress: "STRING_VALUE",
 * //           },
 * //           statusMessage: "STRING_VALUE",
 * //           amiId: "STRING_VALUE",
 * //           scheduledStartTime: new Date("TIMESTAMP"),
 * //           completedTime: new Date("TIMESTAMP"),
 * //           description: "STRING_VALUE",
 * //           encrypted: true || false,
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReplicationJobsCommandInput - {@link GetReplicationJobsCommandInput}
 * @returns {@link GetReplicationJobsCommandOutput}
 * @see {@link GetReplicationJobsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationJobsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class GetReplicationJobsCommand extends $Command<
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: GetReplicationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReplicationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetReplicationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "GetReplicationJobs",
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
  private serialize(input: GetReplicationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReplicationJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReplicationJobsCommandOutput> {
    return de_GetReplicationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
