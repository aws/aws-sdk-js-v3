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

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import {
  RestoreTableRequest,
  RestoreTableRequestFilterSensitiveLog,
  RestoreTableResponse,
  RestoreTableResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0RestoreTableCommand,
  serializeAws_json1_0RestoreTableCommand,
} from "../protocols/Aws_json1_0";

export interface RestoreTableCommandInput extends RestoreTableRequest {}
export interface RestoreTableCommandOutput extends RestoreTableResponse, __MetadataBearer {}

/**
 * <p>Restores the specified table to the specified point in time within the
 *          <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see
 *          <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window">
 *             Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.
 *       </p>
 *          <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p>
 *          <p>When you restore using point in time recovery,
 *          Amazon Keyspaces restores your source table's schema and data to the state
 *          based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings
 *       are also restored to the state based on the selected timestamp.</p>
 *          <p>In addition to the table's schema, data, and TTL settings,
 *          <code>RestoreTable</code> restores the capacity mode, encryption, and
 *          point-in-time recovery settings from the source table.
 *          Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp,
 *          these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p>
 *          <p>You can also overwrite
 *             these settings during restore:</p>
 *          <p>• Read/write capacity mode</p>
 *          <p>• Provisioned throughput capacity settings</p>
 *          <p>• Point-in-time (PITR) settings</p>
 *          <p>• Tags</p>
 *          <p>For more
 *                information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>Note that the following settings are not restored, and you must configure them manually for
 *          the new table:</p>
 *          <p>• Automatic scaling policies (for tables that use provisioned capacity
 *                mode)</p>
 *          <p>• Identity and Access Management (IAM) policies</p>
 *          <p>• Amazon CloudWatch metrics and alarms</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, RestoreTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, RestoreTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const command = new RestoreTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableCommandInput} for command's `input` shape.
 * @see {@link RestoreTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 */
export class RestoreTableCommand extends $Command<
  RestoreTableCommandInput,
  RestoreTableCommandOutput,
  KeyspacesClientResolvedConfig
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

  constructor(readonly input: RestoreTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KeyspacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreTableCommandInput, RestoreTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RestoreTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "RestoreTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreTableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RestoreTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreTableCommandOutput> {
    return deserializeAws_json1_0RestoreTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
