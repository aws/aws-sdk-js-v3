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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  UploadMultipartPartInput,
  UploadMultipartPartInputFilterSensitiveLog,
  UploadMultipartPartOutput,
  UploadMultipartPartOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UploadMultipartPartCommand,
  serializeAws_restJson1UploadMultipartPartCommand,
} from "../protocols/Aws_restJson1";

type UploadMultipartPartCommandInputType = Omit<UploadMultipartPartInput, "body"> & {
  /**
   * For *`UploadMultipartPartInput["body"]`*, see {@link UploadMultipartPartInput.body}.
   */
  body?: UploadMultipartPartInput["body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `UploadMultipartPartInput` interface. There are more parameters than `body` defined in {@link UploadMultipartPartInput}
 */
export interface UploadMultipartPartCommandInput extends UploadMultipartPartCommandInputType {}
export interface UploadMultipartPartCommandOutput extends UploadMultipartPartOutput, __MetadataBearer {}

/**
 * <p>This operation uploads a part of an archive. You can upload archive parts in any
 *          order. You can also upload them in parallel. You can upload up to 10,000 parts for a
 *          multipart upload.</p>
 *
 *          <p>Amazon Glacier rejects your upload part request if any of the following conditions is
 *          true:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>SHA256 tree hash does not match</b>To ensure that part
 *                data is not corrupted in transmission, you compute a SHA256 tree hash of the part and
 *                include it in your request. Upon receiving the part data, Amazon S3 Glacier also
 *                computes a SHA256 tree hash. If these hash values don't match, the operation fails.
 *                For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing
 *                   Checksums</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Part size does not match</b>The size of each part except
 *                the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the
 *                same size as, or smaller than, the specified size.</p>
 *                <note>
 *                   <p>If you upload a part whose size is smaller than the part size you specified
 *                   in your initiate multipart upload request and that part is not the last part, then
 *                   the upload part request will succeed. However, the subsequent Complete Multipart
 *                   Upload request will fail.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Range does not align</b>The byte range value in the
 *                request does not align with the part size specified in the corresponding initiate
 *                request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to
 *                4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part
 *                ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align
 *                with the part size and the upload will fail. </p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent. If you upload the same part multiple times, the data
 *          included in the most recent request overwrites the previously uploaded data.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the
 *             <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadMultipartPartCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, UploadMultipartPartCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadMultipartPartCommandInput} for command's `input` shape.
 * @see {@link UploadMultipartPartCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class UploadMultipartPartCommand extends $Command<
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: UploadMultipartPartCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadMultipartPartCommandInput, UploadMultipartPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadMultipartPartCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "UploadMultipartPartCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadMultipartPartInputFilterSensitiveLog,
      outputFilterSensitiveLog: UploadMultipartPartOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadMultipartPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadMultipartPartCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadMultipartPartCommandOutput> {
    return deserializeAws_restJson1UploadMultipartPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
