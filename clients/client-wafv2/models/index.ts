import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should allow requests.</p>
 */
export interface AllowAction {
  __type?: "AllowAction";
}

export namespace AllowAction {
  export const filterSensitiveLog = (obj: AllowAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is AllowAction => __isa(o, "AllowAction");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>All query arguments of a web request. </p>
 */
export interface AllQueryArguments {
  __type?: "AllQueryArguments";
}

export namespace AllQueryArguments {
  export const filterSensitiveLog = (obj: AllQueryArguments): any => ({
    ...obj
  });
  export const isa = (o: any): o is AllQueryArguments =>
    __isa(o, "AllQueryArguments");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
 */
export interface AndStatement {
  __type?: "AndStatement";
  /**
   * <p>The statements to combine with AND logic. You can use any statements that can be nested. </p>
   */
  Statements: Statement[] | undefined;
}

export namespace AndStatement {
  export const filterSensitiveLog = (obj: AndStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is AndStatement => __isa(o, "AndStatement");
}

export interface AssociateWebACLRequest {
  __type?: "AssociateWebACLRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the web ACL. </p>
   *
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For a CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:                   <i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>       /<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>            ::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.</p>
   */
  WebACLArn: string | undefined;
}

export namespace AssociateWebACLRequest {
  export const filterSensitiveLog = (obj: AssociateWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateWebACLRequest =>
    __isa(o, "AssociateWebACLRequest");
}

export interface AssociateWebACLResponse {
  __type?: "AssociateWebACLResponse";
}

export namespace AssociateWebACLResponse {
  export const filterSensitiveLog = (obj: AssociateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateWebACLResponse =>
    __isa(o, "AssociateWebACLResponse");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should block requests.</p>
 */
export interface BlockAction {
  __type?: "BlockAction";
}

export namespace BlockAction {
  export const filterSensitiveLog = (obj: BlockAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is BlockAction => __isa(o, "BlockAction");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The body of a web request. This immediately follows the request headers.</p>
 */
export interface Body {
  __type?: "Body";
}

export namespace Body {
  export const filterSensitiveLog = (obj: Body): any => ({
    ...obj
  });
  export const isa = (o: any): o is Body => __isa(o, "Body");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p>
 */
export interface ByteMatchStatement {
  __type?: "ByteMatchStatement";
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

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

  /**
   * <p>A string value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in <a>FieldToMatch</a>. The maximum length of the value is 50 bytes.</p>
   *          <p>Valid values depend on the areas that you specify for inspection in <code>FieldToMatch</code>:</p>
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
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace ByteMatchStatement {
  export const filterSensitiveLog = (obj: ByteMatchStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is ByteMatchStatement =>
    __isa(o, "ByteMatchStatement");
}

export interface CheckCapacityRequest {
  __type?: "CheckCapacityRequest";
  /**
   * <p>An array of <a>Rule</a> that you're configuring to use in a rule group or web ACL. </p>
   */
  Rules: Rule[] | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace CheckCapacityRequest {
  export const filterSensitiveLog = (obj: CheckCapacityRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckCapacityRequest =>
    __isa(o, "CheckCapacityRequest");
}

export interface CheckCapacityResponse {
  __type?: "CheckCapacityResponse";
  /**
   * <p>The capacity required by the rules and scope.</p>
   */
  Capacity?: number;
}

export namespace CheckCapacityResponse {
  export const filterSensitiveLog = (obj: CheckCapacityResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckCapacityResponse =>
    __isa(o, "CheckCapacityResponse");
}

export enum ComparisonOperator {
  EQ = "EQ",
  GE = "GE",
  GT = "GT",
  LE = "LE",
  LT = "LT",
  NE = "NE"
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should count requests.</p>
 */
export interface CountAction {
  __type?: "CountAction";
}

export namespace CountAction {
  export const filterSensitiveLog = (obj: CountAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is CountAction => __isa(o, "CountAction");
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
  ZW = "ZW"
}

export interface CreateIPSetRequest {
  __type?: "CreateIPSetRequest";
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
   * <p>A friendly description of the IP set. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Specify IPV4 or IPV6. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateIPSetRequest {
  export const filterSensitiveLog = (obj: CreateIPSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIPSetRequest =>
    __isa(o, "CreateIPSetRequest");
}

export interface CreateIPSetResponse {
  __type?: "CreateIPSetResponse";
  /**
   * <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
   */
  Summary?: IPSetSummary;
}

export namespace CreateIPSetResponse {
  export const filterSensitiveLog = (obj: CreateIPSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIPSetResponse =>
    __isa(o, "CreateIPSetResponse");
}

export interface CreateRegexPatternSetRequest {
  __type?: "CreateRegexPatternSetRequest";
  /**
   * <p>A friendly description of the set. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A friendly name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Array of regular expression strings. </p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateRegexPatternSetRequest {
  export const filterSensitiveLog = (
    obj: CreateRegexPatternSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegexPatternSetRequest =>
    __isa(o, "CreateRegexPatternSetRequest");
}

export interface CreateRegexPatternSetResponse {
  __type?: "CreateRegexPatternSetResponse";
  /**
   * <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
   */
  Summary?: RegexPatternSetSummary;
}

export namespace CreateRegexPatternSetResponse {
  export const filterSensitiveLog = (
    obj: CreateRegexPatternSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegexPatternSetResponse =>
    __isa(o, "CreateRegexPatternSetResponse");
}

export interface CreateRuleGroupRequest {
  __type?: "CreateRuleGroupRequest";
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
   * <p>A friendly description of the rule group. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A friendly name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace CreateRuleGroupRequest {
  export const filterSensitiveLog = (obj: CreateRuleGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleGroupRequest =>
    __isa(o, "CreateRuleGroupRequest");
}

export interface CreateRuleGroupResponse {
  __type?: "CreateRuleGroupResponse";
  /**
   * <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
   */
  Summary?: RuleGroupSummary;
}

export namespace CreateRuleGroupResponse {
  export const filterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleGroupResponse =>
    __isa(o, "CreateRuleGroupResponse");
}

export interface CreateWebACLRequest {
  __type?: "CreateWebACLRequest";
  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A friendly description of the Web ACL. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace CreateWebACLRequest {
  export const filterSensitiveLog = (obj: CreateWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWebACLRequest =>
    __isa(o, "CreateWebACLRequest");
}

export interface CreateWebACLResponse {
  __type?: "CreateWebACLResponse";
  /**
   * <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
   */
  Summary?: WebACLSummary;
}

export namespace CreateWebACLResponse {
  export const filterSensitiveLog = (obj: CreateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWebACLResponse =>
    __isa(o, "CreateWebACLResponse");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>In a <code>WebACL</code>, this is the action that you want AWS WAF
 *          to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
 */
export interface DefaultAction {
  __type?: "DefaultAction";
  /**
   * <p>Specifies that AWS WAF should allow requests by default.</p>
   */
  Allow?: AllowAction;

  /**
   * <p>Specifies that AWS WAF should block requests by default. </p>
   */
  Block?: BlockAction;
}

export namespace DefaultAction {
  export const filterSensitiveLog = (obj: DefaultAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefaultAction => __isa(o, "DefaultAction");
}

export interface DeleteIPSetRequest {
  __type?: "DeleteIPSetRequest";
  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace DeleteIPSetRequest {
  export const filterSensitiveLog = (obj: DeleteIPSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIPSetRequest =>
    __isa(o, "DeleteIPSetRequest");
}

export interface DeleteIPSetResponse {
  __type?: "DeleteIPSetResponse";
}

export namespace DeleteIPSetResponse {
  export const filterSensitiveLog = (obj: DeleteIPSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIPSetResponse =>
    __isa(o, "DeleteIPSetResponse");
}

export interface DeleteLoggingConfigurationRequest {
  __type?: "DeleteLoggingConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL from which you want to delete the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteLoggingConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DeleteLoggingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLoggingConfigurationRequest =>
    __isa(o, "DeleteLoggingConfigurationRequest");
}

export interface DeleteLoggingConfigurationResponse {
  __type?: "DeleteLoggingConfigurationResponse";
}

export namespace DeleteLoggingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DeleteLoggingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLoggingConfigurationResponse =>
    __isa(o, "DeleteLoggingConfigurationResponse");
}

export interface DeleteRegexPatternSetRequest {
  __type?: "DeleteRegexPatternSetRequest";
  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace DeleteRegexPatternSetRequest {
  export const filterSensitiveLog = (
    obj: DeleteRegexPatternSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegexPatternSetRequest =>
    __isa(o, "DeleteRegexPatternSetRequest");
}

export interface DeleteRegexPatternSetResponse {
  __type?: "DeleteRegexPatternSetResponse";
}

export namespace DeleteRegexPatternSetResponse {
  export const filterSensitiveLog = (
    obj: DeleteRegexPatternSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegexPatternSetResponse =>
    __isa(o, "DeleteRegexPatternSetResponse");
}

export interface DeleteRuleGroupRequest {
  __type?: "DeleteRuleGroupRequest";
  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace DeleteRuleGroupRequest {
  export const filterSensitiveLog = (obj: DeleteRuleGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleGroupRequest =>
    __isa(o, "DeleteRuleGroupRequest");
}

export interface DeleteRuleGroupResponse {
  __type?: "DeleteRuleGroupResponse";
}

export namespace DeleteRuleGroupResponse {
  export const filterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleGroupResponse =>
    __isa(o, "DeleteRuleGroupResponse");
}

export interface DeleteWebACLRequest {
  __type?: "DeleteWebACLRequest";
  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace DeleteWebACLRequest {
  export const filterSensitiveLog = (obj: DeleteWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWebACLRequest =>
    __isa(o, "DeleteWebACLRequest");
}

export interface DeleteWebACLResponse {
  __type?: "DeleteWebACLResponse";
}

export namespace DeleteWebACLResponse {
  export const filterSensitiveLog = (obj: DeleteWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWebACLResponse =>
    __isa(o, "DeleteWebACLResponse");
}

export interface DescribeManagedRuleGroupRequest {
  __type?: "DescribeManagedRuleGroupRequest";
  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName: string | undefined;
}

export namespace DescribeManagedRuleGroupRequest {
  export const filterSensitiveLog = (
    obj: DescribeManagedRuleGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeManagedRuleGroupRequest =>
    __isa(o, "DescribeManagedRuleGroupRequest");
}

export interface DescribeManagedRuleGroupResponse {
  __type?: "DescribeManagedRuleGroupResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeManagedRuleGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeManagedRuleGroupResponse =>
    __isa(o, "DescribeManagedRuleGroupResponse");
}

export interface DisassociateWebACLRequest {
  __type?: "DisassociateWebACLRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL. </p>
   *
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For a CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:                   <i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>       /<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>            ::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

export namespace DisassociateWebACLRequest {
  export const filterSensitiveLog = (obj: DisassociateWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateWebACLRequest =>
    __isa(o, "DisassociateWebACLRequest");
}

export interface DisassociateWebACLResponse {
  __type?: "DisassociateWebACLResponse";
}

export namespace DisassociateWebACLResponse {
  export const filterSensitiveLog = (obj: DisassociateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateWebACLResponse =>
    __isa(o, "DisassociateWebACLResponse");
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
  __type?: "ExcludedRule";
  /**
   * <p>The name of the rule to exclude.</p>
   */
  Name: string | undefined;
}

export namespace ExcludedRule {
  export const filterSensitiveLog = (obj: ExcludedRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExcludedRule => __isa(o, "ExcludedRule");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The part of a web request that you want AWS WAF to inspect. Include the <code>FieldToMatch</code> types that you want to inspect, with additional specifications as needed, according to the type. </p>
 */
export interface FieldToMatch {
  __type?: "FieldToMatch";
  /**
   * <p>Inspect all query arguments. </p>
   */
  AllQueryArguments?: AllQueryArguments;

  /**
   * <p>Inspect the request body, which immediately follows the request headers. This is the part of a request that contains any
   *          additional data that you want to send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>Note that only the first 8 KB (8192 bytes) of the request body are forwarded to AWS WAF for inspection. If you don't need to inspect more than 8 KB, you can guarantee that you don't allow additional bytes in by combining a statement that inspects the body of the web request, such as <a>ByteMatchStatement</a> or <a>RegexPatternSetReferenceStatement</a>, with a <a>SizeConstraintStatement</a> that enforces an 8 KB size limit on the body of the request. AWS WAF doesn't support inspecting the entire contents of web requests whose bodies exceed the 8 KB limit.</p>
   */
  Body?: Body;

  /**
   * <p>Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. </p>
   */
  Method?: Method;

  /**
   * <p>Inspect the query string. This is the part of a URL that appears after a <code>?</code> character, if any.</p>
   */
  QueryString?: QueryString;

  /**
   * <p>Inspect a single header. Provide the name of the header to inspect, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p>
   */
  SingleHeader?: SingleHeader;

  /**
   * <p>Inspect a single query argument. Provide the name of the query argument to inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p>
   */
  SingleQueryArgument?: SingleQueryArgument;

  /**
   * <p>Inspect the request URI path. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  UriPath?: UriPath;
}

export namespace FieldToMatch {
  export const filterSensitiveLog = (obj: FieldToMatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is FieldToMatch => __isa(o, "FieldToMatch");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to identify web requests based on country of origin.  </p>
 */
export interface GeoMatchStatement {
  __type?: "GeoMatchStatement";
  /**
   * <p>An array of two-character country codes, for example, <code>[ "US", "CN" ]</code>, from the alpha-2 country ISO codes of the ISO 3166 international standard. </p>
   */
  CountryCodes?: (CountryCode | string)[];
}

export namespace GeoMatchStatement {
  export const filterSensitiveLog = (obj: GeoMatchStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoMatchStatement =>
    __isa(o, "GeoMatchStatement");
}

export interface GetIPSetRequest {
  __type?: "GetIPSetRequest";
  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace GetIPSetRequest {
  export const filterSensitiveLog = (obj: GetIPSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetIPSetRequest =>
    __isa(o, "GetIPSetRequest");
}

export interface GetIPSetResponse {
  __type?: "GetIPSetResponse";
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
    ...obj
  });
  export const isa = (o: any): o is GetIPSetResponse =>
    __isa(o, "GetIPSetResponse");
}

export interface GetLoggingConfigurationRequest {
  __type?: "GetLoggingConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL for which you want to get the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetLoggingConfigurationRequest {
  export const filterSensitiveLog = (
    obj: GetLoggingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoggingConfigurationRequest =>
    __isa(o, "GetLoggingConfigurationRequest");
}

export interface GetLoggingConfigurationResponse {
  __type?: "GetLoggingConfigurationResponse";
  /**
   * <p>The <a>LoggingConfiguration</a> for the specified web ACL.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace GetLoggingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: GetLoggingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoggingConfigurationResponse =>
    __isa(o, "GetLoggingConfigurationResponse");
}

export interface GetRateBasedStatementManagedKeysRequest {
  __type?: "GetRateBasedStatementManagedKeysRequest";
  /**
   * <p>The name of the rate-based rule to get the keys for.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
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
  WebACLId: string | undefined;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  WebACLName: string | undefined;
}

export namespace GetRateBasedStatementManagedKeysRequest {
  export const filterSensitiveLog = (
    obj: GetRateBasedStatementManagedKeysRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedStatementManagedKeysRequest =>
    __isa(o, "GetRateBasedStatementManagedKeysRequest");
}

export interface GetRateBasedStatementManagedKeysResponse {
  __type?: "GetRateBasedStatementManagedKeysResponse";
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
  export const filterSensitiveLog = (
    obj: GetRateBasedStatementManagedKeysResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedStatementManagedKeysResponse =>
    __isa(o, "GetRateBasedStatementManagedKeysResponse");
}

export interface GetRegexPatternSetRequest {
  __type?: "GetRegexPatternSetRequest";
  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace GetRegexPatternSetRequest {
  export const filterSensitiveLog = (obj: GetRegexPatternSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegexPatternSetRequest =>
    __isa(o, "GetRegexPatternSetRequest");
}

export interface GetRegexPatternSetResponse {
  __type?: "GetRegexPatternSetResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p></p>
   */
  RegexPatternSet?: RegexPatternSet;
}

export namespace GetRegexPatternSetResponse {
  export const filterSensitiveLog = (obj: GetRegexPatternSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegexPatternSetResponse =>
    __isa(o, "GetRegexPatternSetResponse");
}

export interface GetRuleGroupRequest {
  __type?: "GetRuleGroupRequest";
  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace GetRuleGroupRequest {
  export const filterSensitiveLog = (obj: GetRuleGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRuleGroupRequest =>
    __isa(o, "GetRuleGroupRequest");
}

export interface GetRuleGroupResponse {
  __type?: "GetRuleGroupResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p></p>
   */
  RuleGroup?: RuleGroup;
}

export namespace GetRuleGroupResponse {
  export const filterSensitiveLog = (obj: GetRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRuleGroupResponse =>
    __isa(o, "GetRuleGroupResponse");
}

export interface GetSampledRequestsRequest {
  __type?: "GetSampledRequestsRequest";
  /**
   * <p>The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received
   *          during the time range. If your resource received fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code>
   *          returns information about all of them. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>The metric name assigned to the <code>Rule</code> or <code>RuleGroup</code> for which you want a sample of requests.</p>
   */
  RuleMetricName: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>The start date and time and the end date and time of the range for which you want <code>GetSampledRequests</code> to return a
   *          sample of requests. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the
   *          previous three hours.</p>
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the <code>WebACL</code> for which you want a sample of requests.</p>
   */
  WebAclArn: string | undefined;
}

export namespace GetSampledRequestsRequest {
  export const filterSensitiveLog = (obj: GetSampledRequestsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSampledRequestsRequest =>
    __isa(o, "GetSampledRequestsRequest");
}

export interface GetSampledRequestsResponse {
  __type?: "GetSampledRequestsResponse";
  /**
   * <p>The total number of requests from which <code>GetSampledRequests</code> got a sample of <code>MaxItems</code> requests.
   *          If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your AWS resource
   *          received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * <p>A complex type that contains detailed information about each of the requests in the sample.</p>
   */
  SampledRequests?: SampledHTTPRequest[];

  /**
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request. However,
   *          if your AWS resource received more than 5,000 requests during the time range that you specified in the request,
   *          <code>GetSampledRequests</code> returns the time range for the first 5,000 requests.</p>
   */
  TimeWindow?: TimeWindow;
}

export namespace GetSampledRequestsResponse {
  export const filterSensitiveLog = (obj: GetSampledRequestsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSampledRequestsResponse =>
    __isa(o, "GetSampledRequestsResponse");
}

export interface GetWebACLForResourceRequest {
  __type?: "GetWebACLForResourceRequest";
  /**
   * <p>The ARN (Amazon Resource Name) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetWebACLForResourceRequest {
  export const filterSensitiveLog = (
    obj: GetWebACLForResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWebACLForResourceRequest =>
    __isa(o, "GetWebACLForResourceRequest");
}

export interface GetWebACLForResourceResponse {
  __type?: "GetWebACLForResourceResponse";
  /**
   * <p>The Web ACL that is associated with the resource. If there is no associated resource, AWS WAF returns a null Web ACL.</p>
   */
  WebACL?: WebACL;
}

export namespace GetWebACLForResourceResponse {
  export const filterSensitiveLog = (
    obj: GetWebACLForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWebACLForResourceResponse =>
    __isa(o, "GetWebACLForResourceResponse");
}

export interface GetWebACLRequest {
  __type?: "GetWebACLRequest";
  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace GetWebACLRequest {
  export const filterSensitiveLog = (obj: GetWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWebACLRequest =>
    __isa(o, "GetWebACLRequest");
}

export interface GetWebACLResponse {
  __type?: "GetWebACLResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Web ACL specification. You can modify the settings in this Web ACL and use it to update this Web ACL or create a new one.</p>
   */
  WebACL?: WebACL;
}

export namespace GetWebACLResponse {
  export const filterSensitiveLog = (obj: GetWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWebACLResponse =>
    __isa(o, "GetWebACLResponse");
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
  __type?: "HTTPHeader";
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
    ...obj
  });
  export const isa = (o: any): o is HTTPHeader => __isa(o, "HTTPHeader");
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
  __type?: "HTTPRequest";
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
   * <p>The HTTP version specified in the sampled web request, for example, <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * <p>A complex type that contains the name and value for each header in the sampled web request.</p>
   */
  Headers?: HTTPHeader[];

  /**
   * <p>The HTTP method specified in the sampled web request. </p>
   */
  Method?: string;

  /**
   * <p>The URI path of the request, which identifies the resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;
}

export namespace HTTPRequest {
  export const filterSensitiveLog = (obj: HTTPRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is HTTPRequest => __isa(o, "HTTPRequest");
}

export enum IPAddressVersion {
  IPV4 = "IPV4",
  IPV6 = "IPV6"
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
  __type?: "IPSet";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

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
   * <p>A friendly description of the IP set. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>Specify IPV4 or IPV6. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;
}

export namespace IPSet {
  export const filterSensitiveLog = (obj: IPSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSet => __isa(o, "IPSet");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
 *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
 */
export interface IPSetReferenceStatement {
  __type?: "IPSetReferenceStatement";
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>IPSet</a> that this statement references.</p>
   */
  ARN: string | undefined;
}

export namespace IPSetReferenceStatement {
  export const filterSensitiveLog = (obj: IPSetReferenceStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSetReferenceStatement =>
    __isa(o, "IPSetReferenceStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
 */
export interface IPSetSummary {
  __type?: "IPSetSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A friendly description of the IP set. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name?: string;
}

export namespace IPSetSummary {
  export const filterSensitiveLog = (obj: IPSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSetSummary => __isa(o, "IPSetSummary");
}

export interface ListAvailableManagedRuleGroupsRequest {
  __type?: "ListAvailableManagedRuleGroupsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace ListAvailableManagedRuleGroupsRequest {
  export const filterSensitiveLog = (
    obj: ListAvailableManagedRuleGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAvailableManagedRuleGroupsRequest =>
    __isa(o, "ListAvailableManagedRuleGroupsRequest");
}

export interface ListAvailableManagedRuleGroupsResponse {
  __type?: "ListAvailableManagedRuleGroupsResponse";
  /**
   * <p></p>
   */
  ManagedRuleGroups?: ManagedRuleGroupSummary[];

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

export namespace ListAvailableManagedRuleGroupsResponse {
  export const filterSensitiveLog = (
    obj: ListAvailableManagedRuleGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAvailableManagedRuleGroupsResponse =>
    __isa(o, "ListAvailableManagedRuleGroupsResponse");
}

export interface ListIPSetsRequest {
  __type?: "ListIPSetsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace ListIPSetsRequest {
  export const filterSensitiveLog = (obj: ListIPSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIPSetsRequest =>
    __isa(o, "ListIPSetsRequest");
}

export interface ListIPSetsResponse {
  __type?: "ListIPSetsResponse";
  /**
   * <p>Array of IPSets. This may not be the full list of IPSets that you have defined. See the <code>Limit</code> specification for this request.</p>
   */
  IPSets?: IPSetSummary[];

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

export namespace ListIPSetsResponse {
  export const filterSensitiveLog = (obj: ListIPSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIPSetsResponse =>
    __isa(o, "ListIPSetsResponse");
}

export interface ListLoggingConfigurationsRequest {
  __type?: "ListLoggingConfigurationsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope?: Scope | string;
}

export namespace ListLoggingConfigurationsRequest {
  export const filterSensitiveLog = (
    obj: ListLoggingConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLoggingConfigurationsRequest =>
    __isa(o, "ListLoggingConfigurationsRequest");
}

export interface ListLoggingConfigurationsResponse {
  __type?: "ListLoggingConfigurationsResponse";
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
  export const filterSensitiveLog = (
    obj: ListLoggingConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLoggingConfigurationsResponse =>
    __isa(o, "ListLoggingConfigurationsResponse");
}

export interface ListRegexPatternSetsRequest {
  __type?: "ListRegexPatternSetsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace ListRegexPatternSetsRequest {
  export const filterSensitiveLog = (
    obj: ListRegexPatternSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegexPatternSetsRequest =>
    __isa(o, "ListRegexPatternSetsRequest");
}

export interface ListRegexPatternSetsResponse {
  __type?: "ListRegexPatternSetsResponse";
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
  export const filterSensitiveLog = (
    obj: ListRegexPatternSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegexPatternSetsResponse =>
    __isa(o, "ListRegexPatternSetsResponse");
}

export interface ListResourcesForWebACLRequest {
  __type?: "ListResourcesForWebACLRequest";
  /**
   * <p>Used for web ACLs that are scoped for regional applications. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage. </p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL.</p>
   */
  WebACLArn: string | undefined;
}

export namespace ListResourcesForWebACLRequest {
  export const filterSensitiveLog = (
    obj: ListResourcesForWebACLRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourcesForWebACLRequest =>
    __isa(o, "ListResourcesForWebACLRequest");
}

export interface ListResourcesForWebACLResponse {
  __type?: "ListResourcesForWebACLResponse";
  /**
   * <p>The array of Amazon Resource Names (ARNs) of the associated resources.</p>
   */
  ResourceArns?: string[];
}

export namespace ListResourcesForWebACLResponse {
  export const filterSensitiveLog = (
    obj: ListResourcesForWebACLResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListResourcesForWebACLResponse =>
    __isa(o, "ListResourcesForWebACLResponse");
}

export interface ListRuleGroupsRequest {
  __type?: "ListRuleGroupsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace ListRuleGroupsRequest {
  export const filterSensitiveLog = (obj: ListRuleGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRuleGroupsRequest =>
    __isa(o, "ListRuleGroupsRequest");
}

export interface ListRuleGroupsResponse {
  __type?: "ListRuleGroupsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListRuleGroupsResponse =>
    __isa(o, "ListRuleGroupsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
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
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListWebACLsRequest {
  __type?: "ListWebACLsRequest";
  /**
   * <p>The maximum number of objects that you want AWS WAF to return for this request. If more
   *           objects are available, in the response, AWS WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, AWS WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace ListWebACLsRequest {
  export const filterSensitiveLog = (obj: ListWebACLsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWebACLsRequest =>
    __isa(o, "ListWebACLsRequest");
}

export interface ListWebACLsResponse {
  __type?: "ListWebACLsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListWebACLsResponse =>
    __isa(o, "ListWebACLsResponse");
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
  __type?: "LoggingConfiguration";
  /**
   * <p>The Amazon Kinesis Data Firehose Amazon Resource Name (ARNs) that you want to associate with the web ACL.</p>
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * <p>The parts of the request that you want to keep out of the logs. For
   *          example, if you redact the cookie field, the cookie field in the firehose will be
   *          <code>xxx</code>. </p>
   */
  RedactedFields?: FieldToMatch[];

  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with
   *          <code>LogDestinationConfigs</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingConfiguration =>
    __isa(o, "LoggingConfiguration");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
 *          <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
 */
export interface ManagedRuleGroupStatement {
  __type?: "ManagedRuleGroupStatement";
  /**
   * <p>The rules whose actions are set to <code>COUNT</code> by the web ACL, regardless of the action that is set on the rule. This effectively excludes the rule from acting on web requests.  </p>
   */
  ExcludedRules?: ExcludedRule[];

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName: string | undefined;
}

export namespace ManagedRuleGroupStatement {
  export const filterSensitiveLog = (obj: ManagedRuleGroupStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedRuleGroupStatement =>
    __isa(o, "ManagedRuleGroupStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include AWS managed rule groups, which are free of charge to AWS WAF customers, and AWS Marketplace managed rule groups, which you can subscribe to through AWS Marketplace. </p>
 */
export interface ManagedRuleGroupSummary {
  __type?: "ManagedRuleGroupSummary";
  /**
   * <p>The description of the managed rule group, provided by AWS or the AWS Marketplace seller who manages it.</p>
   */
  Description?: string;

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name?: string;

  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName?: string;
}

export namespace ManagedRuleGroupSummary {
  export const filterSensitiveLog = (obj: ManagedRuleGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedRuleGroupSummary =>
    __isa(o, "ManagedRuleGroupSummary");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p>
 */
export interface Method {
  __type?: "Method";
}

export namespace Method {
  export const filterSensitiveLog = (obj: Method): any => ({
    ...obj
  });
  export const isa = (o: any): o is Method => __isa(o, "Method");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Specifies that AWS WAF should do nothing. This is generally used to try out a rule without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>, and override the actions that are set at the statement level. </p>
 */
export interface NoneAction {
  __type?: "NoneAction";
}

export namespace NoneAction {
  export const filterSensitiveLog = (obj: NoneAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoneAction => __isa(o, "NoneAction");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
 */
export interface NotStatement {
  __type?: "NotStatement";
  /**
   * <p>The statement to negate. You can use any statement that can be nested.</p>
   */
  Statement: Statement | undefined;
}

export namespace NotStatement {
  export const filterSensitiveLog = (obj: NotStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotStatement => __isa(o, "NotStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
 */
export interface OrStatement {
  __type?: "OrStatement";
  /**
   * <p>The statements to combine with OR logic. You can use any statements that can be nested.</p>
   */
  Statements: Statement[] | undefined;
}

export namespace OrStatement {
  export const filterSensitiveLog = (obj: OrStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrStatement => __isa(o, "OrStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The action to use to override the rule's <code>Action</code> setting. You can use no override action, in which case the rule action is in effect, or count, in which case, if the rule matches a web request, it only counts the match.</p>
 */
export interface OverrideAction {
  __type?: "OverrideAction";
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
    ...obj
  });
  export const isa = (o: any): o is OverrideAction =>
    __isa(o, "OverrideAction");
}

export enum ParameterExceptionField {
  AND_STATEMENT = "AND_STATEMENT",
  BYTE_MATCH_STATEMENT = "BYTE_MATCH_STATEMENT",
  DEFAULT_ACTION = "DEFAULT_ACTION",
  ENTITY_LIMIT = "ENTITY_LIMIT",
  EXCLUDED_RULE = "EXCLUDED_RULE",
  FIELD_TO_MATCH = "FIELD_TO_MATCH",
  GEO_MATCH_STATEMENT = "GEO_MATCH_STATEMENT",
  IP_ADDRESS = "IP_ADDRESS",
  IP_ADDRESS_VERSION = "IP_ADDRESS_VERSION",
  IP_SET = "IP_SET",
  IP_SET_REFERENCE_STATEMENT = "IP_SET_REFERENCE_STATEMENT",
  MANAGED_RULE_SET = "MANAGED_RULE_SET",
  MANAGED_RULE_SET_STATEMENT = "MANAGED_RULE_SET_STATEMENT",
  NOT_STATEMENT = "NOT_STATEMENT",
  OR_STATEMENT = "OR_STATEMENT",
  OVERRIDE_ACTION = "OVERRIDE_ACTION",
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
  XSS_MATCH_STATEMENT = "XSS_MATCH_STATEMENT"
}

export enum PositionalConstraint {
  CONTAINS = "CONTAINS",
  CONTAINS_WORD = "CONTAINS_WORD",
  ENDS_WITH = "ENDS_WITH",
  EXACTLY = "EXACTLY",
  STARTS_WITH = "STARTS_WITH"
}

export interface PutLoggingConfigurationRequest {
  __type?: "PutLoggingConfigurationRequest";
  /**
   * <p></p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

export namespace PutLoggingConfigurationRequest {
  export const filterSensitiveLog = (
    obj: PutLoggingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLoggingConfigurationRequest =>
    __isa(o, "PutLoggingConfigurationRequest");
}

export interface PutLoggingConfigurationResponse {
  __type?: "PutLoggingConfigurationResponse";
  /**
   * <p></p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace PutLoggingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: PutLoggingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLoggingConfigurationResponse =>
    __isa(o, "PutLoggingConfigurationResponse");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p>
 */
export interface QueryString {
  __type?: "QueryString";
}

export namespace QueryString {
  export const filterSensitiveLog = (obj: QueryString): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryString => __isa(o, "QueryString");
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
  __type?: "RateBasedStatement";
  /**
   * <p>Setting that indicates how to aggregate the request counts. Currently, you must set this to <code>IP</code>. The request counts are aggregated on IP addresses. </p>
   */
  AggregateKeyType: RateBasedStatementAggregateKeyType | string | undefined;

  /**
   * <p>The limit on requests per 5-minute period for a single originating IP address. If the statement includes a <code>ScopDownStatement</code>, this limit is applied only to the requests that match the statement.</p>
   */
  Limit: number | undefined;

  /**
   * <p>An optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement.</p>
   */
  ScopeDownStatement?: Statement;
}

export namespace RateBasedStatement {
  export const filterSensitiveLog = (obj: RateBasedStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is RateBasedStatement =>
    __isa(o, "RateBasedStatement");
}

export enum RateBasedStatementAggregateKeyType {
  IP = "IP"
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The set of IP addresses that are currently blocked for a rate-based statement.</p>
 */
export interface RateBasedStatementManagedKeysIPSet {
  __type?: "RateBasedStatementManagedKeysIPSet";
  /**
   * <p>The IP addresses that are currently blocked.</p>
   */
  Addresses?: string[];

  IPAddressVersion?: IPAddressVersion | string;
}

export namespace RateBasedStatementManagedKeysIPSet {
  export const filterSensitiveLog = (
    obj: RateBasedStatementManagedKeysIPSet
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RateBasedStatementManagedKeysIPSet =>
    __isa(o, "RateBasedStatementManagedKeysIPSet");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p>
 */
export interface Regex {
  __type?: "Regex";
  /**
   * <p>The string representing the regular expression.</p>
   */
  RegexString?: string;
}

export namespace Regex {
  export const filterSensitiveLog = (obj: Regex): any => ({
    ...obj
  });
  export const isa = (o: any): o is Regex => __isa(o, "Regex");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Contains one or more regular expressions. </p>
 *          <p>AWS WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>
 */
export interface RegexPatternSet {
  __type?: "RegexPatternSet";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A friendly description of the set. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A friendly name of the set. You cannot change the name after you create the set.</p>
   */
  Name?: string;

  /**
   * <p>The regular expression patterns in the set.</p>
   */
  RegularExpressionList?: Regex[];
}

export namespace RegexPatternSet {
  export const filterSensitiveLog = (obj: RegexPatternSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSet =>
    __isa(o, "RegexPatternSet");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
 *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
 */
export interface RegexPatternSetReferenceStatement {
  __type?: "RegexPatternSetReferenceStatement";
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
   *          content identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace RegexPatternSetReferenceStatement {
  export const filterSensitiveLog = (
    obj: RegexPatternSetReferenceStatement
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSetReferenceStatement =>
    __isa(o, "RegexPatternSetReferenceStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
 */
export interface RegexPatternSetSummary {
  __type?: "RegexPatternSetSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A friendly description of the set. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>A friendly name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;
}

export namespace RegexPatternSetSummary {
  export const filterSensitiveLog = (obj: RegexPatternSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSetSummary =>
    __isa(o, "RegexPatternSetSummary");
}

export enum ResourceType {
  API_GATEWAY = "API_GATEWAY",
  APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER"
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
  __type?: "Rule";
  /**
   * <p>The action that AWS WAF should take on a web request when it matches the rule's statement. Settings at the web ACL level can override the rule action setting. </p>
   */
  Action?: RuleAction;

  /**
   * <p>A friendly name of the rule. You can't change the name of a <code>Rule</code> after you create it. </p>
   */
  Name: string | undefined;

  /**
   * <p>The action to use to override the rule's <code>Action</code> setting. You can use no override action, in which case the rule action is in effect, or count action, in which case, if the rule matches a web request, it only counts the match.</p>
   */
  OverrideAction?: OverrideAction;

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
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj
  });
  export const isa = (o: any): o is Rule => __isa(o, "Rule");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p>
 */
export interface RuleAction {
  __type?: "RuleAction";
  /**
   * <p>Instructs AWS WAF to allow the web request.</p>
   */
  Allow?: AllowAction;

  /**
   * <p>Instructs AWS WAF to block the web request.</p>
   */
  Block?: BlockAction;

  /**
   * <p>Instructs AWS WAF to count the web request and allow it.</p>
   */
  Count?: CountAction;
}

export namespace RuleAction {
  export const filterSensitiveLog = (obj: RuleAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleAction => __isa(o, "RuleAction");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 */
export interface RuleGroup {
  __type?: "RuleGroup";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

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
   * <p>A friendly description of the rule group. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

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
    ...obj
  });
  export const isa = (o: any): o is RuleGroup => __isa(o, "RuleGroup");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
 *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
 */
export interface RuleGroupReferenceStatement {
  __type?: "RuleGroupReferenceStatement";
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
  export const filterSensitiveLog = (
    obj: RuleGroupReferenceStatement
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleGroupReferenceStatement =>
    __isa(o, "RuleGroupReferenceStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleGroupSummary {
  __type?: "RuleGroupSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A friendly description of the rule group. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>A friendly name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;
}

export namespace RuleGroupSummary {
  export const filterSensitiveLog = (obj: RuleGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleGroupSummary =>
    __isa(o, "RuleGroupSummary");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleSummary {
  __type?: "RuleSummary";
  /**
   * <note>
   *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
   *          </note>
   *          <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p>
   */
  Action?: RuleAction;

  /**
   * <p>The name of the rule. </p>
   */
  Name?: string;
}

export namespace RuleSummary {
  export const filterSensitiveLog = (obj: RuleSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleSummary => __isa(o, "RuleSummary");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that
 *          appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.</p>
 */
export interface SampledHTTPRequest {
  __type?: "SampledHTTPRequest";
  /**
   * <p>The action for the <code>Rule</code> that the request matched: <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
   */
  Action?: string;

  /**
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: HTTPRequest | undefined;

  /**
   * <p>The name of the <code>Rule</code> that the request matched. For managed rule groups, the format for this name is <code><vendor name>#<managed rule group name>#<rule name></code>. For your own rule
   *          groups, the format for this name is
   *          <code><rule group name>#<rule name></code>. If the rule is not in a rule group, the format is <code><rule name></code>. </p>
   */
  RuleNameWithinRuleGroup?: string;

  /**
   * <p>The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).</p>
   */
  Timestamp?: Date;

  /**
   * <p>A value that indicates how one result in the response relates
   *          proportionally to other results in the response.
   *          For example, a result that has a weight of <code>2</code> represents roughly twice
   *          as many web requests as a result
   *          that has a weight of <code>1</code>.</p>
   */
  Weight: number | undefined;
}

export namespace SampledHTTPRequest {
  export const filterSensitiveLog = (obj: SampledHTTPRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SampledHTTPRequest =>
    __isa(o, "SampledHTTPRequest");
}

export enum Scope {
  CLOUDFRONT = "CLOUDFRONT",
  REGIONAL = "REGIONAL"
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>One of the headers in a web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p>
 */
export interface SingleHeader {
  __type?: "SingleHeader";
  /**
   * <p>The name of the query header to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleHeader {
  export const filterSensitiveLog = (obj: SingleHeader): any => ({
    ...obj
  });
  export const isa = (o: any): o is SingleHeader => __isa(o, "SingleHeader");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>One query argument in a web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p>
 */
export interface SingleQueryArgument {
  __type?: "SingleQueryArgument";
  /**
   * <p>The name of the query argument to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleQueryArgument {
  export const filterSensitiveLog = (obj: SingleQueryArgument): any => ({
    ...obj
  });
  export const isa = (o: any): o is SingleQueryArgument =>
    __isa(o, "SingleQueryArgument");
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
  __type?: "SizeConstraintStatement";
  /**
   * <p>The operator to use to compare the request part to the size setting. </p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>The size, in byte, to compare to the request part, after any transformations.</p>
   */
  Size: number | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SizeConstraintStatement {
  export const filterSensitiveLog = (obj: SizeConstraintStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is SizeConstraintStatement =>
    __isa(o, "SizeConstraintStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
 */
export interface SqliMatchStatement {
  __type?: "SqliMatchStatement";
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SqliMatchStatement {
  export const filterSensitiveLog = (obj: SqliMatchStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqliMatchStatement =>
    __isa(o, "SqliMatchStatement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p>
 */
export interface Statement {
  __type?: "Statement";
  /**
   * <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
   */
  AndStatement?: AndStatement;

  /**
   * <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p>
   */
  ByteMatchStatement?: ByteMatchStatement;

  /**
   * <p>A rule statement used to identify web requests based on country of origin.  </p>
   */
  GeoMatchStatement?: GeoMatchStatement;

  /**
   * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
   *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
   */
  IPSetReferenceStatement?: IPSetReferenceStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
   *          <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
   */
  NotStatement?: NotStatement;

  /**
   * <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
   */
  OrStatement?: OrStatement;

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
   * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
   *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p>
   */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;

  /**
   * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
   *          <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p>
   *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
   */
  SizeConstraintStatement?: SizeConstraintStatement;

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
}

export namespace Statement {
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj
  });
  export const isa = (o: any): o is Statement => __isa(o, "Statement");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.  </p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *         <p>The collection of tagging definitions for an AWS resource. </p>
 */
export interface TagInfoForResource {
  __type?: "TagInfoForResource";
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
    ...obj
  });
  export const isa = (o: any): o is TagInfoForResource =>
    __isa(o, "TagInfoForResource");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 *          </p>
 */
export interface TextTransformation {
  __type?: "TextTransformation";
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
    ...obj
  });
  export const isa = (o: any): o is TextTransformation =>
    __isa(o, "TextTransformation");
}

export enum TextTransformationType {
  CMD_LINE = "CMD_LINE",
  COMPRESS_WHITE_SPACE = "COMPRESS_WHITE_SPACE",
  HTML_ENTITY_DECODE = "HTML_ENTITY_DECODE",
  LOWERCASE = "LOWERCASE",
  NONE = "NONE",
  URL_DECODE = "URL_DECODE"
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 *          for which you want AWS WAF to return a sample of web requests.</p>
 *          <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 *          for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first
 *          5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000
 *          requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code>
 *          is the time that AWS WAF received the 5,000th request. </p>
 */
export interface TimeWindow {
  __type?: "TimeWindow";
  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   *          AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   *          AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  StartTime: Date | undefined;
}

export namespace TimeWindow {
  export const filterSensitiveLog = (obj: TimeWindow): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeWindow => __isa(o, "TimeWindow");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateIPSetRequest {
  __type?: "UpdateIPSetRequest";
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
   * <p>A friendly description of the IP set. You cannot change the description of an IP set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace UpdateIPSetRequest {
  export const filterSensitiveLog = (obj: UpdateIPSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIPSetRequest =>
    __isa(o, "UpdateIPSetRequest");
}

export interface UpdateIPSetResponse {
  __type?: "UpdateIPSetResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateIPSetResponse {
  export const filterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIPSetResponse =>
    __isa(o, "UpdateIPSetResponse");
}

export interface UpdateRegexPatternSetRequest {
  __type?: "UpdateRegexPatternSetRequest";
  /**
   * <p>A friendly description of the set. You cannot change the description of a set after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p></p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;
}

export namespace UpdateRegexPatternSetRequest {
  export const filterSensitiveLog = (
    obj: UpdateRegexPatternSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegexPatternSetRequest =>
    __isa(o, "UpdateRegexPatternSetRequest");
}

export interface UpdateRegexPatternSetResponse {
  __type?: "UpdateRegexPatternSetResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRegexPatternSetResponse {
  export const filterSensitiveLog = (
    obj: UpdateRegexPatternSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegexPatternSetResponse =>
    __isa(o, "UpdateRegexPatternSetResponse");
}

export interface UpdateRuleGroupRequest {
  __type?: "UpdateRuleGroupRequest";
  /**
   * <p>A friendly description of the rule group. You cannot change the description of a rule group after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace UpdateRuleGroupRequest {
  export const filterSensitiveLog = (obj: UpdateRuleGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRuleGroupRequest =>
    __isa(o, "UpdateRuleGroupRequest");
}

export interface UpdateRuleGroupResponse {
  __type?: "UpdateRuleGroupResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRuleGroupResponse {
  export const filterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRuleGroupResponse =>
    __isa(o, "UpdateRuleGroupResponse");
}

export interface UpdateWebACLRequest {
  __type?: "UpdateWebACLRequest";
  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A friendly description of the Web ACL. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching
   *          web requests, and parameters that govern how AWS WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | string | undefined;

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace UpdateWebACLRequest {
  export const filterSensitiveLog = (obj: UpdateWebACLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWebACLRequest =>
    __isa(o, "UpdateWebACLRequest");
}

export interface UpdateWebACLResponse {
  __type?: "UpdateWebACLResponse";
  /**
   * <p>A token used for optimistic locking. AWS WAF returns this token to your update requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateWebACLResponse {
  export const filterSensitiveLog = (obj: UpdateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWebACLResponse =>
    __isa(o, "UpdateWebACLResponse");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p>
 */
export interface UriPath {
  __type?: "UriPath";
}

export namespace UriPath {
  export const filterSensitiveLog = (obj: UriPath): any => ({
    ...obj
  });
  export const isa = (o: any): o is UriPath => __isa(o, "UriPath");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
 */
export interface VisibilityConfig {
  __type?: "VisibilityConfig";
  /**
   * <p>A boolean indicating whether the associated resource sends metrics to CloudWatch. For the list of available metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">AWS WAF Metrics</a>.</p>
   */
  CloudWatchMetricsEnabled: boolean | undefined;

  /**
   * <p>A friendly name of the CloudWatch metric. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with length from one to 128 characters. It can't contain
   *          whitespace or metric names reserved for AWS WAF, for example "All" and "Default_Action." You can't change a <code>MetricName</code> after you create a <code>VisibilityConfig</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A boolean indicating whether AWS WAF should store a sampling of the web
   *            requests that match the rules. You can view the sampled requests through the
   *            AWS WAF console. </p>
   */
  SampledRequestsEnabled: boolean | undefined;
}

export namespace VisibilityConfig {
  export const filterSensitiveLog = (obj: VisibilityConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is VisibilityConfig =>
    __isa(o, "VisibilityConfig");
}

/**
 * <p>AWS WAF couldn’t perform the operation because your resource is being used by another resource or it’s associated with another resource. </p>
 */
export interface WAFAssociatedItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFAssociatedItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFAssociatedItemException {
  export const filterSensitiveLog = (obj: WAFAssociatedItemException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFAssociatedItemException =>
    __isa(o, "WAFAssociatedItemException");
}

/**
 * <p>AWS WAF couldn’t perform the operation because the resource that you tried to save is a duplicate of an existing one.</p>
 */
export interface WAFDuplicateItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFDuplicateItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFDuplicateItemException {
  export const filterSensitiveLog = (obj: WAFDuplicateItemException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFDuplicateItemException =>
    __isa(o, "WAFDuplicateItemException");
}

/**
 * <p>Your request is valid, but AWS WAF couldn’t perform the operation because of a system problem. Retry your request. </p>
 */
export interface WAFInternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFInternalErrorException {
  export const filterSensitiveLog = (obj: WAFInternalErrorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInternalErrorException =>
    __isa(o, "WAFInternalErrorException");
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
export interface WAFInvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidParameterException";
  $fault: "client";
  Field?: ParameterExceptionField | string;
  Parameter?: string;
  Reason?: string;
  message?: string;
}

export namespace WAFInvalidParameterException {
  export const filterSensitiveLog = (
    obj: WAFInvalidParameterException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidParameterException =>
    __isa(o, "WAFInvalidParameterException");
}

/**
 * <p>AWS WAF couldn’t perform the operation because the resource that you requested isn’t valid. Check the resource, and try again.</p>
 */
export interface WAFInvalidResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidResourceException";
  $fault: "client";
  Message?: string;
}

export namespace WAFInvalidResourceException {
  export const filterSensitiveLog = (
    obj: WAFInvalidResourceException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidResourceException =>
    __isa(o, "WAFInvalidResourceException");
}

/**
 * <p>AWS WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of <code>WebACL</code> objects that you can create
 *          for an AWS account. For more information, see
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface WAFLimitsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFLimitsExceededException";
  $fault: "client";
  Message?: string;
}

export namespace WAFLimitsExceededException {
  export const filterSensitiveLog = (obj: WAFLimitsExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFLimitsExceededException =>
    __isa(o, "WAFLimitsExceededException");
}

/**
 * <p>AWS WAF couldn’t perform the operation because your resource doesn’t exist. </p>
 */
export interface WAFNonexistentItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFNonexistentItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFNonexistentItemException {
  export const filterSensitiveLog = (
    obj: WAFNonexistentItemException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFNonexistentItemException =>
    __isa(o, "WAFNonexistentItemException");
}

/**
 * <p>AWS WAF couldn’t save your changes because you tried to update or delete a resource that has changed since you last retrieved it. Get the resource again, make any changes you need to make to the new copy, and retry your operation. </p>
 */
export interface WAFOptimisticLockException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFOptimisticLockException";
  $fault: "client";
  Message?: string;
}

export namespace WAFOptimisticLockException {
  export const filterSensitiveLog = (obj: WAFOptimisticLockException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFOptimisticLockException =>
    __isa(o, "WAFOptimisticLockException");
}

/**
 * <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a call to <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
 */
export interface WAFServiceLinkedRoleErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFServiceLinkedRoleErrorException";
  $fault: "client";
  message?: string;
}

export namespace WAFServiceLinkedRoleErrorException {
  export const filterSensitiveLog = (
    obj: WAFServiceLinkedRoleErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFServiceLinkedRoleErrorException =>
    __isa(o, "WAFServiceLinkedRoleErrorException");
}

/**
 * <p>An error occurred during the tagging operation. Retry your request.</p>
 */
export interface WAFTagOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFTagOperationException";
  $fault: "client";
  Message?: string;
}

export namespace WAFTagOperationException {
  export const filterSensitiveLog = (obj: WAFTagOperationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFTagOperationException =>
    __isa(o, "WAFTagOperationException");
}

/**
 * <p>AWS WAF couldn’t perform your tagging operation because of an internal error. Retry your request.</p>
 */
export interface WAFTagOperationInternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFTagOperationInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFTagOperationInternalErrorException {
  export const filterSensitiveLog = (
    obj: WAFTagOperationInternalErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFTagOperationInternalErrorException =>
    __isa(o, "WAFTagOperationInternalErrorException");
}

/**
 * <p>AWS WAF couldn’t retrieve the resource that you requested. Retry your request.</p>
 */
export interface WAFUnavailableEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFUnavailableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace WAFUnavailableEntityException {
  export const filterSensitiveLog = (
    obj: WAFUnavailableEntityException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFUnavailableEntityException =>
    __isa(o, "WAFUnavailableEntityException");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer.  </p>
 */
export interface WebACL {
  __type?: "WebACL";
  /**
   * <p>The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.</p>
   */
  ARN: string | undefined;

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
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A friendly description of the Web ACL. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to create and list commands. You use this ID to do things like get, update, and delete a <code>WebACL</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name: string | undefined;

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

export namespace WebACL {
  export const filterSensitiveLog = (obj: WebACL): any => ({
    ...obj
  });
  export const isa = (o: any): o is WebACL => __isa(o, "WebACL");
}

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
 */
export interface WebACLSummary {
  __type?: "WebACLSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>A friendly description of the Web ACL. You cannot change the description of a Web ACL after you create it.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another get, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>A friendly name of the Web ACL. You cannot change the name of a Web ACL after you create it.</p>
   */
  Name?: string;
}

export namespace WebACLSummary {
  export const filterSensitiveLog = (obj: WebACLSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is WebACLSummary => __isa(o, "WebACLSummary");
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
  __type?: "XssMatchStatement";
  /**
   * <p>The part of a web request that you want AWS WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the
   *          content identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace XssMatchStatement {
  export const filterSensitiveLog = (obj: XssMatchStatement): any => ({
    ...obj
  });
  export const isa = (o: any): o is XssMatchStatement =>
    __isa(o, "XssMatchStatement");
}
