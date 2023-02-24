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
  PutChunkInput,
  PutChunkInputFilterSensitiveLog,
  PutChunkOutput,
  PutChunkOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutChunkCommand,
  serializeAws_restJson1PutChunkCommand,
} from "../protocols/Aws_restJson1";

type PutChunkCommandInputType = Omit<PutChunkInput, "Data"> & {
  /**
   * For *`PutChunkInput["Data"]`*, see {@link PutChunkInput.Data}.
   */
  Data: PutChunkInput["Data"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutChunkInput` interface. There are more parameters than `Data` defined in {@link PutChunkInput}
 */
export interface PutChunkCommandInput extends PutChunkCommandInputType {}
export interface PutChunkCommandOutput extends PutChunkOutput, __MetadataBearer {}

/**
 * Upload chunk.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, PutChunkCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, PutChunkCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const command = new PutChunkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutChunkCommandInput} for command's `input` shape.
 * @see {@link PutChunkCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 */
export class PutChunkCommand extends $Command<
  PutChunkCommandInput,
  PutChunkCommandOutput,
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

  constructor(readonly input: PutChunkCommandInput) {
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
  ): Handler<PutChunkCommandInput, PutChunkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutChunkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupStorageClient";
    const commandName = "PutChunkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutChunkInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutChunkOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutChunkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutChunkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutChunkCommandOutput> {
    return deserializeAws_restJson1PutChunkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
