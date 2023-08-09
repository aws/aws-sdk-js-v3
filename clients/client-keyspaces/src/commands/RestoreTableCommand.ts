// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { RestoreTableRequest, RestoreTableResponse } from "../models/models_0";
import { de_RestoreTableCommand, se_RestoreTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableCommand}.
 */
export interface RestoreTableCommandInput extends RestoreTableRequest {}
/**
 * @public
 *
 * The output of {@link RestoreTableCommand}.
 */
export interface RestoreTableCommandOutput extends RestoreTableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Restores the specified table to the specified point in time within the
 *          <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see
 *          <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window">
 *             Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
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
 *          <ul>
 *             <li>
 *                <p>Read/write capacity mode</p>
 *             </li>
 *             <li>
 *                <p>Provisioned throughput capacity settings</p>
 *             </li>
 *             <li>
 *                <p>Point-in-time (PITR) settings</p>
 *             </li>
 *             <li>
 *                <p>Tags</p>
 *             </li>
 *          </ul>
 *          <p>For more
 *                information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>Note that the following settings are not restored, and you must configure them manually for
 *          the new table:</p>
 *          <ul>
 *             <li>
 *                <p>Automatic scaling policies (for tables that use provisioned capacity
 *             mode)</p>
 *             </li>
 *             <li>
 *                <p>Identity and Access Management (IAM) policies</p>
 *             </li>
 *             <li>
 *                <p>Amazon CloudWatch metrics and alarms</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, RestoreTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, RestoreTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // RestoreTableRequest
 *   sourceKeyspaceName: "STRING_VALUE", // required
 *   sourceTableName: "STRING_VALUE", // required
 *   targetKeyspaceName: "STRING_VALUE", // required
 *   targetTableName: "STRING_VALUE", // required
 *   restoreTimestamp: new Date("TIMESTAMP"),
 *   capacitySpecificationOverride: { // CapacitySpecification
 *     throughputMode: "STRING_VALUE", // required
 *     readCapacityUnits: Number("long"),
 *     writeCapacityUnits: Number("long"),
 *   },
 *   encryptionSpecificationOverride: { // EncryptionSpecification
 *     type: "STRING_VALUE", // required
 *     kmsKeyIdentifier: "STRING_VALUE",
 *   },
 *   pointInTimeRecoveryOverride: { // PointInTimeRecovery
 *     status: "STRING_VALUE", // required
 *   },
 *   tagsOverride: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RestoreTableCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableResponse
 * //   restoredTableARN: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RestoreTableCommandInput - {@link RestoreTableCommandInput}
 * @returns {@link RestoreTableCommandOutput}
 * @see {@link RestoreTableCommandInput} for command's `input` shape.
 * @see {@link RestoreTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces could not complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace or table that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: RestoreTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreTableCommandOutput> {
    return de_RestoreTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
