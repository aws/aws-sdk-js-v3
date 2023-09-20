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
  StartMaintenanceRequest,
  StartMaintenanceRequestFilterSensitiveLog,
  StartMaintenanceResponse,
  StartMaintenanceResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_StartMaintenanceCommand, se_StartMaintenanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMaintenanceCommand}.
 */
export interface StartMaintenanceCommandInput extends StartMaintenanceRequest {}
/**
 * @public
 *
 * The output of {@link StartMaintenanceCommand}.
 */
export interface StartMaintenanceCommandOutput extends StartMaintenanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying
 *       cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress.
 *     </p>
 *          <p>
 *       Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, StartMaintenanceCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, StartMaintenanceCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // StartMaintenanceRequest
 *   ServerName: "STRING_VALUE", // required
 *   EngineAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartMaintenanceCommand(input);
 * const response = await client.send(command);
 * // { // StartMaintenanceResponse
 * //   Server: { // Server
 * //     AssociatePublicIpAddress: true || false,
 * //     BackupRetentionCount: Number("int"),
 * //     ServerName: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     CloudFormationStackArn: "STRING_VALUE",
 * //     CustomDomain: "STRING_VALUE",
 * //     DisableAutomatedBackup: true || false,
 * //     Endpoint: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineModel: "STRING_VALUE",
 * //     EngineAttributes: [ // EngineAttributes
 * //       { // EngineAttribute
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EngineVersion: "STRING_VALUE",
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     KeyPair: "STRING_VALUE",
 * //     MaintenanceStatus: "SUCCESS" || "FAILED",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     SecurityGroupIds: [ // Strings
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     Status: "BACKING_UP" || "CONNECTION_LOST" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED" || "HEALTHY" || "RUNNING" || "RESTORING" || "SETUP" || "UNDER_MAINTENANCE" || "UNHEALTHY" || "TERMINATED",
 * //     StatusReason: "STRING_VALUE",
 * //     SubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ServerArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMaintenanceCommandInput - {@link StartMaintenanceCommandInput}
 * @returns {@link StartMaintenanceCommandOutput}
 * @see {@link StartMaintenanceCommandInput} for command's `input` shape.
 * @see {@link StartMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 */
export class StartMaintenanceCommand extends $Command<
  StartMaintenanceCommandInput,
  StartMaintenanceCommandOutput,
  OpsWorksCMClientResolvedConfig
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
  constructor(readonly input: StartMaintenanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMaintenanceCommandInput, StartMaintenanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMaintenanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "StartMaintenanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMaintenanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartMaintenanceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorksCM_V2016_11_01",
        operation: "StartMaintenance",
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
  private serialize(input: StartMaintenanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMaintenanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMaintenanceCommandOutput> {
    return de_StartMaintenanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
