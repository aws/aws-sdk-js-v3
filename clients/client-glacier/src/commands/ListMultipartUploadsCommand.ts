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
} from "@smithy/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListMultipartUploadsInput, ListMultipartUploadsOutput } from "../models/models_0";
import { de_ListMultipartUploadsCommand, se_ListMultipartUploadsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandInput extends ListMultipartUploadsInput {}
/**
 * @public
 *
 * The output of {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandOutput extends ListMultipartUploadsOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists in-progress multipart uploads for the specified vault. An
 *          in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted.
 *          The list returned in the List Multipart Upload response has no guaranteed order. </p>
 *
 *          <p>The List Multipart Uploads operation supports pagination. By default, this operation
 *          returns up to 50 multipart uploads in the response. You should always check the response
 *          for a <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of multipart uploads that
 *          begins at a specific upload, set the <code>marker</code> request parameter to the value you
 *          obtained from a previous List Multipart Upload request. You can also limit the number of
 *          uploads returned in the response by specifying the <code>limit</code> parameter in the
 *          request.</p>
 *
 *          <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads
 *          for a vault and does not require a multipart upload ID. The List Parts operation requires a
 *          multipart upload ID since parts are associated with a single upload.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads
 *          </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListMultipartUploadsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListMultipartUploadsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListMultipartUploadsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   marker: "STRING_VALUE",
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultipartUploadsOutput
 * //   UploadsList: [ // UploadsList
 * //     { // UploadListElement
 * //       MultipartUploadId: "STRING_VALUE",
 * //       VaultARN: "STRING_VALUE",
 * //       ArchiveDescription: "STRING_VALUE",
 * //       PartSizeInBytes: Number("long"),
 * //       CreationDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultipartUploadsCommandInput - {@link ListMultipartUploadsCommandInput}
 * @returns {@link ListMultipartUploadsCommandOutput}
 * @see {@link ListMultipartUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartUploadsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
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
 * @example To list all the in-progress multipart uploads for a vault
 * ```javascript
 * // The example lists all the in-progress multipart uploads for the vault named examplevault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault"
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "null",
 *   "UploadsList": [
 *     {
 *       "ArchiveDescription": "archive 1",
 *       "CreationDate": "2012-03-19T23:20:59.130Z",
 *       "MultipartUploadId": "xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev",
 *       "PartSizeInBytes": 4194304,
 *       "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     },
 *     {
 *       "ArchiveDescription": "archive 2",
 *       "CreationDate": "2012-04-01T15:00:00.000Z",
 *       "MultipartUploadId": "nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc",
 *       "PartSizeInBytes": 4194304,
 *       "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     },
 *     {
 *       "ArchiveDescription": "archive 3",
 *       "CreationDate": "2012-03-20T17:03:43.221Z",
 *       "MultipartUploadId": "qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV",
 *       "PartSizeInBytes": 4194304,
 *       "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-all-the-in-progress-multipart-uploads-for-a-vault-1481935250590
 * ```
 *
 */
export class ListMultipartUploadsCommand extends $Command<
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
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
  constructor(readonly input: ListMultipartUploadsCommandInput) {
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
  ): Handler<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMultipartUploadsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListMultipartUploadsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "ListMultipartUploads",
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
  private serialize(input: ListMultipartUploadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMultipartUploadsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultipartUploadsCommandOutput> {
    return de_ListMultipartUploadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
