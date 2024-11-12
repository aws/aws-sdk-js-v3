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
 * @public
 * @enum
 */
export const CapabilityDirection = {
  INBOUND: "INBOUND",
  OUTBOUND: "OUTBOUND",
} as const;

/**
 * @public
 */
export type CapabilityDirection = (typeof CapabilityDirection)[keyof typeof CapabilityDirection];

/**
 * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File
 *          locations in Amazon S3 are identified using a combination of the bucket and key.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>Specifies the name of the Amazon S3 bucket.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key for the file location.</p>
   * @public
   */
  key?: string | undefined;
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
  transactionSet?: X12TransactionSet | undefined;

  /**
   * <p>Returns the version to use for the specified X12 transaction set.</p>
   * @public
   */
  version?: X12Version | undefined;
}

/**
 * <p>Specifies the details for the EDI standard that is being used for the transformer.
 *          Currently, only X12 is supported. X12 is a set of standards and corresponding messages
 *          that define specific business documents.</p>
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
   * <p>Specifies whether this is capability is for inbound or outbound transformations.</p>
   * @public
   */
  capabilityDirection?: CapabilityDirection | undefined;

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
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
  instructionsDocuments?: S3Location[] | undefined;

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
  retryAfterSeconds?: number | undefined;

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
  retryAfterSeconds?: number | undefined;

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
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the capability was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of capabilities to return.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  modifiedAt?: Date | undefined;
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
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>Specifies a structure that contains the details for a capability.</p>
   * @public
   */
  configuration?: CapabilityConfiguration | undefined;

  /**
   * <p>Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.</p>
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;
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
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the capability.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the capability was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const MappingType = {
  JSONATA: "JSONATA",
  XSLT: "XSLT",
} as const;

/**
 * @public
 */
export type MappingType = (typeof MappingType)[keyof typeof MappingType];

/**
 * <p>A data structure that contains the information to use when generating a mapping template.</p>
 * @public
 */
export type TemplateDetails = TemplateDetails.X12Member | TemplateDetails.$UnknownMember;

/**
 * @public
 */
export namespace TemplateDetails {
  /**
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p>
   *          <note>
   *             <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p>
   *          </note>
   * @public
   */
  export interface X12Member {
    x12: X12Details;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x12?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TemplateDetails, visitor: Visitor<T>): T => {
    if (value.x12 !== undefined) return visitor.x12(value.x12);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateStarterMappingTemplateRequest {
  /**
   * <p>Specify the location of the sample EDI file that is used to generate the mapping template.</p>
   * @public
   */
  outputSampleLocation?: S3Location | undefined;

  /**
   * <p>Specify the format for the mapping template: either JSONATA or XSLT.</p>
   * @public
   */
  mappingType: MappingType | undefined;

  /**
   * <p>
   *          Describes the details needed for generating the template. Specify the X12 transaction set and version for which the template is used:
   *          currently, we only support X12.
   *       </p>
   * @public
   */
  templateDetails: TemplateDetails | undefined;
}

/**
 * @public
 */
export interface CreateStarterMappingTemplateResponse {
  /**
   * <p>Returns a string that represents the mapping template.</p>
   * @public
   */
  mappingTemplate: string | undefined;
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
  outputFiles?: S3Location[] | undefined;

  /**
   * <p>Returns an optional error message, which gets populated when the job is not run
   *          successfully.</p>
   * @public
   */
  message?: string | undefined;
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
  Tags?: Tag[] | undefined;
}

/**
 * <p>In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header.
 *          The delimiters are part of the message's syntax and divide up its different elements.</p>
 * @public
 */
export interface X12Delimiters {
  /**
   * <p>The component, or sub-element, separator. The default value is <code>:</code> (colon).</p>
   * @public
   */
  componentSeparator?: string | undefined;

  /**
   * <p>The data element separator. The default value is <code>*</code> (asterisk).</p>
   * @public
   */
  dataElementSeparator?: string | undefined;

  /**
   * <p>The segment terminator. The default value is <code>~</code> (tilde).</p>
   * @public
   */
  segmentTerminator?: string | undefined;
}

/**
 * <p>Part of the X12 message structure. These are the functional group headers for the X12 EDI object.</p>
 * @public
 */
export interface X12FunctionalGroupHeaders {
  /**
   * <p>A value representing the code used to identify the party transmitting a message, at position GS-02.</p>
   * @public
   */
  applicationSenderCode?: string | undefined;

  /**
   * <p>A value representing the code used to identify the party receiving a message, at position GS-03.</p>
   * @public
   */
  applicationReceiverCode?: string | undefined;

  /**
   * <p>A code that identifies the issuer of the standard, at position GS-07.</p>
   * @public
   */
  responsibleAgencyCode?: string | undefined;
}

/**
 * <p>In X12, the Interchange Control Header is the first segment of an EDI document and is
 *          part of the Interchange Envelope. It contains information about the sender and receiver,
 *          the date and time of transmission, and the X12 version being used. It also includes
 *          delivery information, such as the sender and receiver IDs.</p>
 * @public
 */
export interface X12InterchangeControlHeaders {
  /**
   * <p>Located at position ISA-05 in the header. Qualifier for the sender ID. Together, the ID and qualifier uniquely identify the sending trading partner.</p>
   * @public
   */
  senderIdQualifier?: string | undefined;

  /**
   * <p>Located at position ISA-06 in the header. This value (along with the <code>senderIdQualifier</code>) identifies the sender of the interchange. </p>
   * @public
   */
  senderId?: string | undefined;

  /**
   * <p>Located at position ISA-07 in the header. Qualifier for the receiver ID. Together, the ID and qualifier uniquely identify the receiving trading partner.</p>
   * @public
   */
  receiverIdQualifier?: string | undefined;

  /**
   * <p>Located at position ISA-08 in the header. This value (along with the <code>receiverIdQualifier</code>) identifies the intended recipient of the interchange. </p>
   * @public
   */
  receiverId?: string | undefined;

  /**
   * <p>Located at position ISA-11 in the header. This string makes it easier when you need to group similar adjacent element values together without using extra segments.</p>
   *          <note>
   *             <p>This parameter is only honored for version greater than 401 (<code>VERSION_4010</code> and higher).</p>
   *             <p>For versions less than 401, this field is called <a href="https://www.stedi.com/edi/x12-004010/segment/ISA#ISA-11">StandardsId</a>, in which case our service
   *             sets the value to <code>U</code>.</p>
   *          </note>
   * @public
   */
  repetitionSeparator?: string | undefined;

  /**
   * <p>Located at position ISA-14 in the header. The value "1" indicates that the sender is requesting an interchange acknowledgment at receipt of the interchange. The value "0" is used otherwise.</p>
   * @public
   */
  acknowledgmentRequestedCode?: string | undefined;

  /**
   * <p>Located at position ISA-15 in the header. Specifies how this interchange is being used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>T</code> indicates this interchange is for testing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>P</code> indicates this interchange is for production.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>I</code> indicates this interchange is informational.</p>
   *             </li>
   *          </ul>
   * @public
   */
  usageIndicatorCode?: string | undefined;
}

/**
 * <p>A structure containing the details for an outbound EDI object.</p>
 * @public
 */
export interface X12OutboundEdiHeaders {
  /**
   * <p>In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header.</p>
   * @public
   */
  interchangeControlHeaders?: X12InterchangeControlHeaders | undefined;

  /**
   * <p>The functional group headers for the X12 object.</p>
   * @public
   */
  functionalGroupHeaders?: X12FunctionalGroupHeaders | undefined;

  /**
   * <p>The delimiters, for example semicolon (<code>;</code>), that separates sections of the headers for the X12 object.</p>
   * @public
   */
  delimiters?: X12Delimiters | undefined;

  /**
   * <p>Specifies whether or not to validate the EDI for this X12 object: <code>TRUE</code> or <code>FALSE</code>.</p>
   * @public
   */
  validateEdi?: boolean | undefined;
}

/**
 * <p>A wrapper structure for an X12 definition object.</p>
 *          <p>the X12 envelope ensures the integrity of the data and the efficiency of the information exchange. The X12 message structure has hierarchical levels. From highest to the lowest, they are:</p>
 *          <ul>
 *             <li>
 *                <p>Interchange Envelope</p>
 *             </li>
 *             <li>
 *                <p>Functional Group</p>
 *             </li>
 *             <li>
 *                <p>Transaction Set</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface X12Envelope {
  /**
   * <p>A container for the X12 outbound EDI headers.</p>
   * @public
   */
  common?: X12OutboundEdiHeaders | undefined;
}

/**
 * <p>A container for outbound EDI options.</p>
 * @public
 */
export type OutboundEdiOptions = OutboundEdiOptions.X12Member | OutboundEdiOptions.$UnknownMember;

/**
 * @public
 */
export namespace OutboundEdiOptions {
  /**
   * <p>A structure that contains an X12 envelope structure.</p>
   * @public
   */
  export interface X12Member {
    x12: X12Envelope;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x12?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x12: (value: X12Envelope) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OutboundEdiOptions, visitor: Visitor<T>): T => {
    if (value.x12 !== undefined) return visitor.x12(value.x12);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains the details for an Outbound EDI capability.</p>
 * @public
 */
export interface CapabilityOptions {
  /**
   * <p>A structure that contains the outbound EDI options.</p>
   * @public
   */
  outboundEdi?: OutboundEdiOptions | undefined;
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
  phone?: string | undefined;

  /**
   * <p>Specifies a list of the capabilities associated with this partnership.</p>
   * @public
   */
  capabilities: string[] | undefined;

  /**
   * <p>Specify the structure that contains the details for the associated capabilities.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
  name?: string | undefined;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string | undefined;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>Returns the structure that contains the details for the associated capabilities.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string | undefined;

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
  name?: string | undefined;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string | undefined;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>Contains the details for an Outbound EDI capability.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * <p>Returns the unique identifier for the partner for this partnership.</p>
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnershipsRequest {
  /**
   * <p>Specifies the unique, system-generated identifier for the profile connected to this partnership.</p>
   * @public
   */
  profileId?: string | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output.
   *    You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of capabilities to return.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  name?: string | undefined;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>Contains the details for an Outbound EDI capability.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the partnership.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>List of the capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>To update, specify the structure that contains the details for the associated capabilities.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;
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
  name?: string | undefined;

  /**
   * <p>Returns the email address associated with this trading partner.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>Returns the phone number associated with the partnership.</p>
   * @public
   */
  phone?: string | undefined;

  /**
   * <p>Returns one or more capabilities associated with this partnership.</p>
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * <p>Returns the structure that contains the details for the associated capabilities.</p>
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * <p>Returns the unique, system-generated identifier for a trading partner.</p>
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  email?: string | undefined;

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
  clientToken?: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
  email?: string | undefined;

  /**
   * <p>Returns whether or not logging is turned on for this profile.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string | undefined;

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
  email?: string | undefined;

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
  logging?: Logging | undefined;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of profiles to return.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  logging?: Logging | undefined;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Returns the timestamp for creation date and time of the profile.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns the timestamp that identifies the most recent date and time that the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>Specifies the email address associated with this customer profile.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>Specifies the phone number associated with the profile.</p>
   * @public
   */
  phone?: string | undefined;

  /**
   * <p>Specifies the name for the business associated with this profile.</p>
   * @public
   */
  businessName?: string | undefined;
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
  email?: string | undefined;

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
  logging?: Logging | undefined;

  /**
   * <p>Returns the name of the logging group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the profile.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the profile was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;
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
  clientToken?: string | undefined;
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
export const ConversionSourceFormat = {
  JSON: "JSON",
  XML: "XML",
} as const;

/**
 * @public
 */
export type ConversionSourceFormat = (typeof ConversionSourceFormat)[keyof typeof ConversionSourceFormat];

/**
 * <p>The input file to use for an outbound transformation.</p>
 * @public
 */
export type InputFileSource = InputFileSource.FileContentMember | InputFileSource.$UnknownMember;

/**
 * @public
 */
export namespace InputFileSource {
  /**
   * <p>Specify the input contents, as a string, for the source of an outbound transformation.</p>
   * @public
   */
  export interface FileContentMember {
    fileContent: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fileContent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileContent: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InputFileSource, visitor: Visitor<T>): T => {
    if (value.fileContent !== undefined) return visitor.fileContent(value.fileContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Describes the input for an outbound transformation. </p>
 * @public
 */
export interface ConversionSource {
  /**
   * <p>The format for the input file: either JSON or XML.</p>
   * @public
   */
  fileFormat: ConversionSourceFormat | undefined;

  /**
   * File to be converted
   * @public
   */
  inputFile: InputFileSource | undefined;
}

/**
 * @public
 * @enum
 */
export const ConversionTargetFormat = {
  X12: "X12",
} as const;

/**
 * @public
 */
export type ConversionTargetFormat = (typeof ConversionTargetFormat)[keyof typeof ConversionTargetFormat];

/**
 * <p>Contains a structure describing the X12 details for the conversion target.</p>
 * @public
 */
export type ConversionTargetFormatDetails =
  | ConversionTargetFormatDetails.X12Member
  | ConversionTargetFormatDetails.$UnknownMember;

/**
 * @public
 */
export namespace ConversionTargetFormatDetails {
  /**
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p>
   *          <note>
   *             <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p>
   *          </note>
   * @public
   */
  export interface X12Member {
    x12: X12Details;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x12?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConversionTargetFormatDetails, visitor: Visitor<T>): T => {
    if (value.x12 !== undefined) return visitor.x12(value.x12);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Container for the location of a sample file used for outbound transformations.</p>
 * @public
 */
export type OutputSampleFileSource = OutputSampleFileSource.FileLocationMember | OutputSampleFileSource.$UnknownMember;

/**
 * @public
 */
export namespace OutputSampleFileSource {
  /**
   * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File
   *          locations in Amazon S3 are identified using a combination of the bucket and key.</p>
   * @public
   */
  export interface FileLocationMember {
    fileLocation: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fileLocation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileLocation: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OutputSampleFileSource, visitor: Visitor<T>): T => {
    if (value.fileLocation !== undefined) return visitor.fileLocation(value.fileLocation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Provide a sample of what the output of the transformation should look like.</p>
 * @public
 */
export interface ConversionTarget {
  /**
   * <p>Currently, only X12 format is supported.</p>
   * @public
   */
  fileFormat: ConversionTargetFormat | undefined;

  /**
   * <p>A structure that contains the formatting details for the conversion target.</p>
   * @public
   */
  formatDetails?: ConversionTargetFormatDetails | undefined;

  /**
   * Customer uses this to provide a sample on what should file look like after conversion
   * X12 EDI use case around this would be discovering the file syntax
   * @public
   */
  outputSampleFile?: OutputSampleFileSource | undefined;
}

/**
 * @public
 */
export interface TestConversionRequest {
  /**
   * <p>Specify the source file for an outbound EDI request.</p>
   * @public
   */
  source: ConversionSource | undefined;

  /**
   * <p>Specify the format (X12 is the only currently supported format), and other details for the conversion target.</p>
   * @public
   */
  target: ConversionTarget | undefined;
}

/**
 * @public
 */
export interface TestConversionResponse {
  /**
   * <p>Returns the converted file content.</p>
   * @public
   */
  convertedFileContent: string | undefined;

  /**
   * <p>Returns an array of strings, each containing a message that Amazon Web Services B2B Data Interchange generates during the conversion.</p>
   * @public
   */
  validationMessages?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormat = {
  JSON: "JSON",
  NOT_USED: "NOT_USED",
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
   *          <note>
   *             <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p>
   *          </note>
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
 * <p>A structure that contains the X12 transaction set and version.</p>
 * @public
 */
export type FormatOptions = FormatOptions.X12Member | FormatOptions.$UnknownMember;

/**
 * @public
 */
export namespace FormatOptions {
  /**
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p>
   *          <note>
   *             <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p>
   *          </note>
   * @public
   */
  export interface X12Member {
    x12: X12Details;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    x12?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FormatOptions, visitor: Visitor<T>): T => {
    if (value.x12 !== undefined) return visitor.x12(value.x12);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FromFormat = {
  X12: "X12",
} as const;

/**
 * @public
 */
export type FromFormat = (typeof FromFormat)[keyof typeof FromFormat];

/**
 * <p>Contains the input formatting options for an inbound transformer (takes an X12-formatted
 *          EDI document as input and converts it to JSON or XML.</p>
 * @public
 */
export interface InputConversion {
  /**
   * <p>The format for the transformer input: currently on <code>X12</code> is supported.</p>
   * @public
   */
  fromFormat: FromFormat | undefined;

  /**
   * <p>A structure that contains the formatting options for an inbound transformer.</p>
   * @public
   */
  formatOptions?: FormatOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const MappingTemplateLanguage = {
  JSONATA: "JSONATA",
  XSLT: "XSLT",
} as const;

/**
 * @public
 */
export type MappingTemplateLanguage = (typeof MappingTemplateLanguage)[keyof typeof MappingTemplateLanguage];

/**
 * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
 * @public
 */
export interface Mapping {
  /**
   * <p>The transformation language for the template, either XSLT or JSONATA.</p>
   * @public
   */
  templateLanguage: MappingTemplateLanguage | undefined;

  /**
   * <p>A string that represents the mapping template, in the transformation language specified in <code>templateLanguage</code>.</p>
   * @public
   */
  template?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ToFormat = {
  X12: "X12",
} as const;

/**
 * @public
 */
export type ToFormat = (typeof ToFormat)[keyof typeof ToFormat];

/**
 * <p>Contains the formatting options for an outbound transformer (takes JSON or XML as input and converts it to an EDI document (currently only X12 format is supported).</p>
 * @public
 */
export interface OutputConversion {
  /**
   * <p>The format for the output from an outbound transformer: only X12 is currently supported.</p>
   * @public
   */
  toFormat: ToFormat | undefined;

  /**
   * <p>A structure that contains the X12 transaction set and version for the transformer output.</p>
   * @public
   */
  formatOptions?: FormatOptions | undefined;
}

/**
 * <p>An array of the Amazon S3 keys used to identify the location for your sample documents.</p>
 * @public
 */
export interface SampleDocumentKeys {
  /**
   * <p>An array of keys for your input sample documents.</p>
   * @public
   */
  input?: string | undefined;

  /**
   * <p>An array of keys for your output sample documents.</p>
   * @public
   */
  output?: string | undefined;
}

/**
 * <p>Describes a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
 * @public
 */
export interface SampleDocuments {
  /**
   * <p>Contains the Amazon S3 bucket that is used to hold your sample documents.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>Contains an array of the Amazon S3 keys used to identify the location for your sample documents.</p>
   * @public
   */
  keys: SampleDocumentKeys[] | undefined;
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
   * <p>Reserved for future use.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *          <note>
   *             <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p>
   *          </note>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Specify  the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Specify the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>A structure that contains the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Specify a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * @deprecated
   *
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Returns the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>Returns the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp for last time the transformer was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * @deprecated
   *
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Returns the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>Returns the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Specifies the number of items to return for the API response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains the details for a transformer object. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively,
 *     a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</p>
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
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

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
  modifiedAt?: Date | undefined;

  /**
   * @deprecated
   *
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Returns a structure that contains the format options for the transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>Returns the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
  nextToken?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>Specifies the transformer's status. You can update the state of the transformer, from <code>active</code> to <code>inactive</code>, or <code>inactive</code> to <code>active</code>.</p>
   * @public
   */
  status?: TransformerStatus | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *          <note>
   *             <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p>
   *          </note>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>To update, specify the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Specify the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>To update, specify the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Specify a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
   * <p>Returns the state of the newly created transformer. The transformer can be either
   *             <code>active</code> or <code>inactive</code>. For the transformer to be used in a
   *          capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

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

  /**
   * @deprecated
   *
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * @deprecated
   *
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * @deprecated
   *
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Returns the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * <p>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</p>
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * <p>Returns the <code>OutputConversion</code> object, which contains the format options for the outbound transformation.</p>
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * <p>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</p>
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
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
  ...(obj.capabilityOptions && { capabilityOptions: obj.capabilityOptions }),
});

/**
 * @internal
 */
export const CreatePartnershipResponseFilterSensitiveLog = (obj: CreatePartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
  ...(obj.capabilityOptions && { capabilityOptions: obj.capabilityOptions }),
});

/**
 * @internal
 */
export const GetPartnershipResponseFilterSensitiveLog = (obj: GetPartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
  ...(obj.capabilityOptions && { capabilityOptions: obj.capabilityOptions }),
});

/**
 * @internal
 */
export const UpdatePartnershipResponseFilterSensitiveLog = (obj: UpdatePartnershipResponse): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.phone && { phone: SENSITIVE_STRING }),
  ...(obj.capabilityOptions && { capabilityOptions: obj.capabilityOptions }),
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
