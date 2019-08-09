import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation. </p>
 */
export interface UpgradeElasticsearchDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion?: string;

  /**
   * <p> This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
