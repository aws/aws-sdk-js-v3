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

import { UpdateServerRequest, UpdateServerResponse, UpdateServerResponseFilterSensitiveLog } from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_UpdateServerCommand, se_UpdateServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandInput extends UpdateServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandOutput extends UpdateServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Updates settings for a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, UpdateServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, UpdateServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // UpdateServerRequest
 *   DisableAutomatedBackup: true || false,
 *   BackupRetentionCount: Number("int"),
 *   ServerName: "STRING_VALUE", // required
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 * };
 * const command = new UpdateServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServerResponse
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
 * @param UpdateServerCommandInput - {@link UpdateServerCommandInput}
 * @returns {@link UpdateServerCommandOutput}
 * @see {@link UpdateServerCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCommandOutput} for command's `response` shape.
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
export class UpdateServerCommand extends $Command<
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
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
  constructor(readonly input: UpdateServerCommandInput) {
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
  ): Handler<UpdateServerCommandInput, UpdateServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateServerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "UpdateServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateServerResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorksCM_V2016_11_01",
        operation: "UpdateServer",
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
  private serialize(input: UpdateServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServerCommandOutput> {
    return de_UpdateServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
