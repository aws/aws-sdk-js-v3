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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateRegionSettingsInput } from "../models/models_0";
import { de_UpdateRegionSettingsCommand, se_UpdateRegionSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRegionSettingsCommand}.
 */
export interface UpdateRegionSettingsCommandInput extends UpdateRegionSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateRegionSettingsCommand}.
 */
export interface UpdateRegionSettingsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the current service opt-in settings for the Region. If service-opt-in is enabled
 *          for a service, Backup tries to protect that service's resources in this Region,
 *          when the resource is included in an on-demand backup or scheduled backup plan. Otherwise,
 *             Backup does not try to protect that service's resources in this Region. Use
 *          the <code>DescribeRegionSettings</code> API to determine the resource types that are
 *          supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateRegionSettingsInput
 *   ResourceTypeOptInPreference: { // ResourceTypeOptInPreference
 *     "<keys>": true || false,
 *   },
 *   ResourceTypeManagementPreference: { // ResourceTypeManagementPreference
 *     "<keys>": true || false,
 *   },
 * };
 * const command = new UpdateRegionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRegionSettingsCommandInput - {@link UpdateRegionSettingsCommandInput}
 * @returns {@link UpdateRegionSettingsCommandOutput}
 * @see {@link UpdateRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class UpdateRegionSettingsCommand extends $Command<
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: UpdateRegionSettingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRegionSettingsCommandInput, UpdateRegionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRegionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRegionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "UpdateRegionSettings",
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
  private serialize(input: UpdateRegionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRegionSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRegionSettingsCommandOutput> {
    return de_UpdateRegionSettingsCommand(output, context);
  }
}
