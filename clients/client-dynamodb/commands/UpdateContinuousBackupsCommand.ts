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
import { UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateContinuousBackupsCommand,
  serializeAws_json1_0UpdateContinuousBackupsCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateContinuousBackupsCommandInput extends UpdateContinuousBackupsInput {}
export interface UpdateContinuousBackupsCommandOutput extends UpdateContinuousBackupsOutput, __MetadataBearer {}

/**
 * <p>
 *             <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table.
 *       A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>.
 *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
 *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p>
 *       Once continuous backups and point in time recovery are enabled, you can restore to any point in time within
 *       <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *      </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
 *             You can restore your table to any point in time during the last 35 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateContinuousBackupsCommand extends $Command<
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateContinuousBackupsCommandInput) {
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
  ): Handler<UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateContinuousBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContinuousBackupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateContinuousBackupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContinuousBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateContinuousBackupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContinuousBackupsCommandOutput> {
    return deserializeAws_json1_0UpdateContinuousBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
