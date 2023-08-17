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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  CreateLogicallyAirGappedBackupVaultInput,
  CreateLogicallyAirGappedBackupVaultInputFilterSensitiveLog,
  CreateLogicallyAirGappedBackupVaultOutput,
} from "../models/models_0";
import {
  de_CreateLogicallyAirGappedBackupVaultCommand,
  se_CreateLogicallyAirGappedBackupVaultCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLogicallyAirGappedBackupVaultCommand}.
 */
export interface CreateLogicallyAirGappedBackupVaultCommandInput extends CreateLogicallyAirGappedBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateLogicallyAirGappedBackupVaultCommand}.
 */
export interface CreateLogicallyAirGappedBackupVaultCommandOutput
  extends CreateLogicallyAirGappedBackupVaultOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This request creates a logical container where backups are stored.</p>
 *          <p>This request includes a name, optionally one or more resource tags, an encryption key,
 *          and a request ID.</p>
 *          <note>
 *             <p>Do not include sensitive data, such as passport numbers, in the name of a backup
 *          vault.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateLogicallyAirGappedBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateLogicallyAirGappedBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateLogicallyAirGappedBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 *   MinRetentionDays: Number("long"), // required
 *   MaxRetentionDays: Number("long"), // required
 * };
 * const command = new CreateLogicallyAirGappedBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateLogicallyAirGappedBackupVaultOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   VaultState: "CREATING" || "AVAILABLE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateLogicallyAirGappedBackupVaultCommandInput - {@link CreateLogicallyAirGappedBackupVaultCommandInput}
 * @returns {@link CreateLogicallyAirGappedBackupVaultCommandOutput}
 * @see {@link CreateLogicallyAirGappedBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateLogicallyAirGappedBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class CreateLogicallyAirGappedBackupVaultCommand extends $Command<
  CreateLogicallyAirGappedBackupVaultCommandInput,
  CreateLogicallyAirGappedBackupVaultCommandOutput,
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
  constructor(readonly input: CreateLogicallyAirGappedBackupVaultCommandInput) {
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
  ): Handler<CreateLogicallyAirGappedBackupVaultCommandInput, CreateLogicallyAirGappedBackupVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLogicallyAirGappedBackupVaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateLogicallyAirGappedBackupVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLogicallyAirGappedBackupVaultInputFilterSensitiveLog,
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
  private serialize(
    input: CreateLogicallyAirGappedBackupVaultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLogicallyAirGappedBackupVaultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLogicallyAirGappedBackupVaultCommandOutput> {
    return de_CreateLogicallyAirGappedBackupVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
