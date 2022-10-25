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
  ListRestoreJobsInput,
  ListRestoreJobsInputFilterSensitiveLog,
  ListRestoreJobsOutput,
  ListRestoreJobsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRestoreJobsCommand,
  serializeAws_restJson1ListRestoreJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRestoreJobsCommandInput extends ListRestoreJobsInput {}
export interface ListRestoreJobsCommandOutput extends ListRestoreJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of jobs that Backup initiated to restore a saved resource,
 *          including details about the recovery process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRestoreJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRestoreJobsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListRestoreJobsCommand extends $Command<
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
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

  constructor(readonly input: ListRestoreJobsCommandInput) {
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
  ): Handler<ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRestoreJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRestoreJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRestoreJobsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListRestoreJobsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRestoreJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRestoreJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRestoreJobsCommandOutput> {
    return deserializeAws_restJson1ListRestoreJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
