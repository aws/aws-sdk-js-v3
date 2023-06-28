// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import {
  NotifyObjectCompleteInput,
  NotifyObjectCompleteInputFilterSensitiveLog,
  NotifyObjectCompleteOutput,
} from "../models/models_0";
import { de_NotifyObjectCompleteCommand, se_NotifyObjectCompleteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
export type NotifyObjectCompleteCommandInputType = Omit<NotifyObjectCompleteInput, "MetadataBlob"> & {
  /**
   * For *`NotifyObjectCompleteInput["MetadataBlob"]`*, see {@link NotifyObjectCompleteInput.MetadataBlob}.
   */
  MetadataBlob?: NotifyObjectCompleteInput["MetadataBlob"] | string | Uint8Array | Buffer;
};
/**
 * @public
 *
 * The input for {@link NotifyObjectCompleteCommand}.
 */
export interface NotifyObjectCompleteCommandInput extends NotifyObjectCompleteCommandInputType {}
/**
 * @public
 *
 * The output of {@link NotifyObjectCompleteCommand}.
 */
export interface NotifyObjectCompleteCommandOutput extends NotifyObjectCompleteOutput, __MetadataBearer {}

/**
 * @public
 * Complete upload
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, NotifyObjectCompleteCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, NotifyObjectCompleteCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // NotifyObjectCompleteInput
 *   BackupJobId: "STRING_VALUE", // required
 *   UploadId: "STRING_VALUE", // required
 *   ObjectChecksum: "STRING_VALUE", // required
 *   ObjectChecksumAlgorithm: "STRING_VALUE", // required
 *   MetadataString: "STRING_VALUE",
 *   MetadataBlob: "STREAMING_BLOB_VALUE",
 *   MetadataBlobLength: Number("long"),
 *   MetadataBlobChecksum: "STRING_VALUE",
 *   MetadataBlobChecksumAlgorithm: "STRING_VALUE",
 * };
 * const command = new NotifyObjectCompleteCommand(input);
 * const response = await client.send(command);
 * // { // NotifyObjectCompleteOutput
 * //   ObjectChecksum: "STRING_VALUE", // required
 * //   ObjectChecksumAlgorithm: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param NotifyObjectCompleteCommandInput - {@link NotifyObjectCompleteCommandInput}
 * @returns {@link NotifyObjectCompleteCommandOutput}
 * @see {@link NotifyObjectCompleteCommandInput} for command's `input` shape.
 * @see {@link NotifyObjectCompleteCommandOutput} for command's `response` shape.
 * @see {@link BackupStorageClientResolvedConfig | config} for BackupStorageClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 *
 * @throws {@link KMSInvalidKeyUsageException} (client fault)
 *  Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
 *
 * @throws {@link NotReadableInputStreamException} (client fault)
 *  Retryalble exception. Indicated issues while reading an input stream due to the networking issues or connection drop on the client side.
 *
 * @throws {@link RetryableException} (server fault)
 *  Retryable exception. In general indicates internal failure that can be fixed by retry.
 *
 * @throws {@link ServiceInternalException} (server fault)
 *  Deprecated. To be removed from the model.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Retryable exception, indicates internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Increased rate over throttling limits. Can be retried with exponential backoff.
 *
 * @throws {@link BackupStorageServiceException}
 * <p>Base exception class for all service exceptions from BackupStorage service.</p>
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: NotifyObjectCompleteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NotifyObjectCompleteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyObjectCompleteCommandOutput> {
    return de_NotifyObjectCompleteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
