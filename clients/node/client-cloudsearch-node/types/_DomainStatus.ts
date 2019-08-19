import {
  _ServiceEndpoint,
  _UnmarshalledServiceEndpoint
} from "./_ServiceEndpoint";
import { _Limits, _UnmarshalledLimits } from "./_Limits";

/**
 * <p>The current status of the search domain.</p>
 */
export interface _DomainStatus {
  /**
   * <p>An internally generated unique identifier for a domain.</p>
   */
  DomainId: string;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN?: string;

  /**
   * <p>True if the search domain is created. It can take several minutes to initialize a domain when <a>CreateDomain</a> is called. Newly created search domains are returned from <a>DescribeDomains</a> with a false value for Created until domain creation is complete.</p>
   */
  Created?: boolean;

  /**
   * <p>True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when <a>DeleteDomain</a> is called. Newly deleted search domains are returned from <a>DescribeDomains</a> with a true value for IsDeleted for several minutes until resource cleanup is complete.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The service endpoint for updating documents in a search domain.</p>
   */
  DocService?: _ServiceEndpoint;

  /**
   * <p>The service endpoint for requesting search results from a search domain.</p>
   */
  SearchService?: _ServiceEndpoint;

  /**
   * <p>True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.</p>
   */
  RequiresIndexDocuments: boolean;

  /**
   * <p>True if processing is being done to activate the current domain configuration.</p>
   */
  Processing?: boolean;

  /**
   * <p>The instance type that is being used to process search requests.</p>
   */
  SearchInstanceType?: string;

  /**
   * <p>The number of partitions across which the search index is spread.</p>
   */
  SearchPartitionCount?: number;

  /**
   * <p>The number of search instances that are available to process search requests.</p>
   */
  SearchInstanceCount?: number;

  /**
   * _Limits shape
   */
  Limits?: _Limits;
}

export interface _UnmarshalledDomainStatus extends _DomainStatus {
  /**
   * <p>The service endpoint for updating documents in a search domain.</p>
   */
  DocService?: _UnmarshalledServiceEndpoint;

  /**
   * <p>The service endpoint for requesting search results from a search domain.</p>
   */
  SearchService?: _UnmarshalledServiceEndpoint;

  /**
   * _Limits shape
   */
  Limits?: _UnmarshalledLimits;
}
