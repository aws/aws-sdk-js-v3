import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateClusterSettingsRequest, UpdateClusterSettingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateClusterSettingsCommand,
  serializeAws_json1_1UpdateClusterSettingsCommand,
} from "../protocols/Aws_json1_1";
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

export interface UpdateClusterSettingsCommandInput extends UpdateClusterSettingsRequest {}
export interface UpdateClusterSettingsCommandOutput extends UpdateClusterSettingsResponse, __MetadataBearer {}

/**
 * <p>Modifies the settings to use for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateClusterSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateClusterSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateClusterSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateClusterSettingsCommand extends $Command<
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterSettingsCommandInput, UpdateClusterSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateClusterSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateClusterSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateClusterSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
