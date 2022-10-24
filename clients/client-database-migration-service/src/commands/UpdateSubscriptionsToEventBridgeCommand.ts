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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  UpdateSubscriptionsToEventBridgeMessage,
  UpdateSubscriptionsToEventBridgeMessageFilterSensitiveLog,
  UpdateSubscriptionsToEventBridgeResponse,
  UpdateSubscriptionsToEventBridgeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand,
  serializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateSubscriptionsToEventBridgeCommandInput extends UpdateSubscriptionsToEventBridgeMessage {}
export interface UpdateSubscriptionsToEventBridgeCommandOutput
  extends UpdateSubscriptionsToEventBridgeResponse,
    __MetadataBearer {}

/**
 * <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules.
 *          By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher.
 *          If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you
 *          to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code>
 *          option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be
 *          available when you use Amazon EventBridge.</p>
 *          <p>To call this operation, make sure that you have certain permissions added to your user account.
 *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a>
 *             in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, UpdateSubscriptionsToEventBridgeCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, UpdateSubscriptionsToEventBridgeCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new UpdateSubscriptionsToEventBridgeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubscriptionsToEventBridgeCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionsToEventBridgeCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class UpdateSubscriptionsToEventBridgeCommand extends $Command<
  UpdateSubscriptionsToEventBridgeCommandInput,
  UpdateSubscriptionsToEventBridgeCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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

  constructor(readonly input: UpdateSubscriptionsToEventBridgeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSubscriptionsToEventBridgeCommandInput, UpdateSubscriptionsToEventBridgeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSubscriptionsToEventBridgeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "UpdateSubscriptionsToEventBridgeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSubscriptionsToEventBridgeMessageFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSubscriptionsToEventBridgeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSubscriptionsToEventBridgeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSubscriptionsToEventBridgeCommandOutput> {
    return deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
