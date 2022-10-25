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
  ListBackupPlansInput,
  ListBackupPlansInputFilterSensitiveLog,
  ListBackupPlansOutput,
  ListBackupPlansOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlansCommand,
  serializeAws_restJson1ListBackupPlansCommand,
} from "../protocols/Aws_restJson1";

export interface ListBackupPlansCommandInput extends ListBackupPlansInput {}
export interface ListBackupPlansCommandOutput extends ListBackupPlansOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all active backup plans for an authenticated account. The list
 *          contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion
 *          dates, version IDs, plan names, and creator request IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlansCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlansCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListBackupPlansCommand extends $Command<
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
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

  constructor(readonly input: ListBackupPlansCommandInput) {
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
  ): Handler<ListBackupPlansCommandInput, ListBackupPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlansInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlansOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlansCommandOutput> {
    return deserializeAws_restJson1ListBackupPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
