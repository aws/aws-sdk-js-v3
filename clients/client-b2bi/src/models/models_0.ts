// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { B2biServiceException as __BaseException } from "./B2biServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 * @public
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
 * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2BI Data Interchange. File
 *          locations in Amazon S3 are identified using a combination of the bucket and key.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>Specifies the name of the Amazon S3 bucket.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key for the file location.</p>
   * @public
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
  X12_211: "X12_211",
  X12_214: "X12_214",
  X12_215: "X12_215",
  X12_259: "X12_259",
  X12_260: "X12_260",
  X12_266: "X12_266",
  X12_269: "X12_269",
  X12_270: "X12_270",
  X12_270_X279: "X12_270_X279",
  X12_271: "X12_271",
  X12_271_X279: "X12_271_X279",
  X12_274: "X12_274",
  X12_275: "X12_275",
  X12_275_X210: "X12_275_X210",
  X12_275_X211: "X12_275_X211",
  X12_276: "X12_276",
  X12_276_X212: "X12_276_X212",
  X12_277: "X12_277",
  X12_277_X212: "X12_277_X212",
  X12_277_X214: "X12_277_X214",
  X12_277_X364: "X12_277_X364",
  X12_278: "X12_278",
  X12_278_X217: "X12_278_X217",
  X12_310: "X12_310",
  X12_315: "X12_315",
  X12_322: "X12_322",
  X12_404: "X12_404",
  X12_410: "X12_410",
  X12_417: "X12_417",
  X12_421: "X12_421",
  X12_426: "X12_426",
  X12_810: "X12_810",
  X12_820: "X12_820",
  X12_820_X218: "X12_820_X218",
  X12_820_X306: "X12_820_X306",
  X12_824: "X12_824",
  X12_824_X186: "X12_824_X186",
  X12_830: "X12_830",
  X12_832: "X12_832",
  X12_834: "X12_834",
  X12_834_X220: "X12_834_X220",
  X12_834_X307: "X12_834_X307",
  X12_834_X318: "X12_834_X318",
  X12_835: "X12_835",
  X12_835_X221: "X12_835_X221",
  X12_837: "X12_837",
  X12_837_X222: "X12_837_X222",
  X12_837_X223: "X12_837_X223",
  X12_837_X224: "X12_837_X224",
  X12_837_X291: "X12_837_X291",
  X12_837_X292: "X12_837_X292",
  X12_837_X298: "X12_837_X298",
  X12_844: "X12_844",
  X12_846: "X12_846",
  X12_849: "X12_849",
  X12_850: "X12_850",
  X12_852: "X12_852",
  X12_855: "X12_855",
  X12_856: "X12_856",
  X12_860: "X12_860",
  X12_861: "X12_861",
  X12_864: "X12_864",
  X12_865: "X12_865",
  X12_869: "X12_869",
  X12_870: "X12_870",
  X12_940: "X12_940",
  X12_945: "X12_945",
  X12_990: "X12_990",
  X12_997: "X12_997",
  X12_999: "X12_999",
  X12_999_X231: "X12_999_X231",
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
  VERSION_5010_HIPAA: "VERSION_5010_HIPAA",
} as const;

/**
 * @public
 */
export type X12Version = (typeof X12Version)[keyof typeof X12Version];

/**
 * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p>
 *          <note>
 *             <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p>
 *          </note>
 * @public
 */
export interface X12Details {
  /**
   * <p>Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.</p>
   * @public
   */
  transactionSet?: X12TransactionSet;

  /**
   * <p>Returns the version to use for the specified X12 transaction set.
   *
   *
   *
   *       </p>
   * @public
   */
  version?: X12Version;
}

/**
 * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
 * @public
 */
export type EdiType = EdiType.X12DetailsMember | EdiType.$UnknownMember;

/**
 * @public
 */
export namespace EdiType {
  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
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
 * <p>Specifies the details for the EDI (electronic data interchange) transformation.</p>
 * @public
 */
export interface EdiConfiguration {
  /**
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: EdiType | undefined;

  /**
   * <p>Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an <code>S3Location</code> object.</p>
   * @public
   */
  inputLocation: S3Location | undefined;

  /**
   * <p>Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an <code>S3Location</code> object.</p>
   * @public
   */
  outputLocation: S3Location | undefined;

  /**
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;
}

/**
 * <p>A capability object. Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @public
 */
export type CapabilityConfiguration = CapabilityConfiguration.EdiMember | CapabilityConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityConfiguration {
  /**
   * <p>An EDI (electronic data interchange) configuration object.</p>
   * @public
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
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes.
 *          You can apply tags to capabilities, partnerships, profiles and transformers. A tag key can take more than one value. For example, to group capabilities for accounting purposes,
 *          you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Specifies the name assigned to the tag that you create.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Contains one or more values that you assigned to the key name that you create.</p>
   * @public
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
   * <p>Specifies the name of the capability, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * <p>Specifies a structure that contains the details for a capability.</p>
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * <p>Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[];

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCapabilityResponse {
  /**
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * <p>Returns the name of the capability used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * <p>Returns a structure that contains the details for a capability.</p>
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[];

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The server attempts to retry a failed command.</p>
   * @public
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
 * <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 * @public
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
 * <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID for the resource that exceeded the quota, which caused the exception.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type (profile, partnership, transformer, or capability) that exceeded the quota, which caused the exception.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The code responsible for exceeding the quota, which caused the exception.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The quota that was exceeded, which caused the exception.</p>
   * @public
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
 * <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>The server attempts to retry a command that was throttled.</p>
   * @public
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
 * <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 * @public
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
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityRequest {
  /**
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityResponse {
  /**
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * <p>Returns the name of the capability, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * <p>Returns a structure that contains the details for a capability.</p>
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[];

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the capability was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListCapabilitiesRequest {
  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the maximum number of capabilities to return.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Returns the capability summary details. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @public
 */
export interface CapabilitySummary {
  /**
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;

  /**
   * <p>The display name of the capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the capability was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListCapabilitiesResponse {
  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities: CapabilitySummary[] | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCapabilityRequest {
  /**
   * <p>Specifies a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;

  /**
   * <p>Specifies a new name for the capability, to replace the existing name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies a structure that contains the details for a capability.</p>
   * @public
   */
  configuration?: CapabilityConfiguration;

  /**
   * <p>Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[];
}

/**
 * @public
 */
export interface UpdateCapabilityResponse {
  /**
   * <p>Returns a system-assigned unique identifier for the capability.</p>
   * @public
   */
  capabilityId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * <p>Returns the name of the capability, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the type of the capability. Currently, only <code>edi</code> is supported.</p>
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * <p>Returns a structure that contains the details for a capability.</p>
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * <p>Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[];

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the capability was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface GetTransformerJobRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for a transformer run.</p>
   * @public
   */
  transformerJobId: string | undefined;

  /**
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   * @public
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
   * <p>Returns the current state of the transformer job, either <code>running</code>,
   *             <code>succeeded</code>, or <code>failed</code>.</p>
   * @public
   */
  status: TransformerJobStatus | undefined;

  /**
   * <p>Returns the location for the output files. If the caller specified a directory for the
   *          output, then this contains the full path to the output file, including the file name
   *          generated by the service.</p>
   * @public
   */
  outputFiles?: S3Location[];

  /**
   * <p>Returns an optional error message, which gets populated when the job is not run
   *          successfully.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Returns the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePartnershipRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Specifies a descriptive name for the partnership.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the email address associated with this trading partner.</p>
   * @public
   */
  email: string | undefined;

  /**
   * <p>Specifies the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string;

  /**
   * <p>Specifies a list of the capabilities associated with this partnership.</p>
   * @public
   */
  capabilities: string[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePartnershipResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * <p>Returns a descriptive name for the partnership.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[];

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePartnershipRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * <p>Returns the display name of the partnership</p>
   * @public
   */
  name?: string;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[];

  /**
   * <p>Returns the unique identifier for the partner for this partnership.</p>
   * @public
   */
  tradingPartnerId?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListPartnershipsRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId?: string;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the maximum number of capabilities to return.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A structure that contains the details for a partnership. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @public
 */
export interface PartnershipSummary {
  /**
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;

  /**
   * <p>Returns the name of the partnership.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[];

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListPartnershipsResponse {
  /**
   * <p>Specifies a list of your partnerships.</p>
   * @public
   */
  partnerships: PartnershipSummary[] | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdatePartnershipRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;

  /**
   * <p>The name of the partnership, used to identify it.</p>
   * @public
   */
  name?: string;

  /**
   * <p>List of the capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[];
}

/**
 * @public
 */
export interface UpdatePartnershipResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a partnership.</p>
   * @public
   */
  partnershipId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * <p>The name of the partnership, used to identify it.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[];

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
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
   * <p>Specifies the name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the email address associated with this customer profile.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Specifies the phone number associated with the profile.</p>
   * @public
   */
  phone: string | undefined;

  /**
   * <p>Specifies the name for the business associated with this profile.</p>
   * @public
   */
  businessName: string | undefined;

  /**
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   * @public
   */
  logging: Logging | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for the profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>Returns the name of the profile, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the name for the business associated with this profile.</p>
   * @public
   */
  businessName: string | undefined;

  /**
   * <p>Returns the phone number associated with the profile.</p>
   * @public
   */
  phone: string | undefined;

  /**
   * <p>Returns the email address associated with this customer profile.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns whether or not logging is turned on for this profile.</p>
   * @public
   */
  logging?: Logging;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string;

  /**
   * <p>Returns a timestamp representing the time the profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>Returns the name of the profile, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the email address associated with this customer profile.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns the phone number associated with the profile.</p>
   * @public
   */
  phone: string | undefined;

  /**
   * <p>Returns the name for the business associated with this profile.</p>
   * @public
   */
  businessName: string | undefined;

  /**
   * <p>Returns whether or not logging is enabled for this profile.</p>
   * @public
   */
  logging?: Logging;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the maximum number of profiles to return.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Contains the details for a profile. A profile is the mechanism used to create the concept of
 *    a private network.</p>
 * @public
 */
export interface ProfileSummary {
  /**
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns the display name for profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the name for the business associated with this profile.</p>
   * @public
   */
  businessName: string | undefined;

  /**
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   * @public
   */
  logging?: Logging;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string;

  /**
   * <p>Returns the timestamp for creation date and time of the profile.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns the timestamp that identifies the most recent date and time that the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * <p>Returns an array of <code>ProfileSummary</code> objects.</p>
   * @public
   */
  profiles: ProfileSummary[] | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The name of the profile, used to identify it.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies the email address associated with this customer profile.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Specifies the phone number associated with the profile.</p>
   * @public
   */
  phone?: string;

  /**
   * <p>Specifies the name for the business associated with this profile.</p>
   * @public
   */
  businessName?: string;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * <p>Returns the unique, system-generated identifier for the profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for the profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>Returns the name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns the email address associated with this customer profile.</p>
   * @public
   */
  email?: string;

  /**
   * <p>Returns the phone number associated with the profile.</p>
   * @public
   */
  phone: string | undefined;

  /**
   * <p>Returns the name for the business associated with this profile.</p>
   * @public
   */
  businessName: string | undefined;

  /**
   * <p>Specifies whether or not logging is enabled for this profile.</p>
   * @public
   */
  logging?: Logging;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the profile.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface StartTransformerJobRequest {
  /**
   * <p>Specifies the location of the input file for the transformation. The location consists of an Amazon S3 bucket and prefix.</p>
   * @public
   */
  inputFile: S3Location | undefined;

  /**
   * <p>Specifies the location of the output file for the transformation. The location consists of an Amazon S3 bucket and prefix.</p>
   * @public
   */
  outputLocation: S3Location | undefined;

  /**
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartTransformerJobResponse {
  /**
   * <p>Returns the unique, system-generated identifier for a transformer run.</p>
   * @public
   */
  transformerJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
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
   * <p>Specify the contents of the EDI (electronic data interchange) XML or JSON file that is used as input for the transform.</p>
   * @public
   */
  inputFileContent: string | undefined;

  /**
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;
}

/**
 * @public
 */
export interface TestMappingResponse {
  /**
   * <p>Returns a string for the mapping that can be used to identify the mapping. Similar to a fingerprint</p>
   * @public
   */
  mappedFileContent: string | undefined;
}

/**
 * @public
 */
export interface TestParsingRequest {
  /**
   * <p>Specifies an <code>S3Location</code> object, which contains the Amazon S3 bucket and prefix for the location of the input file.</p>
   * @public
   */
  inputFile: S3Location | undefined;

  /**
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;
}

/**
 * @public
 */
export interface TestParsingResponse {
  /**
   * <p>Returns the contents of the input file being tested, parsed according to the specified EDI (electronic data interchange) type.</p>
   * @public
   */
  parsedFileContent: string | undefined;
}

/**
 * @public
 */
export interface CreateTransformerRequest {
  /**
   * <p>Specifies the name of the transformer, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
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
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  transformerArn: string | undefined;

  /**
   * <p>Returns the name of the transformer, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteTransformerRequest {
  /**
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerRequest {
  /**
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerResponse {
  /**
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  transformerArn: string | undefined;

  /**
   * <p>Returns the name of the transformer, used to identify it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the transformer was modified.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListTransformersRequest {
  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Specifies the number of items to return for the API response.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Contains the details for a transformer object. A transformer
 *    describes how to process the incoming EDI documents and extract the necessary
 *    information to the output file.</p>
 * @public
 */
export interface TransformerSummary {
  /**
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Returns the descriptive name for the transformer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;

  /**
   * <p>Returns a timestamp indicating when the transformer was created. For example,
   *          <code>2023-07-20T19:58:44.624Z</code>.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp representing the date and time for the most recent change for the transformer object.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface ListTransformersResponse {
  /**
   * <p>Returns an array of one or more transformer objects.</p>
   *          <p>For each transformer, a <code>TransformerSummary</code> object is returned.
   *          The <code>TransformerSummary</code> contains all the details for a specific transformer.</p>
   * @public
   */
  transformers: TransformerSummary[] | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateTransformerRequest {
  /**
   * <p>Specifies the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Specify a new name for the transformer, if you want to update it.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat;

  /**
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate?: string;

  /**
   * <p>Specifies the transformer's status. You can update the state of the transformer, from <code>active</code> to <code>inactive</code>, or <code>inactive</code> to <code>active</code>.</p>
   * @public
   */
  status?: TransformerStatus;

  /**
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType;

  /**
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;
}

/**
 * @public
 */
export interface UpdateTransformerResponse {
  /**
   * <p>Returns the system-assigned unique identifier for the transformer.</p>
   * @public
   */
  transformerId: string | undefined;

  /**
   * <p>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  transformerArn: string | undefined;

  /**
   * <p>Returns the name of the transformer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the transformer was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
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
