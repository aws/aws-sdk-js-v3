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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateGlobalTableSettingsCommand,
  serializeAws_json1_0UpdateGlobalTableSettingsCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateGlobalTableSettingsCommandInput extends UpdateGlobalTableSettingsInput {}
export interface UpdateGlobalTableSettingsCommandOutput extends UpdateGlobalTableSettingsOutput, __MetadataBearer {}

/**
 * <p>Updates settings for a global table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateGlobalTableSettingsCommand extends $Command<
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGlobalTableSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateGlobalTableSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGlobalTableSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGlobalTableSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGlobalTableSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateGlobalTableSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateGlobalTableSettingsCommandOutput> {
    return deserializeAws_json1_0UpdateGlobalTableSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
