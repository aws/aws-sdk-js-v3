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
import { RestoreTableToPointInTimeInput, RestoreTableToPointInTimeOutput } from "../models/models_0";
import {
  deserializeAws_json1_0RestoreTableToPointInTimeCommand,
  serializeAws_json1_0RestoreTableToPointInTimeCommand,
} from "../protocols/Aws_json1_0";

export interface RestoreTableToPointInTimeCommandInput extends RestoreTableToPointInTimeInput {}
export interface RestoreTableToPointInTimeCommandOutput extends RestoreTableToPointInTimeOutput, __MetadataBearer {}

/**
 * <p>Restores the specified table to the specified point in time within
 *         <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *         You can restore your table to any point in time during the last 35 days.
 *         Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.
 *       </p>
 *          <p>
 *      When you restore using point in time recovery, DynamoDB restores your table data to the state based on
 *      the selected date and time (day:hour:minute:second) to a new table.
 *      </p>
 *          <p>
 *     Along with data, the following are also included on the new restored table using point in time recovery:
 *     </p>
 *         <ul>
 *             <li>
 *                  <p>Global secondary indexes (GSIs)</p>
 *              </li>
 *             <li>
 *                  <p>Local secondary indexes (LSIs)</p>
 *              </li>
 *             <li>
 *                  <p>Provisioned read and write capacity</p>
 *              </li>
 *             <li>
 *                  <p>Encryption settings</p>
 *                <important>
 *                   <p>
 *                  All these settings come from the current settings of the source table at the time of restore.
 *              </p>
 *                </important>
 *              </li>
 *          </ul>
 *
 *            <p>You must manually set up the following on the restored table:</p>
 *          <ul>
 *             <li>
 *                  <p>Auto scaling policies</p>
 *              </li>
 *             <li>
 *                  <p>IAM policies</p>
 *              </li>
 *             <li>
 *                  <p>Amazon CloudWatch metrics and alarms</p>
 *              </li>
 *             <li>
 *                  <p>Tags</p>
 *              </li>
 *             <li>
 *                  <p>Stream settings</p>
 *              </li>
 *             <li>
 *                  <p>Time to Live (TTL) settings</p>
 *              </li>
 *             <li>
 *                  <p>Point in time recovery settings</p>
 *              </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new RestoreTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreTableToPointInTimeCommand extends $Command<
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreTableToPointInTimeCommandInput) {
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
  ): Handler<RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "RestoreTableToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreTableToPointInTimeInput.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreTableToPointInTimeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreTableToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RestoreTableToPointInTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreTableToPointInTimeCommandOutput> {
    return deserializeAws_json1_0RestoreTableToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
