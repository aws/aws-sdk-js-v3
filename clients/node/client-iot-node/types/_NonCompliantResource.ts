import {
  _ResourceIdentifier,
  _UnmarshalledResourceIdentifier
} from "./_ResourceIdentifier";

/**
 * <p>Information about the resource that was noncompliant with the audit check.</p>
 */
export interface _NonCompliantResource {
  /**
   * <p>The type of the noncompliant resource.</p>
   */
  resourceType?:
    | "DEVICE_CERTIFICATE"
    | "CA_CERTIFICATE"
    | "IOT_POLICY"
    | "COGNITO_IDENTITY_POOL"
    | "CLIENT_ID"
    | "ACCOUNT_SETTINGS"
    | string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: _ResourceIdentifier;

  /**
   * <p>Other information about the noncompliant resource.</p>
   */
  additionalInfo?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledNonCompliantResource
  extends _NonCompliantResource {
  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: _UnmarshalledResourceIdentifier;

  /**
   * <p>Other information about the noncompliant resource.</p>
   */
  additionalInfo?: { [key: string]: string };
}
