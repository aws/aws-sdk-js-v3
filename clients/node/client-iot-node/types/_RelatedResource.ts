import {
  _ResourceIdentifier,
  _UnmarshalledResourceIdentifier
} from "./_ResourceIdentifier";

/**
 * <p>Information about a related resource.</p>
 */
export interface _RelatedResource {
  /**
   * <p>The type of resource.</p>
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
   * <p>Information that identifies the resource.</p>
   */
  resourceIdentifier?: _ResourceIdentifier;

  /**
   * <p>Other information about the resource.</p>
   */
  additionalInfo?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledRelatedResource extends _RelatedResource {
  /**
   * <p>Information that identifies the resource.</p>
   */
  resourceIdentifier?: _UnmarshalledResourceIdentifier;

  /**
   * <p>Other information about the resource.</p>
   */
  additionalInfo?: { [key: string]: string };
}
