import {
  _NamespaceProperties,
  _UnmarshalledNamespaceProperties
} from "./_NamespaceProperties";

/**
 * <p>A complex type that contains information about a namespace.</p>
 */
export interface _NamespaceSummary {
  /**
   * <p>The ID of the namespace.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the namespace when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the namespace. When you create a namespace, AWS Cloud Map automatically creates a Route 53 hosted zone that has the same name as the namespace.</p>
   */
  Name?: string;

  /**
   * <p>The type of the namespace, either public or private.</p>
   */
  Type?: "DNS_PUBLIC" | "DNS_PRIVATE" | "HTTP" | string;

  /**
   * <p>A description for the namespace.</p>
   */
  Description?: string;

  /**
   * <p>The number of services that were created using the namespace.</p>
   */
  ServiceCount?: number;

  /**
   * <p>A complex type that contains information that is specific to the namespace type.</p>
   */
  Properties?: _NamespaceProperties;

  /**
   * <p>The date and time that the namespace was created.</p>
   */
  CreateDate?: Date | string | number;
}

export interface _UnmarshalledNamespaceSummary extends _NamespaceSummary {
  /**
   * <p>A complex type that contains information that is specific to the namespace type.</p>
   */
  Properties?: _UnmarshalledNamespaceProperties;

  /**
   * <p>The date and time that the namespace was created.</p>
   */
  CreateDate?: Date;
}
