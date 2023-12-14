// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { B2biServiceException as __BaseException } from "./B2biServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2BI Data Interchange. File
 *          locations in Amazon S3 are identified using a combination of the bucket and key.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>Specifies the Amazon S3 key for the file location.</p>
   */
  key?: string;
}

/**
 * @public
 * @enum
 */
export const X12TransactionSet = {
  X12_110: "X12_110",
  X12_180: "X12_180",
  X12_204: "X12_204",
  X12_210: "X12_210",
  X12_214: "X12_214",
  X12_215: "X12_215",
  X12_310: "X12_310",
  X12_315: "X12_315",
  X12_322: "X12_322",
  X12_404: "X12_404",
  X12_410: "X12_410",
  X12_820: "X12_820",
  X12_824: "X12_824",
  X12_830: "X12_830",
  X12_846: "X12_846",
  X12_850: "X12_850",
  X12_852: "X12_852",
  X12_855: "X12_855",
  X12_856: "X12_856",
  X12_860: "X12_860",
  X12_861: "X12_861",
  X12_864: "X12_864",
  X12_940: "X12_940",
  X12_990: "X12_990",
  X12_997: "X12_997",
} as const;

/**
 * @public
 */
export type X12TransactionSet = (typeof X12TransactionSet)[keyof typeof X12TransactionSet];

/**
 * @public
 * @enum
 */
export const X12Version = {
  VERSION_4010: "VERSION_4010",
  VERSION_4030: "VERSION_4030",
  VERSION_5010: "VERSION_5010",
} as const;

/**
 * @public
 */
export type X12Version = (typeof X12Version)[keyof typeof X12Version];

/**
 * @public
 * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p>
 *          <note>
 *             <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p>
 *          </note>
 */
export interface X12Details {
  /**
   * @public
   * <p>Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.</p>
   */
  transactionSet?: X12TransactionSet;

  /**
   * @public
   * <p>Returns the version to use for the specified X12 transaction set. Supported versions are <code>4010</code>, <code>4030</code>, and <code>5010</code>.</p>
   */
  version?: X12Version;
}

/**
 * @public
 * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
 */
export type EdiType = EdiType.X12DetailsMember | EdiType.$UnknownMember;

/**
 * @public
 */
export namespace EdiType {
  /**
   * @public
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  export interface X12DetailsMember {
    x12Details: X12Details;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x12Details?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x12Details: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EdiType, visitor: Visitor<T>): T => {
    if (value.x12Details !== undefined) return visitor.x12Details(value.x12Details);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Specifies the details for the EDI (electronic data interchange) transformation.</p>
 */
export interface EdiConfiguration {
  /**
   * @public
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: EdiType | undefined;

  /**
   * @public
   * <p>Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an <code>S3Location</code> object.</p>
   */
  inputLocation: S3Location | undefined;

  /**
   * @public
   * <p>Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an <code>S3Location</code> object.</p>
   */
  outputLocation: S3Location | undefined;

  /**
   * @public
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;
}

/**
 * @public
 * <p>A capability object. Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 */
export type CapabilityConfiguration = CapabilityConfiguration.EdiMember | CapabilityConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityConfiguration {
  /**
   * @public
   * <p>An EDI (electronic data interchange) configuration object.</p>
   */
  export interface EdiMember {
    edi: EdiConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    edi?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    edi: (value: EdiConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CapabilityConfiguration, visitor: Visitor<T>): T => {
    if (value.edi !== undefined) return visitor.edi(value.edi);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes.
 *          You can apply tags to capabilities, partnerships, profiles and transformers. A tag key can take more than one value. For example, to group capabilities for accounting purposes,
 *          you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Specifies the name assigned to the tag that you create.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Contains one or more values that you assigned to the key name that you create.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapabilityType = {
  EDI: "edi",
} as const;

/**
 * @public
 */
export type CapabilityType = (typeof CapabilityType)[keyof typeof CapabilityType];

/**
 * @public
 */
export interface CreateCapabilityRequest {
  /**
   * @public
   * <p>Specifies the name of the capability, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: CapabilityType | undefined;

  /**
   * @public
   * <p>Specifies a structure that contains the details for a capability.</p>
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * @public
   * <p>Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   */
  instructionsDocuments?: S3Location[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCapabilityResponse {
  /**
   * @public
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  capabilityArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the capability used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: CapabilityType | undefined;

  /**
   * @public
   * <p>Returns a structure that contains the details for a capability.</p>
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * @public
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   */
  instructionsDocuments?: S3Location[];

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   */
  createdAt: Date | undefined;
}

/**
 * @public
 * <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The server attempts to retry a failed command.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID for the resource that exceeded the quota, which caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type (profile, partnership, transformer, or capability) that exceeded the quota, which caused the exception.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The code responsible for exceeding the quota, which caused the exception.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The quota that was exceeded, which caused the exception.</p>
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>The server attempts to retry a command that was throttled.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCapabilityRequest {
  /**
   * @public
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityRequest {
  /**
   * @public
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityResponse {
  /**
   * @public
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  capabilityArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the capability, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: CapabilityType | undefined;

  /**
   * @public
   * <p>Returns a structure that contains the details for a capability.</p>
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * @public
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   */
  instructionsDocuments?: S3Location[];

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the capability was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListCapabilitiesRequest {
  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of capabilities to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Returns the capability summary details. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 */
export interface CapabilitySummary {
  /**
   * @public
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;

  /**
   * @public
   * <p>The display name of the capability.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: CapabilityType | undefined;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp that identifies the most recent date and time that the capability was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListCapabilitiesResponse {
  /**
   * @public
   * <p>Returns one or more capabilities associated with this partnership.</p>
   */
  capabilities: CapabilitySummary[] | undefined;

  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCapabilityRequest {
  /**
   * @public
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;

  /**
   * @public
   * <p>Specifies a new name for the capability, to replace the existing name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies a structure that contains the details for a capability.</p>
   */
  configuration?: CapabilityConfiguration;

  /**
   * @public
   * <p>Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   */
  instructionsDocuments?: S3Location[];
}

/**
 * @public
 */
export interface UpdateCapabilityResponse {
  /**
   * @public
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   */
  capabilityId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  capabilityArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the capability, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   */
  type: CapabilityType | undefined;

  /**
   * @public
   * <p>Returns a structure that contains the details for a capability.</p>
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * @public
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   */
  instructionsDocuments?: S3Location[];

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the capability was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface GetTransformerJobRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for a transformer run.</p>
   */
  transformerJobId: string | undefined;

  /**
   * @public
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransformerJobStatus = {
  FAILED: "failed",
  RUNNING: "running",
  SUCCEEDED: "succeeded",
} as const;

/**
 * @public
 */
export type TransformerJobStatus = (typeof TransformerJobStatus)[keyof typeof TransformerJobStatus];

/**
 * @public
 */
export interface GetTransformerJobResponse {
  /**
   * @public
   * <p>Returns the current state of the transformer job, either <code>running</code>,
   *             <code>succeeded</code>, or <code>failed</code>.</p>
   */
  status: TransformerJobStatus | undefined;

  /**
   * @public
   * <p>Returns the location for the output files. If the caller specified a directory for the
   *          output, then this contains the full path to the output file, including the file name
   *          generated by the service.</p>
   */
  outputFiles?: S3Location[];

  /**
   * @public
   * <p>Returns an optional error message, which gets populated when the job is not run
   *          successfully.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Returns the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePartnershipRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Specifies a descriptive name for the partnership.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies the email address associated with this trading partner.</p>
   */
  email: string | undefined;

  /**
   * @public
   * <p>Specifies the phone number associated with the partnership.</p>
   */
  phone?: string;

  /**
   * @public
   * <p>Specifies a list of the capabilities associated with this partnership.</p>
   */
  capabilities?: string[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePartnershipResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  partnershipArn: string | undefined;

  /**
   * @public
   * <p>Returns a descriptive name for the partnership.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Returns the email address associated with this trading partner.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns the phone number associated with the partnership.</p>
   */
  phone?: string;

  /**
   * @public
   * <p>Returns one or more capabilities associated with this partnership.</p>
   */
  capabilities?: string[];

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   */
  tradingPartnerId?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePartnershipRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  partnershipArn: string | undefined;

  /**
   * @public
   * <p>Returns the display name of the partnership</p>
   */
  name?: string;

  /**
   * @public
   * <p>Returns the email address associated with this trading partner.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns the phone number associated with the partnership.</p>
   */
  phone?: string;

  /**
   * @public
   * <p>Returns one or more capabilities associated with this partnership.</p>
   */
  capabilities?: string[];

  /**
   * @public
   * <p>Returns the unique identifier for the partner for this partnership.</p>
   */
  tradingPartnerId?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListPartnershipsRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId?: string;

  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of capabilities to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A structure that contains the details for a partnership. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 */
export interface PartnershipSummary {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;

  /**
   * @public
   * <p>Returns the name of the partnership.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Returns one or more capabilities associated with this partnership.</p>
   */
  capabilities?: string[];

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   */
  tradingPartnerId?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListPartnershipsResponse {
  /**
   * @public
   * <p>Specifies a list of your partnerships.</p>
   */
  partnerships: PartnershipSummary[] | undefined;

  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdatePartnershipRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;

  /**
   * @public
   * <p>The name of the partnership, used to identify it.</p>
   */
  name?: string;

  /**
   * @public
   * <p>List of the capabilities associated with this partnership.</p>
   */
  capabilities?: string[];
}

/**
 * @public
 */
export interface UpdatePartnershipResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   */
  partnershipId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  partnershipArn: string | undefined;

  /**
   * @public
   * <p>The name of the partnership, used to identify it.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Returns the email address associated with this trading partner.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns the phone number associated with the partnership.</p>
   */
  phone?: string;

  /**
   * @public
   * <p>Returns one or more capabilities associated with this partnership.</p>
   */
  capabilities?: string[];

  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   */
  tradingPartnerId?: string;

  /**
   * @public
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const Logging = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Logging = (typeof Logging)[keyof typeof Logging];

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * @public
   * <p>Specifies the name of the profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies the email address associated with this customer profile.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Specifies the phone number associated with the profile.</p>
   */
  phone: string | undefined;

  /**
   * @public
   * <p>Specifies the name for the business associated with this profile.</p>
   */
  businessName: string | undefined;

  /**
   * @public
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   */
  logging: Logging | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for the profile.</p>
   */
  profileArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the profile, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the name for the business associated with this profile.</p>
   */
  businessName: string | undefined;

  /**
   * @public
   * <p>Returns the phone number associated with the profile.</p>
   */
  phone: string | undefined;

  /**
   * @public
   * <p>Returns the email address associated with this customer profile.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns whether or not logging is turned on for this profile.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>Returns the name of the logging group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Returns a timestamp representing the time the profile was created.</p>
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  profileArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the profile, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the email address associated with this customer profile.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns the phone number associated with the profile.</p>
   */
  phone: string | undefined;

  /**
   * @public
   * <p>Returns the name for the business associated with this profile.</p>
   */
  businessName: string | undefined;

  /**
   * @public
   * <p>Returns whether or not logging is enabled for this profile.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>Returns the name of the logging group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the profile was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of profiles to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains the details for a profile. A profile is the mechanism used to create the concept of
 *    a private network.</p>
 */
export interface ProfileSummary {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns the display name for profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the name for the business associated with this profile.</p>
   */
  businessName: string | undefined;

  /**
   * @public
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>Returns the name of the logging group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Returns the timestamp for creation date and time of the profile.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns the timestamp that identifies the most recent date and time that the profile was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * @public
   * <p>Returns an array of <code>ProfileSummary</code> objects.</p>
   */
  profiles: ProfileSummary[] | undefined;

  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * @public
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>The name of the profile, used to identify it.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies the email address associated with this customer profile.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Specifies the phone number associated with the profile.</p>
   */
  phone?: string;

  /**
   * @public
   * <p>Specifies the name for the business associated with this profile.</p>
   */
  businessName?: string;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   */
  profileId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for the profile.</p>
   */
  profileArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns the email address associated with this customer profile.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Returns the phone number associated with the profile.</p>
   */
  phone: string | undefined;

  /**
   * @public
   * <p>Returns the name for the business associated with this profile.</p>
   */
  businessName: string | undefined;

  /**
   * @public
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   */
  logging?: Logging;

  /**
   * @public
   * <p>Returns the name of the logging group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the profile.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the profile was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface StartTransformerJobRequest {
  /**
   * @public
   * <p>Specifies the location of the input file for the transformation. The location consists of an Amazon S3 bucket and prefix.</p>
   */
  inputFile: S3Location | undefined;

  /**
   * @public
   * <p>Specifies the location of the output file for the transformation. The location consists of an Amazon S3 bucket and prefix.</p>
   */
  outputLocation: S3Location | undefined;

  /**
   * @public
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartTransformerJobResponse {
  /**
   * @public
   * <p>Returns the unique, system-generated identifier for a transformer run.</p>
   */
  transformerJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormat = {
  JSON: "JSON",
  XML: "XML",
} as const;

/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 */
export interface TestMappingRequest {
  /**
   * @public
   * <p>Specify the contents of the EDI (electronic data interchange) XML or JSON file that is used as input for the transform.</p>
   */
  inputFileContent: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;
}

/**
 * @public
 */
export interface TestMappingResponse {
  /**
   * @public
   * <p>Returns a string for the mapping that can be used to identify the mapping. Similar to a fingerprint</p>
   */
  mappedFileContent: string | undefined;
}

/**
 * @public
 */
export interface TestParsingRequest {
  /**
   * @public
   * <p>Specifies an <code>S3Location</code> object, which contains the Amazon S3 bucket and prefix for the location of the input file.</p>
   */
  inputFile: S3Location | undefined;

  /**
   * @public
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;
}

/**
 * @public
 */
export interface TestParsingResponse {
  /**
   * @public
   * <p>Returns the contents of the input file being tested, parsed according to the specified EDI (electronic data interchange) type.</p>
   */
  parsedFileContent: string | undefined;
}

/**
 * @public
 */
export interface CreateTransformerRequest {
  /**
   * @public
   * <p>Specifies the name of the transformer, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;

  /**
   * @public
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const TransformerStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

/**
 * @public
 */
export type TransformerStatus = (typeof TransformerStatus)[keyof typeof TransformerStatus];

/**
 * @public
 */
export interface CreateTransformerResponse {
  /**
   * @public
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  transformerArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the transformer, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Returns the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   */
  status: TransformerStatus | undefined;

  /**
   * @public
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;

  /**
   * @public
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteTransformerRequest {
  /**
   * @public
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerRequest {
  /**
   * @public
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerResponse {
  /**
   * @public
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  transformerArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the transformer, used to identify it.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Returns the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   */
  status: TransformerStatus | undefined;

  /**
   * @public
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;

  /**
   * @public
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the transformer was modified.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListTransformersRequest {
  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the number of items to return for the API response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains the details for a transformer object. A transformer
 *    describes how to process the incoming EDI documents and extract the necessary
 *    information to the output file.</p>
 */
export interface TransformerSummary {
  /**
   * @public
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Returns the descriptive name for the transformer.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Returns the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   */
  status: TransformerStatus | undefined;

  /**
   * @public
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;

  /**
   * @public
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;

  /**
   * @public
   * <p>Returns a timestamp indicating when the transformer was created. For example,
   *          <code>2023-07-20T19:58:44.624Z</code>.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp representing the date and time for the most recent change for the transformer object.</p>
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListTransformersResponse {
  /**
   * @public
   * <p>Returns an array of one or more transformer objects.</p>
   *          <p>For each transformer, a <code>TransformerSummary</code> object is returned.
   *          The <code>TransformerSummary</code> contains all the details for a specific transformer.</p>
   */
  transformers: TransformerSummary[] | undefined;

  /**
   * @public
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateTransformerRequest {
  /**
   * @public
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Specify a new name for the transformer, if you want to update it.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat?: FileFormat;

  /**
   * @public
   * <p>Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate?: string;

  /**
   * @public
   * <p>Specifies the transformer's status. You can update the state of the transformer, from <code>active</code> to <code>inactive</code>, or <code>inactive</code> to <code>active</code>.</p>
   */
  status?: TransformerStatus;

  /**
   * @public
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType?: EdiType;

  /**
   * @public
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;
}

/**
 * @public
 */
export interface UpdateTransformerResponse {
  /**
   * @public
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   */
  transformerId: string | undefined;

  /**
   * @public
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  transformerArn: string | undefined;

  /**
   * @public
   * <p>Returns the name of the transformer.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   */
  fileFormat: FileFormat | undefined;

  /**
   * @public
   * <p>Returns the name of the mapping template for the transformer. This template is used to convert the input document into the
   *       correct set of objects.</p>
   */
  mappingTemplate: string | undefined;

  /**
   * @public
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   */
  status: TransformerStatus | undefined;

  /**
   * @public
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   */
  ediType: EdiType | undefined;

  /**
   * @public
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   */
  sampleDocument?: string;

  /**
   * @public
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Returns a timestamp for last time the transformer was modified.</p>
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const CreatePartnershipRequestFilterSensitiveLog = (obj: CreatePartnershipRequest): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePartnershipResponseFilterSensitiveLog = (obj: CreatePartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPartnershipResponseFilterSensitiveLog = (obj: GetPartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePartnershipResponseFilterSensitiveLog = (obj: UpdatePartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProfileRequestFilterSensitiveLog = (obj: CreateProfileRequest): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProfileResponseFilterSensitiveLog = (obj: CreateProfileResponse): any => ({
  ...obj,
  ...(obj.phone && { phone: SENSITIVE_STRING }),
  ...(obj.email && { email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProfileResponseFilterSensitiveLog = (obj: GetProfileResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProfileResponseFilterSensitiveLog = (obj: UpdateProfileResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
});
