// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
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
 * <p>Contains information about access-based benefit fulfillment, such as service permissions or feature access.</p>
 * @public
 */
export interface AccessDetails {
  /**
   * <p>A description of the access privileges or permissions granted by this benefit.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Represents a specific change to be made to a benefit application field.</p>
 * @public
 */
export interface Amendment {
  /**
   * <p>The JSON path or field identifier specifying which field in the benefit application to modify.</p>
   * @public
   */
  FieldPath: string | undefined;

  /**
   * <p>The new value to set for the specified field in the benefit application.</p>
   * @public
   */
  NewValue: string | undefined;
}

/**
 * @public
 */
export interface AmendBenefitApplicationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the amendment request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The current revision number of the benefit application to ensure optimistic concurrency control.</p>
   * @public
   */
  Revision: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to be amended.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A descriptive reason explaining why the benefit application is being amended.</p>
   * @public
   */
  AmendmentReason: string | undefined;

  /**
   * <p>A list of specific field amendments to apply to the benefit application.</p>
   * @public
   */
  Amendments: Amendment[] | undefined;
}

/**
 * @public
 */
export interface AmendBenefitApplicationOutput {}

/**
 * <p>Represents a field-specific validation error with detailed information.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A detailed message explaining why the field validation failed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>An error code explaining why the field validation failed.</p>
   * @public
   */
  Code?: ValidationExceptionErrorCode | undefined;
}

/**
 * @public
 */
export interface AssociateBenefitApplicationResourceInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to associate the resource with.</p>
   * @public
   */
  BenefitApplicationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS resource to associate with the benefit application.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateBenefitApplicationResourceOutput {
  /**
   * <p>The unique identifier of the benefit application after the resource association.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit application after the resource association.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The updated revision number of the benefit application after the resource association.</p>
   * @public
   */
  Revision?: string | undefined;
}

/**
 * <p>Represents an AWS resource that is associated with a benefit application for tracking and management.</p>
 * @public
 */
export interface AssociatedResource {
  /**
   * <p>The type of AWS resource (e.g., EC2 instance, S3 bucket, Lambda function).</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The unique identifier of the AWS resource within its service.</p>
   *
   * @deprecated This field is no longer used
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the AWS resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>A summary view of a benefit allocation containing key information for list operations.</p>
 * @public
 */
export interface BenefitAllocationSummary {
  /**
   * <p>The unique identifier of the benefit allocation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The catalog identifier that the benefit allocation belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit allocation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the benefit allocation.</p>
   * @public
   */
  Status?: BenefitAllocationStatus | undefined;

  /**
   * <p>Additional information explaining the current status of the benefit allocation.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The human-readable name of the benefit allocation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the benefit that this allocation is based on.</p>
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * <p>The identifier of the benefit application that resulted in this allocation.</p>
   * @public
   */
  BenefitApplicationId?: string | undefined;

  /**
   * <p>The fulfillment types used for this benefit allocation.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>The timestamp when the benefit allocation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit allocation expires.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifiers of the benefits applicable for this allocation.</p>
   * @public
   */
  ApplicableBenefitIds?: string[] | undefined;
}

/**
 * <p>A summary view of a benefit application containing key information for list operations.</p>
 * @public
 */
export interface BenefitApplicationSummary {
  /**
   * <p>The catalog identifier that the benefit application belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The human-readable name of the benefit application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier of the benefit application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the benefit being requested in this application.</p>
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * <p>The AWS partner programs associated with this benefit application.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>The fulfillment types requested for this benefit application.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>The current processing status of the benefit application.</p>
   * @public
   */
  Status?: BenefitApplicationStatus | undefined;

  /**
   * <p>The current stage in the benefit application processing workflow..</p>
   * @public
   */
  Stage?: string | undefined;

  /**
   * <p>The timestamp when the benefit application was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit application was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Additional attributes and metadata associated with the benefit application.</p>
   * @public
   */
  BenefitApplicationDetails?: Record<string, string> | undefined;

  /**
   * <p>AWS resources that are associated with this benefit application.</p>
   * @public
   */
  AssociatedResources?: string[] | undefined;
}

/**
 * <p>A summary view of a benefit containing key information for list operations.</p>
 * @public
 */
export interface BenefitSummary {
  /**
   * <p>The unique identifier of the benefit.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The catalog identifier that the benefit belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The human-readable name of the benefit.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A brief description of the benefit and its purpose.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The AWS partner programs that this benefit is associated with.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>The available fulfillment types for this benefit.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>The current status of the benefit.</p>
   * @public
   */
  Status?: BenefitStatus | undefined;
}

/**
 * @public
 */
export interface CancelBenefitApplicationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the cancellation request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to cancel.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A descriptive reason explaining why the benefit application is being cancelled.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface CancelBenefitApplicationOutput {}

/**
 * <p>Represents a monetary amount with its associated currency.</p>
 * @public
 */
export interface MonetaryValue {
  /**
   * <p>The numeric amount of the monetary value.</p>
   * @public
   */
  Amount: string | undefined;

  /**
   * <p>The ISO 4217 currency code (e.g., USD, EUR) for the monetary amount.</p>
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;
}

/**
 * <p>Represents detailed information about a specific issuance of benefit value.</p>
 * @public
 */
export interface IssuanceDetail {
  /**
   * <p>The unique identifier for this specific issuance.</p>
   * @public
   */
  IssuanceId?: string | undefined;

  /**
   * <p>The monetary amount or value that was issued in this specific issuance.</p>
   * @public
   */
  IssuanceAmount?: MonetaryValue | undefined;

  /**
   * <p>The timestamp when this specific issuance was processed.</p>
   * @public
   */
  IssuedAt?: Date | undefined;
}

/**
 * <p>Contains information about consumable benefit fulfillment, such as usage quotas or service limits.</p>
 * @public
 */
export interface ConsumableDetails {
  /**
   * <p>The total amount of the consumable benefit that has been allocated.</p>
   * @public
   */
  AllocatedAmount?: MonetaryValue | undefined;

  /**
   * <p>The remaining amount of the consumable benefit that is still available for use.</p>
   * @public
   */
  RemainingAmount?: MonetaryValue | undefined;

  /**
   * <p>The amount of the consumable benefit that has already been used.</p>
   * @public
   */
  UtilizedAmount?: MonetaryValue | undefined;

  /**
   * <p>Detailed information about how the consumable benefit was issued and distributed.</p>
   * @public
   */
  IssuanceDetails?: IssuanceDetail | undefined;
}

/**
 * <p>Represents contact information for a partner representative.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The email address of the contact person.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The first name of the contact person.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name of the contact person.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The business title or role of the contact person within the organization.</p>
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * <p>The phone number of the contact person.</p>
   * @public
   */
  Phone?: string | undefined;
}

/**
 * <p>Represents input information for uploading a file to a benefit application.</p>
 * @public
 */
export interface FileInput {
  /**
   * <p>The URI or location where the file should be stored or has been uploaded.</p>
   * @public
   */
  FileURI: string | undefined;

  /**
   * <p>The business purpose or use case that this file supports in the benefit application.</p>
   * @public
   */
  BusinessUseCase?: string | undefined;
}

/**
 * <p>Represents a key-value pair used for categorizing and organizing AWS resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key, which acts as a category or label for the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag value, which provides additional information or context for the tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateBenefitApplicationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog to create the application in.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the creation request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>A human-readable name for the benefit application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A detailed description of the benefit application and its intended use.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the benefit being requested in this application.</p>
   * @public
   */
  BenefitIdentifier: string | undefined;

  /**
   * <p>The types of fulfillment requested for this benefit application (e.g., credits, access, disbursement).</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>Detailed information and requirements specific to the benefit being requested.</p>
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * <p>Key-value pairs to categorize and organize the benefit application.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>AWS resources that are associated with this benefit application.</p>
   * @public
   */
  AssociatedResources?: string[] | undefined;

  /**
   * <p>Contact information for partner representatives responsible for this benefit application.</p>
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * <p>Supporting documents and files attached to the benefit application.</p>
   * @public
   */
  FileDetails?: FileInput[] | undefined;
}

/**
 * @public
 */
export interface CreateBenefitApplicationOutput {
  /**
   * <p>The unique identifier assigned to the newly created benefit application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created benefit application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The initial revision number of the newly created benefit application.</p>
   * @public
   */
  Revision?: string | undefined;
}

/**
 * <p>Represents an AWS credit code that can be applied to an AWS account for billing purposes.</p>
 * @public
 */
export interface CreditCode {
  /**
   * <p>The AWS account ID that the credit code is associated with or can be applied to.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The monetary value of the credit code.</p>
   * @public
   */
  Value: MonetaryValue | undefined;

  /**
   * <p>The actual credit code string that can be redeemed in the AWS billing console.</p>
   * @public
   */
  AwsCreditCode: string | undefined;

  /**
   * <p>The current status of the credit code (e.g., active, redeemed, expired).</p>
   * @public
   */
  Status: BenefitAllocationStatus | undefined;

  /**
   * <p>The timestamp when the credit code was issued.</p>
   * @public
   */
  IssuedAt: Date | undefined;

  /**
   * <p>The timestamp when the credit code expires and can no longer be redeemed.</p>
   * @public
   */
  ExpiresAt: Date | undefined;
}

/**
 * <p>Contains information about credit-based benefit fulfillment, including AWS promotional credits.</p>
 * @public
 */
export interface CreditDetails {
  /**
   * <p>The total amount of credits that have been allocated for this benefit.</p>
   * @public
   */
  AllocatedAmount: MonetaryValue | undefined;

  /**
   * <p>The amount of credits that have actually been issued and are available for use.</p>
   * @public
   */
  IssuedAmount: MonetaryValue | undefined;

  /**
   * <p>A list of credit codes that have been generated for this benefit allocation.</p>
   * @public
   */
  Codes: CreditCode[] | undefined;
}

/**
 * @public
 */
export interface DisassociateBenefitApplicationResourceInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to disassociate the resource from.</p>
   * @public
   */
  BenefitApplicationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS resource to disassociate from the benefit application.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBenefitApplicationResourceOutput {
  /**
   * <p>The unique identifier of the benefit application after the resource disassociation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit application after the resource disassociation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The updated revision number of the benefit application after the resource disassociation.</p>
   * @public
   */
  Revision?: string | undefined;
}

/**
 * <p>Contains information about disbursement-based benefit fulfillment, such as direct payments or reimbursements.</p>
 * @public
 */
export interface DisbursementDetails {
  /**
   * <p>The total amount that has been disbursed for this benefit allocation.</p>
   * @public
   */
  DisbursedAmount?: MonetaryValue | undefined;

  /**
   * <p>Detailed information about how the disbursement was issued and processed.</p>
   * @public
   */
  IssuanceDetails?: IssuanceDetail | undefined;
}

/**
 * <p>Represents detailed information about a file attached to a benefit application.</p>
 * @public
 */
export interface FileDetail {
  /**
   * <p>The URI or location where the file is stored.</p>
   * @public
   */
  FileURI: string | undefined;

  /**
   * <p>The business purpose or use case that this file supports in the benefit application.</p>
   * @public
   */
  BusinessUseCase?: string | undefined;

  /**
   * <p>The original name of the uploaded file.</p>
   * @public
   */
  FileName?: string | undefined;

  /**
   * <p>The current processing status of the file (e.g., uploaded, processing, approved, rejected).</p>
   * @public
   */
  FileStatus?: string | undefined;

  /**
   * <p>The reason for that particulat file status.</p>
   * @public
   */
  FileStatusReason?: string | undefined;

  /**
   * <p>The type or category of the file (e.g., document, image, spreadsheet).</p>
   * @public
   */
  FileType?: FileType | undefined;

  /**
   * <p>The identifier of the user who uploaded the file.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The timestamp when the file was uploaded.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>Contains comprehensive information about how a benefit allocation is fulfilled across different fulfillment types.</p>
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
   * <p>Details about disbursement-based fulfillment, if applicable to this benefit allocation.</p>
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
   * <p>Details about consumable-based fulfillment, if applicable to this benefit allocation.</p>
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
   * <p>Details about credit-based fulfillment, if applicable to this benefit allocation.</p>
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
   * <p>Details about access-based fulfillment, if applicable to this benefit allocation.</p>
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
   * <p>The catalog identifier that specifies which benefit catalog to query.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitOutput {
  /**
   * <p>The unique identifier of the benefit.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The catalog identifier that the benefit belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The human-readable name of the benefit.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A detailed description of the benefit and its purpose.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The AWS partner programs that this benefit is associated with.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>The available fulfillment types for this benefit (e.g., credits, access, disbursement).</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>The schema definition that describes the required fields for requesting this benefit.</p>
   * @public
   */
  BenefitRequestSchema?: __DocumentType | undefined;

  /**
   * <p>The current status of the benefit (e.g., active, inactive, deprecated).</p>
   * @public
   */
  Status?: BenefitStatus | undefined;
}

/**
 * @public
 */
export interface GetBenefitAllocationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog to query.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit allocation to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitAllocationOutput {
  /**
   * <p>The unique identifier of the benefit allocation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The catalog identifier that the benefit allocation belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit allocation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The human-readable name of the benefit allocation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A detailed description of the benefit allocation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the benefit allocation (e.g., active, expired, consumed).</p>
   * @public
   */
  Status?: BenefitAllocationStatus | undefined;

  /**
   * <p>Additional information explaining the current status of the benefit allocation.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The identifier of the benefit application that resulted in this allocation.</p>
   * @public
   */
  BenefitApplicationId?: string | undefined;

  /**
   * <p>The identifier of the benefit that this allocation is based on.</p>
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * <p>The fulfillment type used for this benefit allocation.</p>
   * @public
   */
  FulfillmentType?: FulfillmentType | undefined;

  /**
   * <p>A list of benefit identifiers that this allocation can be applied to.</p>
   * @public
   */
  ApplicableBenefitIds?: string[] | undefined;

  /**
   * <p>Detailed information about how the benefit allocation is fulfilled.</p>
   * @public
   */
  FulfillmentDetail?: FulfillmentDetails | undefined;

  /**
   * <p>The timestamp when the benefit allocation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit allocation was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit allocation becomes active and usable.</p>
   * @public
   */
  StartsAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit allocation expires and is no longer usable.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetBenefitApplicationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog to query.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBenefitApplicationOutput {
  /**
   * <p>The unique identifier of the benefit application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the benefit application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The catalog identifier that the benefit application belongs to.</p>
   * @public
   */
  Catalog?: string | undefined;

  /**
   * <p>The identifier of the benefit being requested in this application.</p>
   * @public
   */
  BenefitId?: string | undefined;

  /**
   * <p>The human-readable name of the benefit application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A detailed description of the benefit application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The fulfillment types requested for this benefit application.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>Detailed information and requirements specific to the benefit being requested.</p>
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * <p>The AWS partner programs associated with this benefit application.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>The current processing status of the benefit application.</p>
   * @public
   */
  Status?: BenefitApplicationStatus | undefined;

  /**
   * <p>The current stage in the benefit application processing workflow.</p>
   * @public
   */
  Stage?: string | undefined;

  /**
   * <p>Additional information explaining the current status of the benefit application.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>A standardized code representing the reason for the current status.</p>
   *
   * @deprecated This field is no longer used
   * @public
   */
  StatusReasonCode?: string | undefined;

  /**
   * <p>The list of standardized codes representing the reason for the current status.</p>
   * @public
   */
  StatusReasonCodes?: string[] | undefined;

  /**
   * <p>The timestamp when the benefit application was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the benefit application was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The current revision number of the benefit application.</p>
   * @public
   */
  Revision?: string | undefined;

  /**
   * <p>AWS resources that are associated with this benefit application.</p>
   * @public
   */
  AssociatedResources?: string[] | undefined;

  /**
   * <p>Contact information for partner representatives responsible for this benefit application.</p>
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * <p>Supporting documents and files attached to the benefit application.</p>
   * @public
   */
  FileDetails?: FileDetail[] | undefined;
}

/**
 * @public
 */
export interface ListBenefitAllocationsInput {
  /**
   * <p>The catalog identifier to filter benefit allocations by catalog.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Filter benefit allocations by specific fulfillment types.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>Filter benefit allocations by specific benefit identifiers.</p>
   * @public
   */
  BenefitIdentifiers?: string[] | undefined;

  /**
   * <p>Filter benefit allocations by specific benefit application identifiers.</p>
   * @public
   */
  BenefitApplicationIdentifiers?: string[] | undefined;

  /**
   * <p>Filter benefit allocations by their current status.</p>
   * @public
   */
  Status?: BenefitAllocationStatus[] | undefined;

  /**
   * <p>The maximum number of benefit allocations to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results from a previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitAllocationsOutput {
  /**
   * <p>A list of benefit allocation summaries matching the specified criteria.</p>
   * @public
   */
  BenefitAllocationSummaries?: BenefitAllocationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitApplicationsInput {
  /**
   * <p>The catalog identifier to filter benefit applications by catalog.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Filter benefit applications by specific AWS partner programs.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>Filter benefit applications by specific fulfillment types.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>Filter benefit applications by specific benefit identifiers.</p>
   * @public
   */
  BenefitIdentifiers?: string[] | undefined;

  /**
   * <p>Filter benefit applications by their current processing status.</p>
   * @public
   */
  Status?: BenefitApplicationStatus[] | undefined;

  /**
   * <p>Filter benefit applications by their current processing stage.</p>
   * @public
   */
  Stages?: string[] | undefined;

  /**
   * <p>Filter benefit applications by associated AWS resources.</p>
   *
   * @deprecated This field is no longer used.
   * @public
   */
  AssociatedResources?: AssociatedResource[] | undefined;

  /**
   * <p>Filter benefit applications by specific AWS resource ARNs.</p>
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;

  /**
   * <p>The maximum number of benefit applications to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results from a previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitApplicationsOutput {
  /**
   * <p>A list of benefit application summaries matching the specified criteria.</p>
   * @public
   */
  BenefitApplicationSummaries?: BenefitApplicationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitsInput {
  /**
   * <p>The catalog identifier to filter benefits by catalog.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Filter benefits by specific AWS partner programs.</p>
   * @public
   */
  Programs?: string[] | undefined;

  /**
   * <p>Filter benefits by specific fulfillment types.</p>
   * @public
   */
  FulfillmentTypes?: FulfillmentType[] | undefined;

  /**
   * <p>Filter benefits by their current status.</p>
   * @public
   */
  Status?: BenefitStatus[] | undefined;

  /**
   * <p>The maximum number of benefits to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results from a previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBenefitsOutput {
  /**
   * <p>A list of benefit summaries matching the specified criteria.</p>
   * @public
   */
  BenefitSummaries?: BenefitSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of key-value pairs representing the tags associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RecallBenefitApplicationInput {
  /**
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the recall request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to recall.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A descriptive reason explaining why the benefit application is being recalled.</p>
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
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to submit.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key-value pairs to add as tags to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource.</p>
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
   * <p>The catalog identifier that specifies which benefit catalog the application belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the update request.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>The updated human-readable name for the benefit application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated detailed description of the benefit application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the benefit application to update.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The current revision number of the benefit application to ensure optimistic concurrency control.</p>
   * @public
   */
  Revision: string | undefined;

  /**
   * <p>Updated detailed information and requirements specific to the benefit being requested.</p>
   * @public
   */
  BenefitApplicationDetails?: __DocumentType | undefined;

  /**
   * <p>Updated contact information for partner representatives responsible for this benefit application.</p>
   * @public
   */
  PartnerContacts?: Contact[] | undefined;

  /**
   * <p>Updated supporting documents and files attached to the benefit application.</p>
   * @public
   */
  FileDetails?: FileInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateBenefitApplicationOutput {
  /**
   * <p>The unique identifier of the updated benefit application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated benefit application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The new revision number of the benefit application after the update.</p>
   * @public
   */
  Revision?: string | undefined;
}
