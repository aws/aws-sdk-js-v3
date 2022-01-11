import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export enum AlternateContactType {
  BILLING = "BILLING",
  OPERATIONS = "OPERATIONS",
  SECURITY = "SECURITY",
}

export interface DeleteAlternateContactRequest {
  /**
   * <p>Specifies which of the alternate contacts to delete. </p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   */
  AccountId?: string;
}

export namespace DeleteAlternateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlternateContactRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
}

/**
 * <p>The operation failed because it specified a resource that can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message: string | undefined;
}

/**
 * <p>The operation failed because one of the input parameters was invalid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export interface GetAlternateContactRequest {
  /**
   * <p>Specifies which alternate contact you want to retrieve.</p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   */
  AccountId?: string;
}

export namespace GetAlternateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlternateContactRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains the details of an alternate contact associated with an Amazon Web Services
 *             account</p>
 */
export interface AlternateContact {
  /**
   * <p>The name associated with this alternate contact.</p>
   */
  Name?: string;

  /**
   * <p>The title associated with this alternate contact.</p>
   */
  Title?: string;

  /**
   * <p>The email address associated with this alternate contact.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The phone number associated with this alternate contact.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The type of alternate contact.</p>
   */
  AlternateContactType?: AlternateContactType | string;
}

export namespace AlternateContact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlternateContact): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Title && { Title: SENSITIVE_STRING }),
    ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  });
}

export interface GetAlternateContactResponse {
  /**
   * <p>A structure that contains the details for the specified alternate contact.</p>
   */
  AlternateContact?: AlternateContact;
}

export namespace GetAlternateContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlternateContactResponse): any => ({
    ...obj,
    ...(obj.AlternateContact && { AlternateContact: AlternateContact.filterSensitiveLog(obj.AlternateContact) }),
  });
}

export interface PutAlternateContactRequest {
  /**
   * <p>Specifies a name for the alternate contact.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies a title for the alternate contact.</p>
   */
  Title: string | undefined;

  /**
   * <p>Specifies an email address for the alternate contact. </p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>Specifies a phone number for the alternate contact.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>Specifies which alternate contact you want to create or update.</p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   */
  AccountId?: string;
}

export namespace PutAlternateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAlternateContactRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Title && { Title: SENSITIVE_STRING }),
    ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  });
}
