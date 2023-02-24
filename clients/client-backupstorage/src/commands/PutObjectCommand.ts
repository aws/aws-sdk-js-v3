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
  PutObjectInput,
  PutObjectInputFilterSensitiveLog,
  PutObjectOutput,
  PutObjectOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutObjectCommand,
  serializeAws_restJson1PutObjectCommand,
} from "../protocols/Aws_restJson1";

type PutObjectCommandInputType = Omit<PutObjectInput, "InlineChunk"> & {
  /**
   * For *`PutObjectInput["InlineChunk"]`*, see {@link PutObjectInput.InlineChunk}.
   */
  InlineChunk?: PutObjectInput["InlineChunk"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutObjectInput` interface. There are more parameters than `InlineChunk` defined in {@link PutObjectInput}
 */
export interface PutObjectCommandInput extends PutObjectCommandInputType {}
export interface PutObjectCommandOutput extends PutObjectOutput, __MetadataBearer {}

/**
 * Upload object that can store object metadata String and data blob in single API call using inline chunk field.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, PutObjectCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, PutObjectCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 */
export class PutObjectCommand extends $Command<
  PutObjectCommandInput,
  PutObjectCommandOutput,
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

  constructor(readonly input: PutObjectCommandInput) {
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
  ): Handler<PutObjectCommandInput, PutObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutObjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupStorageClient";
    const commandName = "PutObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutObjectOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectCommandOutput> {
    return deserializeAws_restJson1PutObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
