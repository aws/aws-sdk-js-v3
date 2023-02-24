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
import {
  GetBackupVaultNotificationsInput,
  GetBackupVaultNotificationsInputFilterSensitiveLog,
  GetBackupVaultNotificationsOutput,
  GetBackupVaultNotificationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupVaultNotificationsCommand,
  serializeAws_restJson1GetBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";

export interface GetBackupVaultNotificationsCommandInput extends GetBackupVaultNotificationsInput {}
export interface GetBackupVaultNotificationsCommandOutput extends GetBackupVaultNotificationsOutput, __MetadataBearer {}

/**
 * <p>Returns event notifications for the specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class GetBackupVaultNotificationsCommand extends $Command<
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
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

  constructor(readonly input: GetBackupVaultNotificationsCommandInput) {
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
  ): Handler<GetBackupVaultNotificationsCommandInput, GetBackupVaultNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupVaultNotificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupVaultNotificationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetBackupVaultNotificationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupVaultNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupVaultNotificationsCommandOutput> {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
