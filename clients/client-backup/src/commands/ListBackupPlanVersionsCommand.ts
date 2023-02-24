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
  ListBackupPlanVersionsInput,
  ListBackupPlanVersionsInputFilterSensitiveLog,
  ListBackupPlanVersionsOutput,
  ListBackupPlanVersionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlanVersionsCommand,
  serializeAws_restJson1ListBackupPlanVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBackupPlanVersionsCommandInput extends ListBackupPlanVersionsInput {}
export interface ListBackupPlanVersionsCommandOutput extends ListBackupPlanVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanVersionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanVersionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanVersionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListBackupPlanVersionsCommand extends $Command<
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
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

  constructor(readonly input: ListBackupPlanVersionsCommandInput) {
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
  ): Handler<ListBackupPlanVersionsCommandInput, ListBackupPlanVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupPlanVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlanVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlanVersionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanVersionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlanVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlanVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlanVersionsCommandOutput> {
    return deserializeAws_restJson1ListBackupPlanVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
