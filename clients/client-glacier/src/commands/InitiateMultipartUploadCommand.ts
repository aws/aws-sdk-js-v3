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
  InitiateMultipartUploadInput,
  InitiateMultipartUploadInputFilterSensitiveLog,
  InitiateMultipartUploadOutput,
  InitiateMultipartUploadOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InitiateMultipartUploadCommand,
  serializeAws_restJson1InitiateMultipartUploadCommand,
} from "../protocols/Aws_restJson1";

export interface InitiateMultipartUploadCommandInput extends InitiateMultipartUploadInput {}
export interface InitiateMultipartUploadCommandOutput extends InitiateMultipartUploadOutput, __MetadataBearer {}

/**
 * <p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart
 *          upload resource and returns its ID in the response. The multipart upload ID is used in
 *          subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p>
 *
 *          <p>When you initiate a multipart upload, you specify the part size in number of bytes.
 *          The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576
 *          (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable
 *          part size is 1 MB, and the maximum is 4 GB.</p>
 *
 *          <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>),
 *          except the last one, must have the same size. The last one can be the same size or smaller.
 *          For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart
 *          upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of
 *          0.2 MB. </p>
 *
 *          <note>
 *             <p>You don't need to know the size of the archive when you start a multipart upload
 *             because Amazon S3 Glacier does not require you to specify the overall archive
 *             size.</p>
 *          </note>
 *
 *          <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload
 *          resource referenced by the ID. Glacier also removes the multipart upload resource if
 *          you cancel the multipart upload or it may be removed if there is no activity for a period
 *          of 24 hours.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class InitiateMultipartUploadCommand extends $Command<
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput,
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

  constructor(readonly input: InitiateMultipartUploadCommandInput) {
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
  ): Handler<InitiateMultipartUploadCommandInput, InitiateMultipartUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateMultipartUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "InitiateMultipartUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateMultipartUploadInputFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateMultipartUploadOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateMultipartUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateMultipartUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateMultipartUploadCommandOutput> {
    return deserializeAws_restJson1InitiateMultipartUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
