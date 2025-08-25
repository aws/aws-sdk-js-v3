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
 * @public
 * @enum
 */
export const X12SplitBy = {
  NONE: "NONE",
  TRANSACTION: "TRANSACTION",
} as const;

/**
 * @public
 */
export type X12SplitBy = (typeof X12SplitBy)[keyof typeof X12SplitBy];

/**
 * <p>Contains options for splitting X12 EDI files into smaller units. This is useful for processing large EDI files more efficiently.</p>
 * @public
 */
export interface X12SplitOptions {
  /**
   * <p>Specifies the method used to split X12 EDI files. Valid values include <code>TRANSACTION</code> (split by individual transaction sets), or <code>NONE</code> (no splitting).</p>
   * @public
   */
  splitBy: X12SplitBy | undefined;
}

/**
 * <p>Defines a validation rule that modifies the allowed code values for a specific X12 element. This rule allows you to add or remove valid codes from an element's standard code list, providing flexibility to accommodate trading partner-specific requirements or industry variations. You can specify codes to add to expand the allowed values beyond the X12 standard, or codes to remove to restrict the allowed values for stricter validation.</p>
 * @public
 */
export interface X12CodeListValidationRule {
  /**
   * <p>Specifies the four-digit element ID to which the code list modifications apply. This identifies which X12 element will have its allowed code values modified.</p>
   * @public
   */
  elementId: string | undefined;

  /**
   * <p>Specifies a list of code values to add to the element's allowed values. These codes will be considered valid for the specified element in addition to the standard codes defined by the X12 specification.</p>
   * @public
   */
  codesToAdd?: string[] | undefined;

  /**
   * <p>Specifies a list of code values to remove from the element's allowed values. These codes will be considered invalid for the specified element, even if they are part of the standard codes defined by the X12 specification.</p>
   * @public
   */
  codesToRemove?: string[] | undefined;
}

/**
 * <p>Defines a validation rule that specifies custom length constraints for a specific X12 element. This rule allows you to override the standard minimum and maximum length requirements for an element, enabling validation of trading partner-specific length requirements that may differ from the X12 specification. Both minimum and maximum length values must be specified and must be between 1 and 200 characters.</p>
 * @public
 */
export interface X12ElementLengthValidationRule {
  /**
   * <p>Specifies the four-digit element ID to which the length constraints will be applied. This identifies which X12 element will have its length requirements modified.</p>
   * @public
   */
  elementId: string | undefined;

  /**
   * <p>Specifies the maximum allowed length for the identified element. This value must be between 1 and 200 characters and defines the upper limit for the element's content length.</p>
   * @public
   */
  maxLength: number | undefined;

  /**
   * <p>Specifies the minimum required length for the identified element. This value must be between 1 and 200 characters and defines the lower limit for the element's content length.</p>
   * @public
   */
  minLength: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ElementRequirement = {
  MANDATORY: "MANDATORY",
  OPTIONAL: "OPTIONAL",
} as const;

/**
 * @public
 */
export type ElementRequirement = (typeof ElementRequirement)[keyof typeof ElementRequirement];

/**
 * <p>Defines a validation rule that modifies the requirement status of a specific X12 element within a segment. This rule allows you to make optional elements mandatory or mandatory elements optional, providing flexibility to accommodate different trading partner requirements and business rules. The rule targets a specific element position within a segment and sets its requirement status to either OPTIONAL or MANDATORY.</p>
 * @public
 */
export interface X12ElementRequirementValidationRule {
  /**
   * <p>Specifies the position of the element within an X12 segment for which the requirement status will be modified. The format follows the pattern of segment identifier followed by element position (e.g., "ST-01" for the first element of the ST segment).</p>
   * @public
   */
  elementPosition: string | undefined;

  /**
   * <p>Specifies the requirement status for the element at the specified position. Valid values are OPTIONAL (the element may be omitted) or MANDATORY (the element must be present).</p>
   * @public
   */
  requirement: ElementRequirement | undefined;
}

/**
 * <p>Represents a single validation rule that can be applied during X12 EDI processing. This is a union type that can contain one of several specific validation rule types: code list validation rules for modifying allowed element codes, element length validation rules for enforcing custom length constraints, or element requirement validation rules for changing mandatory/optional status. Each validation rule targets specific aspects of EDI document validation to ensure compliance with trading partner requirements and business rules.</p>
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
   * <p>Specifies a code list validation rule that modifies the allowed code values for a specific X12 element. This rule enables you to customize which codes are considered valid for an element, allowing for trading partner-specific code requirements.</p>
   * @public
   */
  export interface CodeListValidationRuleMember {
    codeListValidationRule: X12CodeListValidationRule;
    elementLengthValidationRule?: never;
    elementRequirementValidationRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies an element length validation rule that defines custom length constraints for a specific X12 element. This rule allows you to enforce minimum and maximum length requirements that may differ from the standard X12 specification.</p>
   * @public
   */
  export interface ElementLengthValidationRuleMember {
    codeListValidationRule?: never;
    elementLengthValidationRule: X12ElementLengthValidationRule;
    elementRequirementValidationRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies an element requirement validation rule that modifies whether a specific X12 element is required or optional within a segment. This rule provides flexibility to accommodate different trading partner requirements for element presence.</p>
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

  export interface Visitor<T> {
    codeListValidationRule: (value: X12CodeListValidationRule) => T;
    elementLengthValidationRule: (value: X12ElementLengthValidationRule) => T;
    elementRequirementValidationRule: (value: X12ElementRequirementValidationRule) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: X12ValidationRule, visitor: Visitor<T>): T => {
    if (value.codeListValidationRule !== undefined) return visitor.codeListValidationRule(value.codeListValidationRule);
    if (value.elementLengthValidationRule !== undefined)
      return visitor.elementLengthValidationRule(value.elementLengthValidationRule);
    if (value.elementRequirementValidationRule !== undefined)
      return visitor.elementRequirementValidationRule(value.elementRequirementValidationRule);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration options for X12 EDI validation. This structure allows you to specify custom validation rules that will be applied during EDI document processing, including element length constraints, code list modifications, and element requirement changes. These validation options provide flexibility to accommodate trading partner-specific requirements while maintaining EDI compliance. The validation rules are applied in addition to standard X12 validation to ensure documents meet both standard and custom requirements.</p>
 * @public
 */
export interface X12ValidationOptions {
  /**
   * <p>Specifies a list of validation rules to apply during EDI document processing. These rules can include code list modifications, element length constraints, and element requirement changes.</p>
   * @public
   */
  validationRules?: X12ValidationRule[] | undefined;
}

/**
 * <p>Contains advanced options specific to X12 EDI processing, such as splitting large X12 files into smaller units.</p>
 * @public
 */
export interface X12AdvancedOptions {
  /**
   * <p>Specifies options for splitting X12 EDI files. These options control how large X12 files are divided into smaller, more manageable units.</p>
   * @public
   */
  splitOptions?: X12SplitOptions | undefined;

  /**
   * <p>Specifies validation options for X12 EDI processing. These options control how validation rules are applied during EDI document processing, including custom validation rules for element length constraints, code list validations, and element requirement checks.</p>
   * @public
   */
  validationOptions?: X12ValidationOptions | undefined;
}

/**
 * <p>A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.</p>
 * @public
 */
export interface AdvancedOptions {
  /**
   * <p>A structure that contains X12-specific advanced options, such as split options for processing X12 EDI files.</p>
   * @public
   */
  x12?: X12AdvancedOptions | undefined;
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
 * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.</p>
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
  X12_100: "X12_100",
  X12_101: "X12_101",
  X12_102: "X12_102",
  X12_103: "X12_103",
  X12_104: "X12_104",
  X12_105: "X12_105",
  X12_106: "X12_106",
  X12_107: "X12_107",
  X12_108: "X12_108",
  X12_109: "X12_109",
  X12_110: "X12_110",
  X12_111: "X12_111",
  X12_112: "X12_112",
  X12_113: "X12_113",
  X12_120: "X12_120",
  X12_121: "X12_121",
  X12_124: "X12_124",
  X12_125: "X12_125",
  X12_126: "X12_126",
  X12_127: "X12_127",
  X12_128: "X12_128",
  X12_129: "X12_129",
  X12_130: "X12_130",
  X12_131: "X12_131",
  X12_132: "X12_132",
  X12_133: "X12_133",
  X12_135: "X12_135",
  X12_138: "X12_138",
  X12_139: "X12_139",
  X12_140: "X12_140",
  X12_141: "X12_141",
  X12_142: "X12_142",
  X12_143: "X12_143",
  X12_144: "X12_144",
  X12_146: "X12_146",
  X12_147: "X12_147",
  X12_148: "X12_148",
  X12_149: "X12_149",
  X12_150: "X12_150",
  X12_151: "X12_151",
  X12_152: "X12_152",
  X12_153: "X12_153",
  X12_154: "X12_154",
  X12_155: "X12_155",
  X12_157: "X12_157",
  X12_158: "X12_158",
  X12_159: "X12_159",
  X12_160: "X12_160",
  X12_161: "X12_161",
  X12_163: "X12_163",
  X12_170: "X12_170",
  X12_175: "X12_175",
  X12_176: "X12_176",
  X12_179: "X12_179",
  X12_180: "X12_180",
  X12_185: "X12_185",
  X12_186: "X12_186",
  X12_187: "X12_187",
  X12_188: "X12_188",
  X12_189: "X12_189",
  X12_190: "X12_190",
  X12_191: "X12_191",
  X12_194: "X12_194",
  X12_195: "X12_195",
  X12_196: "X12_196",
  X12_197: "X12_197",
  X12_198: "X12_198",
  X12_199: "X12_199",
  X12_200: "X12_200",
  X12_201: "X12_201",
  X12_202: "X12_202",
  X12_203: "X12_203",
  X12_204: "X12_204",
  X12_205: "X12_205",
  X12_206: "X12_206",
  X12_210: "X12_210",
  X12_211: "X12_211",
  X12_212: "X12_212",
  X12_213: "X12_213",
  X12_214: "X12_214",
  X12_215: "X12_215",
  X12_216: "X12_216",
  X12_217: "X12_217",
  X12_218: "X12_218",
  X12_219: "X12_219",
  X12_220: "X12_220",
  X12_222: "X12_222",
  X12_223: "X12_223",
  X12_224: "X12_224",
  X12_225: "X12_225",
  X12_227: "X12_227",
  X12_228: "X12_228",
  X12_240: "X12_240",
  X12_242: "X12_242",
  X12_244: "X12_244",
  X12_245: "X12_245",
  X12_248: "X12_248",
  X12_249: "X12_249",
  X12_250: "X12_250",
  X12_251: "X12_251",
  X12_252: "X12_252",
  X12_255: "X12_255",
  X12_256: "X12_256",
  X12_259: "X12_259",
  X12_260: "X12_260",
  X12_261: "X12_261",
  X12_262: "X12_262",
  X12_263: "X12_263",
  X12_264: "X12_264",
  X12_265: "X12_265",
  X12_266: "X12_266",
  X12_267: "X12_267",
  X12_268: "X12_268",
  X12_269: "X12_269",
  X12_270: "X12_270",
  X12_270_X279: "X12_270_X279",
  X12_271: "X12_271",
  X12_271_X279: "X12_271_X279",
  X12_272: "X12_272",
  X12_273: "X12_273",
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
  X12_280: "X12_280",
  X12_283: "X12_283",
  X12_284: "X12_284",
  X12_285: "X12_285",
  X12_286: "X12_286",
  X12_288: "X12_288",
  X12_290: "X12_290",
  X12_300: "X12_300",
  X12_301: "X12_301",
  X12_303: "X12_303",
  X12_304: "X12_304",
  X12_309: "X12_309",
  X12_310: "X12_310",
  X12_311: "X12_311",
  X12_312: "X12_312",
  X12_313: "X12_313",
  X12_315: "X12_315",
  X12_317: "X12_317",
  X12_319: "X12_319",
  X12_322: "X12_322",
  X12_323: "X12_323",
  X12_324: "X12_324",
  X12_325: "X12_325",
  X12_326: "X12_326",
  X12_350: "X12_350",
  X12_352: "X12_352",
  X12_353: "X12_353",
  X12_354: "X12_354",
  X12_355: "X12_355",
  X12_356: "X12_356",
  X12_357: "X12_357",
  X12_358: "X12_358",
  X12_361: "X12_361",
  X12_362: "X12_362",
  X12_404: "X12_404",
  X12_410: "X12_410",
  X12_412: "X12_412",
  X12_414: "X12_414",
  X12_417: "X12_417",
  X12_418: "X12_418",
  X12_419: "X12_419",
  X12_420: "X12_420",
  X12_421: "X12_421",
  X12_422: "X12_422",
  X12_423: "X12_423",
  X12_424: "X12_424",
  X12_425: "X12_425",
  X12_426: "X12_426",
  X12_429: "X12_429",
  X12_431: "X12_431",
  X12_432: "X12_432",
  X12_433: "X12_433",
  X12_434: "X12_434",
  X12_435: "X12_435",
  X12_436: "X12_436",
  X12_437: "X12_437",
  X12_440: "X12_440",
  X12_451: "X12_451",
  X12_452: "X12_452",
  X12_453: "X12_453",
  X12_455: "X12_455",
  X12_456: "X12_456",
  X12_460: "X12_460",
  X12_463: "X12_463",
  X12_466: "X12_466",
  X12_468: "X12_468",
  X12_470: "X12_470",
  X12_475: "X12_475",
  X12_485: "X12_485",
  X12_486: "X12_486",
  X12_490: "X12_490",
  X12_492: "X12_492",
  X12_494: "X12_494",
  X12_500: "X12_500",
  X12_501: "X12_501",
  X12_503: "X12_503",
  X12_504: "X12_504",
  X12_511: "X12_511",
  X12_517: "X12_517",
  X12_521: "X12_521",
  X12_527: "X12_527",
  X12_536: "X12_536",
  X12_540: "X12_540",
  X12_561: "X12_561",
  X12_567: "X12_567",
  X12_568: "X12_568",
  X12_601: "X12_601",
  X12_602: "X12_602",
  X12_620: "X12_620",
  X12_625: "X12_625",
  X12_650: "X12_650",
  X12_715: "X12_715",
  X12_753: "X12_753",
  X12_754: "X12_754",
  X12_805: "X12_805",
  X12_806: "X12_806",
  X12_810: "X12_810",
  X12_811: "X12_811",
  X12_812: "X12_812",
  X12_813: "X12_813",
  X12_814: "X12_814",
  X12_815: "X12_815",
  X12_816: "X12_816",
  X12_818: "X12_818",
  X12_819: "X12_819",
  X12_820: "X12_820",
  X12_820_X218: "X12_820_X218",
  X12_820_X306: "X12_820_X306",
  X12_821: "X12_821",
  X12_822: "X12_822",
  X12_823: "X12_823",
  X12_824: "X12_824",
  X12_824_X186: "X12_824_X186",
  X12_826: "X12_826",
  X12_827: "X12_827",
  X12_828: "X12_828",
  X12_829: "X12_829",
  X12_830: "X12_830",
  X12_831: "X12_831",
  X12_832: "X12_832",
  X12_833: "X12_833",
  X12_834: "X12_834",
  X12_834_X220: "X12_834_X220",
  X12_834_X307: "X12_834_X307",
  X12_834_X318: "X12_834_X318",
  X12_835: "X12_835",
  X12_835_X221: "X12_835_X221",
  X12_836: "X12_836",
  X12_837: "X12_837",
  X12_837_X222: "X12_837_X222",
  X12_837_X223: "X12_837_X223",
  X12_837_X224: "X12_837_X224",
  X12_837_X291: "X12_837_X291",
  X12_837_X292: "X12_837_X292",
  X12_837_X298: "X12_837_X298",
  X12_838: "X12_838",
  X12_839: "X12_839",
  X12_840: "X12_840",
  X12_841: "X12_841",
  X12_842: "X12_842",
  X12_843: "X12_843",
  X12_844: "X12_844",
  X12_845: "X12_845",
  X12_846: "X12_846",
  X12_847: "X12_847",
  X12_848: "X12_848",
  X12_849: "X12_849",
  X12_850: "X12_850",
  X12_851: "X12_851",
  X12_852: "X12_852",
  X12_853: "X12_853",
  X12_854: "X12_854",
  X12_855: "X12_855",
  X12_856: "X12_856",
  X12_857: "X12_857",
  X12_858: "X12_858",
  X12_859: "X12_859",
  X12_860: "X12_860",
  X12_861: "X12_861",
  X12_862: "X12_862",
  X12_863: "X12_863",
  X12_864: "X12_864",
  X12_865: "X12_865",
  X12_866: "X12_866",
  X12_867: "X12_867",
  X12_868: "X12_868",
  X12_869: "X12_869",
  X12_870: "X12_870",
  X12_871: "X12_871",
  X12_872: "X12_872",
  X12_873: "X12_873",
  X12_874: "X12_874",
  X12_875: "X12_875",
  X12_876: "X12_876",
  X12_877: "X12_877",
  X12_878: "X12_878",
  X12_879: "X12_879",
  X12_880: "X12_880",
  X12_881: "X12_881",
  X12_882: "X12_882",
  X12_883: "X12_883",
  X12_884: "X12_884",
  X12_885: "X12_885",
  X12_886: "X12_886",
  X12_887: "X12_887",
  X12_888: "X12_888",
  X12_889: "X12_889",
  X12_891: "X12_891",
  X12_893: "X12_893",
  X12_894: "X12_894",
  X12_895: "X12_895",
  X12_896: "X12_896",
  X12_920: "X12_920",
  X12_924: "X12_924",
  X12_925: "X12_925",
  X12_926: "X12_926",
  X12_928: "X12_928",
  X12_940: "X12_940",
  X12_943: "X12_943",
  X12_944: "X12_944",
  X12_945: "X12_945",
  X12_947: "X12_947",
  X12_980: "X12_980",
  X12_990: "X12_990",
  X12_993: "X12_993",
  X12_996: "X12_996",
  X12_997: "X12_997",
  X12_998: "X12_998",
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
  VERSION_4050: "VERSION_4050",
  VERSION_4060: "VERSION_4060",
  VERSION_5010: "VERSION_5010",
  VERSION_5010_HIPAA: "VERSION_5010_HIPAA",
} as const;

/**
 * @public
 */
export type X12Version = (typeof X12Version)[keyof typeof X12Version];

/**
 * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p> <note> <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p> </note>
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
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to capabilities, partnerships, profiles and transformers. A tag key can take more than one value. For example, to group capabilities for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.</p>
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
 * <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p> <note> <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p> </note>
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
   * <p> Describes the details needed for generating the template. Specify the X12 transaction set and version for which the template is used: currently, we only support X12. </p>
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
export interface GenerateMappingRequest {
  /**
   * <p>Provide the contents of a sample X12 EDI file, either in JSON or XML format, to use as a starting point for the mapping.</p>
   * @public
   */
  inputFileContent: string | undefined;

  /**
   * <p>Provide the contents of a sample X12 EDI file, either in JSON or XML format, to use as a target for the mapping.</p>
   * @public
   */
  outputFileContent: string | undefined;

  /**
   * <p>Specify the mapping type: either <code>JSONATA</code> or <code>XSLT.</code> </p>
   * @public
   */
  mappingType: MappingType | undefined;
}

/**
 * @public
 */
export interface GenerateMappingResponse {
  /**
   * <p>Returns a mapping template based on your inputs.</p>
   * @public
   */
  mappingTemplate: string | undefined;

  /**
   * <p>Returns a percentage that estimates the accuracy of the generated mapping.</p>
   * @public
   */
  mappingAccuracy?: number | undefined;
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
   * <p>Returns the current state of the transformer job, either <code>running</code>, <code>succeeded</code>, or <code>failed</code>.</p>
   * @public
   */
  status: TransformerJobStatus | undefined;

  /**
   * <p>Returns the location for the output files. If the caller specified a directory for the output, then this contains the full path to the output file, including the file name generated by the service.</p>
   * @public
   */
  outputFiles?: S3Location[] | undefined;

  /**
   * <p>Returns an optional error message, which gets populated when the job is not run successfully.</p>
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
 * @public
 * @enum
 */
export const X12FunctionalAcknowledgment = {
  DO_NOT_GENERATE: "DO_NOT_GENERATE",
  GENERATE_ALL_SEGMENTS: "GENERATE_ALL_SEGMENTS",
  GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP: "GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP",
} as const;

/**
 * @public
 */
export type X12FunctionalAcknowledgment =
  (typeof X12FunctionalAcknowledgment)[keyof typeof X12FunctionalAcknowledgment];

/**
 * @public
 * @enum
 */
export const X12TechnicalAcknowledgment = {
  DO_NOT_GENERATE: "DO_NOT_GENERATE",
  GENERATE_ALL_SEGMENTS: "GENERATE_ALL_SEGMENTS",
} as const;

/**
 * @public
 */
export type X12TechnicalAcknowledgment = (typeof X12TechnicalAcknowledgment)[keyof typeof X12TechnicalAcknowledgment];

/**
 * <p>Contains options for configuring X12 acknowledgments. These options control how functional and technical acknowledgments are handled.</p>
 * @public
 */
export interface X12AcknowledgmentOptions {
  /**
   * <p>Specifies whether functional acknowledgments (997/999) should be generated for incoming X12 transactions. Valid values are <code>DO_NOT_GENERATE</code>, <code>GENERATE_ALL_SEGMENTS</code> and <code>GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP</code>.</p> <p>If you choose <code>GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP</code>, Amazon Web Services B2B Data Interchange skips the AK2_Loop when generating an acknowledgment document.</p>
   * @public
   */
  functionalAcknowledgment: X12FunctionalAcknowledgment | undefined;

  /**
   * <p>Specifies whether technical acknowledgments (TA1) should be generated for incoming X12 interchanges. Valid values are <code>DO_NOT_GENERATE</code> and <code>GENERATE_ALL_SEGMENTS</code> and.</p>
   * @public
   */
  technicalAcknowledgment: X12TechnicalAcknowledgment | undefined;
}

/**
 * <p>Contains options specific to processing inbound X12 EDI files.</p>
 * @public
 */
export interface X12InboundEdiOptions {
  /**
   * <p>Specifies acknowledgment options for inbound X12 EDI files. These options control how functional and technical acknowledgments are handled.</p>
   * @public
   */
  acknowledgmentOptions?: X12AcknowledgmentOptions | undefined;
}

/**
 * <p>Contains options for processing inbound EDI files. These options allow for customizing how incoming EDI documents are processed.</p>
 * @public
 */
export interface InboundEdiOptions {
  /**
   * <p>A structure that contains X12-specific options for processing inbound X12 EDI files.</p>
   * @public
   */
  x12?: X12InboundEdiOptions | undefined;
}

/**
 * <p>Contains configuration for X12 control numbers used in X12 EDI generation. Control numbers are used to uniquely identify interchanges, functional groups, and transaction sets.</p>
 * @public
 */
export interface X12ControlNumbers {
  /**
   * <p>Specifies the starting interchange control number (ISA13) to use for X12 EDI generation. This number is incremented for each new interchange. For the ISA (interchange) envelope, Amazon Web Services B2B Data Interchange generates an interchange control number that is unique for the ISA05 and ISA06 (sender) &amp; ISA07 and ISA08 (receiver) combination. </p>
   * @public
   */
  startingInterchangeControlNumber?: number | undefined;

  /**
   * <p>Specifies the starting functional group control number (GS06) to use for X12 EDI generation. This number is incremented for each new functional group. For the GS (functional group) envelope, Amazon Web Services B2B Data Interchange generates a functional group control number that is unique to the sender ID, receiver ID, and functional identifier code combination. </p>
   * @public
   */
  startingFunctionalGroupControlNumber?: number | undefined;

  /**
   * <p>Specifies the starting transaction set control number (ST02) to use for X12 EDI generation. This number is incremented for each new transaction set.</p>
   * @public
   */
  startingTransactionSetControlNumber?: number | undefined;
}

/**
 * <p>In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header. The delimiters are part of the message's syntax and divide up its different elements.</p>
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
 * @public
 * @enum
 */
export const X12GS05TimeFormat = {
  HHMM: "HHMM",
  HHMMSS: "HHMMSS",
  HHMMSSDD: "HHMMSSDD",
} as const;

/**
 * @public
 */
export type X12GS05TimeFormat = (typeof X12GS05TimeFormat)[keyof typeof X12GS05TimeFormat];

/**
 * <p>In X12, the Interchange Control Header is the first segment of an EDI document and is part of the Interchange Envelope. It contains information about the sender and receiver, the date and time of transmission, and the X12 version being used. It also includes delivery information, such as the sender and receiver IDs.</p>
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
   * <p>Located at position ISA-11 in the header. This string makes it easier when you need to group similar adjacent element values together without using extra segments.</p> <note> <p>This parameter is only honored for version greater than 401 (<code>VERSION_4010</code> and higher).</p> <p>For versions less than 401, this field is called <a href="https://www.stedi.com/edi/x12-004010/segment/ISA#ISA-11">StandardsId</a>, in which case our service sets the value to <code>U</code>.</p> </note>
   * @public
   */
  repetitionSeparator?: string | undefined;

  /**
   * <p>Located at position ISA-14 in the header. The value "1" indicates that the sender is requesting an interchange acknowledgment at receipt of the interchange. The value "0" is used otherwise.</p>
   * @public
   */
  acknowledgmentRequestedCode?: string | undefined;

  /**
   * <p>Located at position ISA-15 in the header. Specifies how this interchange is being used:</p> <ul> <li> <p> <code>T</code> indicates this interchange is for testing.</p> </li> <li> <p> <code>P</code> indicates this interchange is for production.</p> </li> <li> <p> <code>I</code> indicates this interchange is informational.</p> </li> </ul>
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
   * <p>Specifies whether or not to validate the EDI for this X12 object: <code>TRUE</code> or <code>FALSE</code>. When enabled, this performs both standard EDI validation and applies any configured custom validation rules including element length constraints, code list validations, and element requirement checks. Validation results are returned in the response validation messages.</p>
   * @public
   */
  validateEdi?: boolean | undefined;

  /**
   * <p>Specifies control number configuration for outbound X12 EDI headers. These settings determine the starting values for interchange, functional group, and transaction set control numbers.</p>
   * @public
   */
  controlNumbers?: X12ControlNumbers | undefined;

  /**
   * <p>Specifies the time format in the GS05 element (time) of the functional group header. The following formats use 24-hour clock time:</p> <ul> <li> <p> <code>HHMM</code> - Hours and minutes</p> </li> <li> <p> <code>HHMMSS</code> - Hours, minutes, and seconds</p> </li> <li> <p> <code>HHMMSSDD</code> - Hours, minutes, seconds, and decimal seconds</p> </li> </ul> <p>Where:</p> <ul> <li> <p> <code>HH</code> - Hours (00-23)</p> </li> <li> <p> <code>MM</code> - Minutes (00-59)</p> </li> <li> <p> <code>SS</code> - Seconds (00-59)</p> </li> <li> <p> <code>DD</code> - Hundredths of seconds (00-99)</p> </li> </ul>
   * @public
   */
  gs05TimeFormat?: X12GS05TimeFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const LineTerminator = {
  CR: "CR",
  CRLF: "CRLF",
  LF: "LF",
} as const;

/**
 * @public
 */
export type LineTerminator = (typeof LineTerminator)[keyof typeof LineTerminator];

/**
 * @public
 * @enum
 */
export const WrapFormat = {
  LINE_LENGTH: "LINE_LENGTH",
  ONE_LINE: "ONE_LINE",
  SEGMENT: "SEGMENT",
} as const;

/**
 * @public
 */
export type WrapFormat = (typeof WrapFormat)[keyof typeof WrapFormat];

/**
 * <p>Contains options for wrapping (line folding) in X12 EDI files. Wrapping controls how long lines are handled in the EDI output.</p>
 * @public
 */
export interface WrapOptions {
  /**
   * <p>Specifies the method used for wrapping lines in the EDI output. Valid values:</p> <ul> <li> <p> <code>SEGMENT</code>: Wraps by segment.</p> </li> <li> <p> <code>ONE_LINE</code>: Indicates that the entire content is on a single line.</p> <note> <p>When you specify <code>ONE_LINE</code>, do not provide either the line length nor the line terminator value.</p> </note> </li> <li> <p> <code>LINE_LENGTH</code>: Wraps by character count, as specified by <code>lineLength</code> value.</p> </li> </ul>
   * @public
   */
  wrapBy: WrapFormat | undefined;

  /**
   * <p>Specifies the character sequence used to terminate lines when wrapping. Valid values:</p> <ul> <li> <p> <code>CRLF</code>: carriage return and line feed</p> </li> <li> <p> <code>LF</code>: line feed)</p> </li> <li> <p> <code>CR</code>: carriage return</p> </li> </ul>
   * @public
   */
  lineTerminator?: LineTerminator | undefined;

  /**
   * <p>Specifies the maximum length of a line before wrapping occurs. This value is used when <code>wrapBy</code> is set to <code>LINE_LENGTH</code>.</p>
   * @public
   */
  lineLength?: number | undefined;
}

/**
 * <p>A wrapper structure for an X12 definition object.</p> <p>the X12 envelope ensures the integrity of the data and the efficiency of the information exchange. The X12 message structure has hierarchical levels. From highest to the lowest, they are:</p> <ul> <li> <p>Interchange Envelope</p> </li> <li> <p>Functional Group</p> </li> <li> <p>Transaction Set</p> </li> </ul>
 * @public
 */
export interface X12Envelope {
  /**
   * <p>A container for the X12 outbound EDI headers.</p>
   * @public
   */
  common?: X12OutboundEdiHeaders | undefined;

  /**
   * <p>Contains options for wrapping (line folding) in X12 EDI files. Wrapping controls how long lines are handled in the EDI output.</p>
   * @public
   */
  wrapOptions?: WrapOptions | undefined;
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

  /**
   * <p>A structure that contains the inbound EDI options for the capability.</p>
   * @public
   */
  inboundEdi?: InboundEdiOptions | undefined;
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
 * <p>A structure that contains the details for a partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</p>
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
 * <p>Contains the details for a profile. A profile is the mechanism used to create the concept of a private network.</p>
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p> <note> <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p> </note>
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
   * <p>Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.</p>
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

  /**
   * <p>A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.</p>
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
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
   * <p>Returns an array of validation messages that Amazon Web Services B2B Data Interchange generates during the conversion process. These messages include both standard EDI validation results and custom validation messages when custom validation rules are configured. Custom validation messages provide detailed feedback on element length constraints, code list validations, and element requirement checks applied during the outbound EDI generation process.</p>
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
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p> <note> <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p> </note>
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

  /**
   * <p>Specifies advanced options for parsing the input EDI file. These options allow for more granular control over the parsing process, including split options for X12 files.</p>
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
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

  /**
   * <p>Returns an array of parsed file contents when the input file is split according to the specified split options. Each element in the array represents a separate split file's parsed content.</p>
   * @public
   */
  parsedSplitFileContents?: string[] | undefined;

  /**
   * <p>Returns an array of validation messages generated during EDI validation. These messages provide detailed information about validation errors, warnings, or confirmations based on the configured X12 validation rules such as element length constraints, code list validations, and element requirement checks. This field is populated when the <code>TestParsing</code> API validates EDI documents.</p>
   * @public
   */
  validationMessages?: string[] | undefined;
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
   * <p>A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.</p> <note> <p>If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.</p> </note>
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
 * <p>Contains the input formatting options for an inbound transformer (takes an X12-formatted EDI document as input and converts it to JSON or XML.</p>
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

  /**
   * <p>Specifies advanced options for the input conversion process. These options provide additional control over how EDI files are processed during transformation.</p>
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
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

  /**
   * <p>A structure that contains advanced options for EDI processing. Currently, only X12 advanced options are supported.</p>
   * @public
   */
  advancedOptions?: AdvancedOptions | undefined;
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
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p> <note> <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p> </note>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
   * @public
   */
  sampleDocument?: string | undefined;

  /**
   * <p>Specify the <code>InputConversion</code> object, which contains the format options for the inbound transformation.</p>
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
   * <p>Returns the state of the newly created transformer. The transformer can be either <code>active</code> or <code>inactive</code>. For the transformer to be used in a capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns a timestamp for creation date and time of the transformer.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
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
   * <p>Returns the state of the newly created transformer. The transformer can be either <code>active</code> or <code>inactive</code>. For the transformer to be used in a capability, its status must <code>active</code>.</p>
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
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
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
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
 * <p>Contains the details for a transformer object. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</p>
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
   * <p>Returns the state of the newly created transformer. The transformer can be either <code>active</code> or <code>inactive</code>. For the transformer to be used in a capability, its status must <code>active</code>.</p>
   * @public
   */
  status: TransformerStatus | undefined;

  /**
   * <p>Returns a timestamp indicating when the transformer was created. For example, <code>2023-07-20T19:58:44.624Z</code>.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Returns a timestamp representing the date and time for the most recent change for the transformer object.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
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
   * <p>Returns an array of one or more transformer objects.</p> <p>For each transformer, a <code>TransformerSummary</code> object is returned. The <code>TransformerSummary</code> contains all the details for a specific transformer.</p>
   * @public
   */
  transformers: TransformerSummary[] | undefined;

  /**
   * <p>When additional results are obtained from the command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional resources.</p>
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
   * <p>Specifies the transformer's status. You can update the state of the transformer from <code>inactive</code> to <code>active</code>.</p>
   * @public
   */
  status?: TransformerStatus | undefined;

  /**
   * <p>Specifies that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p> <note> <p>This parameter is available for backwards compatibility. Use the <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_Mapping.html">Mapping</a> data type instead.</p> </note>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
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
   * <p>Returns the state of the newly created transformer. The transformer can be either <code>active</code> or <code>inactive</code>. For the transformer to be used in a capability, its status must <code>active</code>.</p>
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
   * <p>Returns that the currently supported file formats for EDI transformations are <code>JSON</code> and <code>XML</code>.</p>
   *
   * @deprecated
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</p>
   *
   * @deprecated
   * @public
   */
  mappingTemplate?: string | undefined;

  /**
   * <p>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</p>
   *
   * @deprecated
   * @public
   */
  ediType?: EdiType | undefined;

  /**
   * <p>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</p>
   *
   * @deprecated
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
