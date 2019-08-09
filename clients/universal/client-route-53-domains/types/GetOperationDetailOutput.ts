import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The GetOperationDetail response includes the following elements.</p>
 */
export interface GetOperationDetailOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier for the operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status?:
    | "SUBMITTED"
    | "IN_PROGRESS"
    | "ERROR"
    | "SUCCESSFUL"
    | "FAILED"
    | string;

  /**
   * <p>Detailed information on the status including possible errors.</p>
   */
  Message?: string;

  /**
   * <p>The name of a domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The type of operation that was requested.</p>
   */
  Type?:
    | "REGISTER_DOMAIN"
    | "DELETE_DOMAIN"
    | "TRANSFER_IN_DOMAIN"
    | "UPDATE_DOMAIN_CONTACT"
    | "UPDATE_NAMESERVER"
    | "CHANGE_PRIVACY_PROTECTION"
    | "DOMAIN_LOCK"
    | "ENABLE_AUTORENEW"
    | "DISABLE_AUTORENEW"
    | "ADD_DNSSEC"
    | "REMOVE_DNSSEC"
    | "EXPIRE_DOMAIN"
    | "TRANSFER_OUT_DOMAIN"
    | "CHANGE_DOMAIN_OWNER"
    | "RENEW_DOMAIN"
    | "PUSH_DOMAIN"
    | string;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
