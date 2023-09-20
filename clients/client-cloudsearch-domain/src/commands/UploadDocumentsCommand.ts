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

import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import {
  UploadDocumentsRequest,
  UploadDocumentsRequestFilterSensitiveLog,
  UploadDocumentsResponse,
} from "../models/models_0";
import { de_UploadDocumentsCommand, se_UploadDocumentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadDocumentsCommand}.
 */
export interface UploadDocumentsCommandInput extends Omit<UploadDocumentsRequest, "documents"> {
  documents: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadDocumentsCommand}.
 */
export interface UploadDocumentsCommandOutput extends UploadDocumentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Posts a batch of documents to a search domain for indexing.  A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents  cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service.  </p>
 *       <p>The endpoint for submitting <code>UploadDocuments</code> requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 *       <p>For more information about formatting your data for Amazon CloudSearch, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html">Preparing Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.
 *       For more information about uploading data for indexing, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html">Uploading Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, UploadDocumentsCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, UploadDocumentsCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * const client = new CloudSearchDomainClient(config);
 * const input = { // UploadDocumentsRequest
 *   documents: "STREAMING_BLOB_VALUE", // required
 *   contentType: "application/json" || "application/xml", // required
 * };
 * const command = new UploadDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // UploadDocumentsResponse
 * //   status: "STRING_VALUE",
 * //   adds: Number("long"),
 * //   deletes: Number("long"),
 * //   warnings: [ // DocumentServiceWarnings
 * //     { // DocumentServiceWarning
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UploadDocumentsCommandInput - {@link UploadDocumentsCommandInput}
 * @returns {@link UploadDocumentsCommandOutput}
 * @see {@link UploadDocumentsCommandInput} for command's `input` shape.
 * @see {@link UploadDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
 *
 * @throws {@link DocumentServiceException} (client fault)
 *  <p>Information about any problems encountered while processing an upload request.</p>
 *
 * @throws {@link CloudSearchDomainServiceException}
 * <p>Base exception class for all service exceptions from CloudSearchDomain service.</p>
 *
 */
export class UploadDocumentsCommand extends $Command<
  UploadDocumentsCommandInput,
  UploadDocumentsCommandOutput,
  CloudSearchDomainClientResolvedConfig
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
  constructor(readonly input: UploadDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadDocumentsCommandInput, UploadDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadDocumentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchDomainClient";
    const commandName = "UploadDocumentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadDocumentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonCloudSearch2013",
        operation: "UploadDocuments",
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
  private serialize(input: UploadDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadDocumentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadDocumentsCommandOutput> {
    return de_UploadDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
