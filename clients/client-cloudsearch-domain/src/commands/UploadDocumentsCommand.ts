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

import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import {
  UploadDocumentsRequest,
  UploadDocumentsRequestFilterSensitiveLog,
  UploadDocumentsResponse,
  UploadDocumentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UploadDocumentsCommand,
  serializeAws_restJson1UploadDocumentsCommand,
} from "../protocols/Aws_restJson1";

type UploadDocumentsCommandInputType = Omit<UploadDocumentsRequest, "documents"> & {
  /**
   * For *`UploadDocumentsRequest["documents"]`*, see {@link UploadDocumentsRequest.documents}.
   */
  documents: UploadDocumentsRequest["documents"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `UploadDocumentsRequest` interface. There are more parameters than `documents` defined in {@link UploadDocumentsRequest}
 */
export interface UploadDocumentsCommandInput extends UploadDocumentsCommandInputType {}
export interface UploadDocumentsCommandOutput extends UploadDocumentsResponse, __MetadataBearer {}

/**
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
 * const command = new UploadDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadDocumentsCommandInput} for command's `input` shape.
 * @see {@link UploadDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
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
      outputFilterSensitiveLog: UploadDocumentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadDocumentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadDocumentsCommandOutput> {
    return deserializeAws_restJson1UploadDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
