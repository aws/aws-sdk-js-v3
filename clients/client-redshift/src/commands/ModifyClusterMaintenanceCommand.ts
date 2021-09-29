import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterMaintenanceMessage, ModifyClusterMaintenanceResult } from "../models/models_1";
import {
  deserializeAws_queryModifyClusterMaintenanceCommand,
  serializeAws_queryModifyClusterMaintenanceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ModifyClusterMaintenanceCommandInput extends ModifyClusterMaintenanceMessage {}
export interface ModifyClusterMaintenanceCommandOutput extends ModifyClusterMaintenanceResult, __MetadataBearer {}

/**
 * <p>Modifies the maintenance settings of a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterMaintenanceCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterMaintenanceCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterMaintenanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterMaintenanceCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyClusterMaintenanceCommand extends $Command<
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterMaintenanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterMaintenanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterMaintenanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterMaintenanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterMaintenanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterMaintenanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterMaintenanceCommandOutput> {
    return deserializeAws_queryModifyClusterMaintenanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
