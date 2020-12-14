import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should allow requests.</p>
 *            <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface AllowAction {}

export namespace AllowAction {
  export const filterSensitiveLog = (obj: AllowAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>All query arguments of a web request. </p>
 *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface AllQueryArguments {}

export namespace AllQueryArguments {
  export const filterSensitiveLog = (obj: AllQueryArguments): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The body of a web request. This immediately follows the request headers.</p>
 *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface Body {}

export namespace Body {
  export const filterSensitiveLog = (obj: Body): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p>
 *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface Method {}

export namespace Method {
  export const filterSensitiveLog = (obj: Method): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p>
 *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface QueryString {}

export namespace QueryString {
  export const filterSensitiveLog = (obj: QueryString): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>One of the headers in a web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p>
 *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface SingleHeader {
  /**
   * <p>The name of the query header to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleHeader {
  export const filterSensitiveLog = (obj: SingleHeader): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>One query argument in a web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p>
 */
export interface SingleQueryArgument {
  /**
   * <p>The name of the query argument to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleQueryArgument {
  export const filterSensitiveLog = (obj: SingleQueryArgument): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p>
 *          <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface UriPath {}

export namespace UriPath {
  export const filterSensitiveLog = (obj: UriPath): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
 */
export interface FieldToMatch {
  /**
   * <p>Inspect a single header. Provide the name of the header to inspect, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p>
   */
  SingleHeader?: SingleHeader;

  /**
   * <p>Inspect a single query argument. Provide the name of the query argument to inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p>
   *            <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
   */
  SingleQueryArgument?: SingleQueryArgument;

  /**
   * <p>Inspect all query arguments. </p>
   */
  AllQueryArguments?: AllQueryArguments;

  /**
   * <p>Inspect the request URI path. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  UriPath?: UriPath;

  /**
   * <p>Inspect the query string. This is the part of a URL that appears after a <code>?</code> character, if any.</p>
   */
  QueryString?: QueryString;

  /**
   * <p>Inspect the request body, which immediately follows the request headers. This is the part of a request that contains any
   *          additional data that you want to send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>Note that only the first 8 KB (8192 bytes) of the request body are forwarded to AWS WAF for inspection by the underlying host service. If you don't need to inspect more than 8 KB, you can guarantee that you don't allow additional bytes in by combining a statement that inspects the body of the web request, such as <a>ByteMatchStatement</a> or <a>RegexPatternSetReferenceStatement</a>, with a <a>SizeConstraintStatement</a> that enforces an 8 KB size limit on the body of the request. AWS WAF doesn't support inspecting the entire contents of web requests whose bodies exceed the 8 KB limit.</p>
   */
  Body?: Body;

  /**
   * <p>Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. </p>
   */
  Method?: Method;
}

export namespace FieldToMatch {
  export const filterSensitiveLog = (obj: FieldToMatch): any => ({
    ...obj,
  });
}

export enum PositionalConstraint {
  CONTAINS = "CONTAINS",
  CONTAINS_WORD = "CONTAINS_WORD",
  ENDS_WITH = "ENDS_WITH",
  EXACTLY = "EXACTLY",
  STARTS_WITH = "STARTS_WITH",
}

export enum TextTransformationType {
  CMD_LINE = "CMD_LINE",
  COMPRESS_WHITE_SPACE = "COMPRESS_WHITE_SPACE",
  HTML_ENTITY_DECODE = "HTML_ENTITY_DECODE",
  LOWERCASE = "LOWERCASE",
  NONE = "NONE",
  URL_DECODE = "URL_DECODE",
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 *          </p>
 */
export interface TextTransformation {
  /**
   * <p>Sets the relative processing order for multiple transformations that are defined for a rule statement. AWS WAF processes all
   *          transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different. </p>
   */
  Priority: number | undefined;

  /**
   * <p>You can specify the following transformation types:</p>
   *          <p>
   *             <b>CMD_LINE</b>
   *          </p>
   *          <p>When you're concerned that attackers are injecting an operating system command line
   *          command and using unusual formatting to disguise some or all of the command, use this
   *          option to perform the following transformations:</p>
   *          <ul>
   *             <li>
   *                <p>Delete the following characters: \ " ' ^</p>
   *             </li>
   *             <li>
   *                <p>Delete spaces before the following characters: / (</p>
   *             </li>
   *             <li>
   *                <p>Replace the following characters with a space: , ;</p>
   *             </li>
   *             <li>
   *                <p>Replace multiple spaces with one space</p>
   *             </li>
   *             <li>
   *                <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   *          <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   *          <ul>
   *             <li>
   *                <p>\f, formfeed, decimal 12</p>
   *             </li>
   *             <li>
   *                <p>\t, tab, decimal 9</p>
   *             </li>
   *             <li>
   *                <p>\n, newline, decimal 10</p>
   *             </li>
   *             <li>
   *                <p>\r, carriage return, decimal 13</p>
   *             </li>
   *             <li>
   *                <p>\v, vertical tab, decimal 11</p>
   *             </li>
   *             <li>
   *                <p>non-breaking space, decimal 160</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   *          <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   *          <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   *          the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>Replaces <code>(ampersand)quot;</code> with <code>"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p>
   *             </li>
   *             <li>
   *                <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p>
   *             </li>
   *             <li>
   *                <p>Replaces <code>(ampersand)gt;</code> with <code>></code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   *                characters</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>LOWERCASE</b>
   *          </p>
   *          <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   *          <p>
   *             <b>URL_DECODE</b>
   *          </p>
   *          <p>Use this option to decode a URL-encoded value.</p>
   *          <p>
   *             <b>NONE</b>
   *          </p>
   *          <p>Specify <code>NONE</code> if you don't want any text transformations.</p>
   */
  Type: TextTransformationType | string | undefined;
}

export namespace TextTransformation {
  export const filterSensitiveLog = (obj: TextTransformation): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p>
 */
export interface ByteMatchStatement {
  /**
   * <p>A string value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in <a>FieldToMatch</a>. The maximum length of the value is 50 bytes.</p>
   *          <p>Valid values depend on the component that you specify for inspection in <code>FieldToMatch</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Method</code>: The HTTP method that you want AWS WAF to search for. This indicates the type of operation specified in the request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UriPath</code>: The value that you want AWS WAF to search for in the URI path,
   *                for example, <code>/images/daily-ad.jpg</code>. </p>
   *             </li>
   *          </ul>
   *
   *          <p>If <code>SearchString</code> includes alphabetic characters A-Z and a-z, note that the value is case sensitive.</p>
   *          <p>
   *             <b>If you're using the AWS WAF API</b>
   *          </p>
   *          <p>Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 50 bytes.</p>
   *          <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the
   *          value of <code>Data</code> is <code>User-Agent</code>. If you want to search the
   *          <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode
   *          <code>BadBot</code> using MIME
   *          base64-encoding
   *          and include the resulting value, <code>QmFkQm90</code>, in the value of
   *          <code>SearchString</code>.</p>
   *          <p>
   *             <b>If you're using the AWS CLI or one of the AWS SDKs</b>
   *          </p>
   *          <p>The value that you want AWS WAF to search for. The SDK automatically base64 encodes the value.</p>
   */
  SearchString: Uint8Array | undefined;

  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * <p>The area within the portion of a web request that you want AWS WAF to search for <code>SearchString</code>. Valid values include the following:</p>
   *          <p>
   *             <b>CONTAINS</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of <code>SearchString</code>, but the location doesn't matter.</p>
   *          <p>
   *             <b>CONTAINS_WORD</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of <code>SearchString</code>, and
   *          <code>SearchString</code> must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition,
   *          <code>SearchString</code> must be a word, which means that both of the following are true:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the beginning of the specified part of the web request or is
   *                   preceded by a character other than an alphanumeric character or underscore (_).
   *                   Examples include the value of a header and <code>;BadBot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the end of the specified part of the web request or is
   *                   followed by a character other than an alphanumeric character or underscore (_), for example,
   *                   <code>BadBot;</code> and <code>-BadBot;</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>EXACTLY</b>
   *          </p>
   *          <p>The value of the specified part of the web request must exactly match the value of <code>SearchString</code>.</p>
   *          <p>
   *             <b>STARTS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the beginning of the specified part of the web request.</p>
   *          <p>
   *             <b>ENDS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the end of the specified part of the web request.</p>
   */
  PositionalConstraint: PositionalConstraint | string | undefined;
}

export namespace ByteMatchStatement {
  export const filterSensitiveLog = (obj: ByteMatchStatement): any => ({
    ...obj,
  });
}

export enum CountryCode {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AX = "AX",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BQ = "BQ",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BV = "BV",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GQ = "GQ",
  GR = "GR",
  GS = "GS",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HM = "HM",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PS = "PS",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  SS = "SS",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TF = "TF",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
}

export enum FallbackBehavior {
  MATCH = "MATCH",
  NO_MATCH = "NO_MATCH",
}

/**
 * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
 *
 *          <note>
 *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *
 *
 *          <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>.
 *            For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead.  </p>
 *          <p>AWS WAF only evaluates the first IP address found in the specified HTTP header. </p>
 */
export interface ForwardedIPConfig {
  /**
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>MATCH - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>NO_MATCH - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | string | undefined;
}

export namespace ForwardedIPConfig {
  export const filterSensitiveLog = (obj: ForwardedIPConfig): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to identify web requests based on country of origin.  </p>
 */
export interface GeoMatchStatement {
  /**
   * <p>An array of two-character country codes, for example, <code>[ "US", "CN" ]</code>, from the alpha-2 country ISO codes of the ISO 3166 international standard. </p>
   */
  CountryCodes?: (CountryCode | string)[];

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  ForwardedIPConfig?: ForwardedIPConfig;
}

export namespace GeoMatchStatement {
  export const filterSensitiveLog = (obj: GeoMatchStatement): any => ({
    ...obj,
  });
}

export enum ForwardedIPPosition {
  ANY = "ANY",
  FIRST = "FIRST",
  LAST = "LAST",
}

/**
 * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
 *
 *          <note>
 *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *
 *
 *          <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead.  </p>
 */
export interface IPSetForwardedIPConfig {
  /**
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>MATCH - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>NO_MATCH - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | string | undefined;

  /**
   * <p>The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be <code>10.1.1.1, 127.0.0.0, 10.10.10.10</code> where the first IP address identifies the original client and the rest identify proxies that the request went through. </p>
   *          <p>The options for this setting are the following: </p>
   *          <ul>
   *             <li>
   *                <p>FIRST - Inspect the first IP address in the list of IP addresses in the header. This is usually the client's original IP.</p>
   *             </li>
   *             <li>
   *                <p>LAST - Inspect the last IP address in the list of IP addresses in the header.</p>
   *             </li>
   *             <li>
   *                <p>ANY - Inspect all IP addresses in the header for a match. If the header contains more than 10 IP addresses, AWS WAF inspects the last 10.</p>
   *             </li>
   *          </ul>
   */
  Position: ForwardedIPPosition | string | undefined;
}

export namespace IPSetForwardedIPConfig {
  export const filterSensitiveLog = (obj: IPSetForwardedIPConfig): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
 *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
 */
export interface IPSetReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>IPSet</a> that this statement references.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}

export namespace IPSetReferenceStatement {
  export const filterSensitiveLog = (obj: IPSetReferenceStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies a single rule to exclude from the rule group. Excluding a rule overrides
 *          its action setting for the rule group in the web ACL, setting it to <code>COUNT</code>.
 *          This effectively excludes the rule from acting on web requests.  </p>
 */
export interface ExcludedRule {
  /**
   * <p>The name of the rule to exclude.</p>
   */
  Name: string | undefined;
}

export namespace ExcludedRule {
  export const filterSensitiveLog = (obj: ExcludedRule): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
 *          <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
 */
export interface ManagedRuleGroupStatement {
  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rules whose actions are set to <code>COUNT</code> by the web ACL, regardless of the action that is set on the rule. This effectively excludes the rule from acting on web requests.  </p>
   */
  ExcludedRules?: ExcludedRule[];
}

export namespace ManagedRuleGroupStatement {
  export const filterSensitiveLog = (obj: ManagedRuleGroupStatement): any => ({
    ...obj,
  });
}

export enum RateBasedStatementAggregateKeyType {
  FORWARDED_IP = "FORWARDED_IP",
  IP = "IP",
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
 *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
 */
export interface RegexPatternSetReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>RegexPatternSet</a> that this statement references.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace RegexPatternSetReferenceStatement {
  export const filterSensitiveLog = (obj: RegexPatternSetReferenceStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
 *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
 */
export interface RuleGroupReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The names of rules that are in the referenced rule group, but that you want AWS WAF to exclude from processing for this rule statement. </p>
   */
  ExcludedRules?: ExcludedRule[];
}

export namespace RuleGroupReferenceStatement {
  export const filterSensitiveLog = (obj: RuleGroupReferenceStatement): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  EQ = "EQ",
  GE = "GE",
  GT = "GT",
  LE = "LE",
  LT = "LT",
  NE = "NE",
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
 *          <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p>
 *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
 */
export interface SizeConstraintStatement {
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>The operator to use to compare the request part to the size setting. </p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The size, in byte, to compare to the request part, after any transformations.</p>
   */
  Size: number | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SizeConstraintStatement {
  export const filterSensitiveLog = (obj: SizeConstraintStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
 */
export interface SqliMatchStatement {
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SqliMatchStatement {
  export const filterSensitiveLog = (obj: SqliMatchStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests.
 *          XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious
 *          client-site scripts into other legitimate web browsers.
 *          The XSS match statement provides the location in requests that you want AWS WAF to search and text transformations
 *          to use on the search area before AWS WAF searches for character sequences that are likely to be malicious strings. </p>
 */
export interface XssMatchStatement {
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace XssMatchStatement {
  export const filterSensitiveLog = (obj: XssMatchStatement): any => ({
    ...obj,
  });
}

export interface AssociateWebACLRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.</p>
   */
  WebACLArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the web ACL. </p>
   *
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an API Gateway REST API: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AppSync GraphQL API: <code>arn:aws:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

export namespace AssociateWebACLRequest {
  export const filterSensitiveLog = (obj: AssociateWebACLRequest): any => ({
    ...obj,
  });
}

export interface AssociateWebACLResponse {}

export namespace AssociateWebACLResponse {
  export const filterSensitiveLog = (obj: AssociateWebACLResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your request is valid, but AWS WAF couldn’t perform the operation because of a system problem. Retry your request. </p>
 */
export interface WAFInternalErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFInternalErrorException {
  export const filterSensitiveLog = (obj: WAFInternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation isn't valid. </p>
 */
export interface WAFInvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace WAFInvalidOperationException {
  export const filterSensitiveLog = (obj: WAFInvalidOperationException): any => ({
    ...obj,
  });
}

export enum ParameterExceptionField {
  AND_STATEMENT = "AND_STATEMENT",
  BYTE_MATCH_STATEMENT = "BYTE_MATCH_STATEMENT",
  DEFAULT_ACTION = "DEFAULT_ACTION",
  ENTITY_LIMIT = "ENTITY_LIMIT",
  EXCLUDED_RULE = "EXCLUDED_RULE",
  FALLBACK_BEHAVIOR = "FALLBACK_BEHAVIOR",
  FIELD_TO_MATCH = "FIELD_TO_MATCH",
  FIREWALL_MANAGER_STATEMENT = "FIREWALL_MANAGER_STATEMENT",
  FORWARDED_IP_CONFIG = "FORWARDED_IP_CONFIG",
  GEO_MATCH_STATEMENT = "GEO_MATCH_STATEMENT",
  HEADER_NAME = "HEADER_NAME",
  IP_ADDRESS = "IP_ADDRESS",
  IP_ADDRESS_VERSION = "IP_ADDRESS_VERSION",
  IP_SET = "IP_SET",
  IP_SET_FORWARDED_IP_CONFIG = "IP_SET_FORWARDED_IP_CONFIG",
  IP_SET_REFERENCE_STATEMENT = "IP_SET_REFERENCE_STATEMENT",
  MANAGED_RULE_SET = "MANAGED_RULE_SET",
  MANAGED_RULE_SET_STATEMENT = "MANAGED_RULE_SET_STATEMENT",
  METRIC_NAME = "METRIC_NAME",
  NOT_STATEMENT = "NOT_STATEMENT",
  OR_STATEMENT = "OR_STATEMENT",
  OVERRIDE_ACTION = "OVERRIDE_ACTION",
  POSITION = "POSITION",
  RATE_BASED_STATEMENT = "RATE_BASED_STATEMENT",
  REGEX_PATTERN_REFERENCE_STATEMENT = "REGEX_PATTERN_REFERENCE_STATEMENT",
  REGEX_PATTERN_SET = "REGEX_PATTERN_SET",
  RESOURCE_ARN = "RESOURCE_ARN",
  RESOURCE_TYPE = "RESOURCE_TYPE",
  RULE = "RULE",
  RULE_ACTION = "RULE_ACTION",
  RULE_GROUP = "RULE_GROUP",
  RULE_GROUP_REFERENCE_STATEMENT = "RULE_GROUP_REFERENCE_STATEMENT",
  SCOPE_VALUE = "SCOPE_VALUE",
  SINGLE_HEADER = "SINGLE_HEADER",
  SINGLE_QUERY_ARGUMENT = "SINGLE_QUERY_ARGUMENT",
  SIZE_CONSTRAINT_STATEMENT = "SIZE_CONSTRAINT_STATEMENT",
  SQLI_MATCH_STATEMENT = "SQLI_MATCH_STATEMENT",
  STATEMENT = "STATEMENT",
  TAGS = "TAGS",
  TAG_KEYS = "TAG_KEYS",
  TEXT_TRANSFORMATION = "TEXT_TRANSFORMATION",
  WEB_ACL = "WEB_ACL",
  XSS_MATCH_STATEMENT = "XSS_MATCH_STATEMENT",
}

/**
 * <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an invalid parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that isn't among the types
 *                available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource with which a Web ACL cannot be associated.</p>
 *             </li>
 *          </ul>
 */
export interface WAFInvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidParameterException";
  $fault: "client";
  message?: string;
  Field?: ParameterExceptionField | string;
  Parameter?: string;
  Reason?: string;
}

export namespace WAFInvalidParameterException {
  export const filterSensitiveLog = (obj: WAFInvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform the operation because your resource doesn’t exist. </p>
 */
export interface WAFNonexistentItemException extends __SmithyException, $MetadataBearer {
  name: "WAFNonexistentItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFNonexistentItemException {
  export const filterSensitiveLog = (obj: WAFNonexistentItemException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t retrieve the resource that you requested. Retry your request.</p>
 */
export interface WAFUnavailableEntityException extends __SmithyException, $MetadataBearer {
  name: "WAFUnavailableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace WAFUnavailableEntityException {
  export const filterSensitiveLog = (obj: WAFUnavailableEntityException): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should block requests.</p>
 *            <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface BlockAction {}

export namespace BlockAction {
  export const filterSensitiveLog = (obj: BlockAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should count requests.</p>
 *            <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface CountAction {}

export namespace CountAction {
  export const filterSensitiveLog = (obj: CountAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p>
 */
export interface RuleAction {
  /**
   * <p>Instructs AWS WAF to block the web request.</p>
   */
  Block?: BlockAction;

  /**
   * <p>Instructs AWS WAF to allow the web request.</p>
   */
  Allow?: AllowAction;

  /**
   * <p>Instructs AWS WAF to count the web request and allow it.</p>
   */
  Count?: CountAction;
}

export namespace RuleAction {
  export const filterSensitiveLog = (obj: RuleAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should do nothing. This is generally used to try out a rule without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>. </p>
 *            <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface NoneAction {}

export namespace NoneAction {
  export const filterSensitiveLog = (obj: NoneAction): any => ({
    ...obj,
  });
}

/**
 * <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group,
 *            like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
 *         <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p>
 *         <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p>
 *          <ul>
 *             <li>
 *                <p>If the rule statement references a rule group, use this override action setting and not the action setting.  </p>
 *             </li>
 *             <li>
 *                <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p>
 *             </li>
 *          </ul>
 */
export interface OverrideAction {
  /**
   * <p>Override the rule action setting to count.</p>
   */
  Count?: CountAction;

  /**
   * <p>Don't override the rule action setting.</p>
   */
  None?: NoneAction;
}

export namespace OverrideAction {
  export const filterSensitiveLog = (obj: OverrideAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
 */
export interface VisibilityConfig {
  /**
   * <p>A boolean indicating whether AWS WAF should store a sampling of the web
   *            requests that match the rules. You can view the sampled requests through the
   *            AWS WAF console. </p>
   */
  SampledRequestsEnabled: boolean | undefined;

  /**
   * <p>A boolean indicating whether the associated resource sends metrics to CloudWatch. For the list of available metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">AWS WAF Metrics</a>.</p>
   */
  CloudWatchMetricsEnabled: boolean | undefined;

  /**
   * <p>A name of the CloudWatch metric. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain
   *          whitespace or metric names reserved for AWS WAF, for example "All" and "Default_Action." </p>
   */
  MetricName: string | undefined;
}

export namespace VisibilityConfig {
  export const filterSensitiveLog = (obj: VisibilityConfig): any => ({
    ...obj,
  });
}

export enum Scope {
  CLOUDFRONT = "CLOUDFRONT",
  REGIONAL = "REGIONAL",
}

export interface CheckCapacityResponse {
  /**
   * <p>The capacity required by the rules and scope.</p>
   */
  Capacity?: number;
}

export namespace CheckCapacityResponse {
  export const filterSensitiveLog = (obj: CheckCapacityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform the operation because the resource that you requested isn’t valid. Check the resource, and try again.</p>
 */
export interface WAFInvalidResourceException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidResourceException";
  $fault: "client";
  Message?: string;
}

export namespace WAFInvalidResourceException {
  export const filterSensitiveLog = (obj: WAFInvalidResourceException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of <code>WebACL</code> objects that you can create
 *          for an AWS account. For more information, see
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface WAFLimitsExceededException extends __SmithyException, $MetadataBearer {
  name: "WAFLimitsExceededException";
  $fault: "client";
  Message?: string;
}

export namespace WAFLimitsExceededException {
  export const filterSensitiveLog = (obj: WAFLimitsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface WAFSubscriptionNotFoundException extends __SmithyException, $MetadataBearer {
  name: "WAFSubscriptionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace WAFSubscriptionNotFoundException {
  export const filterSensitiveLog = (obj: WAFSubscriptionNotFoundException): any => ({
    ...obj,
  });
}

export enum IPAddressVersion {
  IPV4 = "IPV4",
  IPV6 = "IPV6",
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *         <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a
 *   specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
 *         <p>You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP
 *   sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console. </p>
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateIPSetRequest {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A description of the IP set that helps with identification. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Specify IPV4 or IPV6. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all address ranges for IP versions IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateIPSetRequest {
  export const filterSensitiveLog = (obj: CreateIPSetRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
 */
export interface IPSetSummary {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A description of the IP set that helps with identification. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace IPSetSummary {
  export const filterSensitiveLog = (obj: IPSetSummary): any => ({
    ...obj,
  });
}

export interface CreateIPSetResponse {
  /**
   * <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
   */
  Summary?: IPSetSummary;
}

export namespace CreateIPSetResponse {
  export const filterSensitiveLog = (obj: CreateIPSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform the operation because the resource that you tried to save is a duplicate of an existing one.</p>
 */
export interface WAFDuplicateItemException extends __SmithyException, $MetadataBearer {
  name: "WAFDuplicateItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFDuplicateItemException {
  export const filterSensitiveLog = (obj: WAFDuplicateItemException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t save your changes because you tried to update or delete a resource that has changed since you last retrieved it. Get the resource again, make any changes you need to make to the new copy, and retry your operation. </p>
 */
export interface WAFOptimisticLockException extends __SmithyException, $MetadataBearer {
  name: "WAFOptimisticLockException";
  $fault: "client";
  Message?: string;
}

export namespace WAFOptimisticLockException {
  export const filterSensitiveLog = (obj: WAFOptimisticLockException): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred during the tagging operation. Retry your request.</p>
 */
export interface WAFTagOperationException extends __SmithyException, $MetadataBearer {
  name: "WAFTagOperationException";
  $fault: "client";
  Message?: string;
}

export namespace WAFTagOperationException {
  export const filterSensitiveLog = (obj: WAFTagOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform your tagging operation because of an internal error. Retry your request.</p>
 */
export interface WAFTagOperationInternalErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFTagOperationInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFTagOperationInternalErrorException {
  export const filterSensitiveLog = (obj: WAFTagOperationInternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p>
 */
export interface Regex {
  /**
   * <p>The string representing the regular expression.</p>
   */
  RegexString?: string;
}

export namespace Regex {
  export const filterSensitiveLog = (obj: Regex): any => ({
    ...obj,
  });
}

export interface CreateRegexPatternSetRequest {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A description of the set that helps with identification. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Array of regular expression strings. </p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateRegexPatternSetRequest {
  export const filterSensitiveLog = (obj: CreateRegexPatternSetRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
 */
export interface RegexPatternSetSummary {
  /**
   * <p>The name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A description of the set that helps with identification. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace RegexPatternSetSummary {
  export const filterSensitiveLog = (obj: RegexPatternSetSummary): any => ({
    ...obj,
  });
}

export interface CreateRegexPatternSetResponse {
  /**
   * <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
   */
  Summary?: RegexPatternSetSummary;
}

export namespace CreateRegexPatternSetResponse {
  export const filterSensitiveLog = (obj: CreateRegexPatternSetResponse): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleGroupSummary {
  /**
   * <p>The name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A description of the rule group that helps with identification. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace RuleGroupSummary {
  export const filterSensitiveLog = (obj: RuleGroupSummary): any => ({
    ...obj,
  });
}

export interface CreateRuleGroupResponse {
  /**
   * <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
   */
  Summary?: RuleGroupSummary;
}

export namespace CreateRuleGroupResponse {
  export const filterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>In a <a>WebACL</a>, this is the action that you want AWS WAF
 *          to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
 */
export interface DefaultAction {
  /**
   * <p>Specifies that AWS WAF should block requests by default. </p>
   */
  Block?: BlockAction;

  /**
   * <p>Specifies that AWS WAF should allow requests by default.</p>
   */
  Allow?: AllowAction;
}

export namespace DefaultAction {
  export const filterSensitiveLog = (obj: DefaultAction): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
 */
export interface WebACLSummary {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A description of the Web ACL that helps with identification. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace WebACLSummary {
  export const filterSensitiveLog = (obj: WebACLSummary): any => ({
    ...obj,
  });
}

export interface CreateWebACLResponse {
  /**
   * <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
   */
  Summary?: WebACLSummary;
}

export namespace CreateWebACLResponse {
  export const filterSensitiveLog = (obj: CreateWebACLResponse): any => ({
    ...obj,
  });
}

export interface DeleteFirewallManagerRuleGroupsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL.</p>
   */
  WebACLArn: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  WebACLLockToken: string | undefined;
}

export namespace DeleteFirewallManagerRuleGroupsRequest {
  export const filterSensitiveLog = (obj: DeleteFirewallManagerRuleGroupsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFirewallManagerRuleGroupsResponse {
  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  NextWebACLLockToken?: string;
}

export namespace DeleteFirewallManagerRuleGroupsResponse {
  export const filterSensitiveLog = (obj: DeleteFirewallManagerRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface DeleteIPSetRequest {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteIPSetRequest {
  export const filterSensitiveLog = (obj: DeleteIPSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteIPSetResponse {}

export namespace DeleteIPSetResponse {
  export const filterSensitiveLog = (obj: DeleteIPSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF couldn’t perform the operation because your resource is being used by another resource or it’s associated with another resource. </p>
 */
export interface WAFAssociatedItemException extends __SmithyException, $MetadataBearer {
  name: "WAFAssociatedItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFAssociatedItemException {
  export const filterSensitiveLog = (obj: WAFAssociatedItemException): any => ({
    ...obj,
  });
}

export interface DeleteLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL from which you want to delete the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoggingConfigurationResponse {}

export namespace DeleteLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeletePermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group from which you want to delete the policy.</p>
   *         <p>You must be the owner of the rule group to perform this operation.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeletePermissionPolicyRequest {
  export const filterSensitiveLog = (obj: DeletePermissionPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeletePermissionPolicyResponse {}

export namespace DeletePermissionPolicyResponse {
  export const filterSensitiveLog = (obj: DeletePermissionPolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteRegexPatternSetRequest {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteRegexPatternSetRequest {
  export const filterSensitiveLog = (obj: DeleteRegexPatternSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteRegexPatternSetResponse {}

export namespace DeleteRegexPatternSetResponse {
  export const filterSensitiveLog = (obj: DeleteRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export interface DeleteRuleGroupRequest {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteRuleGroupRequest {
  export const filterSensitiveLog = (obj: DeleteRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleGroupResponse {}

export namespace DeleteRuleGroupResponse {
  export const filterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteWebACLRequest {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteWebACLRequest {
  export const filterSensitiveLog = (obj: DeleteWebACLRequest): any => ({
    ...obj,
  });
}

export interface DeleteWebACLResponse {}

export namespace DeleteWebACLResponse {
  export const filterSensitiveLog = (obj: DeleteWebACLResponse): any => ({
    ...obj,
  });
}

export interface DescribeManagedRuleGroupRequest {
  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace DescribeManagedRuleGroupRequest {
  export const filterSensitiveLog = (obj: DescribeManagedRuleGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule. </p>
   */
  Name?: string;

  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p>
   */
  Action?: RuleAction;
}

export namespace RuleSummary {
  export const filterSensitiveLog = (obj: RuleSummary): any => ({
    ...obj,
  });
}

export interface DescribeManagedRuleGroupResponse {
  /**
   * <p>The web ACL capacity units (WCUs) required for this rule group.
   *          AWS WAF uses web ACL capacity units (WCU) to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
   *          calculates capacity differently for each rule type, to reflect each rule's relative
   *          cost. Rule group capacity is fixed at creation, so users can plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity?: number;

  /**
   * <p></p>
   */
  Rules?: RuleSummary[];
}

export namespace DescribeManagedRuleGroupResponse {
  export const filterSensitiveLog = (obj: DescribeManagedRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateWebACLRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL. </p>
   *
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an API Gateway REST API: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AppSync GraphQL API: <code>arn:aws:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

export namespace DisassociateWebACLRequest {
  export const filterSensitiveLog = (obj: DisassociateWebACLRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWebACLResponse {}

export namespace DisassociateWebACLResponse {
  export const filterSensitiveLog = (obj: DisassociateWebACLResponse): any => ({
    ...obj,
  });
}

export interface GetIPSetRequest {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

export namespace GetIPSetRequest {
  export const filterSensitiveLog = (obj: GetIPSetRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports any CIDR range. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
 *             Inter-Domain Routing</a>. </p>
 *          <p>AWS WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>
 */
export interface IPSet {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * <p>A description of the IP set that helps with identification. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Specify IPV4 or IPV6. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all address ranges for IP versions IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;
}

export namespace IPSet {
  export const filterSensitiveLog = (obj: IPSet): any => ({
    ...obj,
  });
}

export interface GetIPSetResponse {
  /**
   * <p></p>
   */
  IPSet?: IPSet;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetIPSetResponse {
  export const filterSensitiveLog = (obj: GetIPSetResponse): any => ({
    ...obj,
  });
}

export interface GetLoggingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL for which you want to get the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for
 *          logging from AWS WAF.
 *          As part of the association, you can specify parts of the standard logging fields to keep out of the logs.
 *          </p>
 */
export interface LoggingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with
   *          <code>LogDestinationConfigs</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Amazon Kinesis Data Firehose Amazon Resource Name (ARNs) that you want to associate with the web ACL.</p>
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * <p>The parts of the request that you want to keep out of the logs. For
   *           example, if you redact the <code>HEADER</code> field, the <code>HEADER</code> field in the firehose will be <code>xxx</code>. </p>
   *          <note>
   *            <p>You must use one of the following values: <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or <code>METHOD</code>.</p>
   *         </note>
   */
  RedactedFields?: FieldToMatch[];

  /**
   * <p>Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only
   *    Firewall Manager can modify or delete the configuration. </p>
   */
  ManagedByFirewallManager?: boolean;
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

export interface GetLoggingConfigurationResponse {
  /**
   * <p>The <a>LoggingConfiguration</a> for the specified web ACL.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace GetLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: GetLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetPermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group for which you want to get the policy.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetPermissionPolicyRequest {
  export const filterSensitiveLog = (obj: GetPermissionPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetPermissionPolicyResponse {
  /**
   * <p>The IAM policy that is attached to the specified rule group.</p>
   */
  Policy?: string;
}

export namespace GetPermissionPolicyResponse {
  export const filterSensitiveLog = (obj: GetPermissionPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetRateBasedStatementManagedKeysRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  WebACLName: string | undefined;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  WebACLId: string | undefined;

  /**
   * <p>The name of the rate-based rule to get the keys for.</p>
   */
  RuleName: string | undefined;
}

export namespace GetRateBasedStatementManagedKeysRequest {
  export const filterSensitiveLog = (obj: GetRateBasedStatementManagedKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The set of IP addresses that are currently blocked for a rate-based statement.</p>
 */
export interface RateBasedStatementManagedKeysIPSet {
  IPAddressVersion?: IPAddressVersion | string;
  /**
   * <p>The IP addresses that are currently blocked.</p>
   */
  Addresses?: string[];
}

export namespace RateBasedStatementManagedKeysIPSet {
  export const filterSensitiveLog = (obj: RateBasedStatementManagedKeysIPSet): any => ({
    ...obj,
  });
}

export interface GetRateBasedStatementManagedKeysResponse {
  /**
   * <p>The keys that are of Internet Protocol version 4 (IPv4). </p>
   */
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;

  /**
   * <p>The keys that are of Internet Protocol version 6 (IPv6). </p>
   */
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
}

export namespace GetRateBasedStatementManagedKeysResponse {
  export const filterSensitiveLog = (obj: GetRateBasedStatementManagedKeysResponse): any => ({
    ...obj,
  });
}

export interface GetRegexPatternSetRequest {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

export namespace GetRegexPatternSetRequest {
  export const filterSensitiveLog = (obj: GetRegexPatternSetRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Contains one or more regular expressions. </p>
 *          <p>AWS WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>
 */
export interface RegexPatternSet {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A description of the set that helps with identification. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The regular expression patterns in the set.</p>
   */
  RegularExpressionList?: Regex[];
}

export namespace RegexPatternSet {
  export const filterSensitiveLog = (obj: RegexPatternSet): any => ({
    ...obj,
  });
}

export interface GetRegexPatternSetResponse {
  /**
   * <p></p>
   */
  RegexPatternSet?: RegexPatternSet;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetRegexPatternSetResponse {
  export const filterSensitiveLog = (obj: GetRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export interface GetRuleGroupRequest {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

export namespace GetRuleGroupRequest {
  export const filterSensitiveLog = (obj: GetRuleGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 *          for which you want AWS WAF to return a sample of web requests.</p>
 *          <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
 *          <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 *          for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first
 *          5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000
 *          requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code>
 *          is the time that AWS WAF received the 5,000th request.</p>
 */
export interface TimeWindow {
  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   *          AWS resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   *          AWS resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  EndTime: Date | undefined;
}

export namespace TimeWindow {
  export const filterSensitiveLog = (obj: TimeWindow): any => ({
    ...obj,
  });
}

export interface GetSampledRequestsRequest {
  /**
   * <p>The Amazon resource name (ARN) of the <code>WebACL</code> for which you want a sample of requests.</p>
   */
  WebAclArn: string | undefined;

  /**
   * <p>The metric name assigned to the <code>Rule</code> or <code>RuleGroup</code> for which you want a sample of requests.</p>
   */
  RuleMetricName: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The start date and time and the end date and time of the range for which you want <code>GetSampledRequests</code> to return a
   *           sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * <p>The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received
   *          during the time range. If your resource received fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code>
   *          returns information about all of them. </p>
   */
  MaxItems: number | undefined;
}

export namespace GetSampledRequestsRequest {
  export const filterSensitiveLog = (obj: GetSampledRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that
 *          appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of
 *          all of the headers that appear in one of the web requests. </p>
 */
export interface HTTPHeader {
  /**
   * <p>The name of the HTTP header.</p>
   */
  Name?: string;

  /**
   * <p>The value of the HTTP header.</p>
   */
  Value?: string;
}

export namespace HTTPHeader {
  export const filterSensitiveLog = (obj: HTTPHeader): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Part of the response from <a>GetSampledRequests</a>.  This is a complex type that
 *          appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about
 *          one of the web requests. </p>
 */
export interface HTTPRequest {
  /**
   * <p>The IP address that the request originated from. If the web ACL is associated with a CloudFront distribution,
   *          this is the value of one of the following fields in CloudFront access logs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send the request</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer to send the request</p>
   *             </li>
   *          </ul>
   */
  ClientIP?: string;

  /**
   * <p>The two-letter country code for the country that the request originated from. For a current list of country codes,
   *          see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.</p>
   */
  Country?: string;

  /**
   * <p>The URI path of the request, which identifies the resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;

  /**
   * <p>The HTTP method specified in the sampled web request. </p>
   */
  Method?: string;

  /**
   * <p>The HTTP version specified in the sampled web request, for example, <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * <p>A complex type that contains the name and value for each header in the sampled web request.</p>
   */
  Headers?: HTTPHeader[];
}

export namespace HTTPRequest {
  export const filterSensitiveLog = (obj: HTTPRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that
 *          appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.</p>
 */
export interface SampledHTTPRequest {
  /**
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: HTTPRequest | undefined;

  /**
   * <p>A value that indicates how one result in the response relates
   *          proportionally to other results in the response.
   *          For example, a result that has a weight of <code>2</code> represents roughly twice
   *          as many web requests as a result
   *          that has a weight of <code>1</code>.</p>
   */
  Weight: number | undefined;

  /**
   * <p>The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).</p>
   */
  Timestamp?: Date;

  /**
   * <p>The action for the <code>Rule</code> that the request matched: <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
   */
  Action?: string;

  /**
   * <p>The name of the <code>Rule</code> that the request matched. For managed rule groups, the format for this name is <code><vendor name>#<managed rule group name>#<rule name></code>. For your own rule
   *          groups, the format for this name is <code><rule group name>#<rule name></code>. If the rule is not in a rule group, this field is absent. </p>
   */
  RuleNameWithinRuleGroup?: string;
}

export namespace SampledHTTPRequest {
  export const filterSensitiveLog = (obj: SampledHTTPRequest): any => ({
    ...obj,
  });
}

export interface GetSampledRequestsResponse {
  /**
   * <p>A complex type that contains detailed information about each of the requests in the sample.</p>
   */
  SampledRequests?: SampledHTTPRequest[];

  /**
   * <p>The total number of requests from which <code>GetSampledRequests</code> got a sample of <code>MaxItems</code> requests.
   *          If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your AWS resource
   *          received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request.
   *             However, if your AWS resource received more than 5,000 requests during the time range that you specified in the request,
   *          <code>GetSampledRequests</code> returns the time range for the first 5,000 requests. Times are in Coordinated Universal Time (UTC) format.</p>
   */
  TimeWindow?: TimeWindow;
}

export namespace GetSampledRequestsResponse {
  export const filterSensitiveLog = (obj: GetSampledRequestsResponse): any => ({
    ...obj,
  });
}

export interface GetWebACLRequest {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

export namespace GetWebACLRequest {
  export const filterSensitiveLog = (obj: GetWebACLRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The processing guidance for an AWS Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.</p>
 */
export interface FirewallManagerStatement {
  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
   *          <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}

export namespace FirewallManagerStatement {
  export const filterSensitiveLog = (obj: FirewallManagerStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A rule group that's defined for an AWS Firewall Manager WAF policy.</p>
 */
export interface FirewallManagerRuleGroup {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>If you define more than one rule group in the first or last Firewall Manager rule groups,
   *           AWS WAF evaluates each request against the rule groups in order, starting from the lowest priority setting.
   *          The priorities don't need to be consecutive, but they must all be different.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The processing guidance for an AWS Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.</p>
   */
  FirewallManagerStatement: FirewallManagerStatement | undefined;

  /**
   * <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group,
   *            like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *         <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p>
   *         <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p>
   *          <ul>
   *             <li>
   *                <p>If the rule statement references a rule group, use this override action setting and not the action setting.  </p>
   *             </li>
   *             <li>
   *                <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p>
   *             </li>
   *          </ul>
   */
  OverrideAction: OverrideAction | undefined;

  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace FirewallManagerRuleGroup {
  export const filterSensitiveLog = (obj: FirewallManagerRuleGroup): any => ({
    ...obj,
  });
}

export interface GetWebACLForResourceRequest {
  /**
   * <p>The ARN (Amazon Resource Name) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetWebACLForResourceRequest {
  export const filterSensitiveLog = (obj: GetWebACLForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListAvailableManagedRuleGroupsRequest {
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include AWS Managed Rules rule groups, which are free of charge to AWS WAF customers, and AWS Marketplace managed rule groups, which you can subscribe to through AWS Marketplace. </p>
 */
export interface ManagedRuleGroupSummary {
  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName?: string;

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the managed rule group, provided by AWS Managed Rules or the AWS Marketplace seller who manages it.</p>
   */
  Description?: string;
}

export namespace ManagedRuleGroupSummary {
  export const filterSensitiveLog = (obj: ManagedRuleGroupSummary): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  ManagedRuleGroups?: ManagedRuleGroupSummary[];
}

export namespace ListAvailableManagedRuleGroupsResponse {
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListIPSetsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListIPSetsRequest {
  export const filterSensitiveLog = (obj: ListIPSetsRequest): any => ({
    ...obj,
  });
}

export interface ListIPSetsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Array of IPSets. This may not be the full list of IPSets that you have defined. See the <code>Limit</code> specification for this request.</p>
   */
  IPSets?: IPSetSummary[];
}

export namespace ListIPSetsResponse {
  export const filterSensitiveLog = (obj: ListIPSetsResponse): any => ({
    ...obj,
  });
}

export interface ListLoggingConfigurationsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope?: Scope | string;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListLoggingConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListLoggingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListLoggingConfigurationsResponse {
  /**
   * <p></p>
   */
  LoggingConfigurations?: LoggingConfiguration[];

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

export namespace ListLoggingConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListLoggingConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListRegexPatternSetsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListRegexPatternSetsRequest {
  export const filterSensitiveLog = (obj: ListRegexPatternSetsRequest): any => ({
    ...obj,
  });
}

export interface ListRegexPatternSetsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  RegexPatternSets?: RegexPatternSetSummary[];
}

export namespace ListRegexPatternSetsResponse {
  export const filterSensitiveLog = (obj: ListRegexPatternSetsResponse): any => ({
    ...obj,
  });
}

export enum ResourceType {
  API_GATEWAY = "API_GATEWAY",
  APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER",
  APPSYNC = "APPSYNC",
}

export interface ListResourcesForWebACLRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL.</p>
   */
  WebACLArn: string | undefined;

  /**
   * <p>Used for web ACLs that are scoped for regional applications. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API. </p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ListResourcesForWebACLRequest {
  export const filterSensitiveLog = (obj: ListResourcesForWebACLRequest): any => ({
    ...obj,
  });
}

export interface ListResourcesForWebACLResponse {
  /**
   * <p>The array of Amazon Resource Names (ARNs) of the associated resources.</p>
   */
  ResourceArns?: string[];
}

export namespace ListResourcesForWebACLResponse {
  export const filterSensitiveLog = (obj: ListResourcesForWebACLResponse): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListRuleGroupsRequest {
  export const filterSensitiveLog = (obj: ListRuleGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  RuleGroups?: RuleGroupSummary[];
}

export namespace ListRuleGroupsResponse {
  export const filterSensitiveLog = (obj: ListRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *         <p>The collection of tagging definitions for an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a
 *   specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
 *         <p>You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP
 *   sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console. </p>
 */
export interface TagInfoForResource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The array of <a>Tag</a> objects defined for the resource. </p>
   */
  TagList?: Tag[];
}

export namespace TagInfoForResource {
  export const filterSensitiveLog = (obj: TagInfoForResource): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The collection of tagging definitions for the resource. </p>
   */
  TagInfoForResource?: TagInfoForResource;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListWebACLsRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListWebACLsRequest {
  export const filterSensitiveLog = (obj: ListWebACLsRequest): any => ({
    ...obj,
  });
}

export interface ListWebACLsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  WebACLs?: WebACLSummary[];
}

export namespace ListWebACLsResponse {
  export const filterSensitiveLog = (obj: ListWebACLsResponse): any => ({
    ...obj,
  });
}

export interface PutLoggingConfigurationRequest {
  /**
   * <p></p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

export namespace PutLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: PutLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutLoggingConfigurationResponse {
  /**
   * <p></p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace PutLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: PutLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a call to <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
 */
export interface WAFServiceLinkedRoleErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFServiceLinkedRoleErrorException";
  $fault: "client";
  message?: string;
}

export namespace WAFServiceLinkedRoleErrorException {
  export const filterSensitiveLog = (obj: WAFServiceLinkedRoleErrorException): any => ({
    ...obj,
  });
}

export interface PutPermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>RuleGroup</a> to which you want to attach the policy.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The policy to attach to the specified rule group. </p>
   *
   *          <p>The policy specifications must conform to the following:</p>
   *          <ul>
   *             <li>
   *                <p>The policy must be composed using IAM Policy version 2012-10-17 or version 2015-01-01.</p>
   *             </li>
   *             <li>
   *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Effect</code> must specify <code>Allow</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and <code>wafv2:PutFirewallManagerRuleGroups</code>. AWS WAF rejects any extra actions or wildcard actions in the policy.</p>
   *             </li>
   *             <li>
   *                <p>The policy must not include a <code>Resource</code> parameter.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
   */
  Policy: string | undefined;
}

export namespace PutPermissionPolicyRequest {
  export const filterSensitiveLog = (obj: PutPermissionPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutPermissionPolicyResponse {}

export namespace PutPermissionPolicyResponse {
  export const filterSensitiveLog = (obj: PutPermissionPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because the specified policy isn't in the proper format. </p>
 *
 *          <p>The policy specifications must conform to the following:</p>
 *          <ul>
 *             <li>
 *                <p>The policy must be composed using IAM Policy version 2012-10-17 or version 2015-01-01.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and <code>wafv2:PutFirewallManagerRuleGroups</code>. AWS WAF rejects any extra actions or wildcard actions in the policy.</p>
 *             </li>
 *             <li>
 *                <p>The policy must not include a <code>Resource</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
 */
export interface WAFInvalidPermissionPolicyException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidPermissionPolicyException";
  $fault: "client";
  Message?: string;
}

export namespace WAFInvalidPermissionPolicyException {
  export const filterSensitiveLog = (obj: WAFInvalidPermissionPolicyException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>An array of keys identifying the tags to disassociate from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateIPSetRequest {
  /**
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A description of the IP set that helps with identification. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all address ranges for IP versions IPv4 and IPv6. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
   *          Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateIPSetRequest {
  export const filterSensitiveLog = (obj: UpdateIPSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateIPSetResponse {
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateIPSetResponse {
  export const filterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateRegexPatternSetRequest {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A description of the set that helps with identification. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p></p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateRegexPatternSetRequest {
  export const filterSensitiveLog = (obj: UpdateRegexPatternSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateRegexPatternSetResponse {
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRegexPatternSetResponse {
  export const filterSensitiveLog = (obj: UpdateRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRuleGroupResponse {
  export const filterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateWebACLResponse {
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateWebACLResponse {
  export const filterSensitiveLog = (obj: UpdateWebACLResponse): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p>
 */
export interface Statement {
  /**
   * <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p>
   */
  ByteMatchStatement?: ByteMatchStatement;

  /**
   * <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
   */
  SqliMatchStatement?: SqliMatchStatement;

  /**
   * <p>A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests.
   *          XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious
   *          client-site scripts into other legitimate web browsers.
   *          The XSS match statement provides the location in requests that you want AWS WAF to search and text transformations
   *          to use on the search area before AWS WAF searches for character sequences that are likely to be malicious strings. </p>
   */
  XssMatchStatement?: XssMatchStatement;

  /**
   * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
   *          <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p>
   *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
   */
  SizeConstraintStatement?: SizeConstraintStatement;

  /**
   * <p>A rule statement used to identify web requests based on country of origin.  </p>
   */
  GeoMatchStatement?: GeoMatchStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;

  /**
   * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
   *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
   */
  IPSetReferenceStatement?: IPSetReferenceStatement;

  /**
   * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
   *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
   */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

  /**
   * <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.</p>
   *          <p>When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.</p>
   *          <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p>
   *          <ul>
   *             <li>
   *                <p>An IP match statement with an IP set that specified the address 192.0.2.44.</p>
   *             </li>
   *             <li>
   *                <p>A string match statement that searches in the User-Agent header for the string BadBot.</p>
   *             </li>
   *          </ul>
   *          <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet both of the conditions in the statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet both conditions are not counted towards the rate limit and are not affected by this rule.</p>
   *          <p>You cannot nest a <code>RateBasedStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  RateBasedStatement?: RateBasedStatement;

  /**
   * <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
   */
  AndStatement?: AndStatement;

  /**
   * <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
   */
  OrStatement?: OrStatement;

  /**
   * <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
   */
  NotStatement?: NotStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
   *          <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
}

export namespace Statement {
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
 */
export interface NotStatement {
  /**
   * <p>The statement to negate. You can use any statement that can be nested.</p>
   */
  Statement: Statement | undefined;
}

export namespace NotStatement {
  export const filterSensitiveLog = (obj: NotStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.</p>
 *          <p>When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.</p>
 *          <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p>
 *          <ul>
 *             <li>
 *                <p>An IP match statement with an IP set that specified the address 192.0.2.44.</p>
 *             </li>
 *             <li>
 *                <p>A string match statement that searches in the User-Agent header for the string BadBot.</p>
 *             </li>
 *          </ul>
 *          <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet both of the conditions in the statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet both conditions are not counted towards the rate limit and are not affected by this rule.</p>
 *          <p>You cannot nest a <code>RateBasedStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
 */
export interface RateBasedStatement {
  /**
   * <p>The limit on requests per 5-minute period for a single originating IP address. If the statement includes a <code>ScopeDownStatement</code>, this limit is applied only to the requests that match the statement.</p>
   */
  Limit: number | undefined;

  /**
   * <p>Setting that indicates how to aggregate the request counts. The options are the following:</p>
   *          <ul>
   *             <li>
   *                <p>IP - Aggregate the request counts on the IP address from the web request origin.</p>
   *             </li>
   *             <li>
   *                <p>FORWARDED_IP - Aggregate the request counts on the first IP address in an HTTP header. If you use this, configure the <code>ForwardedIPConfig</code>, to specify the header to use. </p>
   *             </li>
   *          </ul>
   */
  AggregateKeyType: RateBasedStatementAggregateKeyType | string | undefined;

  /**
   * <p>An optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement.</p>
   */
  ScopeDownStatement?: Statement;

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *
   *          <p>This is required if <code>AggregateKeyType</code> is set to <code>FORWARDED_IP</code>.</p>
   */
  ForwardedIPConfig?: ForwardedIPConfig;
}

export namespace RateBasedStatement {
  export const filterSensitiveLog = (obj: RateBasedStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify
 *          web requests that you want to allow, block, or count.
 *          Each rule includes one top-level <a>Statement</a> that AWS WAF uses to identify matching
 *          web requests, and parameters that govern how AWS WAF handles them. </p>
 */
export interface Rule {
  /**
   * <p>The name of the rule. You can't change the name of a <code>Rule</code> after you create it. </p>
   */
  Name: string | undefined;

  /**
   * <p>If you define more than one <code>Rule</code> in a
   *          <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code>
   *          in order based on the value of <code>Priority</code>.
   *          AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The AWS WAF processing statement for the rule, for example <a>ByteMatchStatement</a> or <a>SizeConstraintStatement</a>. </p>
   */
  Statement: Statement | undefined;

  /**
   * <p>The action that AWS WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting. </p>
   *         <p>This is used only for rules whose statements do not reference a rule group. Rule statements that reference a rule group include <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *          <p>You must specify either this <code>Action</code> setting or the rule <code>OverrideAction</code> setting, but not both:</p>
   *          <ul>
   *             <li>
   *                <p>If the rule statement does not reference a rule group, use this rule action setting and not the rule override action setting. </p>
   *             </li>
   *             <li>
   *                <p>If the rule statement references a rule group, use the override action setting and not this action setting.  </p>
   *             </li>
   *          </ul>
   */
  Action?: RuleAction;

  /**
   * <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group,
   *            like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *         <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p>
   *         <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p>
   *          <ul>
   *             <li>
   *                <p>If the rule statement references a rule group, use this override action setting and not the action setting.  </p>
   *             </li>
   *             <li>
   *                <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p>
   *             </li>
   *          </ul>
   */
  OverrideAction?: OverrideAction;

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
 */
export interface AndStatement {
  /**
   * <p>The statements to combine with AND logic. You can use any statements that can be nested. </p>
   */
  Statements: Statement[] | undefined;
}

export namespace AndStatement {
  export const filterSensitiveLog = (obj: AndStatement): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
 */
export interface OrStatement {
  /**
   * <p>The statements to combine with OR logic. You can use any statements that can be nested.</p>
   */
  Statements: Statement[] | undefined;
}

export namespace OrStatement {
  export const filterSensitiveLog = (obj: OrStatement): any => ({
    ...obj,
  });
}

export interface CheckCapacityRequest {
  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>An array of <a>Rule</a> that you're configuring to use in a rule group or web ACL. </p>
   */
  Rules: Rule[] | undefined;
}

export namespace CheckCapacityRequest {
  export const filterSensitiveLog = (obj: CheckCapacityRequest): any => ({
    ...obj,
  });
}

export interface CreateRuleGroupRequest {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *           <p>When you create your own rule group, you define this, and you cannot change it after creation.
   *           When you add or modify the rules in a rule group, AWS WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *           <p>AWS WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity: number | undefined;

  /**
   * <p>A description of the rule group that helps with identification. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateRuleGroupRequest {
  export const filterSensitiveLog = (obj: CreateRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateWebACLRequest {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the Web ACL that helps with identification. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateWebACLRequest {
  export const filterSensitiveLog = (obj: CreateWebACLRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 */
export interface RuleGroup {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *           <p>When you create your own rule group, you define this, and you cannot change it after creation.
   *           When you add or modify the rules in a rule group, AWS WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *           <p>AWS WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * <p>A description of the rule group that helps with identification. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace RuleGroup {
  export const filterSensitiveLog = (obj: RuleGroup): any => ({
    ...obj,
  });
}

export interface UpdateRuleGroupRequest {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A description of the rule group that helps with identification. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateRuleGroupRequest {
  export const filterSensitiveLog = (obj: UpdateRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateWebACLRequest {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the Web ACL that helps with identification. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateWebACLRequest {
  export const filterSensitiveLog = (obj: UpdateWebACLRequest): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API.  </p>
 */
export interface WebACL {
  /**
   * <p>The name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to create and list commands. You use this ID to do things like get, update, and delete a <code>WebACL</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the Web ACL that helps with identification. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>The web ACL capacity units (WCUs) currently being used by this web ACL. </p>
   *          <p>AWS WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity?: number;

  /**
   * <p>The first set of rules for AWS WAF to process in the web ACL. This is defined in an AWS Firewall Manager WAF policy and
   *            contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are
   *            prioritized after these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL
   *            and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to
   *           determine their relative processing order.</p>
   */
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * <p>The last set of rules for AWS WAF to process in the web ACL. This is defined in an AWS Firewall Manager WAF policy and
   *            contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are
   *            prioritized before these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL
   *            and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to
   *           determine their relative processing order.</p>
   */
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * <p>Indicates whether this web ACL is managed by AWS Firewall Manager. If true, then only AWS Firewall Manager can delete the web ACL or any Firewall Manager rule groups in the web ACL. </p>
   */
  ManagedByFirewallManager?: boolean;
}

export namespace WebACL {
  export const filterSensitiveLog = (obj: WebACL): any => ({
    ...obj,
  });
}

export interface GetRuleGroupResponse {
  /**
   * <p></p>
   */
  RuleGroup?: RuleGroup;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetRuleGroupResponse {
  export const filterSensitiveLog = (obj: GetRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface GetWebACLForResourceResponse {
  /**
   * <p>The Web ACL that is associated with the resource. If there is no associated resource, AWS WAF returns a null Web ACL.</p>
   */
  WebACL?: WebACL;
}

export namespace GetWebACLForResourceResponse {
  export const filterSensitiveLog = (obj: GetWebACLForResourceResponse): any => ({
    ...obj,
  });
}

export interface GetWebACLResponse {
  /**
   * <p>The Web ACL specification. You can modify the settings in this Web ACL and use it to update this Web ACL or create a new one.</p>
   */
  WebACL?: WebACL;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetWebACLResponse {
  export const filterSensitiveLog = (obj: GetWebACLResponse): any => ({
    ...obj,
  });
}
