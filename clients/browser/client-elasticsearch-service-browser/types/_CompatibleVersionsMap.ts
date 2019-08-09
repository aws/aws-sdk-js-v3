/**
 * <p> A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded. </p>
 */
export interface _CompatibleVersionsMap {
  /**
   * <p>The current version of Elasticsearch on which a domain is.</p>
   */
  SourceVersion?: string;

  /**
   * <p>List of supported elastic search versions. </p>
   */
  TargetVersions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCompatibleVersionsMap
  extends _CompatibleVersionsMap {
  /**
   * <p>List of supported elastic search versions. </p>
   */
  TargetVersions?: Array<string>;
}
