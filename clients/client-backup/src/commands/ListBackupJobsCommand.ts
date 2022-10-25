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
  ListBackupJobsInput,
  ListBackupJobsInputFilterSensitiveLog,
  ListBackupJobsOutput,
  ListBackupJobsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupJobsCommand,
  serializeAws_restJson1ListBackupJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBackupJobsCommandInput extends ListBackupJobsInput {}
export interface ListBackupJobsCommandOutput extends ListBackupJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
 *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackupJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListBackupJobsCommand extends $Command<
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
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

  constructor(readonly input: ListBackupJobsCommandInput) {
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
  ): Handler<ListBackupJobsCommandInput, ListBackupJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupJobsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBackupJobsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupJobsCommandOutput> {
    return deserializeAws_restJson1ListBackupJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
