// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BenefitAllocationStatus,
  BenefitApplicationStatus,
  BenefitStatus,
  CurrencyCode,
  FileType,
  FulfillmentType,
  ResourceType,
  ValidationExceptionErrorCode,
} from "./enums";

/**
 * Contains information about access-based benefit fulfillment, such as service permissions or feature access.
 *
 * @public
 */
export interface AccessDetails {
  /**
   * A description of the access privileges or permissions granted by this benefit.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Represents a specific change to be made to a benefit application field.
 *
 * @public
 */
export interface Amendment {
  /**
   * The JSON path or field identifier specifying which field in the benefit application to modify.
   *
   * @public
   */
  FieldPath: string | undefined;

  /**
   * The new value to set for the specified field in the benefit application.
   *
   * @public
   */
  NewValue: string | undefined;
}

/**
 * @public
 */
export interface AmendBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the amendment request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The current revision number of the benefit application to ensure optimistic concurrency control.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * The unique identifier of the benefit application to be amended.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A descriptive reason explaining why the benefit application is being amended.
   *
   * @public
   */
  AmendmentReason: string | undefined;

  /**
   * A list of specific field amendments to apply to the benefit application.
   *
   * @public
   */
  Amendments: Amendment[] | undefined;
}

/**
 * @public
 */
export interface AmendBenefitApplicationOutput {}

/**
 * Represents a field-specific validation error with detailed information.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A detailed message explaining why the field validation failed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * An error code explaining why the field validation failed.
   *
   * @public
   */
  Code?: ValidationExceptionErrorCode | undefined;
}

/**
 * @public
 */
export interface AssociateBenefitApplicationResourceInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit application to associate the resource with.
   *
   * @public
   */
  BenefitApplicationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS resource to associate with the benefit application.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateBenefitApplicationResourceOutput {
  /**
   * The unique identifier of the benefit application after the resource association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit application after the resource association.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The updated revision number of the benefit application after the resource association.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * Represents an AWS resource that is associated with a benefit application for tracking and management.
 *
 * @public
 */
export interface AssociatedResource {
  /**
   * The type of AWS resource (e.g., EC2 instance, S3 bucket, Lambda function).
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The unique identifier of the AWS resource within its service.
   *
   * @deprecated (since Oct 08 2025) This field is no longer used.
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the AWS resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * A summary view of a benefit allocation containing key information for list operations.
 *
 * @public
 */
export interface BenefitAllocationSummary {
  /**
   * The unique identifier of the benefit allocation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The catalog identifier that the benefit allocation belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit allocation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The current status of the benefit allocation.
   *
   * @public
   */
  Status?: BenefitAllocationStatus | undefined;

  /**
   * Additional information explaining the current status of the benefit allocation.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The human-readable name of the benefit allocation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier of the benefit that this allocation is based on.
   *
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * The identifier of the benefit application that resulted in this allocation.
   *
   * @public
   */
  BenefitApplicationId?: string | undefined;

  /**
   * The fulfillment types used for this benefit allocation.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * The timestamp when the benefit allocation was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the benefit allocation expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifiers of the benefits applicable for this allocation.
   *
   * @public
   */
  ApplicableBenefitIds?: string[] | undefined;
}

/**
 * A summary view of a benefit application containing key information for list operations.
 *
 * @public
 */
export interface BenefitApplicationSummary {
  /**
   * The catalog identifier that the benefit application belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The human-readable name of the benefit application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the benefit application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the benefit being requested in this application.
   *
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * The AWS partner programs associated with this benefit application.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * The fulfillment types requested for this benefit application.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * The current processing status of the benefit application.
   *
   * @public
   */
  Status?: BenefitApplicationStatus | undefined;

  /**
   * The current stage in the benefit application processing workflow..
   *
   * @public
   */
  Stage?: string | undefined;

  /**
   * The timestamp when the benefit application was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the benefit application was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Additional attributes and metadata associated with the benefit application.
   *
   * @public
   */
  BenefitApplicationDetails?: Record<string, string> | undefined;

  /**
   * AWS resources that are associated with this benefit application.
   *
   * @public
   */
  AssociatedResources?: string[] | undefined;
}

/**
 * A summary view of a benefit containing key information for list operations.
 *
 * @public
 */
export interface BenefitSummary {
  /**
   * The unique identifier of the benefit.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The catalog identifier that the benefit belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The human-readable name of the benefit.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A brief description of the benefit and its purpose.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The AWS partner programs that this benefit is associated with.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * The available fulfillment types for this benefit.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * The current status of the benefit.
   *
   * @public
   */
  Status?: BenefitStatus | undefined;
}

/**
 * @public
 */
export interface CancelBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the cancellation request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The unique identifier of the benefit application to cancel.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A descriptive reason explaining why the benefit application is being cancelled.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface CancelBenefitApplicationOutput {}

/**
 * Represents a monetary amount with its associated currency.
 *
 * @public
 */
export interface MonetaryValue {
  /**
   * The numeric amount of the monetary value.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The ISO 4217 currency code (e.g., USD, EUR) for the monetary amount.
   *
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;
}

/**
 * Represents detailed information about a specific issuance of benefit value.
 *
 * @public
 */
export interface IssuanceDetail {
  /**
   * The unique identifier for this specific issuance.
   *
   * @public
   */
  IssuanceId?: string | undefined;

  /**
   * The monetary amount or value that was issued in this specific issuance.
   *
   * @public
   */
  IssuanceAmount?: MonetaryValue | undefined;

  /**
   * The timestamp when this specific issuance was processed.
   *
   * @public
   */
  IssuedAt?: Date | undefined;
}

/**
 * Contains information about consumable benefit fulfillment, such as usage quotas or service limits.
 *
 * @public
 */
export interface ConsumableDetails {
  /**
   * The total amount of the consumable benefit that has been allocated.
   *
   * @public
   */
  AllocatedAmount?: MonetaryValue | undefined;

  /**
   * The remaining amount of the consumable benefit that is still available for use.
   *
   * @public
   */
  RemainingAmount?: MonetaryValue | undefined;

  /**
   * The amount of the consumable benefit that has already been used.
   *
   * @public
   */
  UtilizedAmount?: MonetaryValue | undefined;

  /**
   * Detailed information about how the consumable benefit was issued and distributed.
   *
   * @public
   */
  IssuanceDetails?: IssuanceDetail | undefined;
}

/**
 * Represents contact information for a partner representative.
 *
 * @public
 */
export interface Contact {
  /**
   * The email address of the contact person.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The first name of the contact person.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name of the contact person.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The business title or role of the contact person within the organization.
   *
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * The phone number of the contact person.
   *
   * @public
   */
  Phone?: string | undefined;
}

/**
 * Represents input information for uploading a file to a benefit application.
 *
 * @public
 */
export interface FileInput {
  /**
   * The URI or location where the file should be stored or has been uploaded.
   *
   * @public
   */
  FileURI: string | undefined;

  /**
   * The business purpose or use case that this file supports in the benefit application.
   *
   * @public
   */
  BusinessUseCase?: string | undefined;
}

/**
 * Represents a key-value pair used for categorizing and organizing AWS resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key, which acts as a category or label for the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag value, which provides additional information or context for the tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog to create the application in.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the creation request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * A human-readable name for the benefit application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A detailed description of the benefit application and its intended use.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the benefit being requested in this application.
   *
   * @public
   */
  BenefitIdentifier: string | undefined;

  /**
   * The types of fulfillment requested for this benefit application (e.g., credits, access, disbursement).
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * Detailed information and requirements specific to the benefit being requested.
   *
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * Key-value pairs to categorize and organize the benefit application.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * AWS resources that are associated with this benefit application.
   *
   * @public
   */
  AssociatedResources?: string[] | undefined;

  /**
   * Contact information for partner representatives responsible for this benefit application.
   *
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * Supporting documents and files attached to the benefit application.
   *
   * @public
   */
  FileDetails?: FileInput[] | undefined;
}

/**
 * @public
 */
export interface CreateBenefitApplicationOutput {
  /**
   * The unique identifier assigned to the newly created benefit application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created benefit application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The initial revision number of the newly created benefit application.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * Represents an AWS credit code that can be applied to an AWS account for billing purposes.
 *
 * @public
 */
export interface CreditCode {
  /**
   * The AWS account ID that the credit code is associated with or can be applied to.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The monetary value of the credit code.
   *
   * @public
   */
  Value: MonetaryValue | undefined;

  /**
   * The actual credit code string that can be redeemed in the AWS billing console.
   *
   * @public
   */
  AwsCreditCode: string | undefined;

  /**
   * The current status of the credit code (e.g., active, redeemed, expired).
   *
   * @public
   */
  Status: BenefitAllocationStatus | undefined;

  /**
   * The timestamp when the credit code was issued.
   *
   * @public
   */
  IssuedAt: Date | undefined;

  /**
   * The timestamp when the credit code expires and can no longer be redeemed.
   *
   * @public
   */
  ExpiresAt: Date | undefined;
}

/**
 * Contains information about credit-based benefit fulfillment, including AWS promotional credits.
 *
 * @public
 */
export interface CreditDetails {
  /**
   * The total amount of credits that have been allocated for this benefit.
   *
   * @public
   */
  AllocatedAmount: MonetaryValue | undefined;

  /**
   * The amount of credits that have actually been issued and are available for use.
   *
   * @public
   */
  IssuedAmount: MonetaryValue | undefined;

  /**
   * A list of credit codes that have been generated for this benefit allocation.
   *
   * @public
   */
  Codes: CreditCode[] | undefined;
}

/**
 * @public
 */
export interface DisassociateBenefitApplicationResourceInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit application to disassociate the resource from.
   *
   * @public
   */
  BenefitApplicationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS resource to disassociate from the benefit application.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBenefitApplicationResourceOutput {
  /**
   * The unique identifier of the benefit application after the resource disassociation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit application after the resource disassociation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The updated revision number of the benefit application after the resource disassociation.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * Contains information about disbursement-based benefit fulfillment, such as direct payments or reimbursements.
 *
 * @public
 */
export interface DisbursementDetails {
  /**
   * The total amount that has been disbursed for this benefit allocation.
   *
   * @public
   */
  DisbursedAmount?: MonetaryValue | undefined;

  /**
   * Detailed information about how the disbursement was issued and processed.
   *
   * @public
   */
  IssuanceDetails?: IssuanceDetail | undefined;
}

/**
 * Represents detailed information about a file attached to a benefit application.
 *
 * @public
 */
export interface FileDetail {
  /**
   * The URI or location where the file is stored.
   *
   * @public
   */
  FileURI: string | undefined;

  /**
   * The business purpose or use case that this file supports in the benefit application.
   *
   * @public
   */
  BusinessUseCase?: string | undefined;

  /**
   * The original name of the uploaded file.
   *
   * @public
   */
  FileName?: string | undefined;

  /**
   * The current processing status of the file (e.g., uploaded, processing, approved, rejected).
   *
   * @public
   */
  FileStatus?: string | undefined;

  /**
   * The reason for that particulat file status.
   *
   * @public
   */
  FileStatusReason?: string | undefined;

  /**
   * The type or category of the file (e.g., document, image, spreadsheet).
   *
   * @public
   */
  FileType?: FileType | undefined;

  /**
   * The identifier of the user who uploaded the file.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The timestamp when the file was uploaded.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * Contains comprehensive information about how a benefit allocation is fulfilled across different fulfillment types.
 *
 * @public
 */
export type FulfillmentDetails =
  | FulfillmentDetails.AccessDetailsMember
  | FulfillmentDetails.ConsumableDetailsMember
  | FulfillmentDetails.CreditDetailsMember
  | FulfillmentDetails.DisbursementDetailsMember
  | FulfillmentDetails.$UnknownMember;

/**
 * @public
 */
export namespace FulfillmentDetails {
  /**
   * Details about disbursement-based fulfillment, if applicable to this benefit allocation.
   *
   * @public
   */
  export interface DisbursementDetailsMember {
    DisbursementDetails: DisbursementDetails;
    ConsumableDetails?: never;
    CreditDetails?: never;
    AccessDetails?: never;
    $unknown?: never;
  }

  /**
   * Details about consumable-based fulfillment, if applicable to this benefit allocation.
   *
   * @public
   */
  export interface ConsumableDetailsMember {
    DisbursementDetails?: never;
    ConsumableDetails: ConsumableDetails;
    CreditDetails?: never;
    AccessDetails?: never;
    $unknown?: never;
  }

  /**
   * Details about credit-based fulfillment, if applicable to this benefit allocation.
   *
   * @public
   */
  export interface CreditDetailsMember {
    DisbursementDetails?: never;
    ConsumableDetails?: never;
    CreditDetails: CreditDetails;
    AccessDetails?: never;
    $unknown?: never;
  }

  /**
   * Details about access-based fulfillment, if applicable to this benefit allocation.
   *
   * @public
   */
  export interface AccessDetailsMember {
    DisbursementDetails?: never;
    ConsumableDetails?: never;
    CreditDetails?: never;
    AccessDetails: AccessDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DisbursementDetails?: never;
    ConsumableDetails?: never;
    CreditDetails?: never;
    AccessDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DisbursementDetails: (value: DisbursementDetails) => T;
    ConsumableDetails: (value: ConsumableDetails) => T;
    CreditDetails: (value: CreditDetails) => T;
    AccessDetails: (value: AccessDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetBenefitInput {
  /**
   * The catalog identifier that specifies which benefit catalog to query.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitOutput {
  /**
   * The unique identifier of the benefit.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The catalog identifier that the benefit belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The human-readable name of the benefit.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A detailed description of the benefit and its purpose.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The AWS partner programs that this benefit is associated with.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * The available fulfillment types for this benefit (e.g., credits, access, disbursement).
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * The schema definition that describes the required fields for requesting this benefit.
   *
   * @public
   */
  BenefitRequestSchema?: __DocumentType | undefined;

  /**
   * The current status of the benefit (e.g., active, inactive, deprecated).
   *
   * @public
   */
  Status?: BenefitStatus | undefined;
}

/**
 * @public
 */
export interface GetBenefitAllocationInput {
  /**
   * The catalog identifier that specifies which benefit catalog to query.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit allocation to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitAllocationOutput {
  /**
   * The unique identifier of the benefit allocation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The catalog identifier that the benefit allocation belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit allocation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The human-readable name of the benefit allocation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A detailed description of the benefit allocation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the benefit allocation (e.g., active, expired, consumed).
   *
   * @public
   */
  Status?: BenefitAllocationStatus | undefined;

  /**
   * Additional information explaining the current status of the benefit allocation.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The identifier of the benefit application that resulted in this allocation.
   *
   * @public
   */
  BenefitApplicationId?: string | undefined;

  /**
   * The identifier of the benefit that this allocation is based on.
   *
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * The fulfillment type used for this benefit allocation.
   *
   * @public
   */
  FulfillmentType?: FulfillmentType | undefined;

  /**
   * A list of benefit identifiers that this allocation can be applied to.
   *
   * @public
   */
  ApplicableBenefitIds?: string[] | undefined;

  /**
   * Detailed information about how the benefit allocation is fulfilled.
   *
   * @public
   */
  FulfillmentDetail?: FulfillmentDetails | undefined;

  /**
   * The timestamp when the benefit allocation was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the benefit allocation was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The timestamp when the benefit allocation becomes active and usable.
   *
   * @public
   */
  StartsAt?: Date | undefined;

  /**
   * The timestamp when the benefit allocation expires and is no longer usable.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog to query.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit application to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitApplicationOutput {
  /**
   * The unique identifier of the benefit application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the benefit application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The catalog identifier that the benefit application belongs to.
   *
   * @public
   */
  Catalog?: string | undefined;

  /**
   * The identifier of the benefit being requested in this application.
   *
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * The human-readable name of the benefit application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A detailed description of the benefit application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The fulfillment types requested for this benefit application.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * Detailed information and requirements specific to the benefit being requested.
   *
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * The AWS partner programs associated with this benefit application.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * The current processing status of the benefit application.
   *
   * @public
   */
  Status?: BenefitApplicationStatus | undefined;

  /**
   * The current stage in the benefit application processing workflow.
   *
   * @public
   */
  Stage?: string | undefined;

  /**
   * Additional information explaining the current status of the benefit application.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * A standardized code representing the reason for the current status.
   *
   * @deprecated (since Nov 08 2025) This field is no longer used.
   * @public
   */
  StatusReasonCode?: string | undefined;

  /**
   * The list of standardized codes representing the reason for the current status.
   *
   * @public
   */
  StatusReasonCodes?: string[] | undefined;

  /**
   * The timestamp when the benefit application was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the benefit application was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current revision number of the benefit application.
   *
   * @public
   */
  Revision?: string | undefined;

  /**
   * AWS resources that are associated with this benefit application.
   *
   * @public
   */
  AssociatedResources?: string[] | undefined;

  /**
   * Contact information for partner representatives responsible for this benefit application.
   *
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * Supporting documents and files attached to the benefit application.
   *
   * @public
   */
  FileDetails?: FileDetail[] | undefined;
}

/**
 * @public
 */
export interface ListBenefitAllocationsInput {
  /**
   * The catalog identifier to filter benefit allocations by catalog.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filter benefit allocations by specific fulfillment types.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * Filter benefit allocations by specific benefit identifiers.
   *
   * @public
   */
  BenefitIdentifiers?: string[] | undefined;

  /**
   * Filter benefit allocations by specific benefit application identifiers.
   *
   * @public
   */
  BenefitApplicationIdentifiers?: string[] | undefined;

  /**
   * Filter benefit allocations by their current status.
   *
   * @public
   */
  Status?: BenefitAllocationStatus[] | undefined;

  /**
   * The maximum number of benefit allocations to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next set of results from a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitAllocationsOutput {
  /**
   * A list of benefit allocation summaries matching the specified criteria.
   *
   * @public
   */
  BenefitAllocationSummaries?: BenefitAllocationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitApplicationsInput {
  /**
   * The catalog identifier to filter benefit applications by catalog.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filter benefit applications by specific AWS partner programs.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * Filter benefit applications by specific fulfillment types.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * Filter benefit applications by specific benefit identifiers.
   *
   * @public
   */
  BenefitIdentifiers?: string[] | undefined;

  /**
   * Filter benefit applications by their current processing status.
   *
   * @public
   */
  Status?: BenefitApplicationStatus[] | undefined;

  /**
   * Filter benefit applications by their current processing stage.
   *
   * @public
   */
  Stages?: string[] | undefined;

  /**
   * Filter benefit applications by associated AWS resources.
   *
   * @deprecated (since Oct 08 2025) This field is no longer used.
   * @public
   */
  AssociatedResources?: AssociatedResource[] | undefined;

  /**
   * Filter benefit applications by specific AWS resource ARNs.
   *
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;

  /**
   * The maximum number of benefit applications to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next set of results from a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitApplicationsOutput {
  /**
   * A list of benefit application summaries matching the specified criteria.
   *
   * @public
   */
  BenefitApplicationSummaries?: BenefitApplicationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitsInput {
  /**
   * The catalog identifier to filter benefits by catalog.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filter benefits by specific AWS partner programs.
   *
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * Filter benefits by specific fulfillment types.
   *
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * Filter benefits by their current status.
   *
   * @public
   */
  Status?: BenefitStatus[] | undefined;

  /**
   * The maximum number of benefits to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next set of results from a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitsOutput {
  /**
   * A list of benefit summaries matching the specified criteria.
   *
   * @public
   */
  BenefitSummaries?: BenefitSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of key-value pairs representing the tags associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RecallBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the recall request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the benefit application to recall.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A descriptive reason explaining why the benefit application is being recalled.
   *
   * @public
   */
  Reason: string | undefined;
}

/**
 * @public
 */
export interface RecallBenefitApplicationOutput {}

/**
 * @public
 */
export interface SubmitBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the benefit application to submit.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface SubmitBenefitApplicationOutput {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of key-value pairs to add as tags to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBenefitApplicationInput {
  /**
   * The catalog identifier that specifies which benefit catalog the application belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the update request.
   *
   * @public
   */
  ClientToken: string | undefined;

  /**
   * The updated human-readable name for the benefit application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated detailed description of the benefit application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the benefit application to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The current revision number of the benefit application to ensure optimistic concurrency control.
   *
   * @public
   */
  Revision: string | undefined;

  /**
   * Updated detailed information and requirements specific to the benefit being requested.
   *
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * Updated contact information for partner representatives responsible for this benefit application.
   *
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * Updated supporting documents and files attached to the benefit application.
   *
   * @public
   */
  FileDetails?: FileInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateBenefitApplicationOutput {
  /**
   * The unique identifier of the updated benefit application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated benefit application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The new revision number of the benefit application after the update.
   *
   * @public
   */
  Revision?: string | undefined;
}
