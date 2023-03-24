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
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEventSubscriptionCommand,
  serializeAws_json1_1CreateEventSubscriptionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates an DMS event notification subscription. </p>
 *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
 *          provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and
 *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
 *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
 *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
 *             my-replinstance</code>, you will be notified of all the replication instance events for
 *          the specified source. If you specify a <code>SourceType</code> but don't specify a
 *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
 *          all your DMS sources. If you don't specify either <code>SourceType</code> nor
 *             <code>SourceIdentifier</code>, you will be notified of events generated from all DMS
 *          sources belonging to your customer account.</p>
 *          <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
 *             Notifications</a> in the <i>Database Migration Service User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = {
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE", // required
 *   SourceType: "STRING_VALUE",
 *   EventCategories: [
 *     "STRING_VALUE",
 *   ],
 *   SourceIds: [
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateEventSubscriptionCommandInput - {@link CreateEventSubscriptionCommandInput}
 * @returns {@link CreateEventSubscriptionCommandOutput}
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link KMSAccessDeniedFault} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 *
 * @throws {@link KMSDisabledFault} (client fault)
 *  <p>The specified KMS key isn't enabled.</p>
 *
 * @throws {@link KMSInvalidStateFault} (client fault)
 *  <p>The state of the specified KMS resource isn't valid for this request.</p>
 *
 * @throws {@link KMSNotFoundFault} (client fault)
 *  <p>The specified KMS entity or resource can't be found.</p>
 *
 * @throws {@link KMSThrottlingFault} (client fault)
 *  <p>This request triggered KMS request throttling.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>The SNS topic is invalid.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You are not authorized for the SNS subscription.</p>
 *
 *
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateEventSubscriptionCommandInput) {
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
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEventSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventSubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
