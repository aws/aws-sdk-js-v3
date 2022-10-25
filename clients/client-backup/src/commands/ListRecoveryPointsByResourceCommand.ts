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
  ListRecoveryPointsByResourceInput,
  ListRecoveryPointsByResourceInputFilterSensitiveLog,
  ListRecoveryPointsByResourceOutput,
  ListRecoveryPointsByResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByResourceCommand,
  serializeAws_restJson1ListRecoveryPointsByResourceCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecoveryPointsByResourceCommandInput extends ListRecoveryPointsByResourceInput {}
export interface ListRecoveryPointsByResourceCommandOutput
  extends ListRecoveryPointsByResourceOutput,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about all the recovery points of the type specified by a
 *          resource Amazon Resource Name (ARN).</p>
 *          <note>
 *             <p>For Amazon EFS and Amazon EC2, this action only lists recovery points
 *             created by Backup.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRecoveryPointsByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecoveryPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListRecoveryPointsByResourceCommand extends $Command<
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
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

  constructor(readonly input: ListRecoveryPointsByResourceCommandInput) {
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
  ): Handler<ListRecoveryPointsByResourceCommandInput, ListRecoveryPointsByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecoveryPointsByResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRecoveryPointsByResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecoveryPointsByResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecoveryPointsByResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecoveryPointsByResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByResourceCommandOutput> {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
