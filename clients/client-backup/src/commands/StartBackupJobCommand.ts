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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { StartBackupJobInput, StartBackupJobInputFilterSensitiveLog, StartBackupJobOutput } from "../models/models_0";
import { de_StartBackupJobCommand, se_StartBackupJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartBackupJobCommand}.
 */
export interface StartBackupJobCommandInput extends StartBackupJobInput {}
/**
 * @public
 *
 * The output of {@link StartBackupJobCommand}.
 */
export interface StartBackupJobCommandOutput extends StartBackupJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Starts an on-demand backup job for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // StartBackupJobInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   StartWindowMinutes: Number("long"),
 *   CompleteWindowMinutes: Number("long"),
 *   Lifecycle: { // Lifecycle
 *     MoveToColdStorageAfterDays: Number("long"),
 *     DeleteAfterDays: Number("long"),
 *   },
 *   RecoveryPointTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   BackupOptions: { // BackupOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartBackupJobCommand(input);
 * const response = await client.send(command);
 * // { // StartBackupJobOutput
 * //   BackupJobId: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   IsParent: true || false,
 * // };
 *
 * ```
 *
 * @param StartBackupJobCommandInput - {@link StartBackupJobCommandInput}
 * @returns {@link StartBackupJobCommandOutput}
 * @see {@link StartBackupJobCommandInput} for command's `input` shape.
 * @see {@link StartBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class StartBackupJobCommand extends $Command<
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: StartBackupJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBackupJobCommandInput, StartBackupJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartBackupJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "StartBackupJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBackupJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "StartBackupJob",
      },
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
  private serialize(input: StartBackupJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartBackupJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBackupJobCommandOutput> {
    return de_StartBackupJobCommand(output, context);
  }
}
