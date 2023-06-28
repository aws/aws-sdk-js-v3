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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@smithy/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetJobOutputInput, GetJobOutputOutput, GetJobOutputOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetJobOutputCommand, se_GetJobOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJobOutputCommand}.
 */
export interface GetJobOutputCommandInput extends GetJobOutputInput {}
/**
 * @public
 *
 * The output of {@link GetJobOutputCommand}.
 */
export interface GetJobOutputCommandOutput extends __WithSdkStreamMixin<GetJobOutputOutput, "body">, __MetadataBearer {}

/**
 * @public
 * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the
 *          job, the output will be either the content of an archive or a vault inventory.</p>
 *
 *          <p>You can download all the job output or download a portion of the output by specifying
 *          a byte range. In the case of an archive retrieval job, depending on the byte range you
 *          specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the
 *          checksum on the client and verify that the values match to ensure the portion you downloaded
 *          is the correct data.</p>
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That
 *          a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded
 *          size against the size returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>For archive retrieval jobs, you should also verify that the size is what you expected. If
 *          you download a portion of the output, the expected size is based on the range of bytes
 *          you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should
 *          verify your download size is 1,048,576 bytes. If you download an entire archive, the
 *          expected size is the size of the archive when you uploaded it to Amazon S3 Glacier
 *          The expected size is also returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>In the case of an archive retrieval job, depending on the byte range you
 *          specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded
 *          is the correct data, compute the checksum on the client, verify that the values match,
 *          and verify that the size is what you expected.</p>
 *
 *          <p>A job ID does not expire for at least 24 hours after Glacier completes the
 *          job. That is, you can download the job output within the 24 hours period after Amazon
 *          Glacier completes the job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a
 *             Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an
 *             Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetJobOutputCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetJobOutputCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // GetJobOutputInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   range: "STRING_VALUE",
 * };
 * const command = new GetJobOutputCommand(input);
 * const response = await client.send(command);
 * // { // GetJobOutputOutput
 * //   body: "STREAMING_BLOB_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   status: Number("int"),
 * //   contentRange: "STRING_VALUE",
 * //   acceptRanges: "STRING_VALUE",
 * //   contentType: "STRING_VALUE",
 * //   archiveDescription: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobOutputCommandInput - {@link GetJobOutputCommandInput}
 * @returns {@link GetJobOutputCommandOutput}
 * @see {@link GetJobOutputCommandInput} for command's `input` shape.
 * @see {@link GetJobOutputCommandOutput} for command's `response` shape.
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
 * @example To get the output of a previously initiated job
 * ```javascript
 * // The example downloads the output of a previously initiated inventory retrieval job that is identified by the job ID.
 * const input = {
 *   "accountId": "-",
 *   "jobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
 *   "range": "",
 *   "vaultName": "my-vaul"
 * };
 * const command = new GetJobOutputCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "acceptRanges": "bytes",
 *   "body": "inventory-data",
 *   "contentType": "application/json",
 *   "status": 200
 * }
 * *\/
 * // example id: to-get-the-output-of-a-previously-initiated-job-1481848550859
 * ```
 *
 */
export class GetJobOutputCommand extends $Command<
  GetJobOutputCommandInput,
  GetJobOutputCommandOutput,
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
  constructor(readonly input: GetJobOutputCommandInput) {
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
  ): Handler<GetJobOutputCommandInput, GetJobOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetJobOutputCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetJobOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetJobOutputOutputFilterSensitiveLog,
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
  private serialize(input: GetJobOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJobOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetJobOutputCommandOutput> {
    return de_GetJobOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
