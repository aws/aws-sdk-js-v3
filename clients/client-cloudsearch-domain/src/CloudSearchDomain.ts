// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudSearchDomainClient, CloudSearchDomainClientConfig } from "./CloudSearchDomainClient";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { SuggestCommand, SuggestCommandInput, SuggestCommandOutput } from "./commands/SuggestCommand";
import {
  UploadDocumentsCommand,
  UploadDocumentsCommandInput,
  UploadDocumentsCommandOutput,
} from "./commands/UploadDocumentsCommand";

const commands = {
  SearchCommand,
  SuggestCommand,
  UploadDocumentsCommand,
};

export interface CloudSearchDomain {
  /**
   * @see {@link SearchCommand}
   */
  search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;

  /**
   * @see {@link SuggestCommand}
   */
  suggest(args: SuggestCommandInput, options?: __HttpHandlerOptions): Promise<SuggestCommandOutput>;
  suggest(args: SuggestCommandInput, cb: (err: any, data?: SuggestCommandOutput) => void): void;
  suggest(
    args: SuggestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadDocumentsCommand}
   */
  uploadDocuments(
    args: UploadDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadDocumentsCommandOutput>;
  uploadDocuments(args: UploadDocumentsCommandInput, cb: (err: any, data?: UploadDocumentsCommandOutput) => void): void;
  uploadDocuments(
    args: UploadDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadDocumentsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p>
 *
 *          <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p>
 *          <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>
 */
export class CloudSearchDomain extends CloudSearchDomainClient implements CloudSearchDomain {}
createAggregatedClient(commands, CloudSearchDomain);
