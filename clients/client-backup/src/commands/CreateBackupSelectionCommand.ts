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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateBackupSelectionInput, CreateBackupSelectionOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackupSelectionCommand,
  serializeAws_restJson1CreateBackupSelectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateBackupSelectionCommand}.
 */
export interface CreateBackupSelectionCommandInput extends CreateBackupSelectionInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupSelectionCommand}.
 */
export interface CreateBackupSelectionCommandOutput extends CreateBackupSelectionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan.
 *          For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateBackupSelectionInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   BackupSelection: { // BackupSelection
 *     SelectionName: "STRING_VALUE", // required
 *     IamRoleArn: "STRING_VALUE", // required
 *     Resources: [ // ResourceArns
 *       "STRING_VALUE",
 *     ],
 *     ListOfTags: [ // ListOfTags
 *       { // Condition
 *         ConditionType: "STRINGEQUALS", // required
 *         ConditionKey: "STRING_VALUE", // required
 *         ConditionValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     NotResources: [
 *       "STRING_VALUE",
 *     ],
 *     Conditions: { // Conditions
 *       StringEquals: [ // ConditionParameters
 *         { // ConditionParameter
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringNotEquals: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringLike: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringNotLike: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateBackupSelectionCommandInput - {@link CreateBackupSelectionCommandInput}
 * @returns {@link CreateBackupSelectionCommandOutput}
 * @see {@link CreateBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link CreateBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 *
 */
export class CreateBackupSelectionCommand extends $Command<
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: CreateBackupSelectionCommandInput) {
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
  ): Handler<CreateBackupSelectionCommandInput, CreateBackupSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBackupSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateBackupSelectionCommand";
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
  private serialize(input: CreateBackupSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackupSelectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupSelectionCommandOutput> {
    return deserializeAws_restJson1CreateBackupSelectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
