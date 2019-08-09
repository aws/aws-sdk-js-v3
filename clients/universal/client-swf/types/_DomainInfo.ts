/**
 * <p>Contains general information about a domain.</p>
 */
export interface _DomainInfo {
  /**
   * <p>The name of the domain. This name is unique within the account.</p>
   */
  name: string;

  /**
   * <p>The status of the domain:</p> <ul> <li> <p> <code>REGISTERED</code> – The domain is properly registered and available. You can use this domain for registering types and creating new workflow executions. </p> </li> <li> <p> <code>DEPRECATED</code> – The domain was deprecated using <a>DeprecateDomain</a>, but is still in use. You should not create new workflow executions in this domain. </p> </li> </ul>
   */
  status: "REGISTERED" | "DEPRECATED" | string;

  /**
   * <p>The description of the domain provided through <a>RegisterDomain</a>.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the domain.</p>
   */
  arn?: string;
}

export type _UnmarshalledDomainInfo = _DomainInfo;
