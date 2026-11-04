// smithy-typescript generated code
import type {
  CapabilityDirection,
  CapabilityType,
  ConversionSourceFormat,
  ConversionTargetFormat,
  ElementRequirement,
  FileFormat,
  FromFormat,
  LineTerminator,
  Logging,
  MappingTemplateLanguage,
  MappingType,
  ToFormat,
  TransformerJobStatus,
  TransformerStatus,
  WrapFormat,
  X12FunctionalAcknowledgment,
  X12GS05TimeFormat,
  X12SplitBy,
  X12TechnicalAcknowledgment,
  X12TransactionSet,
  X12Version,
} from "./enums";

/**
 * Contains options for splitting X12 EDI files into smaller units. This is useful for processing large EDI files more efficiently.
 *
 * @public
 */
export interface X12SplitOptions {
  /**
   * Specifies the method used to split X12 EDI files. Valid values include `TRANSACTION` (split by individual transaction sets), or `NONE` (no splitting).
   *
   * @public
   */
  splitBy: X12SplitBy | undefined;
}

/**
 * Defines a validation rule that modifies the allowed code values for a specific X12 element. This rule allows you to add or remove valid codes from an element's standard code list, providing flexibility to accommodate trading partner-specific requirements or industry variations. You can specify codes to add to expand the allowed values beyond the X12 standard, or codes to remove to restrict the allowed values for stricter validation.
 *
 * @public
 */
export interface X12CodeListValidationRule {
  /**
   * Specifies the four-digit element ID to which the code list modifications apply. This identifies which X12 element will have its allowed code values modified.
   *
   * @public
   */
  elementId: string | undefined;

  /**
   * Specifies a list of code values to add to the element's allowed values. These codes will be considered valid for the specified element in addition to the standard codes defined by the X12 specification.
   *
   * @public
   */
  codesToAdd?: string[] | undefined;

  /**
   * Specifies a list of code values to remove from the element's allowed values. These codes will be considered invalid for the specified element, even if they are part of the standard codes defined by the X12 specification.
   *
   * @public
   */
  codesToRemove?: string[] | undefined;
}

/**
 * Defines a validation rule that specifies custom length constraints for a specific X12 element. This rule allows you to override the standard minimum and maximum length requirements for an element, enabling validation of trading partner-specific length requirements that may differ from the X12 specification. Both minimum and maximum length values must be specified and must be between 1 and 200 characters.
 *
 * @public
 */
export interface X12ElementLengthValidationRule {
  /**
   * Specifies the four-digit element ID to which the length constraints will be applied. This identifies which X12 element will have its length requirements modified.
   *
   * @public
   */
  elementId: string | undefined;

  /**
   * Specifies the maximum allowed length for the identified element. This value must be between 1 and 200 characters and defines the upper limit for the element's content length.
   *
   * @public
   */
  maxLength: number | undefined;

  /**
   * Specifies the minimum required length for the identified element. This value must be between 1 and 200 characters and defines the lower limit for the element's content length.
   *
   * @public
   */
  minLength: number | undefined;
}

/**
 * Defines a validation rule that modifies the requirement status of a specific X12 element within a segment. This rule allows you to make optional elements mandatory or mandatory elements optional, providing flexibility to accommodate different trading partner requirements and business rules. The rule targets a specific element position within a segment and sets its requirement status to either OPTIONAL or MANDATORY.
 *
 * @public
 */
export interface X12ElementRequirementValidationRule {
  /**
   * Specifies the position of the element within an X12 segment for which the requirement status will be modified. The format follows the pattern of segment identifier followed by element position (e.g., "ST-01" for the first element of the ST segment).
   *
   * @public
   */
  elementPosition: string | undefined;

  /**
   * Specifies the requirement status for the element at the specified position. Valid values are OPTIONAL (the element may be omitted) or MANDATORY (the element must be present).
   *
   * @public
   */
  requirement: ElementRequirement | undefined;
}

/**
 * Represents a single validation rule that can be applied during X12 EDI processing. This is a union type that can contain one of several specific validation rule types: code list validation rules for modifying allowed element codes, element length validation rules for enforcing custom length constraints, or element requirement validation rules for changing mandatory/optional status. Each validation rule targets specific aspects of EDI document validation to ensure compliance with trading partner requirements and business rules.
 *
 * @public
 */
export type X12ValidationRule =
  | X12ValidationRule.CodeListValidationRuleMember
  | X12ValidationRule.ElementLengthValidationRuleMember
  | X12ValidationRule.ElementRequirementValidationRuleMember
  | X12ValidationRule.$UnknownMember;

/**
 * @public
 */
export namespace X12ValidationRule {
  /**
   * Specifies a code list validation rule that modifies the allowed code values for a specific X12 element. This rule enables you to customize which codes are considered valid for an element, allowing for trading partner-specific code requirements.
   *
   * @public
   */
  export interface CodeListValidationRuleMember {
    codeListValidationRule: X12CodeListValidationRule;
    elementLengthValidationRule?: never;
    elementRequirementValidationRule?: never;
    $unknown?: never;
  }

  /**
   * Specifies an element length validation rule that defines custom length constraints for a specific X12 element. This rule allows you to enforce minimum and maximum length requirements that may differ from the standard X12 specification.
   *
   * @public
   */
  export interface ElementLengthValidationRuleMember {
    codeListValidationRule?: never;
    elementLengthValidationRule: X12ElementLengthValidationRule;
    elementRequirementValidationRule?: never;
    $unknown?: never;
  }

  /**
   * Specifies an element requirement validation rule that modifies whether a specific X12 element is required or optional within a segment. This rule provides flexibility to accommodate different trading partner requirements for element presence.
   *
   * @public
   */
  export interface ElementRequirementValidationRuleMember {
    codeListValidationRule?: never;
    elementLengthValidationRule?: never;
    elementRequirementValidationRule: X12ElementRequirementValidationRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    codeListValidationRule?: never;
    elementLengthValidationRule?: never;
    elementRequirementValidationRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    codeListValidationRule: (value: X12CodeListValidationRule) => T;
    elementLengthValidationRule: (value: X12ElementLengthValidationRule) => T;
    elementRequirementValidationRule: (value: X12ElementRequirementValidationRule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration options for X12 EDI validation. This structure allows you to specify custom validation rules that will be applied during EDI document processing, including element length constraints, code list modifications, and element requirement changes. These validation options provide flexibility to accommodate trading partner-specific requirements while maintaining EDI compliance. The validation rules are applied in addition to standard X12 validation to ensure documents meet both standard and custom requirements.
 *
 * @public
 */
export interface X12ValidationOptions {
  /**
   * Specifies a list of validation rules to apply during EDI document processing. These rules can include code list modifications, element length constraints, and element requirement changes.
   *
   * @public
   */
  validationRules?: X12ValidationRule[] | undefined;
}

/**
 * Contains advanced options specific to X12 EDI processing, such as splitting large X12 files into smaller units.
 *
 * @public
 */
export interface X12AdvancedOptions {
  /**
   * Specifies options for splitting X12 EDI files. These options control how large X12 files are divided into smaller, more manageable units.
   *
   * @public
   */
  splitOptions?: X12SplitOptions | undefined;

  /**
   * Specifies validation options for X12 EDI processing. These options control how validation rules are applied during EDI document processing, including custom validation rules for element length constraints, code list validations, and element requirement checks.
   *
   * @public
   */
  validationOptions?: X12ValidationOptions | undefined;
}

/**
 * A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.
 *
 * @public
 */
export interface AdvancedOptions {
  /**
   * A structure that contains X12-specific advanced options, such as split options for processing X12 EDI files.
   *
   * @public
   */
  x12?: X12AdvancedOptions | undefined;
}

/**
 * Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.
 *
 * @public
 */
export interface S3Location {
  /**
   * Specifies the name of the Amazon S3 bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * Specifies the Amazon S3 key for the file location.
   *
   * @public
   */
  key?: string | undefined;
}

/**
 * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
 *
 * > **Note:** If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
 *
 * @public
 */
export interface X12Details {
  /**
   * Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.
   *
   * @public
   */
  transactionSet?: X12TransactionSet | undefined;

  /**
   * Returns the version to use for the specified X12 transaction set.
   *
   * @public
   */
  version?: X12Version | undefined;
}

/**
 * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
 *
 * @public
 */
export type EdiType =
  | EdiType.X12DetailsMember
  | EdiType.$UnknownMember;

/**
 * @public
 */
export namespace EdiType {
  /**
   * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x12Details: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the details for the EDI (electronic data interchange) transformation.
 *
 * @public
 */
export interface EdiConfiguration {
  /**
   * Specifies whether this is capability is for inbound or outbound transformations.
   *
   * @public
   */
  capabilityDirection?: CapabilityDirection | undefined;

  /**
   * Returns the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: EdiType | undefined;

  /**
   * Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an `S3Location` object.
   *
   * @public
   */
  inputLocation: S3Location | undefined;

  /**
   * Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an `S3Location` object.
   *
   * @public
   */
  outputLocation: S3Location | undefined;

  /**
   * Returns the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;
}

/**
 * A capability object. Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @public
 */
export type CapabilityConfiguration =
  | CapabilityConfiguration.EdiMember
  | CapabilityConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CapabilityConfiguration {
  /**
   * An EDI (electronic data interchange) configuration object.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    edi: (value: EdiConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to capabilities, partnerships, profiles and transformers. A tag key can take more than one value. For example, to group capabilities for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 *
 * @public
 */
export interface Tag {
  /**
   * Specifies the name assigned to the tag that you create.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Contains one or more values that you assigned to the key name that you create.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateCapabilityRequest {
  /**
   * Specifies the name of the capability, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * Specifies a structure that contains the details for a capability.
   *
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
   *
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCapabilityResponse {
  /**
   * Returns a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * Returns the name of the capability used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * Returns a structure that contains the details for a capability.
   *
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
   *
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * Returns a timestamp for creation date and time of the capability.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCapabilityRequest {
  /**
   * Specifies a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityRequest {
  /**
   * Specifies a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;
}

/**
 * @public
 */
export interface GetCapabilityResponse {
  /**
   * Returns a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * Returns the name of the capability, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * Returns a structure that contains the details for a capability.
   *
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
   *
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * Returns a timestamp for creation date and time of the capability.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the capability was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCapabilitiesRequest {
  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the maximum number of capabilities to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns the capability summary details. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @public
 */
export interface CapabilitySummary {
  /**
   * Returns a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;

  /**
   * The display name of the capability.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * Returns a timestamp for creation date and time of the capability.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp that identifies the most recent date and time that the capability was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCapabilitiesResponse {
  /**
   * Returns one or more capabilities associated with this partnership.
   *
   * @public
   */
  capabilities: CapabilitySummary[] | undefined;

  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapabilityRequest {
  /**
   * Specifies a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;

  /**
   * Specifies a new name for the capability, to replace the existing name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies a structure that contains the details for a capability.
   *
   * @public
   */
  configuration?: CapabilityConfiguration | undefined;

  /**
   * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
   *
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;
}

/**
 * @public
 */
export interface UpdateCapabilityResponse {
  /**
   * Returns a system-assigned unique identifier for the capability.
   *
   * @public
   */
  capabilityId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * Returns the name of the capability, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the type of the capability. Currently, only `edi` is supported.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * Returns a structure that contains the details for a capability.
   *
   * @public
   */
  configuration: CapabilityConfiguration | undefined;

  /**
   * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
   *
   * @public
   */
  instructionsDocuments?: S3Location[] | undefined;

  /**
   * Returns a timestamp for creation date and time of the capability.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the capability was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * A data structure that contains the information to use when generating a mapping template.
 *
 * @public
 */
export type TemplateDetails =
  | TemplateDetails.X12Member
  | TemplateDetails.$UnknownMember;

/**
 * @public
 */
export namespace TemplateDetails {
  /**
   * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
   *
   * > **Note:** If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateStarterMappingTemplateRequest {
  /**
   * Specify the location of the sample EDI file that is used to generate the mapping template.
   *
   * @public
   */
  outputSampleLocation?: S3Location | undefined;

  /**
   * Specify the format for the mapping template: either JSONATA or XSLT.
   *
   * @public
   */
  mappingType: MappingType | undefined;

  /**
   * Describes the details needed for generating the template. Specify the X12 transaction set and version for which the template is used: currently, we only support X12.
   *
   * @public
   */
  templateDetails: TemplateDetails | undefined;
}

/**
 * @public
 */
export interface CreateStarterMappingTemplateResponse {
  /**
   * Returns a string that represents the mapping template.
   *
   * @public
   */
  mappingTemplate: string | undefined;
}

/**
 * @public
 */
export interface GenerateMappingRequest {
  /**
   * Provide the contents of a sample X12 EDI file, either in JSON or XML format, to use as a starting point for the mapping.
   *
   * @public
   */
  inputFileContent: string | undefined;

  /**
   * Provide the contents of a sample X12 EDI file, either in JSON or XML format, to use as a target for the mapping.
   *
   * @public
   */
  outputFileContent: string | undefined;

  /**
   * Specify the mapping type: either `JSONATA` or `XSLT.`
   *
   * @public
   */
  mappingType: MappingType | undefined;
}

/**
 * @public
 */
export interface GenerateMappingResponse {
  /**
   * Returns a mapping template based on your inputs.
   *
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * Returns a percentage that estimates the accuracy of the generated mapping.
   *
   * @public
   */
  mappingAccuracy?: number | undefined;
}

/**
 * @public
 */
export interface GetTransformerJobRequest {
  /**
   * Specifies the unique, system-generated identifier for a transformer run.
   *
   * @public
   */
  transformerJobId: string | undefined;

  /**
   * Specifies the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerJobResponse {
  /**
   * Returns the current state of the transformer job, either `running`, `succeeded`, or `failed`.
   *
   * @public
   */
  status: TransformerJobStatus | undefined;

  /**
   * Returns the location for the output files. If the caller specified a directory for the output, then this contains the full path to the output file, including the file name generated by the service.
   *
   * @public
   */
  outputFiles?: S3Location[] | undefined;

  /**
   * Returns an optional error message, which gets populated when the job is not run successfully.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Returns the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains options for configuring X12 acknowledgments. These options control how functional and technical acknowledgments are handled.
 *
 * @public
 */
export interface X12AcknowledgmentOptions {
  /**
   * Specifies whether functional acknowledgments (997/999) should be generated for incoming X12 transactions. Valid values are `DO_NOT_GENERATE`, `GENERATE_ALL_SEGMENTS` and `GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP`.
   *
   * If you choose `GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP`, Amazon Web Services B2B Data Interchange skips the AK2_Loop when generating an acknowledgment document.
   *
   * @public
   */
  functionalAcknowledgment: X12FunctionalAcknowledgment | undefined;

  /**
   * Specifies whether technical acknowledgments (TA1) should be generated for incoming X12 interchanges. Valid values are `DO_NOT_GENERATE` and `GENERATE_ALL_SEGMENTS` and.
   *
   * @public
   */
  technicalAcknowledgment: X12TechnicalAcknowledgment | undefined;
}

/**
 * Contains options specific to processing inbound X12 EDI files.
 *
 * @public
 */
export interface X12InboundEdiOptions {
  /**
   * Specifies acknowledgment options for inbound X12 EDI files. These options control how functional and technical acknowledgments are handled.
   *
   * @public
   */
  acknowledgmentOptions?: X12AcknowledgmentOptions | undefined;
}

/**
 * Contains options for processing inbound EDI files. These options allow for customizing how incoming EDI documents are processed.
 *
 * @public
 */
export interface InboundEdiOptions {
  /**
   * A structure that contains X12-specific options for processing inbound X12 EDI files.
   *
   * @public
   */
  x12?: X12InboundEdiOptions | undefined;
}

/**
 * Contains configuration for X12 control numbers used in X12 EDI generation. Control numbers are used to uniquely identify interchanges, functional groups, and transaction sets.
 *
 * @public
 */
export interface X12ControlNumbers {
  /**
   * Specifies the starting interchange control number (ISA13) to use for X12 EDI generation. This number is incremented for each new interchange. For the ISA (interchange) envelope, Amazon Web Services B2B Data Interchange generates an interchange control number that is unique for the ISA05 and ISA06 (sender) &amp; ISA07 and ISA08 (receiver) combination.
   *
   * @public
   */
  startingInterchangeControlNumber?: number | undefined;

  /**
   * Specifies the starting functional group control number (GS06) to use for X12 EDI generation. This number is incremented for each new functional group. For the GS (functional group) envelope, Amazon Web Services B2B Data Interchange generates a functional group control number that is unique to the sender ID, receiver ID, and functional identifier code combination.
   *
   * @public
   */
  startingFunctionalGroupControlNumber?: number | undefined;

  /**
   * Specifies the starting transaction set control number (ST02) to use for X12 EDI generation. This number is incremented for each new transaction set.
   *
   * @public
   */
  startingTransactionSetControlNumber?: number | undefined;
}

/**
 * In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header. The delimiters are part of the message's syntax and divide up its different elements.
 *
 * @public
 */
export interface X12Delimiters {
  /**
   * The component, or sub-element, separator. The default value is `:` (colon).
   *
   * @public
   */
  componentSeparator?: string | undefined;

  /**
   * The data element separator. The default value is `*` (asterisk).
   *
   * @public
   */
  dataElementSeparator?: string | undefined;

  /**
   * The segment terminator. The default value is `~` (tilde).
   *
   * @public
   */
  segmentTerminator?: string | undefined;
}

/**
 * Part of the X12 message structure. These are the functional group headers for the X12 EDI object.
 *
 * @public
 */
export interface X12FunctionalGroupHeaders {
  /**
   * A value representing the code used to identify the party transmitting a message, at position GS-02.
   *
   * @public
   */
  applicationSenderCode?: string | undefined;

  /**
   * A value representing the code used to identify the party receiving a message, at position GS-03.
   *
   * @public
   */
  applicationReceiverCode?: string | undefined;

  /**
   * A code that identifies the issuer of the standard, at position GS-07.
   *
   * @public
   */
  responsibleAgencyCode?: string | undefined;
}

/**
 * In X12, the Interchange Control Header is the first segment of an EDI document and is part of the Interchange Envelope. It contains information about the sender and receiver, the date and time of transmission, and the X12 version being used. It also includes delivery information, such as the sender and receiver IDs.
 *
 * @public
 */
export interface X12InterchangeControlHeaders {
  /**
   * Located at position ISA-05 in the header. Qualifier for the sender ID. Together, the ID and qualifier uniquely identify the sending trading partner.
   *
   * @public
   */
  senderIdQualifier?: string | undefined;

  /**
   * Located at position ISA-06 in the header. This value (along with the `senderIdQualifier`) identifies the sender of the interchange.
   *
   * @public
   */
  senderId?: string | undefined;

  /**
   * Located at position ISA-07 in the header. Qualifier for the receiver ID. Together, the ID and qualifier uniquely identify the receiving trading partner.
   *
   * @public
   */
  receiverIdQualifier?: string | undefined;

  /**
   * Located at position ISA-08 in the header. This value (along with the `receiverIdQualifier`) identifies the intended recipient of the interchange.
   *
   * @public
   */
  receiverId?: string | undefined;

  /**
   * Located at position ISA-11 in the header. This string makes it easier when you need to group similar adjacent element values together without using extra segments.
   *
   * > **Note:**
   * >
   * > This parameter is only honored for version greater than 401 (`VERSION_4010` and higher).
   * >
   * > For versions less than 401, this field is called [StandardsId](https://www.stedi.com/edi/x12-004010/segment/ISA#ISA-11), in which case our service sets the value to `U`.
   *
   * @public
   */
  repetitionSeparator?: string | undefined;

  /**
   * Located at position ISA-14 in the header. The value "1" indicates that the sender is requesting an interchange acknowledgment at receipt of the interchange. The value "0" is used otherwise.
   *
   * @public
   */
  acknowledgmentRequestedCode?: string | undefined;

  /**
   * Located at position ISA-15 in the header. Specifies how this interchange is being used:
   *
   * - `T` indicates this interchange is for testing.
   * - `P` indicates this interchange is for production.
   * - `I` indicates this interchange is informational.
   *
   * @public
   */
  usageIndicatorCode?: string | undefined;
}

/**
 * A structure containing the details for an outbound EDI object.
 *
 * @public
 */
export interface X12OutboundEdiHeaders {
  /**
   * In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header.
   *
   * @public
   */
  interchangeControlHeaders?: X12InterchangeControlHeaders | undefined;

  /**
   * The functional group headers for the X12 object.
   *
   * @public
   */
  functionalGroupHeaders?: X12FunctionalGroupHeaders | undefined;

  /**
   * The delimiters, for example semicolon (`;`), that separates sections of the headers for the X12 object.
   *
   * @public
   */
  delimiters?: X12Delimiters | undefined;

  /**
   * Specifies whether or not to validate the EDI for this X12 object: `TRUE` or `FALSE`. When enabled, this performs both standard EDI validation and applies any configured custom validation rules including element length constraints, code list validations, and element requirement checks. Validation results are returned in the response validation messages.
   *
   * @public
   */
  validateEdi?: boolean | undefined;

  /**
   * Specifies control number configuration for outbound X12 EDI headers. These settings determine the starting values for interchange, functional group, and transaction set control numbers.
   *
   * @public
   */
  controlNumbers?: X12ControlNumbers | undefined;

  /**
   * Specifies the time format in the GS05 element (time) of the functional group header. The following formats use 24-hour clock time:
   *
   * - `HHMM` - Hours and minutes
   * - `HHMMSS` - Hours, minutes, and seconds
   * - `HHMMSSDD` - Hours, minutes, seconds, and decimal seconds
   *
   * Where:
   *
   * - `HH` - Hours (00-23)
   * - `MM` - Minutes (00-59)
   * - `SS` - Seconds (00-59)
   * - `DD` - Hundredths of seconds (00-99)
   *
   * @public
   */
  gs05TimeFormat?: X12GS05TimeFormat | undefined;
}

/**
 * Contains options for wrapping (line folding) in X12 EDI files. Wrapping controls how long lines are handled in the EDI output.
 *
 * @public
 */
export interface WrapOptions {
  /**
   * Specifies the method used for wrapping lines in the EDI output. Valid values:
   *
   * - `SEGMENT`: Wraps by segment.
   * - `ONE_LINE`: Indicates that the entire content is on a single line.
   *
   *   > **Note:** When you specify `ONE_LINE`, do not provide either the line length nor the line terminator value.
   * - `LINE_LENGTH`: Wraps by character count, as specified by `lineLength` value.
   *
   * @public
   */
  wrapBy: WrapFormat | undefined;

  /**
   * Specifies the character sequence used to terminate lines when wrapping. Valid values:
   *
   * - `CRLF`: carriage return and line feed
   * - `LF`: line feed)
   * - `CR`: carriage return
   *
   * @public
   */
  lineTerminator?: LineTerminator | undefined;

  /**
   * Specifies the maximum length of a line before wrapping occurs. This value is used when `wrapBy` is set to `LINE_LENGTH`.
   *
   * @public
   */
  lineLength?: number | undefined;
}

/**
 * A wrapper structure for an X12 definition object.
 *
 * the X12 envelope ensures the integrity of the data and the efficiency of the information exchange. The X12 message structure has hierarchical levels. From highest to the lowest, they are:
 *
 * - Interchange Envelope
 * - Functional Group
 * - Transaction Set
 *
 * @public
 */
export interface X12Envelope {
  /**
   * A container for the X12 outbound EDI headers.
   *
   * @public
   */
  common?: X12OutboundEdiHeaders | undefined;

  /**
   * Contains options for wrapping (line folding) in X12 EDI files. Wrapping controls how long lines are handled in the EDI output.
   *
   * @public
   */
  wrapOptions?: WrapOptions | undefined;
}

/**
 * A container for outbound EDI options.
 *
 * @public
 */
export type OutboundEdiOptions =
  | OutboundEdiOptions.X12Member
  | OutboundEdiOptions.$UnknownMember;

/**
 * @public
 */
export namespace OutboundEdiOptions {
  /**
   * A structure that contains an X12 envelope structure.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x12: (value: X12Envelope) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the details for an Outbound EDI capability.
 *
 * @public
 */
export interface CapabilityOptions {
  /**
   * A structure that contains the outbound EDI options.
   *
   * @public
   */
  outboundEdi?: OutboundEdiOptions | undefined;

  /**
   * A structure that contains the inbound EDI options for the capability.
   *
   * @public
   */
  inboundEdi?: InboundEdiOptions | undefined;
}

/**
 * @public
 */
export interface CreatePartnershipRequest {
  /**
   * Specifies the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Specifies a descriptive name for the partnership.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the email address associated with this trading partner.
   *
   * @public
   */
  email: string | undefined;

  /**
   * Specifies the phone number associated with the partnership.
   *
   * @public
   */
  phone?: string | undefined;

  /**
   * Specifies a list of the capabilities associated with this partnership.
   *
   * @public
   */
  capabilities: string[] | undefined;

  /**
   * Specify the structure that contains the details for the associated capabilities.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePartnershipResponse {
  /**
   * Returns the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * Returns a descriptive name for the partnership.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Returns the email address associated with this trading partner.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns the phone number associated with the partnership.
   *
   * @public
   */
  phone?: string | undefined;

  /**
   * Returns one or more capabilities associated with this partnership.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * Returns the structure that contains the details for the associated capabilities.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * Returns the unique, system-generated identifier for a trading partner.
   *
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * Returns a timestamp for creation date and time of the partnership.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePartnershipRequest {
  /**
   * Specifies the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipRequest {
  /**
   * Specifies the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;
}

/**
 * @public
 */
export interface GetPartnershipResponse {
  /**
   * Returns the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * Returns the display name of the partnership
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Returns the email address associated with this trading partner.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns the phone number associated with the partnership.
   *
   * @public
   */
  phone?: string | undefined;

  /**
   * Returns one or more capabilities associated with this partnership.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * Contains the details for an Outbound EDI capability.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * Returns the unique identifier for the partner for this partnership.
   *
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * Returns a timestamp for creation date and time of the partnership.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnershipsRequest {
  /**
   * Specifies the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId?: string | undefined;

  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the maximum number of capabilities to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A structure that contains the details for a partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
 *
 * @public
 */
export interface PartnershipSummary {
  /**
   * Returns the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;

  /**
   * Returns the name of the partnership.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Returns one or more capabilities associated with this partnership.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * Contains the details for an Outbound EDI capability.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * Returns the unique, system-generated identifier for a trading partner.
   *
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * Returns a timestamp for creation date and time of the partnership.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnershipsResponse {
  /**
   * Specifies a list of your partnerships.
   *
   * @public
   */
  partnerships: PartnershipSummary[] | undefined;

  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePartnershipRequest {
  /**
   * Specifies the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;

  /**
   * The name of the partnership, used to identify it.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * List of the capabilities associated with this partnership.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * To update, specify the structure that contains the details for the associated capabilities.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;
}

/**
 * @public
 */
export interface UpdatePartnershipResponse {
  /**
   * Returns the unique, system-generated identifier for the profile connected to this partnership.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns the unique, system-generated identifier for a partnership.
   *
   * @public
   */
  partnershipId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  partnershipArn: string | undefined;

  /**
   * The name of the partnership, used to identify it.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Returns the email address associated with this trading partner.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns the phone number associated with the partnership.
   *
   * @public
   */
  phone?: string | undefined;

  /**
   * Returns one or more capabilities associated with this partnership.
   *
   * @public
   */
  capabilities?: string[] | undefined;

  /**
   * Returns the structure that contains the details for the associated capabilities.
   *
   * @public
   */
  capabilityOptions?: CapabilityOptions | undefined;

  /**
   * Returns the unique, system-generated identifier for a trading partner.
   *
   * @public
   */
  tradingPartnerId?: string | undefined;

  /**
   * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * Specifies the name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the email address associated with this customer profile.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Specifies the phone number associated with the profile.
   *
   * @public
   */
  phone: string | undefined;

  /**
   * Specifies the name for the business associated with this profile.
   *
   * @public
   */
  businessName: string | undefined;

  /**
   * Specifies whether or not logging is enabled for this profile.
   *
   * @public
   */
  logging: Logging | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * Returns the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for the profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * Returns the name of the profile, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the name for the business associated with this profile.
   *
   * @public
   */
  businessName: string | undefined;

  /**
   * Returns the phone number associated with the profile.
   *
   * @public
   */
  phone: string | undefined;

  /**
   * Returns the email address associated with this customer profile.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns whether or not logging is turned on for this profile.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * Returns the name of the logging group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Returns a timestamp representing the time the profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * Specifies the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * Specifies the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * Returns the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * Returns the name of the profile, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the email address associated with this customer profile.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns the phone number associated with the profile.
   *
   * @public
   */
  phone: string | undefined;

  /**
   * Returns the name for the business associated with this profile.
   *
   * @public
   */
  businessName: string | undefined;

  /**
   * Returns whether or not logging is enabled for this profile.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * Returns the name of the logging group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Returns a timestamp for creation date and time of the transformer.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the profile was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the maximum number of profiles to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains the details for a profile. A profile is the mechanism used to create the concept of a private network.
 *
 * @public
 */
export interface ProfileSummary {
  /**
   * Returns the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns the display name for profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the name for the business associated with this profile.
   *
   * @public
   */
  businessName: string | undefined;

  /**
   * Specifies whether or not logging is enabled for this profile.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * Returns the name of the logging group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Returns the timestamp for creation date and time of the profile.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns the timestamp that identifies the most recent date and time that the profile was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * Returns an array of `ProfileSummary` objects.
   *
   * @public
   */
  profiles: ProfileSummary[] | undefined;

  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * Specifies the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The name of the profile, used to identify it.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the email address associated with this customer profile.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Specifies the phone number associated with the profile.
   *
   * @public
   */
  phone?: string | undefined;

  /**
   * Specifies the name for the business associated with this profile.
   *
   * @public
   */
  businessName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * Returns the unique, system-generated identifier for the profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for the profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * Returns the name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the email address associated with this customer profile.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Returns the phone number associated with the profile.
   *
   * @public
   */
  phone: string | undefined;

  /**
   * Returns the name for the business associated with this profile.
   *
   * @public
   */
  businessName: string | undefined;

  /**
   * Specifies whether or not logging is enabled for this profile.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * Returns the name of the logging group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Returns a timestamp for creation date and time of the profile.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the profile was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StartTransformerJobRequest {
  /**
   * Specifies the location of the input file for the transformation. The location consists of an Amazon S3 bucket and prefix.
   *
   * @public
   */
  inputFile: S3Location | undefined;

  /**
   * Specifies the location of the output file for the transformation. The location consists of an Amazon S3 bucket and prefix.
   *
   * @public
   */
  outputLocation: S3Location | undefined;

  /**
   * Specifies the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTransformerJobResponse {
  /**
   * Returns the unique, system-generated identifier for a transformer run.
   *
   * @public
   */
  transformerJobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * The input file to use for an outbound transformation.
 *
 * @public
 */
export type InputFileSource =
  | InputFileSource.FileContentMember
  | InputFileSource.$UnknownMember;

/**
 * @public
 */
export namespace InputFileSource {
  /**
   * Specify the input contents, as a string, for the source of an outbound transformation.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fileContent: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes the input for an outbound transformation.
 *
 * @public
 */
export interface ConversionSource {
  /**
   * The format for the input file: either JSON or XML.
   *
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
 * Contains a structure describing the X12 details for the conversion target.
 *
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
   * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
   *
   * > **Note:** If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Container for the location of a sample file used for outbound transformations.
 *
 * @public
 */
export type OutputSampleFileSource =
  | OutputSampleFileSource.FileLocationMember
  | OutputSampleFileSource.$UnknownMember;

/**
 * @public
 */
export namespace OutputSampleFileSource {
  /**
   * Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fileLocation: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provide a sample of what the output of the transformation should look like.
 *
 * @public
 */
export interface ConversionTarget {
  /**
   * Currently, only X12 format is supported.
   *
   * @public
   */
  fileFormat: ConversionTargetFormat | undefined;

  /**
   * A structure that contains the formatting details for the conversion target.
   *
   * @public
   */
  formatDetails?: ConversionTargetFormatDetails | undefined;

  /**
   * Customer uses this to provide a sample on what should file look like after conversion
   * X12 EDI use case around this would be discovering the file syntax
   * @public
   */
  outputSampleFile?: OutputSampleFileSource | undefined;

  /**
   * A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.
   *
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
}

/**
 * @public
 */
export interface TestConversionRequest {
  /**
   * Specify the source file for an outbound EDI request.
   *
   * @public
   */
  source: ConversionSource | undefined;

  /**
   * Specify the format (X12 is the only currently supported format), and other details for the conversion target.
   *
   * @public
   */
  target: ConversionTarget | undefined;
}

/**
 * @public
 */
export interface TestConversionResponse {
  /**
   * Returns the converted file content.
   *
   * @public
   */
  convertedFileContent: string | undefined;

  /**
   * Returns an array of validation messages that Amazon Web Services B2B Data Interchange generates during the conversion process. These messages include both standard EDI validation results and custom validation messages when custom validation rules are configured. Custom validation messages provide detailed feedback on element length constraints, code list validations, and element requirement checks applied during the outbound EDI generation process.
   *
   * @public
   */
  validationMessages?: string[] | undefined;
}

/**
 * @public
 */
export interface TestMappingRequest {
  /**
   * Specify the contents of the EDI (electronic data interchange) XML or JSON file that is used as input for the transform.
   *
   * @public
   */
  inputFileContent: string | undefined;

  /**
   * Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * > **Note:** This parameter is available for backwards compatibility. Use the [Mapping](https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html) data type instead.
   *
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * Specifies that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @public
   */
  fileFormat: FileFormat | undefined;
}

/**
 * @public
 */
export interface TestMappingResponse {
  /**
   * Returns a string for the mapping that can be used to identify the mapping. Similar to a fingerprint
   *
   * @public
   */
  mappedFileContent: string | undefined;
}

/**
 * @public
 */
export interface TestParsingRequest {
  /**
   * Specifies an `S3Location` object, which contains the Amazon S3 bucket and prefix for the location of the input file.
   *
   * @public
   */
  inputFile: S3Location | undefined;

  /**
   * Specifies that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @public
   */
  fileFormat: FileFormat | undefined;

  /**
   * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @public
   */
  ediType: EdiType | undefined;

  /**
   * Specifies advanced options for parsing the input EDI file. These options allow for more granular control over the parsing process, including split options for X12 files.
   *
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
}

/**
 * @public
 */
export interface TestParsingResponse {
  /**
   * Returns the contents of the input file being tested, parsed according to the specified EDI (electronic data interchange) type.
   *
   * @public
   */
  parsedFileContent: string | undefined;

  /**
   * Returns an array of parsed file contents when the input file is split according to the specified split options. Each element in the array represents a separate split file's parsed content.
   *
   * @public
   */
  parsedSplitFileContents?: string[] | undefined;

  /**
   * Returns an array of validation messages generated during EDI validation. These messages provide detailed information about validation errors, warnings, or confirmations based on the configured X12 validation rules such as element length constraints, code list validations, and element requirement checks. This field is populated when the `TestParsing` API validates EDI documents.
   *
   * @public
   */
  validationMessages?: string[] | undefined;
}

/**
 * A structure that contains the X12 transaction set and version.
 *
 * @public
 */
export type FormatOptions =
  | FormatOptions.X12Member
  | FormatOptions.$UnknownMember;

/**
 * @public
 */
export namespace FormatOptions {
  /**
   * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
   *
   * > **Note:** If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    x12: (value: X12Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the input formatting options for an inbound transformer (takes an X12-formatted EDI document as input and converts it to JSON or XML.
 *
 * @public
 */
export interface InputConversion {
  /**
   * The format for the transformer input: currently on `X12` is supported.
   *
   * @public
   */
  fromFormat: FromFormat | undefined;

  /**
   * A structure that contains the formatting options for an inbound transformer.
   *
   * @public
   */
  formatOptions?: FormatOptions | undefined;

  /**
   * Specifies advanced options for the input conversion process. These options provide additional control over how EDI files are processed during transformation.
   *
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
}

/**
 * Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
 *
 * @public
 */
export interface Mapping {
  /**
   * The transformation language for the template, either XSLT or JSONATA.
   *
   * @public
   */
  templateLanguage: MappingTemplateLanguage | undefined;

  /**
   * A string that represents the mapping template, in the transformation language specified in `templateLanguage`.
   *
   * @public
   */
  template?: string | undefined;
}

/**
 * Contains the formatting options for an outbound transformer (takes JSON or XML as input and converts it to an EDI document (currently only X12 format is supported).
 *
 * @public
 */
export interface OutputConversion {
  /**
   * The format for the output from an outbound transformer: only X12 is currently supported.
   *
   * @public
   */
  toFormat: ToFormat | undefined;

  /**
   * A structure that contains the X12 transaction set and version for the transformer output.
   *
   * @public
   */
  formatOptions?: FormatOptions | undefined;

  /**
   * A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.
   *
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
}

/**
 * An array of the Amazon S3 keys used to identify the location for your sample documents.
 *
 * @public
 */
export interface SampleDocumentKeys {
  /**
   * An array of keys for your input sample documents.
   *
   * @public
   */
  input?: string | undefined;

  /**
   * An array of keys for your output sample documents.
   *
   * @public
   */
  output?: string | undefined;
}

/**
 * Describes a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
 *
 * @public
 */
export interface SampleDocuments {
  /**
   * Contains the Amazon S3 bucket that is used to hold your sample documents.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * Contains an array of the Amazon S3 keys used to identify the location for your sample documents.
   *
   * @public
   */
  keys: SampleDocumentKeys[] | undefined;
}

/**
 * @public
 */
export interface CreateTransformerRequest {
  /**
   * Specifies the name of the transformer, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * > **Note:** This parameter is available for backwards compatibility. Use the [Mapping](https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html) data type instead.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * Specify the `InputConversion` object, which contains the format options for the inbound transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Specify the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * A structure that contains the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Specify a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface CreateTransformerResponse {
  /**
   * Returns the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  transformerArn: string | undefined;

  /**
   * Returns the name of the transformer, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
   *
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * Returns a timestamp for creation date and time of the transformer.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * Returns the `InputConversion` object, which contains the format options for the inbound transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface DeleteTransformerRequest {
  /**
   * Specifies the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerRequest {
  /**
   * Specifies the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerResponse {
  /**
   * Returns the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  transformerArn: string | undefined;

  /**
   * Returns the name of the transformer, used to identify it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
   *
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * Returns a timestamp for creation date and time of the transformer.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the transformer was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * Returns the `InputConversion` object, which contains the format options for the inbound transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface ListTransformersRequest {
  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the number of items to return for the API response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains the details for a transformer object. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.
 *
 * @public
 */
export interface TransformerSummary {
  /**
   * Returns the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Returns the descriptive name for the transformer.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
   *
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * Returns a timestamp indicating when the transformer was created. For example, `2023-07-20T19:58:44.624Z`.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp representing the date and time for the most recent change for the transformer object.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * Returns a structure that contains the format options for the transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface ListTransformersResponse {
  /**
   * Returns an array of one or more transformer objects.
   *
   * For each transformer, a `TransformerSummary` object is returned. The `TransformerSummary` contains all the details for a specific transformer.
   *
   * @public
   */
  transformers: TransformerSummary[] | undefined;

  /**
   * When additional results are obtained from the command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional resources.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTransformerRequest {
  /**
   * Specifies the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Specify a new name for the transformer, if you want to update it.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies the transformer's status. You can update the state of the transformer from `inactive` to `active`.
   *
   * @public
   */
  status?: TransformerStatus | undefined;

  /**
   * Specifies that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * > **Note:** This parameter is available for backwards compatibility. Use the [Mapping](https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html) data type instead.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * To update, specify the `InputConversion` object, which contains the format options for the inbound transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Specify the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * To update, specify the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Specify a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface UpdateTransformerResponse {
  /**
   * Returns the system-assigned unique identifier for the transformer.
   *
   * @public
   */
  transformerId: string | undefined;

  /**
   * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  transformerArn: string | undefined;

  /**
   * Returns the name of the transformer.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
   *
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * Returns a timestamp for creation date and time of the transformer.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Returns a timestamp for last time the transformer was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * Returns that the currently supported file formats for EDI transformations are `JSON` and `XML`.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
   *
   * @deprecated This is a legacy trait. Please use input-conversion or output-conversion.
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * Returns the `InputConversion` object, which contains the format options for the inbound transformation.
   *
   * @public
   */
  inputConversion?: InputConversion | undefined;

  /**
   * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
   *
   * @public
   */
  mapping?: Mapping | undefined;

  /**
   * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
   *
   * @public
   */
  outputConversion?: OutputConversion | undefined;

  /**
   * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
   *
   * @public
   */
  sampleDocuments?: SampleDocuments | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
