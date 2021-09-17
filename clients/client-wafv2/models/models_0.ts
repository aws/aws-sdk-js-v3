import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum ActionValue {
  ALLOW = "ALLOW",
  BLOCK = "BLOCK",
  COUNT = "COUNT",
}

/**
 * <p>A single action condition for a <a>Condition</a> in a logging filter.</p>
 */
export interface ActionCondition {
  /**
   * <p>The action setting that a log record must contain in order to meet the condition.
   *       </p>
   */
  Action: ActionValue | string | undefined;
}

export namespace ActionCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Inspect all of the elements that WAF has parsed and extracted from the web request
 *          JSON body that are within the <a>JsonBody</a>
 *             <code>MatchScope</code>. This is used with the <a>FieldToMatch</a> option
 *             <code>JsonBody</code>.
 *
 *       </p>
 *          <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"All": {}</code>
 *          </p>
 */
export interface All {}

export namespace All {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: All): any => ({
    ...obj,
  });
}

/**
 * <p>A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>.</p>
 */
export interface CustomHTTPHeader {
  /**
   * <p>The name of the custom header. </p>
   *          <p>For custom request header insertion, when WAF inserts the header into the request,
   *          it prefixes this name <code>x-amzn-waf-</code>, to avoid confusion with the headers that
   *          are already in the request. For example, for the header name <code>sample</code>, WAF
   *          inserts the header <code>x-amzn-waf-sample</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the custom header.</p>
   */
  Value: string | undefined;
}

export namespace CustomHTTPHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomHTTPHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Custom request handling behavior that inserts custom headers into a web request. You can
 *          add custom request handling for the rule actions allow and count. </p>
 *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 */
export interface CustomRequestHandling {
  /**
   * <p>The HTTP headers to insert into the request. Duplicate header names are not allowed. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  InsertHeaders: CustomHTTPHeader[] | undefined;
}

export namespace CustomRequestHandling {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomRequestHandling): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that WAF should allow the request and optionally defines additional
 *          custom handling for the request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface AllowAction {
  /**
   * <p>Defines custom handling for the web request.</p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

export namespace AllowAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllowAction): any => ({
    ...obj,
  });
}

/**
 * <p>All query arguments of a web request. </p>
 *            <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"AllQueryArguments": {}</code>
 *          </p>
 */
export interface AllQueryArguments {}

export namespace AllQueryArguments {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllQueryArguments): any => ({
    ...obj,
  });
}

/**
 * <p>The body of a web request. This immediately follows the request headers.</p>
 *          <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"Body": {}</code>
 *          </p>
 */
export interface Body {}

export namespace Body {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Body): any => ({
    ...obj,
  });
}

export enum BodyParsingFallbackBehavior {
  EVALUATE_AS_STRING = "EVALUATE_AS_STRING",
  MATCH = "MATCH",
  NO_MATCH = "NO_MATCH",
}

/**
 * <p>The patterns to look for in the JSON body. WAF inspects the results of these
 *          pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>. </p>
 */
export interface JsonMatchPattern {
  /**
   * <p>Match all of the elements. See also
   *             <code>MatchScope</code>
   *          in <a>JsonBody</a>. </p>
   *          <p>You must specify either this setting or the <code>IncludedPaths</code> setting, but not
   *          both.</p>
   */
  All?: All;

  /**
   * <p>Match only the specified include paths. See also
   *             <code>MatchScope</code>
   *          in <a>JsonBody</a>. </p>
   *          <p>Provide the include paths using JSON Pointer syntax. For example, <code>"IncludedPaths":
   *             ["/dogs/0/name", "/dogs/1/name"]</code>. For information about this syntax, see the
   *          Internet Engineering Task Force (IETF) documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript Object Notation (JSON)
   *             Pointer</a>. </p>
   *          <p>You must specify either this setting or the <code>All</code> setting, but not
   *          both.</p>
   *          <note>
   *             <p>Don't use this option to include all paths. Instead, use the <code>All</code>
   *             setting. </p>
   *          </note>
   */
  IncludedPaths?: string[];
}

export namespace JsonMatchPattern {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonMatchPattern): any => ({
    ...obj,
  });
}

export enum JsonMatchScope {
  ALL = "ALL",
  KEY = "KEY",
  VALUE = "VALUE",
}

/**
 * <p>The body of a web request, inspected as JSON. The body immediately follows the request
 *          headers. This is used in the <a>FieldToMatch</a> specification.</p>
 *          <p>Use the specifications in this object to indicate which parts of the JSON body to
 *          inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON
 *          that result from the matches that you
 *          indicate.
 *       </p>
 *          <p>Example JSON: <code>"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }</code>
 *          </p>
 */
export interface JsonBody {
  /**
   * <p>The patterns to look for in the JSON body. WAF inspects the results of these
   *          pattern matches against the rule inspection criteria. </p>
   */
  MatchPattern: JsonMatchPattern | undefined;

  /**
   * <p>The parts of the JSON to match against using the <code>MatchPattern</code>. If you
   *          specify <code>All</code>, WAF matches against keys and values. </p>
   */
  MatchScope: JsonMatchScope | string | undefined;

  /**
   * <p>What WAF should do if it fails to completely parse the JSON body. The options are
   *          the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EVALUATE_AS_STRING</code> - Inspect the body as plain text. WAF applies
   *                the text transformations and inspection criteria that you defined for the JSON
   *                inspection to the body text string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't provide this setting, WAF parses and evaluates the content only up to the
   *          first parsing failure that it encounters. </p>
   *          <p>WAF does its best to parse the entire JSON body, but might be forced to stop for
   *          reasons such as invalid characters, duplicate keys, truncation, and any content whose root
   *          node isn't an object or an array. </p>
   *          <p>WAF parses the JSON in the following examples as two valid key, value pairs: </p>
   *          <ul>
   *             <li>
   *                <p>Missing comma: <code>{"key1":"value1""key2":"value2"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Missing colon: <code>{"key1":"value1","key2""value2"}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Extra colons: <code>{"key1"::"value1","key2""value2"}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior | string;
}

export namespace JsonBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonBody): any => ({
    ...obj,
  });
}

/**
 * <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p>
 *            <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"Method": {}</code>
 *          </p>
 */
export interface Method {}

export namespace Method {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Method): any => ({
    ...obj,
  });
}

/**
 * <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p>
 *            <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"QueryString": {}</code>
 *          </p>
 */
export interface QueryString {}

export namespace QueryString {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryString): any => ({
    ...obj,
  });
}

/**
 * <p>One of the headers in a web request, identified by name, for example,
 *             <code>User-Agent</code> or <code>Referer</code>. This setting isn't case
 *          sensitive.</p>
 *          <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code>
 *          </p>
 */
export interface SingleHeader {
  /**
   * <p>The name of the query header to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingleHeader): any => ({
    ...obj,
  });
}

/**
 * <p>One query argument in a web request, identified by name, for example
 *             <i>UserName</i> or <i>SalesRegion</i>. The name can be up to
 *          30 characters long and isn't case sensitive. </p>
 *          <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code>
 *          </p>
 */
export interface SingleQueryArgument {
  /**
   * <p>The name of the query argument to inspect.</p>
   */
  Name: string | undefined;
}

export namespace SingleQueryArgument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingleQueryArgument): any => ({
    ...obj,
  });
}

/**
 * <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p>
 *          <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>JSON specification: <code>"UriPath": {}</code>
 *          </p>
 */
export interface UriPath {}

export namespace UriPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UriPath): any => ({
    ...obj,
  });
}

/**
 * <p>The part of a web request that you want WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
 *          <p>JSON specification for a <code>QueryString</code> field to match: </p>
 *          <p>
 *             <code>    "FieldToMatch": { "QueryString": {} }</code>
 *          </p>
 *          <p>Example JSON for a <code>Method</code> field to match specification:</p>
 *          <p>
 *             <code>    "FieldToMatch": { "Method": { "Name": "DELETE" } }</code>
 *          </p>
 */
export interface FieldToMatch {
  /**
   * <p>Inspect a single header. Provide the name of the header to inspect, for example,
   *             <code>User-Agent</code> or <code>Referer</code>. This setting isn't case
   *          sensitive.</p>
   *          <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code>
   *          </p>
   */
  SingleHeader?: SingleHeader;

  /**
   * <p>Inspect a single query argument. Provide the name of the query argument to inspect, such
   *          as <i>UserName</i> or <i>SalesRegion</i>. The name can be up to
   *          30 characters long and isn't case sensitive. </p>
   *          <p>This is used only to indicate the web request component for WAF to inspect, in the <a>FieldToMatch</a> specification. </p>
   *          <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code>
   *          </p>
   */
  SingleQueryArgument?: SingleQueryArgument;

  /**
   * <p>Inspect all query arguments. </p>
   */
  AllQueryArguments?: AllQueryArguments;

  /**
   * <p>Inspect the request URI path. This is the part of a web request that identifies a
   *          resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  UriPath?: UriPath;

  /**
   * <p>Inspect the query string. This is the part of a URL that appears after a <code>?</code>
   *          character, if any.</p>
   */
  QueryString?: QueryString;

  /**
   * <p>Inspect the request body as plain text. The request body immediately follows the request
   *          headers. This is the part of a request that contains any additional data that you want to
   *          send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>Note that only the first 8 KB (8192 bytes) of the request body are forwarded to
   *          WAF for inspection by the underlying host service. If you don't need to inspect more
   *          than 8 KB, you can guarantee that you don't allow additional bytes in by combining a
   *          statement that inspects the body of the web request, such as <a>ByteMatchStatement</a> or <a>RegexPatternSetReferenceStatement</a>,
   *          with a <a>SizeConstraintStatement</a> that enforces an 8 KB size limit on the
   *          body of the request. WAF doesn't support inspecting the entire contents of web requests
   *          whose bodies exceed the 8 KB limit.</p>
   */
  Body?: Body;

  /**
   * <p>Inspect the HTTP method. The method indicates the type of operation that the request is
   *          asking the origin to perform. </p>
   */
  Method?: Method;

  /**
   * <p>Inspect the request body as JSON. The request body immediately follows the request
   *          headers. This is the part of a request that contains any additional data that you want to
   *          send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>Note that only the first 8 KB (8192 bytes) of the request body are forwarded to
   *          WAF for inspection by the underlying host service. If you don't need to inspect more
   *          than 8 KB, you can guarantee that you don't allow additional bytes in by combining a
   *          statement that inspects the body of the web request, such as <a>ByteMatchStatement</a> or <a>RegexPatternSetReferenceStatement</a>,
   *          with a <a>SizeConstraintStatement</a> that enforces an 8 KB size limit on the
   *          body of the request. WAF doesn't support inspecting the entire contents of web requests
   *          whose bodies exceed the 8 KB limit.</p>
   */
  JsonBody?: JsonBody;
}

export namespace FieldToMatch {
  /**
   * @internal
   */
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
  BASE64_DECODE = "BASE64_DECODE",
  BASE64_DECODE_EXT = "BASE64_DECODE_EXT",
  CMD_LINE = "CMD_LINE",
  COMPRESS_WHITE_SPACE = "COMPRESS_WHITE_SPACE",
  CSS_DECODE = "CSS_DECODE",
  ESCAPE_SEQ_DECODE = "ESCAPE_SEQ_DECODE",
  HEX_DECODE = "HEX_DECODE",
  HTML_ENTITY_DECODE = "HTML_ENTITY_DECODE",
  JS_DECODE = "JS_DECODE",
  LOWERCASE = "LOWERCASE",
  MD5 = "MD5",
  NONE = "NONE",
  NORMALIZE_PATH = "NORMALIZE_PATH",
  NORMALIZE_PATH_WIN = "NORMALIZE_PATH_WIN",
  REMOVE_NULLS = "REMOVE_NULLS",
  REPLACE_COMMENTS = "REPLACE_COMMENTS",
  REPLACE_NULLS = "REPLACE_NULLS",
  SQL_HEX_DECODE = "SQL_HEX_DECODE",
  URL_DECODE = "URL_DECODE",
  URL_DECODE_UNI = "URL_DECODE_UNI",
  UTF8_TO_UNICODE = "UTF8_TO_UNICODE",
}

/**
 * <p>Text transformations eliminate some of the unusual formatting that attackers use in web
 *          requests in an effort to bypass detection. </p>
 */
export interface TextTransformation {
  /**
   * <p>Sets the relative processing order for multiple transformations that are defined for a
   *          rule statement. WAF processes all transformations, from lowest priority to highest,
   *          before inspecting the transformed content. The priorities don't need to be consecutive, but
   *          they must all be different. </p>
   */
  Priority: number | undefined;

  /**
   * <p>You can specify the following transformation types:</p>
   *          <p>
   *             <b>BASE64_DECODE</b> - Decode a <code>Base64</code>-encoded
   *          string.</p>
   *          <p>
   *             <b>BASE64_DECODE_EXT</b> - Decode a
   *          <code>Base64</code>-encoded string, but use a forgiving implementation that ignores
   *          characters that aren't valid.</p>
   *          <p>
   *             <b>CMD_LINE</b> - Command-line transformations. These are
   *          helpful in reducing effectiveness of attackers who inject an operating system command-line
   *          command and use unusual formatting to disguise some or all of the command. </p>
   *          <ul>
   *             <li>
   *                <p>Delete the following characters: <code>\ " ' ^</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Delete spaces before the following characters: <code>/ (</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Replace the following characters with a space: <code>, ;</code>
   *                </p>
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
   *             <b>COMPRESS_WHITE_SPACE</b> - Replace these characters
   *          with a space character (decimal 32): </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>\f</code>, formfeed, decimal 12</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\t</code>, tab, decimal 9</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\n</code>, newline, decimal 10</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\r</code>, carriage return, decimal 13</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\v</code>, vertical tab, decimal 11</p>
   *             </li>
   *             <li>
   *                <p>Non-breaking space, decimal 160</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   *          <p>
   *             <b>CSS_DECODE</b> - Decode characters that were encoded
   *          using CSS 2.x escape rules <code>syndata.html#characters</code>. This function uses up to two bytes in
   *          the decoding process, so it can help to uncover ASCII characters that were encoded using
   *          CSS encoding that wouldn’t typically be encoded. It's also useful in countering evasion,
   *          which is a combination of a backslash and non-hexadecimal characters. For example,
   *          <code>ja\vascript</code> for javascript. </p>
   *          <p>
   *             <b>ESCAPE_SEQ_DECODE</b> - Decode the following ANSI C escape sequences:
   *          <code>\a</code>, <code>\b</code>, <code>\f</code>, <code>\n</code>, <code>\r</code>, <code>\t</code>, <code>\v</code>, <code>\\</code>, <code>\?</code>, <code>\'</code>, <code>\"</code>, <code>\xHH</code> (hexadecimal), <code>\0OOO</code> (octal). Encodings
   *          that aren't valid remain in the output. </p>
   *          <p>
   *             <b>HEX_DECODE</b> - Decode a string of hexadecimal characters into a binary.</p>
   *          <p>
   *             <b>HTML_ENTITY_DECODE</b> - Replace HTML-encoded
   *          characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs these
   *          operations: </p>
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
   *             <b>JS_DECODE</b> - Decode JavaScript escape sequences. If
   *          a <code>\</code>
   *             <code>u</code>
   *             <code>HHHH</code> code is in the full-width ASCII code range of <code>FF01-FF5E</code>, then the higher byte is
   *          used to detect and adjust the lower byte. If not, only the lower byte is used and the
   *          higher byte is zeroed, causing a possible loss of information. </p>
   *          <p>
   *             <b>LOWERCASE</b> - Convert uppercase letters (A-Z) to
   *          lowercase (a-z). </p>
   *          <p>
   *             <b>MD5</b> - Calculate an MD5 hash from the data in the
   *          input. The computed hash is in a raw binary form. </p>
   *          <p>
   *             <b>NONE</b> - Specify <code>NONE</code> if you don't want any text transformations.
   *       </p>
   *          <p>
   *             <b>NORMALIZE_PATH</b> - Remove multiple slashes, directory
   *          self-references, and directory back-references that are not at the beginning of the input
   *          from an input string. </p>
   *          <p>
   *             <b>NORMALIZE_PATH_WIN</b> - This is the same as
   *          <code>NORMALIZE_PATH</code>, but first converts backslash characters to forward slashes. </p>
   *          <p>
   *             <b>REMOVE_NULLS</b> - Remove all <code>NULL</code> bytes
   *          from the input. </p>
   *          <p>
   *             <b>REPLACE_COMMENTS</b> - Replace each occurrence of a
   *          C-style comment (<code>/* ... *\/</code>) with a single space. Multiple consecutive occurrences are not
   *          compressed. Unterminated comments are also replaced with a space (ASCII 0x20). However, a
   *          standalone termination of a comment (<code>*\/</code>) is not acted upon. </p>
   *          <p>
   *             <b>REPLACE_NULLS</b> - Replace NULL bytes in the input
   *          with space characters (ASCII <code>0x20</code>). </p>
   *          <p>
   *             <b>SQL_HEX_DECODE</b> - Decode SQL hex data. Example (<code>0x414243</code>) will be decoded to (<code>ABC</code>).</p>
   *          <p>
   *             <b>URL_DECODE</b> - Decode a URL-encoded value. </p>
   *          <p>
   *             <b>URL_DECODE_UNI</b> - Like <code>URL_DECODE</code>, but with support
   *          for Microsoft-specific <code>%u</code> encoding. If the code is in the full-width ASCII code range of
   *          <code>FF01-FF5E</code>, the higher byte is used to detect and adjust the lower byte. Otherwise, only the
   *          lower byte is used and the higher byte is zeroed. </p>
   *          <p>
   *             <b>UTF8_TO_UNICODE</b> - Convert all UTF-8 character
   *          sequences to Unicode. This helps input normalization, and minimizing false-positives and
   *          false-negatives for non-English languages.</p>
   */
  Type: TextTransformationType | string | undefined;
}

export namespace TextTransformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TextTransformation): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is refered to as a string match statement.</p>
 */
export interface ByteMatchStatement {
  /**
   * <p>A string value that you want WAF to search for. WAF searches only in the part of
   *          web requests that you designate for inspection in <a>FieldToMatch</a>. The
   *          maximum length of the value is 50 bytes.</p>
   *          <p>Valid values depend on the component that you specify for inspection in
   *             <code>FieldToMatch</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Method</code>: The HTTP method that you want WAF to search for. This
   *                indicates the type of operation specified in the request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UriPath</code>: The value that you want WAF to search for in the URI path,
   *                for example, <code>/images/daily-ad.jpg</code>. </p>
   *             </li>
   *          </ul>
   *          <p>If <code>SearchString</code> includes alphabetic characters A-Z and a-z, note that the
   *          value is case sensitive.</p>
   *          <p>
   *             <b>If you're using the WAF API</b>
   *          </p>
   *          <p>Specify a base64-encoded version of the value. The maximum length of the value before
   *          you base64-encode it is 50 bytes.</p>
   *          <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the value
   *          of <code>Data</code> is <code>User-Agent</code>. If you want to search the
   *             <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode
   *             <code>BadBot</code> using MIME base64-encoding and include the resulting value,
   *             <code>QmFkQm90</code>, in the value of <code>SearchString</code>.</p>
   *          <p>
   *             <b>If you're using the CLI or one of the Amazon Web Services SDKs</b>
   *          </p>
   *          <p>The value that you want WAF to search for. The SDK automatically base64 encodes the
   *          value.</p>
   */
  SearchString: Uint8Array | undefined;

  /**
   * <p>The part of a web request that you want WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * <p>The area within the portion of a web request that you want WAF to search for
   *             <code>SearchString</code>. Valid values include the following:</p>
   *          <p>
   *             <b>CONTAINS</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of
   *             <code>SearchString</code>, but the location doesn't matter.</p>
   *          <p>
   *             <b>CONTAINS_WORD</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of
   *             <code>SearchString</code>, and <code>SearchString</code> must contain only alphanumeric
   *          characters or underscore (A-Z, a-z, 0-9, or _). In addition, <code>SearchString</code> must
   *          be a word, which means that both of the following are true:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the beginning of the specified part of the web
   *                request or is preceded by a character other than an alphanumeric character or
   *                underscore (_). Examples include the value of a header and
   *                <code>;BadBot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the end of the specified part of the web request or
   *                is followed by a character other than an alphanumeric character or underscore (_),
   *                for example, <code>BadBot;</code> and <code>-BadBot;</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>EXACTLY</b>
   *          </p>
   *          <p>The value of the specified part of the web request must exactly match the value of
   *             <code>SearchString</code>.</p>
   *          <p>
   *             <b>STARTS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the beginning of the specified
   *          part of the web request.</p>
   *          <p>
   *             <b>ENDS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the end of the specified part of
   *          the web request.</p>
   */
  PositionalConstraint: PositionalConstraint | string | undefined;
}

export namespace ByteMatchStatement {
  /**
   * @internal
   */
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
 *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *
 *
 *          <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p>
 *          <p>WAF only evaluates the first IP address found in the specified HTTP header.
 *       </p>
 */
export interface ForwardedIPConfig {
  /**
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | string | undefined;
}

export namespace ForwardedIPConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForwardedIPConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement used to identify web requests based on country of origin.  </p>
 */
export interface GeoMatchStatement {
  /**
   * <p>An array of two-character country codes, for example, <code>[ "US", "CN" ]</code>, from
   *          the alpha-2 country ISO codes of the ISO 3166 international standard. </p>
   */
  CountryCodes?: (CountryCode | string)[];

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  ForwardedIPConfig?: ForwardedIPConfig;
}

export namespace GeoMatchStatement {
  /**
   * @internal
   */
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
 *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *
 *
 *          <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p>
 */
export interface IPSetForwardedIPConfig {
  /**
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | string | undefined;

  /**
   * <p>The position in the header to search for the IP address. The header can contain IP
   *          addresses of the original client and also of proxies. For example, the header value could
   *          be <code>10.1.1.1, 127.0.0.0, 10.10.10.10</code> where the first IP address identifies the
   *          original client and the rest identify proxies that the request went through. </p>
   *          <p>The options for this setting are the following: </p>
   *          <ul>
   *             <li>
   *                <p>FIRST - Inspect the first IP address in the list of IP addresses in the
   *                header. This is usually the client's original IP.</p>
   *             </li>
   *             <li>
   *                <p>LAST - Inspect the last IP address in the list of IP addresses in the
   *                header.</p>
   *             </li>
   *             <li>
   *                <p>ANY - Inspect all IP addresses in the header for a match. If the header
   *                contains more than 10 IP addresses, WAF inspects the last 10.</p>
   *             </li>
   *          </ul>
   */
  Position: ForwardedIPPosition | string | undefined;
}

export namespace IPSetForwardedIPConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IPSetForwardedIPConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
 *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
 */
export interface IPSetReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>IPSet</a> that this statement
   *          references.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}

export namespace IPSetReferenceStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IPSetReferenceStatement): any => ({
    ...obj,
  });
}

export enum LabelMatchScope {
  LABEL = "LABEL",
  NAMESPACE = "NAMESPACE",
}

/**
 * <p>A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. </p>
 *          <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>
 */
export interface LabelMatchStatement {
  /**
   * <p>Specify whether you want to match using the label name or just the namespace. </p>
   */
  Scope: LabelMatchScope | string | undefined;

  /**
   * <p>The string to match against. The setting you provide for this depends on the match
   *          statement's <code>Scope</code> setting: </p>
   *          <ul>
   *             <li>
   *                <p>If the <code>Scope</code> indicates <code>LABEL</code>, then this specification
   *                must include the name and can include any number of preceding namespace
   *                specifications and prefix up to providing the fully qualified label name. </p>
   *             </li>
   *             <li>
   *                <p>If the <code>Scope</code> indicates <code>NAMESPACE</code>, then this
   *                specification can include any number of contiguous namespace strings, and can include
   *                the entire label namespace prefix from the rule group or web ACL where the label
   *                originates.</p>
   *             </li>
   *          </ul>
   *          <p>Labels are case sensitive and components of a label must be separated by colon, for
   *          example <code>NS1:NS2:name</code>.</p>
   */
  Key: string | undefined;
}

export namespace LabelMatchStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelMatchStatement): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a single rule to exclude from the rule group. Excluding a rule overrides its
 *          action setting for the rule group in the web ACL, setting it to <code>COUNT</code>. This
 *          effectively excludes the rule from acting on web requests. </p>
 */
export interface ExcludedRule {
  /**
   * <p>The name of the rule to exclude.</p>
   */
  Name: string | undefined;
}

export namespace ExcludedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExcludedRule): any => ({
    ...obj,
  });
}

export enum RateBasedStatementAggregateKeyType {
  FORWARDED_IP = "FORWARDED_IP",
  IP = "IP",
}

/**
 * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
 *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
 */
export interface RegexPatternSetReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>RegexPatternSet</a> that this
   *          statement references.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The part of a web request that you want WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace RegexPatternSetReferenceStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegexPatternSetReferenceStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
 *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You
 *       can only use a rule group reference statement at the top level inside a web ACL. </p>
 */
export interface RuleGroupReferenceStatement {
  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The names of rules that are in the referenced rule group, but that you want WAF to
   *          exclude from processing for this rule statement. </p>
   */
  ExcludedRules?: ExcludedRule[];
}

export namespace RuleGroupReferenceStatement {
  /**
   * @internal
   */
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
 * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
 *          <p>If you configure WAF to inspect the request body, WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p>
 *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
 */
export interface SizeConstraintStatement {
  /**
   * <p>The part of a web request that you want WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
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
   *          If you specify one or more transformations in a rule statement, WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SizeConstraintStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SizeConstraintStatement): any => ({
    ...obj,
  });
}

/**
 * <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
 */
export interface SqliMatchStatement {
  /**
   * <p>The part of a web request that you want WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace SqliMatchStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqliMatchStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement that defines a cross-site scripting (XSS) match search for WAF to apply to web requests.
 *          XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious
 *          client-site scripts into other legitimate web browsers.
 *          The XSS match statement provides the location in requests that you want WAF to search and text transformations
 *          to use on the search area before WAF searches for character sequences that are likely to be malicious strings. </p>
 */
export interface XssMatchStatement {
  /**
   * <p>The part of a web request that you want WAF to inspect. For more information, see <a>FieldToMatch</a>. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
   *          If you specify one or more transformations in a rule statement, WAF performs all transformations on the
   *          content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.</p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

export namespace XssMatchStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XssMatchStatement): any => ({
    ...obj,
  });
}

export interface AssociateWebACLRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the
   *          resource.</p>
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
   *                <p>For an Amazon API Gateway REST API: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWebACLRequest): any => ({
    ...obj,
  });
}

export interface AssociateWebACLResponse {}

export namespace AssociateWebACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateWebACLResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 */
export interface WAFInternalErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFInternalErrorException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFInvalidOperationException): any => ({
    ...obj,
  });
}

export enum ParameterExceptionField {
  AND_STATEMENT = "AND_STATEMENT",
  ASSOCIABLE_RESOURCE = "ASSOCIABLE_RESOURCE",
  BODY_PARSING_FALLBACK_BEHAVIOR = "BODY_PARSING_FALLBACK_BEHAVIOR",
  BYTE_MATCH_STATEMENT = "BYTE_MATCH_STATEMENT",
  CHANGE_PROPAGATION_STATUS = "CHANGE_PROPAGATION_STATUS",
  CUSTOM_REQUEST_HANDLING = "CUSTOM_REQUEST_HANDLING",
  CUSTOM_RESPONSE = "CUSTOM_RESPONSE",
  CUSTOM_RESPONSE_BODY = "CUSTOM_RESPONSE_BODY",
  DEFAULT_ACTION = "DEFAULT_ACTION",
  ENTITY_LIMIT = "ENTITY_LIMIT",
  EXCLUDED_RULE = "EXCLUDED_RULE",
  EXPIRE_TIMESTAMP = "EXPIRE_TIMESTAMP",
  FALLBACK_BEHAVIOR = "FALLBACK_BEHAVIOR",
  FIELD_TO_MATCH = "FIELD_TO_MATCH",
  FILTER_CONDITION = "FILTER_CONDITION",
  FIREWALL_MANAGER_STATEMENT = "FIREWALL_MANAGER_STATEMENT",
  FORWARDED_IP_CONFIG = "FORWARDED_IP_CONFIG",
  GEO_MATCH_STATEMENT = "GEO_MATCH_STATEMENT",
  HEADER_NAME = "HEADER_NAME",
  IP_ADDRESS = "IP_ADDRESS",
  IP_ADDRESS_VERSION = "IP_ADDRESS_VERSION",
  IP_SET = "IP_SET",
  IP_SET_FORWARDED_IP_CONFIG = "IP_SET_FORWARDED_IP_CONFIG",
  IP_SET_REFERENCE_STATEMENT = "IP_SET_REFERENCE_STATEMENT",
  JSON_MATCH_PATTERN = "JSON_MATCH_PATTERN",
  JSON_MATCH_SCOPE = "JSON_MATCH_SCOPE",
  LABEL_MATCH_STATEMENT = "LABEL_MATCH_STATEMENT",
  LOGGING_FILTER = "LOGGING_FILTER",
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
  RESPONSE_CONTENT_TYPE = "RESPONSE_CONTENT_TYPE",
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
 * <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified
 *                a
 *                parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 */
export interface WAFInvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidParameterException";
  $fault: "client";
  message?: string;
  /**
   * <p>The settings where the invalid parameter was found. </p>
   */
  Field?: ParameterExceptionField | string;

  /**
   * <p>The invalid parameter that resulted in the exception. </p>
   */
  Parameter?: string;

  /**
   * <p>Additional information about the exception.</p>
   */
  Reason?: string;
}

export namespace WAFInvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFInvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform the operation because your resource doesn’t exist. </p>
 */
export interface WAFNonexistentItemException extends __SmithyException, $MetadataBearer {
  name: "WAFNonexistentItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFNonexistentItemException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFNonexistentItemException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t retrieve the resource that you requested. Retry your request.</p>
 */
export interface WAFUnavailableEntityException extends __SmithyException, $MetadataBearer {
  name: "WAFUnavailableEntityException";
  $fault: "client";
  Message?: string;
}

export namespace WAFUnavailableEntityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFUnavailableEntityException): any => ({
    ...obj,
  });
}

/**
 * <p>A custom response to send to the client. You can define a custom response for rule
 *          actions and default web ACL actions that are set to <a>BlockAction</a>. </p>
 *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 */
export interface CustomResponse {
  /**
   * <p>The HTTP status code to return to the client. </p>
   *          <p>For a list of status codes that you can use in your custom reqponses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  ResponseCode: number | undefined;

  /**
   * <p>References the response body that you want WAF to return to the web request
   *          client. You can define a custom response for a rule action or a default web ACL action that
   *          is set to block. To do this, you first define the response body key and value in the
   *             <code>CustomResponseBodies</code> setting for the <a>WebACL</a> or <a>RuleGroup</a> where you want to use it. Then, in the rule action or web ACL
   *          default action <code>BlockAction</code> setting, you reference the response body using this
   *          key. </p>
   */
  CustomResponseBodyKey?: string;

  /**
   * <p>The HTTP headers to use in the response. Duplicate header names are not allowed. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  ResponseHeaders?: CustomHTTPHeader[];
}

export namespace CustomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that WAF should block the request and optionally defines additional
 *          custom handling for the response to the web request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface BlockAction {
  /**
   * <p>Defines a custom response for the web request.</p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponse?: CustomResponse;
}

export namespace BlockAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlockAction): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that WAF should count the request. Optionally defines additional custom
 *          handling for the request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface CountAction {
  /**
   * <p>Defines custom handling for the web request.</p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

export namespace CountAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CountAction): any => ({
    ...obj,
  });
}

/**
 * <p>The action that WAF should take on a web request when it matches a rule's
 *          statement. Settings at the web ACL level can override the rule action setting. </p>
 */
export interface RuleAction {
  /**
   * <p>Instructs WAF to block the web request.</p>
   */
  Block?: BlockAction;

  /**
   * <p>Instructs WAF to allow the web request.</p>
   */
  Allow?: AllowAction;

  /**
   * <p>Instructs WAF to count the web request and allow it.</p>
   */
  Count?: CountAction;
}

export namespace RuleAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleAction): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that WAF should do nothing. This is generally used to try out a rule
 *          without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>. </p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 *          <p>JSON specification: <code>"None": {}</code>
 *          </p>
 */
export interface NoneAction {}

export namespace NoneAction {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OverrideAction): any => ({
    ...obj,
  });
}

/**
 * <p>A single label container. This is used as an element of a label array in multiple
 *          contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in
 *             <code>Labels</code> inside a <a>SampledHTTPRequest</a>. </p>
 */
export interface Label {
  /**
   * <p>The label string. </p>
   */
  Name: string | undefined;
}

export namespace Label {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Label): any => ({
    ...obj,
  });
}

/**
 * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
 */
export interface VisibilityConfig {
  /**
   * <p>A boolean indicating whether WAF should store a sampling of the web requests that
   *          match the rules. You can view the sampled requests through the WAF console. </p>
   */
  SampledRequestsEnabled: boolean | undefined;

  /**
   * <p>A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the
   *          list of available metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF
   *             Metrics</a>.</p>
   */
  CloudWatchMetricsEnabled: boolean | undefined;

  /**
   * <p>A name of the Amazon CloudWatch metric. The name can contain only the characters: A-Z, a-z, 0-9,
   *          - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't
   *          contain whitespace or metric names reserved for WAF, for example "All" and
   *          "Default_Action." </p>
   */
  MetricName: string | undefined;
}

export namespace VisibilityConfig {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CheckCapacityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
 */
export interface WAFExpiredManagedRuleGroupVersionException extends __SmithyException, $MetadataBearer {
  name: "WAFExpiredManagedRuleGroupVersionException";
  $fault: "client";
  Message?: string;
}

export namespace WAFExpiredManagedRuleGroupVersionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFExpiredManagedRuleGroupVersionException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 */
export interface WAFInvalidResourceException extends __SmithyException, $MetadataBearer {
  name: "WAFInvalidResourceException";
  $fault: "client";
  Message?: string;
}

export namespace WAFInvalidResourceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFInvalidResourceException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 */
export interface WAFLimitsExceededException extends __SmithyException, $MetadataBearer {
  name: "WAFLimitsExceededException";
  $fault: "client";
  Message?: string;
}

export namespace WAFLimitsExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFLimitsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 */
export interface WAFSubscriptionNotFoundException extends __SmithyException, $MetadataBearer {
  name: "WAFSubscriptionNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace WAFSubscriptionNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFSubscriptionNotFoundException): any => ({
    ...obj,
  });
}

export enum IPAddressVersion {
  IPV4 = "IPV4",
  IPV6 = "IPV6",
}

/**
 * <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to
 *          categorize and manage your resources, for purposes like billing or other management.
 *          Typically, the tag key represents a category, such as "environment", and the tag value
 *          represents a specific value within that category, such as "test," "development," or
 *          "production". Or you might set the tag key to "customer" and the value to the customer name
 *          or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
 *          resource.</p>
 *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 *          console. </p>
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a
   *          category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a
   *          specific value within a category, such as "companyA" or "companyB." Tag values are
   *          case-sensitive.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;

  /**
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateIPSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIPSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
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
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace IPSetSummary {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIPSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 */
export interface WAFDuplicateItemException extends __SmithyException, $MetadataBearer {
  name: "WAFDuplicateItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFDuplicateItemException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFDuplicateItemException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 */
export interface WAFOptimisticLockException extends __SmithyException, $MetadataBearer {
  name: "WAFOptimisticLockException";
  $fault: "client";
  Message?: string;
}

export namespace WAFOptimisticLockException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFTagOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform your tagging operation because of an internal error. Retry
 *          your request.</p>
 */
export interface WAFTagOperationInternalErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFTagOperationInternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace WAFTagOperationInternalErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFTagOperationInternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p>
 */
export interface Regex {
  /**
   * <p>The string representing the regular expression.</p>
   */
  RegexString?: string;
}

export namespace Regex {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the set that helps with identification. </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRegexPatternSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
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
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace RegexPatternSetSummary {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export enum ResponseContentType {
  APPLICATION_JSON = "APPLICATION_JSON",
  TEXT_HTML = "TEXT_HTML",
  TEXT_PLAIN = "TEXT_PLAIN",
}

/**
 * <p>The response body to use in a custom response to a web request. This is referenced by
 *          key from <a>CustomResponse</a>
 *             <code>CustomResponseBodyKey</code>.</p>
 */
export interface CustomResponseBody {
  /**
   * <p>The type of content in the payload that you are defining in the <code>Content</code>
   *          string.</p>
   */
  ContentType: ResponseContentType | string | undefined;

  /**
   * <p>The payload of the custom response. </p>
   *          <p>You can use JSON escape strings in JSON content. To do this, you must specify JSON
   *          content in the <code>ContentType</code> setting. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  Content: string | undefined;
}

export namespace CustomResponseBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomResponseBody): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
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
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace RuleGroupSummary {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>In a <a>WebACL</a>, this is the action that you want WAF to perform
 *          when a web request doesn't match any of the rules in the <code>WebACL</code>. The default
 *          action must be a terminating action, so you can't use count.</p>
 */
export interface DefaultAction {
  /**
   * <p>Specifies that WAF should block requests by default. </p>
   */
  Block?: BlockAction;

  /**
   * <p>Specifies that WAF should allow requests by default.</p>
   */
  Allow?: AllowAction;
}

export namespace DefaultAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultAction): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
 */
export interface WebACLSummary {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace WebACLSummary {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  WebACLLockToken: string | undefined;
}

export namespace DeleteFirewallManagerRuleGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFirewallManagerRuleGroupsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFirewallManagerRuleGroupsResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextWebACLLockToken?: string;
}

export namespace DeleteFirewallManagerRuleGroupsResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteIPSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIPSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteIPSetResponse {}

export namespace DeleteIPSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIPSetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>WAF couldn’t perform the operation because your resource is being used by another
 *          resource or it’s associated with another resource. </p>
 */
export interface WAFAssociatedItemException extends __SmithyException, $MetadataBearer {
  name: "WAFAssociatedItemException";
  $fault: "client";
  Message?: string;
}

export namespace WAFAssociatedItemException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoggingConfigurationResponse {}

export namespace DeleteLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeletePermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group from which you want to delete the
   *          policy.</p>
   *          <p>You must be the owner of the rule group to perform this operation.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeletePermissionPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePermissionPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeletePermissionPolicyResponse {}

export namespace DeletePermissionPolicyResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteRegexPatternSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegexPatternSetRequest): any => ({
    ...obj,
  });
}

export interface DeleteRegexPatternSetResponse {}

export namespace DeleteRegexPatternSetResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteRuleGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleGroupResponse {}

export namespace DeleteRuleGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteWebACLRequest {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace DeleteWebACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWebACLRequest): any => ({
    ...obj,
  });
}

export interface DeleteWebACLResponse {}

export namespace DeleteWebACLResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The version of the rule group. You can only use a version that is not
   *        scheduled for expiration. If you don't provide this, WAF uses the vendor's default version.
   *       </p>
   */
  VersionName?: string;
}

export namespace DescribeManagedRuleGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeManagedRuleGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This
 *          summary object is used for the following rule group lists: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AvailableLabels</code> - Labels that rules add to matching requests.
 *                These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ConsumedLabels</code> - Labels that rules match against.
 *                These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
 *             </li>
 *          </ul>
 */
export interface LabelSummary {
  /**
   * <p>An individual label specification.</p>
   */
  Name?: string;
}

export namespace LabelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelSummary): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule. </p>
   */
  Name?: string;

  /**
   * <p>The action that WAF should take on a web request when it matches a rule's
   *          statement. Settings at the web ACL level can override the rule action setting. </p>
   */
  Action?: RuleAction;
}

export namespace RuleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleSummary): any => ({
    ...obj,
  });
}

export interface DescribeManagedRuleGroupResponse {
  /**
   * <p>The managed rule group's version. </p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to record changes
   *          to the managed rule group. You can subscribe to the SNS topic to receive notifications when
   *          the managed rule group is modified, such as for new versions and for version expiration.
   *          For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide</a>.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The web ACL capacity units (WCUs) required for this rule group. WAF uses web ACL
   *          capacity units (WCU) to calculate and control the operating resources that are used to run
   *          your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule
   *          type, to reflect each rule's relative cost. Rule group capacity is fixed at creation, so
   *          users can plan their web ACL WCU usage when they use a rule group. The WCU limit for web
   *          ACLs is 1,500. </p>
   */
  Capacity?: number;

  /**
   * <p></p>
   */
  Rules?: RuleSummary[];

  /**
   * <p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * <p>The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.</p>
   */
  AvailableLabels?: LabelSummary[];

  /**
   * <p>The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
   */
  ConsumedLabels?: LabelSummary[];
}

export namespace DescribeManagedRuleGroupResponse {
  /**
   * @internal
   */
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
   *                <p>For an Amazon API Gateway REST API: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateWebACLRequest): any => ({
    ...obj,
  });
}

export interface DisassociateWebACLResponse {}

export namespace DisassociateWebACLResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIPSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless
 *          Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges
 *          except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
 *             Inter-Domain Routing</a>. </p>
 *          <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a
 *          rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>
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
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion: IPAddressVersion | string | undefined;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;
}

export namespace IPSet {
  /**
   * @internal
   */
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetIPSetResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export enum FilterBehavior {
  DROP = "DROP",
  KEEP = "KEEP",
}

/**
 * <p>A single label name condition for a <a>Condition</a> in a logging
 *          filter.</p>
 */
export interface LabelNameCondition {
  /**
   * <p>The label name that a log record must contain in order to meet the condition. This must
   *          be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  </p>
   */
  LabelName: string | undefined;
}

export namespace LabelNameCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelNameCondition): any => ({
    ...obj,
  });
}

/**
 * <p>A single match condition for a <a>Filter</a>.</p>
 */
export interface Condition {
  /**
   * <p>A single action condition.</p>
   */
  ActionCondition?: ActionCondition;

  /**
   * <p>A single label name condition.</p>
   */
  LabelNameCondition?: LabelNameCondition;
}

export namespace Condition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

export enum FilterRequirement {
  MEETS_ALL = "MEETS_ALL",
  MEETS_ANY = "MEETS_ANY",
}

/**
 * <p>A single logging filter, used in <a>LoggingFilter</a>. </p>
 */
export interface Filter {
  /**
   * <p>How to handle logs that satisfy the filter's conditions and requirement. </p>
   */
  Behavior: FilterBehavior | string | undefined;

  /**
   * <p>Logic to apply to the filtering conditions. You can specify that, in order to satisfy
   *          the filter, a log must match all conditions or must match at least one condition.</p>
   */
  Requirement: FilterRequirement | string | undefined;

  /**
   * <p>Match conditions for the filter.</p>
   */
  Conditions: Condition[] | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Filtering that specifies which web requests are kept in the logs and which are dropped,
 *          defined for a web ACL's <a>LoggingConfiguration</a>. </p>
 *          <p>You can filter on the rule action and on the web request labels that were applied by
 *          matching rules during web ACL evaluation. </p>
 */
export interface LoggingFilter {
  /**
   * <p>The filters that you want to apply to the logs. </p>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>Default handling for logs that don't match any of the specified filtering conditions.
   *       </p>
   */
  DefaultBehavior: FilterBehavior | string | undefined;
}

export namespace LoggingFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL
 *          resource, for logging from WAF. As part of the association, you can specify parts of
 *          the standard logging fields to keep out of the logs and you can specify filters so that you
 *          log only a subset of the logging records. </p>
 */
export interface LoggingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with
   *             <code>LogDestinationConfigs</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The Amazon Kinesis Data Firehose Amazon Resource Name (ARNs) that you want to associate
   *          with the web ACL.</p>
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * <p>The parts of the request that you want to keep out of the logs. For
   *           example, if you redact the <code>SingleHeader</code> field, the <code>HEADER</code> field in the firehose will be <code>xxx</code>. </p>
   *          <note>
   *            <p>You can specify only the following fields for redaction: <code>UriPath</code>, <code>QueryString</code>, <code>SingleHeader</code>, <code>Method</code>, and <code>JsonBody</code>.</p>
   *          </note>
   */
  RedactedFields?: FieldToMatch[];

  /**
   * <p>Indicates whether the logging configuration was created by Firewall Manager, as part of an
   *          WAF policy configuration. If true, only Firewall Manager can modify or delete the
   *          configuration. </p>
   */
  ManagedByFirewallManager?: boolean;

  /**
   * <p>Filtering that specifies which web requests are kept in the logs and which are dropped.
   *          You can filter on the rule action and on the web request labels that were applied by
   *          matching rules during web ACL evaluation. </p>
   */
  LoggingFilter?: LoggingFilter;
}

export namespace LoggingConfiguration {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetManagedRuleSetRequest {
  /**
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetManagedRuleSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetManagedRuleSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information for a single version of a managed rule set. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSetVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor rule group that's used to define the
   *          published version of your managed rule group. </p>
   */
  AssociatedRuleGroupArn?: string;

  /**
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *           <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity?: number;

  /**
   * <p>The amount of time you expect this version of your managed rule group to last, in days.
   *       </p>
   */
  ForecastedLifetime?: number;

  /**
   * <p>The time that you first published this version. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  PublishTimestamp?: Date;

  /**
   * <p>The last time that you updated this version. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>The time that this version is set to expire.</p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp?: Date;
}

export namespace ManagedRuleSetVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleSetVersion): any => ({
    ...obj,
  });
}

/**
 * <p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed
 *          rule groups for customers of WAF.</p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSet {
  /**
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The versions of this managed rule set that are available for use by customers. </p>
   */
  PublishedVersions?: { [key: string]: ManagedRuleSetVersion };

  /**
   * <p>The version that you would like your customers to use.</p>
   */
  RecommendedVersion?: string;

  /**
   * <p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;
}

export namespace ManagedRuleSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleSet): any => ({
    ...obj,
  });
}

export interface GetManagedRuleSetResponse {
  /**
   * <p>The managed rule set that you requested. </p>
   */
  ManagedRuleSet?: ManagedRuleSet;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetManagedRuleSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetManagedRuleSetResponse): any => ({
    ...obj,
  });
}

export interface GetPermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule group for which you want to get the
   *          policy.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetPermissionPolicyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPermissionPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetRateBasedStatementManagedKeysRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  WebACLName: string | undefined;

  /**
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  WebACLId: string | undefined;

  /**
   * <p>The name of the rule group reference statement in your web ACL. This is required only when you have the rate-based rule nested
   * inside a rule group. </p>
   */
  RuleGroupRuleName?: string;

  /**
   * <p>The name of the rate-based rule to get the keys for. If you have the rule defined inside a rule group that you're using in your web ACL, also provide the name of the rule group reference statement in the request parameter <code>RuleGroupRuleName</code>.</p>
   */
  RuleName: string | undefined;
}

export namespace GetRateBasedStatementManagedKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRateBasedStatementManagedKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>.</p>
 */
export interface RateBasedStatementManagedKeysIPSet {
  /**
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion?: IPAddressVersion | string;

  /**
   * <p>The IP addresses that are currently blocked.</p>
   */
  Addresses?: string[];
}

export namespace RateBasedStatementManagedKeysIPSet {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegexPatternSetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains one or more regular expressions. </p>
 *          <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a
 *          set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>
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
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The regular expression patterns in the set.</p>
   */
  RegularExpressionList?: Regex[];
}

export namespace RegexPatternSet {
  /**
   * @internal
   */
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
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetRegexPatternSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export interface GetRuleGroupRequest {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name?: string;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

export namespace GetRuleGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRuleGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and
 *             <code>EndTime</code> objects specify the time range for which you want WAF to
 *          return a sample of web requests.</p>
 *          <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format
 *          includes the special designator, <code>Z</code>. For example,
 *             <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three
 *          hours.</p>
 *          <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and
 *             <code>EndTime</code> objects specify the time range for which WAF actually returned a
 *          sample of web requests. WAF gets the specified number of requests from among the first
 *          5,000 requests that your Amazon Web Services resource receives during the specified time period. If your
 *          resource receives more than 5,000 requests during that period, WAF stops sampling after
 *          the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the
 *          5,000th request.</p>
 */
export interface TimeWindow {
  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to
   *          return a sample of the requests that your Amazon Web Services resource received. You must specify the
   *          times in Coordinated Universal Time (UTC) format. UTC format includes the special
   *          designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify
   *          any time range in the previous three hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return
   *          a sample of the requests that your Amazon Web Services resource received. You must specify the times in
   *          Coordinated Universal Time (UTC) format. UTC format includes the special designator,
   *             <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time
   *          range in the previous three hours.</p>
   */
  EndTime: Date | undefined;
}

export namespace TimeWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeWindow): any => ({
    ...obj,
  });
}

export interface GetSampledRequestsRequest {
  /**
   * <p>The Amazon resource name (ARN) of the <code>WebACL</code> for which you want a sample of
   *          requests.</p>
   */
  WebAclArn: string | undefined;

  /**
   * <p>The metric name assigned to the <code>Rule</code> or <code>RuleGroup</code> for which
   *          you want a sample of requests.</p>
   */
  RuleMetricName: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The start date and time and the end date and time of the range for which you want
   *             <code>GetSampledRequests</code> to return a sample of requests. You must specify the
   *          times in Coordinated Universal Time (UTC) format. UTC format includes the special
   *          designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify
   *          any time range in the previous three hours. If you specify a start time that's earlier than
   *          three hours ago, WAF sets it to three hours ago.</p>
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * <p>The number of requests that you want WAF to return from among the first 5,000
   *          requests that your Amazon Web Services resource received during the time range. If your resource received
   *          fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code>
   *          returns information about all of them. </p>
   */
  MaxItems: number | undefined;
}

export namespace GetSampledRequestsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSampledRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type
 *          that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code>
 *          contains the names and values of all of the headers that appear in one of the web requests.
 *       </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HTTPHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type
 *          that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code>
 *          contains information about one of the web requests. </p>
 */
export interface HTTPRequest {
  /**
   * <p>The IP address that the request originated from. If the web ACL is associated with a
   *          CloudFront distribution, this is the value of one of the following fields in CloudFront access
   *          logs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send
   *                the request</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer
   *                to send the request</p>
   *             </li>
   *          </ul>
   */
  ClientIP?: string;

  /**
   * <p>The two-letter country code for the country that the request originated from. For a
   *          current list of country codes, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1
   *          alpha-2</a>.</p>
   */
  Country?: string;

  /**
   * <p>The URI path of the request, which identifies the resource, for example,
   *             <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;

  /**
   * <p>The HTTP method specified in the sampled web request. </p>
   */
  Method?: string;

  /**
   * <p>The HTTP version specified in the sampled web request, for example,
   *             <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * <p>A complex type that contains the name and value for each header in the sampled web
   *          request.</p>
   */
  Headers?: HTTPHeader[];
}

export namespace HTTPRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HTTPRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type
 *          that appears as <code>SampledRequests</code> in the response syntax.
 *             <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code>
 *          objects.</p>
 */
export interface SampledHTTPRequest {
  /**
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: HTTPRequest | undefined;

  /**
   * <p>A value that indicates how one result in the response relates proportionally to other
   *          results in the response. For example, a result that has a weight of <code>2</code>
   *          represents roughly twice as many web requests as a result that has a weight of
   *             <code>1</code>.</p>
   */
  Weight: number | undefined;

  /**
   * <p>The time at which WAF received the request from your Amazon Web Services resource, in Unix time
   *          format (in seconds).</p>
   */
  Timestamp?: Date;

  /**
   * <p>The action for the <code>Rule</code> that the request matched: <code>ALLOW</code>,
   *             <code>BLOCK</code>, or <code>COUNT</code>.</p>
   */
  Action?: string;

  /**
   * <p>The name of the <code>Rule</code> that the request matched. For managed rule groups, the
   *          format for this name is <code><vendor name>#<managed rule group name>#<rule
   *             name></code>. For your own rule groups, the format for this name is <code><rule
   *             group name>#<rule name></code>. If the rule is not in a rule group, this field
   *          is absent. </p>
   */
  RuleNameWithinRuleGroup?: string;

  /**
   * <p>Custom request headers inserted by WAF into the request, according to the custom
   *          request configuration for the matching rule action.</p>
   */
  RequestHeadersInserted?: HTTPHeader[];

  /**
   * <p>The response code that was sent for the request.</p>
   */
  ResponseCodeSent?: number;

  /**
   * <p>Labels applied to the web request by matching rules. WAF applies fully qualified
   *          labels to matching web requests. A fully qualified label is the concatenation of a label
   *          namespace and a rule label. The rule's rule group or web ACL defines the label namespace. </p>
   *          <p>For example,
   *             <code>awswaf:111122223333:myRuleGroup:testRules:testNS1:testNS2:labelNameA</code> or
   *             <code>awswaf:managed:aws:managed-rule-set:header:encoding:utf8</code>. </p>
   */
  Labels?: Label[];
}

export namespace SampledHTTPRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampledHTTPRequest): any => ({
    ...obj,
  });
}

export interface GetSampledRequestsResponse {
  /**
   * <p>A complex type that contains detailed information about each of the requests in the
   *          sample.</p>
   */
  SampledRequests?: SampledHTTPRequest[];

  /**
   * <p>The total number of requests from which <code>GetSampledRequests</code> got a sample of
   *             <code>MaxItems</code> requests. If <code>PopulationSize</code> is less than
   *             <code>MaxItems</code>, the sample includes every request that your Amazon Web Services resource
   *          received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the
   *             <code>GetSampledRequests</code> request. However, if your Amazon Web Services resource received more
   *          than 5,000 requests during the time range that you specified in the request,
   *             <code>GetSampledRequests</code> returns the time range for the first 5,000 requests.
   *          Times are in Coordinated Universal Time (UTC) format.</p>
   */
  TimeWindow?: TimeWindow;
}

export namespace GetSampledRequestsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSampledRequestsResponse): any => ({
    ...obj,
  });
}

export interface GetWebACLRequest {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

export namespace GetWebACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWebACLRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWebACLForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListAvailableManagedRuleGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups, which are free of charge to WAF customers, and Amazon Web Services Marketplace managed rule groups, which you can subscribe to through Amazon Web Services Marketplace. </p>
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
   * <p>The description of the managed rule group, provided by Amazon Web Services Managed Rules or the Amazon Web Services Marketplace seller who manages it.</p>
   */
  Description?: string;
}

export namespace ManagedRuleGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleGroupSummary): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  ManagedRuleGroups?: ManagedRuleGroupSummary[];
}

export namespace ListAvailableManagedRuleGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupVersionsRequest {
  /**
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListAvailableManagedRuleGroupVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a single version of a managed rule group. </p>
 */
export interface ManagedRuleGroupVersion {
  /**
   * <p>The version name. </p>
   */
  Name?: string;

  /**
   * <p>The date and time that the managed rule group owner updated the rule group version
   *          information. </p>
   */
  LastUpdateTimestamp?: Date;
}

export namespace ManagedRuleGroupVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleGroupVersion): any => ({
    ...obj,
  });
}

export interface ListAvailableManagedRuleGroupVersionsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The versions that are currently available for the specified managed rule group. </p>
   */
  Versions?: ManagedRuleGroupVersion[];
}

export namespace ListAvailableManagedRuleGroupVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAvailableManagedRuleGroupVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListIPSetsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListIPSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIPSetsRequest): any => ({
    ...obj,
  });
}

export interface ListIPSetsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Array of IPSets. This may not be the full list of IPSets that you have defined. See the
   *             <code>Limit</code> specification for this request.</p>
   */
  IPSets?: IPSetSummary[];
}

export namespace ListIPSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIPSetsResponse): any => ({
    ...obj,
  });
}

export interface ListLoggingConfigurationsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListLoggingConfigurationsRequest {
  /**
   * @internal
   */
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

export namespace ListLoggingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLoggingConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListManagedRuleSetsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListManagedRuleSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedRuleSetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>High-level information for a managed rule set. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSetSummary {
  /**
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id?: string;

  /**
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * <p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;
}

export namespace ManagedRuleSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleSetSummary): any => ({
    ...obj,
  });
}

export interface ListManagedRuleSetsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>Your managed rule sets. </p>
   */
  ManagedRuleSets?: ManagedRuleSetSummary[];
}

export namespace ListManagedRuleSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedRuleSetsResponse): any => ({
    ...obj,
  });
}

export interface ListRegexPatternSetsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListRegexPatternSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegexPatternSetsRequest): any => ({
    ...obj,
  });
}

export interface ListRegexPatternSetsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  RegexPatternSets?: RegexPatternSetSummary[];
}

export namespace ListRegexPatternSetsResponse {
  /**
   * @internal
   */
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
   * <p>The Amazon Resource Name (ARN) of the web ACL.</p>
   */
  WebACLArn: string | undefined;

  /**
   * <p>Used for web ACLs that are scoped for regional applications.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API. </p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ListResourcesForWebACLRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesForWebACLResponse): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListRuleGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRuleGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListRuleGroupsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  RuleGroups?: RuleGroupSummary[];
}

export namespace ListRuleGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRuleGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs
 *          that you can use to categorize and manage your resources, for purposes like billing or
 *          other management. Typically, the tag key represents a category, such as "environment", and
 *          the tag value represents a specific value within that category, such as "test,"
 *          "development," or "production". Or you might set the tag key to "customer" and the value to
 *          the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up
 *          to 50 tags for a resource.</p>
 *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 *          console. </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagInfoForResource): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The collection of tagging definitions for the resource. </p>
   */
  TagInfoForResource?: TagInfoForResource;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListWebACLsRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

export namespace ListWebACLsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWebACLsRequest): any => ({
    ...obj,
  });
}

export interface ListWebACLsResponse {
  /**
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * <p></p>
   */
  WebACLs?: WebACLSummary[];
}

export namespace ListWebACLsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>WAF is not able to access the service linked role. This can be caused by a
 *          previous <code>PutLoggingConfiguration</code> request, which can lock the service linked
 *          role for about 20 seconds. Please try your request again. The service linked role can also
 *          be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the
 *          role for 15 minutes or more. If you recently made a call to
 *             <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request
 *          again. If you receive this same exception again, you will have to wait additional time
 *          until the role is unlocked.</p>
 */
export interface WAFServiceLinkedRoleErrorException extends __SmithyException, $MetadataBearer {
  name: "WAFServiceLinkedRoleErrorException";
  $fault: "client";
  message?: string;
}

export namespace WAFServiceLinkedRoleErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WAFServiceLinkedRoleErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>A version of the named managed rule group, that the rule group's vendor publishes for
 *          use by customers. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface VersionToPublish {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor's rule group that's used in the published
   *          managed rule group version. </p>
   */
  AssociatedRuleGroupArn?: string;

  /**
   * <p>The amount of time the vendor expects this version of the managed rule group to last, in
   *          days. </p>
   */
  ForecastedLifetime?: number;
}

export namespace VersionToPublish {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersionToPublish): any => ({
    ...obj,
  });
}

export interface PutManagedRuleSetVersionsRequest {
  /**
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>The version of the named managed rule group that you'd like your customers to choose,
   *          from among your version offerings. </p>
   */
  RecommendedVersion?: string;

  /**
   * <p>The versions of the named managed rule group that you want to offer to your customers.
   *       </p>
   */
  VersionsToPublish?: { [key: string]: VersionToPublish };
}

export namespace PutManagedRuleSetVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutManagedRuleSetVersionsRequest): any => ({
    ...obj,
  });
}

export interface PutManagedRuleSetVersionsResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextLockToken?: string;
}

export namespace PutManagedRuleSetVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutManagedRuleSetVersionsResponse): any => ({
    ...obj,
  });
}

export interface PutPermissionPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a>RuleGroup</a> to which you want to
   *          attach the policy.</p>
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
   *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and <code>wafv2:PutFirewallManagerRuleGroups</code>. WAF rejects any extra actions or wildcard actions in the policy.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPermissionPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutPermissionPolicyResponse {}

export namespace PutPermissionPolicyResponse {
  /**
   * @internal
   */
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
 *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and <code>wafv2:PutFirewallManagerRuleGroups</code>. WAF rejects any extra actions or wildcard actions in the policy.</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. </p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   */
  Addresses: string[] | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateIPSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIPSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateIPSetResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateIPSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  /**
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>The version that you want to remove from your list of offerings for the named managed
   *          rule group. </p>
   */
  VersionToExpire: string | undefined;

  /**
   * <p>The time that you want the version to expire.</p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp: Date | undefined;
}

export namespace UpdateManagedRuleSetVersionExpiryDateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateManagedRuleSetVersionExpiryDateRequest): any => ({
    ...obj,
  });
}

export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  /**
   * <p>The version that is set to expire. </p>
   */
  ExpiringVersion?: string;

  /**
   * <p>The time that the version will expire. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp?: Date;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateManagedRuleSetVersionExpiryDateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateManagedRuleSetVersionExpiryDateResponse): any => ({
    ...obj,
  });
}

export interface UpdateRegexPatternSetRequest {
  /**
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p></p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

export namespace UpdateRegexPatternSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegexPatternSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateRegexPatternSetResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRegexPatternSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegexPatternSetResponse): any => ({
    ...obj,
  });
}

export interface UpdateRuleGroupResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateRuleGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateWebACLResponse {
  /**
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

export namespace UpdateWebACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWebACLResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether a web request matches the rule. </p>
 */
export interface Statement {
  /**
   * <p>A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is refered to as a string match statement.</p>
   */
  ByteMatchStatement?: ByteMatchStatement;

  /**
   * <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p>
   */
  SqliMatchStatement?: SqliMatchStatement;

  /**
   * <p>A rule statement that defines a cross-site scripting (XSS) match search for WAF to apply to web requests.
   *          XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious
   *          client-site scripts into other legitimate web browsers.
   *          The XSS match statement provides the location in requests that you want WAF to search and text transformations
   *          to use on the search area before WAF searches for character sequences that are likely to be malicious strings. </p>
   */
  XssMatchStatement?: XssMatchStatement;

  /**
   * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
   *          <p>If you configure WAF to inspect the request body, WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p>
   *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
   */
  SizeConstraintStatement?: SizeConstraintStatement;

  /**
   * <p>A rule statement used to identify web requests based on country of origin.  </p>
   */
  GeoMatchStatement?: GeoMatchStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You
   *       can only use a rule group reference statement at the top level inside a web ACL. </p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;

  /**
   * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
   *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
   */
  IPSetReferenceStatement?: IPSetReferenceStatement;

  /**
   * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
   *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
   */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

  /**
   * <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests. </p>
   *          <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p>
   *          <p>When the rule action triggers, WAF blocks additional requests from the IP address until the request rate falls below the limit.</p>
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
   *          <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>
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
   *          <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * <p>A rule statement that defines a string match search against labels that have been added to the web request by rules that have already run in the web ACL. </p>
   *          <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>
   */
  LabelMatchStatement?: LabelMatchStatement;
}

export namespace Statement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

/**
 * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
 *          <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
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
   * <p>The version of the managed rule group to use. If you specify this, the version setting
   *        is fixed until you change it.
   *       If you don't specify this, WAF uses the vendor's default version, and then keeps the version
   *       at the vendor's default when the vendor updates the managed rule group settings. </p>
   */
  Version?: string;

  /**
   * <p>The rules whose actions are set to <code>COUNT</code> by the web ACL, regardless of the
   *          action that is set on the rule. This effectively excludes the rule from acting on web
   *          requests. </p>
   */
  ExcludedRules?: ExcludedRule[];

  /**
   * <p>An optional nested statement that narrows the scope of the web requests that are
   *          evaluated by the managed rule group. Requests are only evaluated by the rule group if they
   *          match the scope-down statement. You can use any nestable <a>Statement</a> in the
   *          scope-down statement, and you can nest statements at any level, the same as you can for a
   *          rule statement. </p>
   */
  ScopeDownStatement?: Statement;
}

export namespace ManagedRuleGroupStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedRuleGroupStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
 */
export interface NotStatement {
  /**
   * <p>The statement to negate. You can use any statement that can be nested.</p>
   */
  Statement: Statement | undefined;
}

export namespace NotStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests. </p>
 *          <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p>
 *          <p>When the rule action triggers, WAF blocks additional requests from the IP address until the request rate falls below the limit.</p>
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
 *          <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>
 */
export interface RateBasedStatement {
  /**
   * <p>The limit on requests per 5-minute period for a single originating IP address. If the
   *          statement includes a <code>ScopeDownStatement</code>, this limit is applied only to the
   *          requests that match the statement.</p>
   */
  Limit: number | undefined;

  /**
   * <p>Setting that indicates how to aggregate the request counts. The options are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>IP - Aggregate the request counts on the IP address from the web request
   *                origin.</p>
   *             </li>
   *             <li>
   *                <p>FORWARDED_IP - Aggregate the request counts on the first IP address in an
   *                HTTP header. If you use this, configure the <code>ForwardedIPConfig</code>, to
   *                specify the header to use. </p>
   *             </li>
   *          </ul>
   */
  AggregateKeyType: RateBasedStatementAggregateKeyType | string | undefined;

  /**
   * <p>An optional nested statement that narrows the scope of the web requests that are
   *          evaluated by the rate-based statement. Requests are only tracked by the rate-based
   *          statement if they match the scope-down statement. You can use any nestable <a>Statement</a> in the scope-down statement, and you can nest statements at any
   *          level, the same as you can for a rule statement. </p>
   */
  ScopeDownStatement?: Statement;

  /**
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *
   *
   *          <p>This is required if <code>AggregateKeyType</code> is set to
   *          <code>FORWARDED_IP</code>.</p>
   */
  ForwardedIPConfig?: ForwardedIPConfig;
}

export namespace RateBasedStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RateBasedStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count.
 *          Each rule includes one top-level <a>Statement</a> that WAF uses to
 *          identify matching web requests, and parameters that govern how WAF handles them. </p>
 */
export interface Rule {
  /**
   * <p>The name of the rule. You can't change the name of a <code>Rule</code> after you create
   *          it. </p>
   */
  Name: string | undefined;

  /**
   * <p>If you define more than one <code>Rule</code> in a <code>WebACL</code>, WAF
   *          evaluates each request against the <code>Rules</code> in order based on the value of
   *             <code>Priority</code>. WAF processes rules with lower priority first. The priorities
   *          don't need to be consecutive, but they must all be different.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The WAF processing statement for the rule, for example <a>ByteMatchStatement</a> or <a>SizeConstraintStatement</a>. </p>
   */
  Statement: Statement | undefined;

  /**
   * <p>The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting. </p>
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
   * <p>Labels to apply to web requests that match the rule match statement. WAF applies
   *          fully qualified labels to matching web requests. A fully qualified label is the
   *          concatenation of a label namespace and a rule label. The rule's rule group or web ACL
   *          defines the label namespace. </p>
   *          <p>Rules that run after this rule in the web ACL can match against these labels using a
   *             <code>LabelMatchStatement</code>.</p>
   *          <p>For each label, provide a case-sensitive string containing optional namespaces and a
   *          label name, according to the following guidelines:</p>
   *          <ul>
   *             <li>
   *                <p>Separate each component of the label with a colon. </p>
   *             </li>
   *             <li>
   *                <p>Each namespace or name can have up to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>You can specify up to 5 namespaces in a label.</p>
   *             </li>
   *             <li>
   *                <p>Don't use the following reserved words in your label specification:
   *                   <code>aws</code>, <code>waf</code>, <code>managed</code>, <code>rulegroup</code>,
   *                   <code>webacl</code>, <code>regexpatternset</code>, or <code>ipset</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>myLabelName</code> or <code>nameSpace1:nameSpace2:myLabelName</code>.
   *       </p>
   */
  RuleLabels?: Label[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace Rule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

/**
 * <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
 */
export interface AndStatement {
  /**
   * <p>The statements to combine with AND logic. You can use any statements that can be nested.
   *       </p>
   */
  Statements: Statement[] | undefined;
}

export namespace AndStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AndStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
 */
export interface OrStatement {
  /**
   * <p>The statements to combine with OR logic. You can use any statements that can be
   *          nested.</p>
   */
  Statements: Statement[] | undefined;
}

export namespace OrStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrStatement): any => ({
    ...obj,
  });
}

/**
 * <p>The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.</p>
 */
export interface FirewallManagerStatement {
  /**
   * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
   *          <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You
   *       can only use a rule group reference statement at the top level inside a web ACL. </p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}

export namespace FirewallManagerStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallManagerStatement): any => ({
    ...obj,
  });
}

/**
 * <p>A rule group that's defined for an Firewall Manager WAF policy.</p>
 */
export interface FirewallManagerRuleGroup {
  /**
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>If you define more than one rule group in the first or last Firewall Manager rule groups, WAF
   *          evaluates each request against the rule groups in order, starting from the lowest priority
   *          setting. The priorities don't need to be consecutive, but they must all be
   *          different.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.</p>
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
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

export namespace FirewallManagerRuleGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirewallManagerRuleGroup): any => ({
    ...obj,
  });
}

export interface CheckCapacityRequest {
  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>An array of <a>Rule</a> that you're configuring to use in a rule group or web
   *          ACL. </p>
   */
  Rules: Rule[] | undefined;
}

export namespace CheckCapacityRequest {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   *           When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *           <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity: number | undefined;

  /**
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
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

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };
}

export namespace CreateRuleGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateWebACLRequest {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
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

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };
}

export namespace CreateWebACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWebACLRequest): any => ({
    ...obj,
  });
}

/**
 * <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
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
   *           When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *           <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
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
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for your rule groups is the following: </p>
   *                <p>
   *                   <code>awswaf:<account ID>:rulegroup:<rule group name>:</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };

  /**
   * <p>The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.</p>
   */
  AvailableLabels?: LabelSummary[];

  /**
   * <p>The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
   */
  ConsumedLabels?: LabelSummary[];
}

export namespace RuleGroup {
  /**
   * @internal
   */
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
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };
}

export namespace UpdateRuleGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateWebACLRequest {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API.  </p>
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
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };
}

export namespace UpdateWebACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWebACLRequest): any => ({
    ...obj,
  });
}

export interface GetRuleGroupResponse {
  /**
   * <p></p>
   */
  RuleGroup?: RuleGroup;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetRuleGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRuleGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, or an AppSync GraphQL API.  </p>
 */
export interface WebACL {
  /**
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to
   *          create and list commands. You use this ID to do things like get, update, and delete a
   *             <code>WebACL</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the
   *          resource.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * <p>The web ACL capacity units (WCUs) currently being used by this web ACL. </p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group.
   *          The WCU limit for web ACLs is 1,500.  </p>
   */
  Capacity?: number;

  /**
   * <p>The first set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized after these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   */
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * <p>The last set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized before these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   */
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * <p>Indicates whether this web ACL is managed by Firewall Manager. If true, then only Firewall Manager can
   *          delete the web ACL or any Firewall Manager rule groups in the web ACL. </p>
   */
  ManagedByFirewallManager?: boolean;

  /**
   * <p>The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a web ACL is the following: </p>
   *                <p>
   *                   <code>awswaf:<account ID>:webacl:<web ACL name>:</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  CustomResponseBodies?: { [key: string]: CustomResponseBody };
}

export namespace WebACL {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WebACL): any => ({
    ...obj,
  });
}

export interface GetWebACLForResourceResponse {
  /**
   * <p>The web ACL that is associated with the resource. If there is no associated resource,
   *          WAF returns a null web ACL.</p>
   */
  WebACL?: WebACL;
}

export namespace GetWebACLForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWebACLForResourceResponse): any => ({
    ...obj,
  });
}

export interface GetWebACLResponse {
  /**
   * <p>The web ACL specification. You can modify the settings in this web ACL and use it to
   *          update this web ACL or create a new one.</p>
   */
  WebACL?: WebACL;

  /**
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

export namespace GetWebACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWebACLResponse): any => ({
    ...obj,
  });
}
