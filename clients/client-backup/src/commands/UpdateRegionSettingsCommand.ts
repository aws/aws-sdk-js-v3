// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateRegionSettingsInput, UpdateRegionSettingsInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRegionSettingsCommand,
  serializeAws_restJson1UpdateRegionSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRegionSettingsCommandInput extends UpdateRegionSettingsInput {}
export interface UpdateRegionSettingsCommandOutput extends __MetadataBearer {}

/**
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
 * const command = new UpdateRegionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class UpdateRegionSettingsCommand extends $Command<
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: UpdateRegionSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
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
      inputFilterSensitiveLog: UpdateRegionSettingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRegionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRegionSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRegionSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateRegionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
