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
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import { BackupStorageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupStorageClient";
import { PutObjectInput, PutObjectInputFilterSensitiveLog, PutObjectOutput } from "../models/models_0";
import { de_PutObjectCommand, se_PutObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutObjectCommand}.
 */
export interface PutObjectCommandInput extends Omit<PutObjectInput, "InlineChunk"> {
  InlineChunk?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutObjectCommand}.
 */
export interface PutObjectCommandOutput extends PutObjectOutput, __MetadataBearer {}

/**
 * @public
 * Upload object that can store object metadata String and data blob in single API call using inline chunk field.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupStorageClient, PutObjectCommand } from "@aws-sdk/client-backupstorage"; // ES Modules import
 * // const { BackupStorageClient, PutObjectCommand } = require("@aws-sdk/client-backupstorage"); // CommonJS import
 * const client = new BackupStorageClient(config);
 * const input = { // PutObjectInput
 *   BackupJobId: "STRING_VALUE", // required
 *   ObjectName: "STRING_VALUE", // required
 *   MetadataString: "STRING_VALUE",
 *   InlineChunk: "STREAMING_BLOB_VALUE",
 *   InlineChunkLength: Number("long"),
 *   InlineChunkChecksum: "STRING_VALUE",
 *   InlineChunkChecksumAlgorithm: "STRING_VALUE",
 *   ObjectChecksum: "STRING_VALUE",
 *   ObjectChecksumAlgorithm: "SUMMARY",
 *   ThrowOnDuplicate: true || false,
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectOutput
 * //   InlineChunkChecksum: "STRING_VALUE", // required
 * //   InlineChunkChecksumAlgorithm: "SHA256", // required
 * //   ObjectChecksum: "STRING_VALUE", // required
 * //   ObjectChecksumAlgorithm: "SUMMARY", // required
 * // };
 *
 * ```
 *
 * @param PutObjectCommandInput - {@link PutObjectCommandInput}
 * @returns {@link PutObjectCommandOutput}
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoStorageFrontendService",
        operation: "PutObject",
      },
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
  private serialize(input: PutObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectCommandOutput> {
    return de_PutObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
