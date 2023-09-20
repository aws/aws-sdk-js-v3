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

import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { de_CreateAppCommand, se_CreateAppCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCommand}.
 */
export interface CreateAppCommandInput extends CreateAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppCommand}.
 */
export interface CreateAppCommandOutput extends CreateAppResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an application. An application consists of one or more server groups. Each
 *             server group contain one or more servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // CreateAppRequest
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   roleName: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   serverGroups: [ // ServerGroups
 *     { // ServerGroup
 *       serverGroupId: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       serverList: [ // ServerList
 *         { // Server
 *           serverId: "STRING_VALUE",
 *           serverType: "VIRTUAL_MACHINE",
 *           vmServer: { // VmServer
 *             vmServerAddress: { // VmServerAddress
 *               vmManagerId: "STRING_VALUE",
 *               vmId: "STRING_VALUE",
 *             },
 *             vmName: "STRING_VALUE",
 *             vmManagerName: "STRING_VALUE",
 *             vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 *             vmPath: "STRING_VALUE",
 *           },
 *           replicationJobId: "STRING_VALUE",
 *           replicationJobTerminated: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppResponse
 * //   appSummary: { // AppSummary
 * //     appId: "STRING_VALUE",
 * //     importedAppId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     statusMessage: "STRING_VALUE",
 * //     replicationConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //     replicationStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_REPLICATION" || "VALIDATION_IN_PROGRESS" || "REPLICATION_PENDING" || "REPLICATION_IN_PROGRESS" || "REPLICATED" || "PARTIALLY_REPLICATED" || "DELTA_REPLICATION_IN_PROGRESS" || "DELTA_REPLICATED" || "DELTA_REPLICATION_FAILED" || "REPLICATION_FAILED" || "REPLICATION_STOPPING" || "REPLICATION_STOP_FAILED" || "REPLICATION_STOPPED",
 * //     replicationStatusMessage: "STRING_VALUE",
 * //     latestReplicationTime: new Date("TIMESTAMP"),
 * //     launchConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //     launchStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_LAUNCH" || "VALIDATION_IN_PROGRESS" || "LAUNCH_PENDING" || "LAUNCH_IN_PROGRESS" || "LAUNCHED" || "PARTIALLY_LAUNCHED" || "DELTA_LAUNCH_IN_PROGRESS" || "DELTA_LAUNCH_FAILED" || "LAUNCH_FAILED" || "TERMINATE_IN_PROGRESS" || "TERMINATE_FAILED" || "TERMINATED",
 * //     launchStatusMessage: "STRING_VALUE",
 * //     launchDetails: { // LaunchDetails
 * //       latestLaunchTime: new Date("TIMESTAMP"),
 * //       stackName: "STRING_VALUE",
 * //       stackId: "STRING_VALUE",
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     roleName: "STRING_VALUE",
 * //     totalServerGroups: Number("int"),
 * //     totalServers: Number("int"),
 * //   },
 * //   serverGroups: [ // ServerGroups
 * //     { // ServerGroup
 * //       serverGroupId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       serverList: [ // ServerList
 * //         { // Server
 * //           serverId: "STRING_VALUE",
 * //           serverType: "VIRTUAL_MACHINE",
 * //           vmServer: { // VmServer
 * //             vmServerAddress: { // VmServerAddress
 * //               vmManagerId: "STRING_VALUE",
 * //               vmId: "STRING_VALUE",
 * //             },
 * //             vmName: "STRING_VALUE",
 * //             vmManagerName: "STRING_VALUE",
 * //             vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //             vmPath: "STRING_VALUE",
 * //           },
 * //           replicationJobId: "STRING_VALUE",
 * //           replicationJobTerminated: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   tags: [ // Tags
 * //     { // Tag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateAppCommandInput - {@link CreateAppCommandInput}
 * @returns {@link CreateAppCommandOutput}
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class CreateAppCommand extends $Command<CreateAppCommandInput, CreateAppCommandOutput, SMSClientResolvedConfig> {
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
  constructor(readonly input: CreateAppCommandInput) {
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
  ): Handler<CreateAppCommandInput, CreateAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "CreateAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "CreateApp",
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
  private serialize(input: CreateAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppCommandOutput> {
    return de_CreateAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
