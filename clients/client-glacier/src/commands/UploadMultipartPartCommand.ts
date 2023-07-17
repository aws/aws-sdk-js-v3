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
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  UploadMultipartPartInput,
  UploadMultipartPartInputFilterSensitiveLog,
  UploadMultipartPartOutput,
} from "../models/models_0";
import { de_UploadMultipartPartCommand, se_UploadMultipartPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandInput extends Omit<UploadMultipartPartInput, "body"> {
  body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandOutput extends UploadMultipartPartOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UploadMultipartPartInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 *   range: "STRING_VALUE",
 *   body: "STREAMING_BLOB_VALUE",
 * };
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadMultipartPartOutput
 * //   checksum: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UploadMultipartPartCommandInput - {@link UploadMultipartPartCommandInput}
 * @returns {@link UploadMultipartPartCommandOutput}
 * @see {@link UploadMultipartPartCommandInput} for command's `input` shape.
 * @see {@link UploadMultipartPartCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>Returned if, when uploading an archive, Amazon S3 Glacier times out while receiving the
 *          upload.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To upload the first part of an archive
 * ```javascript
 * // The example uploads the first 1 MiB (1024 x 1024 bytes) part of an archive.
 * const input = {
 *   "accountId": "-",
 *   "body": "part1",
 *   "checksum": "c06f7cd4baacb087002a99a5f48bf953",
 *   "range": "bytes 0-1048575/*",
 *   "uploadId": "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
 *   "vaultName": "examplevault"
 * };
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "checksum": "c06f7cd4baacb087002a99a5f48bf953"
 * }
 * *\/
 * // example id: to-upload-the-first-part-of-an-archive-1481835899519
 * ```
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

  /**
   * @public
   */
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
  private serialize(input: UploadMultipartPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadMultipartPartCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadMultipartPartCommandOutput> {
    return de_UploadMultipartPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
