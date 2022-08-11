// smithy-typescript generated code
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
  GetObjectMetadataInput,
  GetObjectMetadataInputFilterSensitiveLog,
  GetObjectMetadataOutput,
  GetObjectMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetObjectMetadataCommand,
  serializeAws_restJson1GetObjectMetadataCommand,
} from "../protocols/Aws_restJson1";

export interface GetObjectMetadataCommandInput extends GetObjectMetadataInput {}
export interface GetObjectMetadataCommandOutput extends GetObjectMetadataOutput, __MetadataBearer {}

/**
 * Get metadata associated with an Object.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, GetObjectMetadataCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, GetObjectMetadataCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const command = new GetObjectMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectMetadataCommandInput} for command's `input` shape.
 * @see {@link GetObjectMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 */
export class GetObjectMetadataCommand extends $Command<
  GetObjectMetadataCommandInput,
  GetObjectMetadataCommandOutput,
  BackupStorageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetObjectMetadataCommandInput) {
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
  ): Handler<GetObjectMetadataCommandInput, GetObjectMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupStorageClient";
    const commandName = "GetObjectMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetObjectMetadataOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetObjectMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectMetadataCommandOutput> {
    return deserializeAws_restJson1GetObjectMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
