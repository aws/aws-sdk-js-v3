import {
  _DomainNameConfiguration,
  _UnmarshalledDomainNameConfiguration
} from "./_DomainNameConfiguration";

/**
 * <p>Represents a domain name.</p>
 */
export interface _DomainName {
  /**
   * <p>The API mapping selection expression.</p>
   */
  ApiMappingSelectionExpression?: string;

  /**
   * <p>The name of the DomainName resource.</p>
   */
  DomainName: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?:
    | Array<_DomainNameConfiguration>
    | Iterable<_DomainNameConfiguration>;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDomainName extends _DomainName {
  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?: Array<_UnmarshalledDomainNameConfiguration>;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string };
}
