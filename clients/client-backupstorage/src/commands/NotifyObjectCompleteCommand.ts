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

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import {
  NotifyObjectCompleteInput,
  NotifyObjectCompleteInputFilterSensitiveLog,
  NotifyObjectCompleteOutput,
  NotifyObjectCompleteOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1NotifyObjectCompleteCommand,
  serializeAws_restJson1NotifyObjectCompleteCommand,
} from "../protocols/Aws_restJson1";

type NotifyObjectCompleteCommandInputType = Omit<NotifyObjectCompleteInput, "MetadataBlob"> & {
  /**
   * For *`NotifyObjectCompleteInput["MetadataBlob"]`*, see {@link NotifyObjectCompleteInput.MetadataBlob}.
   */
  MetadataBlob?: NotifyObjectCompleteInput["MetadataBlob"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `NotifyObjectCompleteInput` interface. There are more parameters than `MetadataBlob` defined in {@link NotifyObjectCompleteInput}
 */
export interface NotifyObjectCompleteCommandInput extends NotifyObjectCompleteCommandInputType {}
export interface NotifyObjectCompleteCommandOutput extends NotifyObjectCompleteOutput, __MetadataBearer {}

/**
 * Complete upload
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, NotifyObjectCompleteCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, NotifyObjectCompleteCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const command = new NotifyObjectCompleteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyObjectCompleteCommandInput} for command's `input` shape.
 * @see {@link NotifyObjectCompleteCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 */
export class NotifyObjectCompleteCommand extends $Command<
  NotifyObjectCompleteCommandInput,
  NotifyObjectCompleteCommandOutput,
  BackupStorageClientResolvedConfig
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

  constructor(readonly input: NotifyObjectCompleteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupStorageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyObjectCompleteCommandInput, NotifyObjectCompleteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyObjectCompleteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupStorageClient";
    const commandName = "NotifyObjectCompleteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyObjectCompleteInputFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyObjectCompleteOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyObjectCompleteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1NotifyObjectCompleteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyObjectCompleteCommandOutput> {
    return deserializeAws_restJson1NotifyObjectCompleteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
