import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupPlanFromJSONInput, GetBackupPlanFromJSONOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupPlanFromJSONCommand,
  serializeAws_restJson1GetBackupPlanFromJSONCommand,
} from "../protocols/Aws_restJson1";
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

export interface GetBackupPlanFromJSONCommandInput extends GetBackupPlanFromJSONInput {}
export interface GetBackupPlanFromJSONCommandOutput extends GetBackupPlanFromJSONOutput, __MetadataBearer {}

/**
 * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromJSONCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromJSONCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanFromJSONCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanFromJSONCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromJSONCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBackupPlanFromJSONCommand extends $Command<
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupPlanFromJSONCommandInput) {
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
  ): Handler<GetBackupPlanFromJSONCommandInput, GetBackupPlanFromJSONCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupPlanFromJSONCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupPlanFromJSONInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupPlanFromJSONOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupPlanFromJSONCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupPlanFromJSONCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackupPlanFromJSONCommandOutput> {
    return deserializeAws_restJson1GetBackupPlanFromJSONCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
