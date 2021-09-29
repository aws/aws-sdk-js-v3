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
import { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeContinuousBackupsCommand,
  serializeAws_json1_0DescribeContinuousBackupsCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeContinuousBackupsCommandInput extends DescribeContinuousBackupsInput {}
export interface DescribeContinuousBackupsCommandOutput extends DescribeContinuousBackupsOutput, __MetadataBearer {}

/**
 * <p>Checks the status of continuous backups and point in time recovery on the specified table.
 *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
 *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p> After continuous backups and point in time recovery are enabled, you can restore to any
 *             point in time within <code>EarliestRestorableDateTime</code> and
 *                 <code>LatestRestorableDateTime</code>. </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point
 *        in time during the last 35 days.
 *      </p>
 *          <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeContinuousBackupsCommand extends $Command<
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContinuousBackupsCommandInput) {
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
  ): Handler<DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeContinuousBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContinuousBackupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContinuousBackupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContinuousBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeContinuousBackupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContinuousBackupsCommandOutput> {
    return deserializeAws_json1_0DescribeContinuousBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
