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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { de_DeleteBackupCommand, se_DeleteBackupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupCommand}.
 */
export interface DeleteBackupCommandInput extends DeleteBackupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBackupCommand}.
 */
export interface DeleteBackupCommandOutput extends DeleteBackupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and
 *             its data is gone.</p>
 *          <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in
 *             later <code>DescribeBackups</code> calls.</p>
 *          <important>
 *             <p>The data in a deleted backup is also deleted and can't be recovered by any
 *                 means.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DeleteBackupRequest
 *   BackupId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackupResponse
 * //   BackupId: "STRING_VALUE",
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "TRANSFERRING" || "DELETED" || "FAILED" || "PENDING" || "COPYING",
 * // };
 *
 * ```
 *
 * @param DeleteBackupCommandInput - {@link DeleteBackupCommandInput}
 * @returns {@link DeleteBackupCommandOutput}
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BackupBeingCopied} (client fault)
 *  <p>You can't delete a backup while it's being copied.</p>
 *
 * @throws {@link BackupInProgress} (client fault)
 *  <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 *
 * @throws {@link BackupNotFound} (client fault)
 *  <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 *
 * @throws {@link BackupRestoring} (client fault)
 *  <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @example To delete a backup
 * ```javascript
 * // This operation deletes an Amazon FSx file system backup.
 * const input = {
 *   "BackupId": "backup-03e3c82e0183b7b6b"
 * };
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BackupId": "backup-03e3c82e0183b7b6b",
 *   "Lifecycle": "DELETED"
 * }
 * *\/
 * // example id: to-delete-a-file-system-1481847318399
 * ```
 *
 */
export class DeleteBackupCommand extends $Command<
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: DeleteBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteBackupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "DeleteBackup",
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
  private serialize(input: DeleteBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackupCommandOutput> {
    return de_DeleteBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
