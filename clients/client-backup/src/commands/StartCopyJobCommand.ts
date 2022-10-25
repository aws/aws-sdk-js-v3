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
  StartCopyJobInput,
  StartCopyJobInputFilterSensitiveLog,
  StartCopyJobOutput,
  StartCopyJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartCopyJobCommand,
  serializeAws_restJson1StartCopyJobCommand,
} from "../protocols/Aws_restJson1";

export interface StartCopyJobCommandInput extends StartCopyJobInput {}
export interface StartCopyJobCommandOutput extends StartCopyJobOutput, __MetadataBearer {}

/**
 * <p>Starts a job to create a one-time copy of the specified resource.</p>
 *          <p>Does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartCopyJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartCopyJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StartCopyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCopyJobCommandInput} for command's `input` shape.
 * @see {@link StartCopyJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class StartCopyJobCommand extends $Command<
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput,
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

  constructor(readonly input: StartCopyJobCommandInput) {
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
  ): Handler<StartCopyJobCommandInput, StartCopyJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartCopyJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "StartCopyJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartCopyJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartCopyJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartCopyJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartCopyJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartCopyJobCommandOutput> {
    return deserializeAws_restJson1StartCopyJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
