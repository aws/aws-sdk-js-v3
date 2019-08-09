import { _FieldToMatch, _UnmarshalledFieldToMatch } from "./_FieldToMatch";

/**
 * <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
 */
export interface _XssMatchTuple {
  /**
   * <p>Specifies where in a web request to look for cross-site scripting attacks.</p>
   */
  FieldToMatch: _FieldToMatch;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting a request for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p> <b>CMD_LINE</b> </p> <p>When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \ " ' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\f, formfeed, decimal 12</p> </li> <li> <p>\t, tab, decimal 9</p> </li> <li> <p>\n, newline, decimal 10</p> </li> <li> <p>\r, carriage return, decimal 13</p> </li> <li> <p>\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   */
  TextTransformation:
    | "NONE"
    | "COMPRESS_WHITE_SPACE"
    | "HTML_ENTITY_DECODE"
    | "LOWERCASE"
    | "CMD_LINE"
    | "URL_DECODE"
    | string;
}

export interface _UnmarshalledXssMatchTuple extends _XssMatchTuple {
  /**
   * <p>Specifies where in a web request to look for cross-site scripting attacks.</p>
   */
  FieldToMatch: _UnmarshalledFieldToMatch;
}
