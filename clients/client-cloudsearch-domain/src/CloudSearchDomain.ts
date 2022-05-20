// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudSearchDomainClient } from "./CloudSearchDomainClient";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { SuggestCommand, SuggestCommandInput, SuggestCommandOutput } from "./commands/SuggestCommand";
import {
  UploadDocumentsCommand,
  UploadDocumentsCommandInput,
  UploadDocumentsCommandOutput,
} from "./commands/UploadDocumentsCommand";

/**
 * <p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p>
 *
 *          <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p>
 *          <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>
 */
export class CloudSearchDomain extends CloudSearchDomainClient {
  /**
   * <p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p>
   *       <ul>
   *          <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li>
   *          <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li>
   *          <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li>
   *          <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li>
   *       </ul>
   *       <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *       <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
   */
  public search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  public search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  public search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;
  public search(
    args: SearchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchCommandOutput) => void),
    cb?: (err: any, data?: SearchCommandOutput) => void
  ): Promise<SearchCommandOutput> | void {
    const command = new SearchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p>
   *       <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   *
   *       <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
   */
  public suggest(args: SuggestCommandInput, options?: __HttpHandlerOptions): Promise<SuggestCommandOutput>;
  public suggest(args: SuggestCommandInput, cb: (err: any, data?: SuggestCommandOutput) => void): void;
  public suggest(
    args: SuggestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;
  public suggest(
    args: SuggestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SuggestCommandOutput) => void),
    cb?: (err: any, data?: SuggestCommandOutput) => void
  ): Promise<SuggestCommandOutput> | void {
    const command = new SuggestCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Posts a batch of documents to a search domain for indexing.  A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents  cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service.  </p>
   *       <p>The endpoint for submitting <code>UploadDocuments</code> requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
   *       <p>For more information about formatting your data for Amazon CloudSearch, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html">Preparing Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.
   *       For more information about uploading data for indexing, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html">Uploading Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   */
  public uploadDocuments(
    args: UploadDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadDocumentsCommandOutput>;
  public uploadDocuments(
    args: UploadDocumentsCommandInput,
    cb: (err: any, data?: UploadDocumentsCommandOutput) => void
  ): void;
  public uploadDocuments(
    args: UploadDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadDocumentsCommandOutput) => void
  ): void;
  public uploadDocuments(
    args: UploadDocumentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadDocumentsCommandOutput) => void),
    cb?: (err: any, data?: UploadDocumentsCommandOutput) => void
  ): Promise<UploadDocumentsCommandOutput> | void {
    const command = new UploadDocumentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
