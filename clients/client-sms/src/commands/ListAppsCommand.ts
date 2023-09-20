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

import { ListAppsRequest, ListAppsResponse } from "../models/models_0";
import { de_ListAppsCommand, se_ListAppsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppsCommand}.
 */
export interface ListAppsCommandInput extends ListAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsCommand}.
 */
export interface ListAppsCommandOutput extends ListAppsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves summaries for all applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ListAppsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ListAppsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // ListAppsRequest
 *   appIds: [ // AppIds
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsResponse
 * //   apps: [ // Apps
 * //     { // AppSummary
 * //       appId: "STRING_VALUE",
 * //       importedAppId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       replicationConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //       replicationStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_REPLICATION" || "VALIDATION_IN_PROGRESS" || "REPLICATION_PENDING" || "REPLICATION_IN_PROGRESS" || "REPLICATED" || "PARTIALLY_REPLICATED" || "DELTA_REPLICATION_IN_PROGRESS" || "DELTA_REPLICATED" || "DELTA_REPLICATION_FAILED" || "REPLICATION_FAILED" || "REPLICATION_STOPPING" || "REPLICATION_STOP_FAILED" || "REPLICATION_STOPPED",
 * //       replicationStatusMessage: "STRING_VALUE",
 * //       latestReplicationTime: new Date("TIMESTAMP"),
 * //       launchConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //       launchStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_LAUNCH" || "VALIDATION_IN_PROGRESS" || "LAUNCH_PENDING" || "LAUNCH_IN_PROGRESS" || "LAUNCHED" || "PARTIALLY_LAUNCHED" || "DELTA_LAUNCH_IN_PROGRESS" || "DELTA_LAUNCH_FAILED" || "LAUNCH_FAILED" || "TERMINATE_IN_PROGRESS" || "TERMINATE_FAILED" || "TERMINATED",
 * //       launchStatusMessage: "STRING_VALUE",
 * //       launchDetails: { // LaunchDetails
 * //         latestLaunchTime: new Date("TIMESTAMP"),
 * //         stackName: "STRING_VALUE",
 * //         stackId: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       roleName: "STRING_VALUE",
 * //       totalServerGroups: Number("int"),
 * //       totalServers: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsCommandInput - {@link ListAppsCommandInput}
 * @returns {@link ListAppsCommandOutput}
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
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
export class ListAppsCommand extends $Command<ListAppsCommandInput, ListAppsCommandOutput, SMSClientResolvedConfig> {
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
  constructor(readonly input: ListAppsCommandInput) {
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
  ): Handler<ListAppsCommandInput, ListAppsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAppsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "ListAppsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "ListApps",
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
  private serialize(input: ListAppsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppsCommandOutput> {
    return de_ListAppsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
