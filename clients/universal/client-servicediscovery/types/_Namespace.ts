import {
  _NamespaceProperties,
  _UnmarshalledNamespaceProperties
} from "./_NamespaceProperties";

/**
 * <p>A complex type that contains information about a specified namespace.</p>
 */
export interface _Namespace {
  /**
   * <p>The ID of a namespace.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the namespace, such as <code>example.com</code>.</p>
   */
  Name?: string;

  /**
   * <p>The type of the namespace. Valid values are <code>DNS_PUBLIC</code> and <code>DNS_PRIVATE</code>.</p>
   */
  Type?: "DNS_PUBLIC" | "DNS_PRIVATE" | "HTTP" | string;

  /**
   * <p>The description that you specify for the namespace when you create it.</p>
   */
  Description?: string;

  /**
   * <p>The number of services that are associated with the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>A complex type that contains information that's specific to the type of the namespace.</p>
   */
  Properties?: _NamespaceProperties;

  /**
   * <p>The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing an operation twice. </p>
   */
  CreatorRequestId?: string;
}

export interface _UnmarshalledNamespace extends _Namespace {
  /**
   * <p>A complex type that contains information that's specific to the type of the namespace.</p>
   */
  Properties?: _UnmarshalledNamespaceProperties;

  /**
   * <p>The date that the namespace was created, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;
}
