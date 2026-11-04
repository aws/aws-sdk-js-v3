// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadDocumentsRequest, UploadDocumentsResponse } from "../models/models_0";
import { UploadDocuments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Posts a batch of documents to a search domain for indexing. A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service.
 *
 * The endpoint for submitting `UploadDocuments` requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.
 *
 * For more information about formatting your data for Amazon CloudSearch, see [Preparing Your Data](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html) in the *Amazon CloudSearch Developer Guide*. For more information about uploading data for indexing, see [Uploading Data](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, UploadDocumentsCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, UploadDocumentsCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * // import type { CloudSearchDomainClientConfig } from "@aws-sdk/client-cloudsearch-domain";
 * const config = {}; // type is CloudSearchDomainClientConfig
 * const client = new CloudSearchDomainClient(config);
 * const input = { // UploadDocumentsRequest
 *   documents: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
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
 *
 * Information about any problems encountered while processing an upload request.
 *
 * @throws {@link CloudSearchDomainServiceException}
 *
 * Base exception class for all service exceptions from CloudSearchDomain service.
 *
 * @public
 */
export class UploadDocumentsCommand extends command<UploadDocumentsCommandInput, UploadDocumentsCommandOutput>(
  _ep0,
  _mw0,
  "UploadDocuments",
  UploadDocuments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadDocumentsRequest;
      output: UploadDocumentsResponse;
    };
    sdk: {
      input: UploadDocumentsCommandInput;
      output: UploadDocumentsCommandOutput;
    };
  };
}
