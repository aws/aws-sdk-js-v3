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
import { ArchiveCreationOutput, UploadArchiveInput, UploadArchiveInputFilterSensitiveLog } from "../models/models_0";
import { de_UploadArchiveCommand, se_UploadArchiveCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadArchiveCommand}.
 */
export interface UploadArchiveCommandInput extends Omit<UploadArchiveInput, "body"> {
  body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadArchiveCommand}.
 */
export interface UploadArchiveCommandOutput extends ArchiveCreationOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a
 *          successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in
 *          the <code>x-amz-archive-id</code> header of the response. </p>
 *
 *          <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload
 *          an archive, you should save the archive ID returned so that you can retrieve or delete the
 *          archive later. Besides saving the archive ID, you can also index it and give it a friendly
 *          name to allow for better searching. You can also use the optional archive description field
 *          to specify how the archive is referred to in an external index of archives, such as you
 *          might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of
 *          archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p>
 *
 *          <p>You must provide a SHA256 tree hash of the data you are uploading. For information
 *          about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p>
 *
 *          <p>You can optionally specify an archive description of up to 1,024 printable ASCII
 *          characters. You can get the archive description when you either retrieve the archive or get
 *          the vault inventory. For more information, see <a>InitiateJob</a>. Amazon
 *          Glacier does not interpret the description in any way. An archive description does not need
 *          to be unique. You cannot use the description to retrieve or sort the archive list. </p>
 *
 *          <p>Archives are immutable. After you upload an archive, you cannot edit the archive or
 *          its description.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadArchiveCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, UploadArchiveCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // UploadArchiveInput
 *   vaultName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   archiveDescription: "STRING_VALUE",
 *   checksum: "STRING_VALUE",
 *   body: "STREAMING_BLOB_VALUE",
 * };
 * const command = new UploadArchiveCommand(input);
 * const response = await client.send(command);
 * // { // ArchiveCreationOutput
 * //   location: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   archiveId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UploadArchiveCommandInput - {@link UploadArchiveCommandInput}
 * @returns {@link UploadArchiveCommandOutput}
 * @see {@link UploadArchiveCommandInput} for command's `input` shape.
 * @see {@link UploadArchiveCommandOutput} for command's `response` shape.
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
 * @example To upload an archive
 * ```javascript
 * // The example adds an archive to a vault.
 * const input = {
 *   "accountId": "-",
 *   "archiveDescription": "",
 *   "body": "example-data-to-upload",
 *   "checksum": "",
 *   "vaultName": "my-vault"
 * };
 * const command = new UploadArchiveCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "archiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
 *   "checksum": "969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67",
 *   "location": "/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw"
 * }
 * *\/
 * // example id: upload-archive-1481668510494
 * ```
 *
 */
export class UploadArchiveCommand extends $Command<
  UploadArchiveCommandInput,
  UploadArchiveCommandOutput,
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
  constructor(readonly input: UploadArchiveCommandInput) {
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
  ): Handler<UploadArchiveCommandInput, UploadArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UploadArchiveCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "UploadArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadArchiveInputFilterSensitiveLog,
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
  private serialize(input: UploadArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadArchiveCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadArchiveCommandOutput> {
    return de_UploadArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
