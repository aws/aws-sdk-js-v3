import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete,
 * 			the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code>
 * 			(<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p>
 * 		       <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
 */
export interface ActivatedRule {
  __type?: "ActivatedRule";
  /**
   * <p>Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the <code>Rule</code>.
   * 			Valid values for <code>Action</code> include the following:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code>: CloudFront responds with the requested object.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code>: CloudFront responds with an HTTP 403 (Forbidden) status code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code>: AWS WAF increments a counter of requests that match the conditions in the rule and then continues to
   * 					inspect the web request based on the remaining rules in the web ACL. </p>
   *             </li>
   *          </ul>
   * 	        <p>
   *             <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a
   *             <code>RuleGroup</code> to a <code>WebACL</code>. In this
   *          case,
   *          you do not use <code>ActivatedRule|Action</code>. For all other update requests,
   *             <code>ActivatedRule|Action</code> is used instead of
   *             <code>ActivatedRule|OverrideAction</code>.</p>
   */
  Action?: WafAction;

  /**
   * <p>An array of rules to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>.</p>
   *          <p>Sometimes it is necessary to troubleshoot rule groups that are blocking traffic
   *          unexpectedly (false positives). One troubleshooting technique is to identify the specific
   *          rule within the rule group that is blocking the legitimate traffic and then disable
   *          (exclude) that particular rule. You can exclude rules from both your own rule groups and
   *          AWS Marketplace rule groups that have been associated with a web ACL.</p>
   *          <p>Specifying <code>ExcludedRules</code> does not remove those rules from the rule group.
   *          Rather, it changes the action for the rules to <code>COUNT</code>. Therefore, requests that
   *          match an <code>ExcludedRule</code> are counted but not blocked. The <code>RuleGroup</code>
   *          owner will receive COUNT metrics for each <code>ExcludedRule</code>.</p>
   *          <p>If you want to exclude rules from a rule group that is already associated with a web ACL, perform the following steps:</p>
   *          <ol>
   *             <li>
   *                <p>Use the AWS WAF logs to identify the IDs of the rules that you want to exclude.
   *                For more information about the logs, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic
   *                   Information</a>.</p>
   *             </li>
   *             <li>
   *                <p>Submit an <a>UpdateWebACL</a> request that has two actions:</p>
   *                <ul>
   *                   <li>
   *                      <p>The first action
   *                      deletes
   *                      the existing rule group from the web ACL. That is, in the <a>UpdateWebACL</a> request, the first <code>Updates:Action</code>
   *                      should be <code>DELETE</code> and <code>Updates:ActivatedRule:RuleId</code>
   *                      should be the rule group that contains the rules that you want to
   *                      exclude.</p>
   *                   </li>
   *                   <li>
   *                      <p>The second action
   *                      inserts
   *                      the same rule group back in, but specifying the rules to exclude. That is, the
   *                      second <code>Updates:Action</code> should be <code>INSERT</code>,
   *                         <code>Updates:ActivatedRule:RuleId</code> should be the rule group that you
   *                      just removed, and <code>ExcludedRules</code> should contain the rules that you
   *                      want to exclude.</p>
   *                   </li>
   *                </ul>
   *
   *             </li>
   *          </ol>
   */
  ExcludedRules?: ExcludedRule[];

  /**
   * <p>Use the <code>OverrideAction</code> to test your <code>RuleGroup</code>.</p>
   *          <p>Any rule in a <code>RuleGroup</code> can potentially block a request. If you set the <code>OverrideAction</code> to <code>None</code>, the <code>RuleGroup</code> will block a request if any individual rule in the <code>RuleGroup</code> matches the request and is configured to block that request. However if you first want to test the <code>RuleGroup</code>, set the  <code>OverrideAction</code> to <code>Count</code>. The <code>RuleGroup</code> will then override any block action specified by individual rules contained within the group. Instead of blocking matching requests, those requests will be counted. You can view a record of counted requests using  <a>GetSampledRequests</a>. </p>
   * 	        <p>
   *             <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case you do not use <code>ActivatedRule|Action</code>.  For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>.</p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the order in which the <code>Rules</code> in a <code>WebACL</code> are evaluated. Rules with a lower value for
   * 			<code>Priority</code> are evaluated before <code>Rules</code> with a higher value. The value must be a unique integer. If you add multiple
   * 			<code>Rules</code> to a <code>WebACL</code>, the values don't need to be consecutive.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The <code>RuleId</code> for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>),
   * 			update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete a
   * 			one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p>
   * 		       <p>
   *             <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>The rule type, either <code>REGULAR</code>, as defined by <a>Rule</a>, <code>RATE_BASED</code>, as defined by <a>RateBasedRule</a>, or <code>GROUP</code>, as defined by <a>RuleGroup</a>. The default is REGULAR. Although this field is optional, be aware that if you try to add a RATE_BASED rule to a web ACL without setting the type, the  <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule with the specified ID, which does not exist.
   * 			</p>
   */
  Type?: WafRuleType | string;
}

export namespace ActivatedRule {
  export const filterSensitiveLog = (obj: ActivatedRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivatedRule => __isa(o, "ActivatedRule");
}

export interface AssociateWebACLRequest {
  __type?: "AssociateWebACLRequest";
  /**
   * <p>The ARN (Amazon Resource Name) of the resource to be protected, either an application load balancer or Amazon API Gateway stage.  </p>
   *          <p>The ARN should be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A unique identifier (ID) for the web ACL. </p>
   */
  WebACLId: string | undefined;
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
 * <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and
 * 			<code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p>
 * 		       <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you
 * 			want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one
 * 			<code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code>
 * 			to be considered a match.</p>
 */
export interface ByteMatchSet {
  __type?: "ByteMatchSet";
  /**
   * <p>The <code>ByteMatchSetId</code> for a <code>ByteMatchSet</code>. You use <code>ByteMatchSetId</code> to get information about a
   * 			<code>ByteMatchSet</code> (see <a>GetByteMatchSet</a>), update a <code>ByteMatchSet</code> (see <a>UpdateByteMatchSet</a>),
   * 			insert a <code>ByteMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and
   * 			delete a <code>ByteMatchSet</code> from AWS WAF (see <a>DeleteByteMatchSet</a>).</p>
   * 		       <p>
   *             <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.</p>
   */
  ByteMatchSetId: string | undefined;

  /**
   * <p>Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
   */
  ByteMatchTuples: ByteMatchTuple[] | undefined;

  /**
   * <p>A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a <code>ByteMatchSet</code>.</p>
   */
  Name?: string;
}

export namespace ByteMatchSet {
  export const filterSensitiveLog = (obj: ByteMatchSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is ByteMatchSet => __isa(o, "ByteMatchSet");
}

/**
 * <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and
 * 			<code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p>
 */
export interface ByteMatchSetSummary {
  __type?: "ByteMatchSetSummary";
  /**
   * <p>The <code>ByteMatchSetId</code> for a <code>ByteMatchSet</code>. You use <code>ByteMatchSetId</code> to get information about a <code>ByteMatchSet</code>,
   * 			update a <code>ByteMatchSet</code>, remove a <code>ByteMatchSet</code> from a <code>Rule</code>, and delete a <code>ByteMatchSet</code> from AWS WAF.</p>
   * 		       <p>
   *             <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.</p>
   */
  ByteMatchSetId: string | undefined;

  /**
   * <p>A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a <code>ByteMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace ByteMatchSetSummary {
  export const filterSensitiveLog = (obj: ByteMatchSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ByteMatchSetSummary =>
    __isa(o, "ByteMatchSetSummary");
}

/**
 * <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a
 * 			<a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>
 */
export interface ByteMatchSetUpdate {
  __type?: "ByteMatchSetUpdate";
  /**
   * <p>Specifies whether to insert or delete a <a>ByteMatchTuple</a>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the value that you want AWS WAF to search for.
   * 			If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>ByteMatchTuple</code> values must
   * 			exactly match the values in the <code>ByteMatchTuple</code> that you want to delete from the <code>ByteMatchSet</code>.</p>
   */
  ByteMatchTuple: ByteMatchTuple | undefined;
}

export namespace ByteMatchSetUpdate {
  export const filterSensitiveLog = (obj: ByteMatchSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ByteMatchSetUpdate =>
    __isa(o, "ByteMatchSetUpdate");
}

/**
 * <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
 */
export interface ByteMatchTuple {
  __type?: "ByteMatchTuple";
  /**
   * <p>The part of a web request that you want AWS WAF to search, such as a specified header or a query string. For more information, see
   * 			<a>FieldToMatch</a>.</p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search. Valid values include the following:</p>
   * 		       <p>
   *             <b>CONTAINS</b>
   *          </p>
   * 		       <p>The specified part of the web request must include the value of <code>TargetString</code>, but the location doesn't matter.</p>
   * 		       <p>
   *             <b>CONTAINS_WORD</b>
   *          </p>
   * 		       <p>The specified part of the web request must include the value of <code>TargetString</code>, and
   * 			<code>TargetString</code> must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition,
   * 			<code>TargetString</code> must be a word, which means one of the following:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>TargetString</code> exactly matches the value of the specified part of the web request, such as the value of a
   * 					header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetString</code> is at the beginning of the specified part of the web request and is followed by a character
   * 					other than an alphanumeric character or underscore (_), for example, <code>BadBot;</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetString</code> is at the end of the specified part of the web request and is preceded by a character
   * 					other than an alphanumeric character or underscore (_), for example, <code>;BadBot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetString</code> is in the middle of the specified part of the web request and is preceded and followed
   * 					by characters other than alphanumeric characters or underscore (_), for example, <code>-BadBot;</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>EXACTLY</b>
   *          </p>
   * 		       <p>The value of the specified part of the web request must exactly match the value of <code>TargetString</code>.</p>
   * 		       <p>
   *             <b>STARTS_WITH</b>
   *          </p>
   * 		       <p>The value of <code>TargetString</code> must appear at the beginning of the specified part of the web request.</p>
   * 		       <p>
   *             <b>ENDS_WITH</b>
   *          </p>
   * 		       <p>The value of <code>TargetString</code> must appear at the end of the specified part of the web request.</p>
   */
  PositionalConstraint: PositionalConstraint | string | undefined;

  /**
   * <p>The value that you want AWS WAF to search for. AWS WAF searches for the specified string in the part of web requests that you
   * 			specified in <code>FieldToMatch</code>. The maximum length of the value is 50 bytes.</p>
   * 		       <p>Valid values depend on the values that you specified for <code>FieldToMatch</code>:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>HEADER</code>: The value that you want AWS WAF to search for in the request header that you specified in
   * 				<a>FieldToMatch</a>, for example, the value of the <code>User-Agent</code> or <code>Referer</code> header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>METHOD</code>: The HTTP method, which indicates the type of operation specified in the request.
   * 				CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>,
   * 				<code>PATCH</code>, <code>POST</code>, and <code>PUT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUERY_STRING</code>: The value that you want AWS WAF to search for in the query string, which is the part
   * 				of a URL that appears after a <code>?</code> character.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>URI</code>: The value that you want AWS WAF to search for in the part of a URL that identifies a resource,
   * 				for example, <code>/images/daily-ad.jpg</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BODY</code>: The part of a request that contains any additional data that you want to send to your web server
   * 				as the HTTP request body, such as data from a form. The request body immediately follows the request headers.
   * 				Note that only the first <code>8192</code> bytes of the request body are forwarded to AWS WAF for inspection.
   * 				To allow or block requests based on the length of the body, you can create a size constraint set.
   * 				For more information, see <a>CreateSizeConstraintSet</a>. </p>
   *             </li>
   *             <li>
   * 		             <p>
   * 		                <code>SINGLE_QUERY_ARG</code>: The parameter in the query string that you will inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The maximum length for <code>SINGLE_QUERY_ARG</code> is 30 characters.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>ALL_QUERY_ARGS</code>: Similar to <code>SINGLE_QUERY_ARG</code>, but instead of
   *                inspecting a single parameter, AWS WAF inspects all parameters within the query
   *                string for the value or regex pattern that you specify in
   *                <code>TargetString</code>.</p>
   * 		          </li>
   *          </ul>
   *
   * 		       <p>If <code>TargetString</code> includes alphabetic characters A-Z and a-z, note that the value is case sensitive.</p>
   * 		       <p>
   *             <b>If you're using the AWS WAF API</b>
   *          </p>
   * 		       <p>Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 50 bytes.</p>
   * 		       <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the
   *          value of <code>Data</code> is <code>User-Agent</code>. If you want to search the
   *             <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode
   *             <code>BadBot</code> using MIME
   *          base64-encoding
   *          and include the resulting value, <code>QmFkQm90</code>, in the value of
   *             <code>TargetString</code>.</p>
   * 		       <p>
   *             <b>If you're using the AWS CLI or one of the AWS SDKs</b>
   *          </p>
   * 		       <p>The value that you want AWS WAF to search for. The SDK automatically base64 encodes the value.</p>
   */
  TargetString: Uint8Array | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
   * 			If you specify a transformation, AWS WAF performs the transformation on <code>TargetString</code> before inspecting a request for a match.</p>
   *          <p>You can only specify a single type of TextTransformation.</p>
   * 		       <p>
   *             <b>CMD_LINE</b>
   *          </p>
   * 		       <p>When you're concerned that attackers are injecting an operating system command line
   *          command and using unusual formatting to disguise some or all of the command, use this
   *          option to perform the following transformations:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   * 		       <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   * 		       <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   * 		       <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   * 			the following operations:</p>
   * 		       <ul>
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
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>LOWERCASE</b>
   *          </p>
   * 		       <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   * 		       <p>
   *             <b>URL_DECODE</b>
   *          </p>
   * 		       <p>Use this option to decode a URL-encoded value.</p>
   * 		       <p>
   *             <b>NONE</b>
   *          </p>
   * 		       <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   */
  TextTransformation: TextTransformation | string | undefined;
}

export namespace ByteMatchTuple {
  export const filterSensitiveLog = (obj: ByteMatchTuple): any => ({
    ...obj
  });
  export const isa = (o: any): o is ByteMatchTuple =>
    __isa(o, "ByteMatchTuple");
}

export enum ChangeAction {
  DELETE = "DELETE",
  INSERT = "INSERT"
}

export enum ChangeTokenStatus {
  INSYNC = "INSYNC",
  PENDING = "PENDING",
  PROVISIONED = "PROVISIONED"
}

export enum ComparisonOperator {
  EQ = "EQ",
  GE = "GE",
  GT = "GT",
  LE = "LE",
  LT = "LT",
  NE = "NE"
}

export interface CreateByteMatchSetRequest {
  __type?: "CreateByteMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a
   * 			<code>ByteMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateByteMatchSetRequest {
  export const filterSensitiveLog = (obj: CreateByteMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateByteMatchSetRequest =>
    __isa(o, "CreateByteMatchSetRequest");
}

export interface CreateByteMatchSetResponse {
  __type?: "CreateByteMatchSetResponse";
  /**
   * <p>A <a>ByteMatchSet</a> that contains no <code>ByteMatchTuple</code> objects.</p>
   */
  ByteMatchSet?: ByteMatchSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateByteMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace CreateByteMatchSetResponse {
  export const filterSensitiveLog = (obj: CreateByteMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateByteMatchSetResponse =>
    __isa(o, "CreateByteMatchSetResponse");
}

export interface CreateGeoMatchSetRequest {
  __type?: "CreateGeoMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>GeoMatchSet</a>. You can't change <code>Name</code> after you create the <code>GeoMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateGeoMatchSetRequest {
  export const filterSensitiveLog = (obj: CreateGeoMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGeoMatchSetRequest =>
    __isa(o, "CreateGeoMatchSetRequest");
}

export interface CreateGeoMatchSetResponse {
  __type?: "CreateGeoMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateGeoMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>The <a>GeoMatchSet</a> returned in the <code>CreateGeoMatchSet</code> response. The <code>GeoMatchSet</code> contains no <code>GeoMatchConstraints</code>.</p>
   */
  GeoMatchSet?: GeoMatchSet;
}

export namespace CreateGeoMatchSetResponse {
  export const filterSensitiveLog = (obj: CreateGeoMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGeoMatchSetResponse =>
    __isa(o, "CreateGeoMatchSetResponse");
}

export interface CreateIPSetRequest {
  __type?: "CreateIPSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>IPSet</a>. You can't change <code>Name</code> after you create the <code>IPSet</code>.</p>
   */
  Name: string | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateIPSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>The <a>IPSet</a> returned in the <code>CreateIPSet</code> response.</p>
   */
  IPSet?: IPSet;
}

export namespace CreateIPSetResponse {
  export const filterSensitiveLog = (obj: CreateIPSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIPSetResponse =>
    __isa(o, "CreateIPSetResponse");
}

export interface CreateRateBasedRuleRequest {
  __type?: "CreateRateBasedRuleRequest";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the
   *             <code>CreateRateBasedRule</code> request. You can also use this value to query the
   *          status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description for the metrics for this <code>RateBasedRule</code>.
   *           The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *           whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the
   *             <code>RateBasedRule</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A friendly name or description of the <a>RateBasedRule</a>. You can't
   *          change the name of a <code>RateBasedRule</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The field that AWS WAF uses to determine if requests are likely arriving from a single
   *          source and thus subject to rate monitoring. The only valid value for <code>RateKey</code>
   *          is <code>IP</code>. <code>IP</code> indicates that requests that arrive from the same IP
   *          address are subject to the <code>RateLimit</code> that is specified in
   *          the <code>RateBasedRule</code>.</p>
   */
  RateKey: RateKey | string | undefined;

  /**
   * <p>The maximum number of requests, which have an identical value in the field that is
   *          specified by <code>RateKey</code>, allowed in a five-minute period. If the number of
   *          requests exceeds the <code>RateLimit</code> and the other predicates specified in the rule
   *          are also met, AWS WAF triggers the action that is specified for this rule.</p>
   */
  RateLimit: number | undefined;

  Tags?: Tag[];
}

export namespace CreateRateBasedRuleRequest {
  export const filterSensitiveLog = (obj: CreateRateBasedRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRateBasedRuleRequest =>
    __isa(o, "CreateRateBasedRuleRequest");
}

export interface CreateRateBasedRuleResponse {
  __type?: "CreateRateBasedRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the
   *             <code>CreateRateBasedRule</code> request. You can also use this value to query the
   *          status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>The <a>RateBasedRule</a>
   *          that is returned in the <code>CreateRateBasedRule</code> response.</p>
   */
  Rule?: RateBasedRule;
}

export namespace CreateRateBasedRuleResponse {
  export const filterSensitiveLog = (
    obj: CreateRateBasedRuleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRateBasedRuleResponse =>
    __isa(o, "CreateRateBasedRuleResponse");
}

export interface CreateRegexMatchSetRequest {
  __type?: "CreateRegexMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a
   * 			<code>RegexMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateRegexMatchSetRequest {
  export const filterSensitiveLog = (obj: CreateRegexMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegexMatchSetRequest =>
    __isa(o, "CreateRegexMatchSetRequest");
}

export interface CreateRegexMatchSetResponse {
  __type?: "CreateRegexMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRegexMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>A <a>RegexMatchSet</a> that contains no <code>RegexMatchTuple</code> objects.</p>
   */
  RegexMatchSet?: RegexMatchSet;
}

export namespace CreateRegexMatchSetResponse {
  export const filterSensitiveLog = (
    obj: CreateRegexMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegexMatchSetResponse =>
    __isa(o, "CreateRegexMatchSetResponse");
}

export interface CreateRegexPatternSetRequest {
  __type?: "CreateRegexPatternSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a
   * 			<code>RegexPatternSet</code>.</p>
   */
  Name: string | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRegexPatternSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>A <a>RegexPatternSet</a> that contains no objects.</p>
   */
  RegexPatternSet?: RegexPatternSet;
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
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the <code>RuleGroup</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A friendly name or description of the <a>RuleGroup</a>. You can't change <code>Name</code> after you create a
   *          <code>RuleGroup</code>.</p>
   */
  Name: string | undefined;

  Tags?: Tag[];
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRuleGroup</code> request. You can also use this value
   *          to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>An empty  <a>RuleGroup</a>.</p>
   */
  RuleGroup?: RuleGroup;
}

export namespace CreateRuleGroupResponse {
  export const filterSensitiveLog = (obj: CreateRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleGroupResponse =>
    __isa(o, "CreateRuleGroupResponse");
}

export interface CreateRuleRequest {
  __type?: "CreateRuleRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description for the metrics for this <code>Rule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   * 	        whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the
   *             <code>Rule</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A friendly name or description of the <a>Rule</a>. You can't change the name of a <code>Rule</code> after you create it.</p>
   */
  Name: string | undefined;

  Tags?: Tag[];
}

export namespace CreateRuleRequest {
  export const filterSensitiveLog = (obj: CreateRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleRequest =>
    __isa(o, "CreateRuleRequest");
}

export interface CreateRuleResponse {
  __type?: "CreateRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRule</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>The <a>Rule</a> returned in the <code>CreateRule</code> response.</p>
   */
  Rule?: Rule;
}

export namespace CreateRuleResponse {
  export const filterSensitiveLog = (obj: CreateRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleResponse =>
    __isa(o, "CreateRuleResponse");
}

export interface CreateSizeConstraintSetRequest {
  __type?: "CreateSizeConstraintSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description of the <a>SizeConstraintSet</a>. You can't change <code>Name</code> after you create a
   * 			<code>SizeConstraintSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateSizeConstraintSetRequest {
  export const filterSensitiveLog = (
    obj: CreateSizeConstraintSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSizeConstraintSetRequest =>
    __isa(o, "CreateSizeConstraintSetRequest");
}

export interface CreateSizeConstraintSetResponse {
  __type?: "CreateSizeConstraintSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateSizeConstraintSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>A <a>SizeConstraintSet</a> that contains no <code>SizeConstraint</code> objects.</p>
   */
  SizeConstraintSet?: SizeConstraintSet;
}

export namespace CreateSizeConstraintSetResponse {
  export const filterSensitiveLog = (
    obj: CreateSizeConstraintSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSizeConstraintSetResponse =>
    __isa(o, "CreateSizeConstraintSetResponse");
}

/**
 * <p>A request to create a <a>SqlInjectionMatchSet</a>.</p>
 */
export interface CreateSqlInjectionMatchSetRequest {
  __type?: "CreateSqlInjectionMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description for the <a>SqlInjectionMatchSet</a> that you're creating. You can't change <code>Name</code>
   * 			after you create the <code>SqlInjectionMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateSqlInjectionMatchSetRequest {
  export const filterSensitiveLog = (
    obj: CreateSqlInjectionMatchSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSqlInjectionMatchSetRequest =>
    __isa(o, "CreateSqlInjectionMatchSetRequest");
}

/**
 * <p>The response to a <code>CreateSqlInjectionMatchSet</code> request.</p>
 */
export interface CreateSqlInjectionMatchSetResponse {
  __type?: "CreateSqlInjectionMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateSqlInjectionMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>A <a>SqlInjectionMatchSet</a>.</p>
   */
  SqlInjectionMatchSet?: SqlInjectionMatchSet;
}

export namespace CreateSqlInjectionMatchSetResponse {
  export const filterSensitiveLog = (
    obj: CreateSqlInjectionMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSqlInjectionMatchSetResponse =>
    __isa(o, "CreateSqlInjectionMatchSetResponse");
}

export interface CreateWebACLRequest {
  __type?: "CreateWebACLRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The action that you want  AWS WAF to take when a request doesn't match the criteria specified in any of the <code>Rule</code>
   * 			objects that are associated with the <code>WebACL</code>.</p>
   */
  DefaultAction: WafAction | undefined;

  /**
   * <p>A friendly name or description for the metrics for this <code>WebACL</code>.The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   * 	        whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change <code>MetricName</code> after you create the
   *             <code>WebACL</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A friendly name or description of the <a>WebACL</a>. You can't change <code>Name</code> after you create the <code>WebACL</code>.</p>
   */
  Name: string | undefined;

  Tags?: Tag[];
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateWebACL</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>The <a>WebACL</a> returned in the <code>CreateWebACL</code> response.</p>
   */
  WebACL?: WebACL;
}

export namespace CreateWebACLResponse {
  export const filterSensitiveLog = (obj: CreateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWebACLResponse =>
    __isa(o, "CreateWebACLResponse");
}

/**
 * <p>A request to create an <a>XssMatchSet</a>.</p>
 */
export interface CreateXssMatchSetRequest {
  __type?: "CreateXssMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A friendly name or description for the <a>XssMatchSet</a> that you're creating. You can't change <code>Name</code>
   * 			after you create the <code>XssMatchSet</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateXssMatchSetRequest {
  export const filterSensitiveLog = (obj: CreateXssMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateXssMatchSetRequest =>
    __isa(o, "CreateXssMatchSetRequest");
}

/**
 * <p>The response to a <code>CreateXssMatchSet</code> request.</p>
 */
export interface CreateXssMatchSetResponse {
  __type?: "CreateXssMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateXssMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * <p>An <a>XssMatchSet</a>.</p>
   */
  XssMatchSet?: XssMatchSet;
}

export namespace CreateXssMatchSetResponse {
  export const filterSensitiveLog = (obj: CreateXssMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateXssMatchSetResponse =>
    __isa(o, "CreateXssMatchSetResponse");
}

export interface DeleteByteMatchSetRequest {
  __type?: "DeleteByteMatchSetRequest";
  /**
   * <p>The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to delete. <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by
   * 			<a>ListByteMatchSets</a>.</p>
   */
  ByteMatchSetId: string | undefined;

  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;
}

export namespace DeleteByteMatchSetRequest {
  export const filterSensitiveLog = (obj: DeleteByteMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteByteMatchSetRequest =>
    __isa(o, "DeleteByteMatchSetRequest");
}

export interface DeleteByteMatchSetResponse {
  __type?: "DeleteByteMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteByteMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteByteMatchSetResponse {
  export const filterSensitiveLog = (obj: DeleteByteMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteByteMatchSetResponse =>
    __isa(o, "DeleteByteMatchSetResponse");
}

export interface DeleteGeoMatchSetRequest {
  __type?: "DeleteGeoMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>GeoMatchSetID</code> of the <a>GeoMatchSet</a> that you want to delete. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by
   * 			<a>ListGeoMatchSets</a>.</p>
   */
  GeoMatchSetId: string | undefined;
}

export namespace DeleteGeoMatchSetRequest {
  export const filterSensitiveLog = (obj: DeleteGeoMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGeoMatchSetRequest =>
    __isa(o, "DeleteGeoMatchSetRequest");
}

export interface DeleteGeoMatchSetResponse {
  __type?: "DeleteGeoMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteGeoMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteGeoMatchSetResponse {
  export const filterSensitiveLog = (obj: DeleteGeoMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGeoMatchSetResponse =>
    __isa(o, "DeleteGeoMatchSetResponse");
}

export interface DeleteIPSetRequest {
  __type?: "DeleteIPSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>IPSetId</code> of the <a>IPSet</a> that you want to delete. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by
   * 			<a>ListIPSets</a>.</p>
   */
  IPSetId: string | undefined;
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
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteIPSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
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

export interface DeletePermissionPolicyRequest {
  __type?: "DeletePermissionPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the RuleGroup from which you want to delete the policy.</p>
   *          <p>The user making the request must be the owner of the RuleGroup.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeletePermissionPolicyRequest {
  export const filterSensitiveLog = (
    obj: DeletePermissionPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePermissionPolicyRequest =>
    __isa(o, "DeletePermissionPolicyRequest");
}

export interface DeletePermissionPolicyResponse {
  __type?: "DeletePermissionPolicyResponse";
}

export namespace DeletePermissionPolicyResponse {
  export const filterSensitiveLog = (
    obj: DeletePermissionPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePermissionPolicyResponse =>
    __isa(o, "DeletePermissionPolicyResponse");
}

export interface DeleteRateBasedRuleRequest {
  __type?: "DeleteRateBasedRuleRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RuleId</code> of the <a>RateBasedRule</a> that you want to
   *          delete. <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by
   *             <a>ListRateBasedRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace DeleteRateBasedRuleRequest {
  export const filterSensitiveLog = (obj: DeleteRateBasedRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRateBasedRuleRequest =>
    __isa(o, "DeleteRateBasedRuleRequest");
}

export interface DeleteRateBasedRuleResponse {
  __type?: "DeleteRateBasedRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the
   *             <code>DeleteRateBasedRule</code> request. You can also use this value to query the
   *          status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteRateBasedRuleResponse {
  export const filterSensitiveLog = (
    obj: DeleteRateBasedRuleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRateBasedRuleResponse =>
    __isa(o, "DeleteRateBasedRuleResponse");
}

export interface DeleteRegexMatchSetRequest {
  __type?: "DeleteRegexMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to delete. <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by
   * 			<a>ListRegexMatchSets</a>.</p>
   */
  RegexMatchSetId: string | undefined;
}

export namespace DeleteRegexMatchSetRequest {
  export const filterSensitiveLog = (obj: DeleteRegexMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegexMatchSetRequest =>
    __isa(o, "DeleteRegexMatchSetRequest");
}

export interface DeleteRegexMatchSetResponse {
  __type?: "DeleteRegexMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteRegexMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteRegexMatchSetResponse {
  export const filterSensitiveLog = (
    obj: DeleteRegexMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegexMatchSetResponse =>
    __isa(o, "DeleteRegexMatchSetResponse");
}

export interface DeleteRegexPatternSetRequest {
  __type?: "DeleteRegexPatternSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to delete. <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by
   * 			<a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;
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
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteRegexPatternSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
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
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to delete. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by
   *          <a>ListRuleGroups</a>.</p>
   */
  RuleGroupId: string | undefined;
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
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteRuleGroup</code> request. You can also use this value
   *          to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteRuleGroupResponse {
  export const filterSensitiveLog = (obj: DeleteRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleGroupResponse =>
    __isa(o, "DeleteRuleGroupResponse");
}

export interface DeleteRuleRequest {
  __type?: "DeleteRuleRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RuleId</code> of the <a>Rule</a> that you want to delete. <code>RuleId</code> is returned by <a>CreateRule</a> and by
   * 			<a>ListRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace DeleteRuleRequest {
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleRequest =>
    __isa(o, "DeleteRuleRequest");
}

export interface DeleteRuleResponse {
  __type?: "DeleteRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteRule</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteRuleResponse {
  export const filterSensitiveLog = (obj: DeleteRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleResponse =>
    __isa(o, "DeleteRuleResponse");
}

export interface DeleteSizeConstraintSetRequest {
  __type?: "DeleteSizeConstraintSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to delete. <code>SizeConstraintSetId</code>
   * 			is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string | undefined;
}

export namespace DeleteSizeConstraintSetRequest {
  export const filterSensitiveLog = (
    obj: DeleteSizeConstraintSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSizeConstraintSetRequest =>
    __isa(o, "DeleteSizeConstraintSetRequest");
}

export interface DeleteSizeConstraintSetResponse {
  __type?: "DeleteSizeConstraintSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteSizeConstraintSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteSizeConstraintSetResponse {
  export const filterSensitiveLog = (
    obj: DeleteSizeConstraintSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSizeConstraintSetResponse =>
    __isa(o, "DeleteSizeConstraintSetResponse");
}

/**
 * <p>A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.</p>
 */
export interface DeleteSqlInjectionMatchSetRequest {
  __type?: "DeleteSqlInjectionMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>SqlInjectionMatchSetId</code> of the <a>SqlInjectionMatchSet</a> that you want to delete.
   * 			<code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string | undefined;
}

export namespace DeleteSqlInjectionMatchSetRequest {
  export const filterSensitiveLog = (
    obj: DeleteSqlInjectionMatchSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSqlInjectionMatchSetRequest =>
    __isa(o, "DeleteSqlInjectionMatchSetRequest");
}

/**
 * <p>The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.</p>
 */
export interface DeleteSqlInjectionMatchSetResponse {
  __type?: "DeleteSqlInjectionMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteSqlInjectionMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteSqlInjectionMatchSetResponse {
  export const filterSensitiveLog = (
    obj: DeleteSqlInjectionMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSqlInjectionMatchSetResponse =>
    __isa(o, "DeleteSqlInjectionMatchSetResponse");
}

export interface DeleteWebACLRequest {
  __type?: "DeleteWebACLRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>WebACLId</code> of the <a>WebACL</a> that you want to delete. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by
   * 			<a>ListWebACLs</a>.</p>
   */
  WebACLId: string | undefined;
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
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteWebACL</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteWebACLResponse {
  export const filterSensitiveLog = (obj: DeleteWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWebACLResponse =>
    __isa(o, "DeleteWebACLResponse");
}

/**
 * <p>A request to delete an <a>XssMatchSet</a> from AWS WAF.</p>
 */
export interface DeleteXssMatchSetRequest {
  __type?: "DeleteXssMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>XssMatchSetId</code> of the <a>XssMatchSet</a> that you want to delete.
   * 			<code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string | undefined;
}

export namespace DeleteXssMatchSetRequest {
  export const filterSensitiveLog = (obj: DeleteXssMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteXssMatchSetRequest =>
    __isa(o, "DeleteXssMatchSetRequest");
}

/**
 * <p>The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.</p>
 */
export interface DeleteXssMatchSetResponse {
  __type?: "DeleteXssMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteXssMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace DeleteXssMatchSetResponse {
  export const filterSensitiveLog = (obj: DeleteXssMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteXssMatchSetResponse =>
    __isa(o, "DeleteXssMatchSetResponse");
}

export interface DisassociateWebACLRequest {
  __type?: "DisassociateWebACLRequest";
  /**
   * <p>The ARN (Amazon Resource Name) of the resource from which the web ACL is being removed, either an application load balancer or Amazon API Gateway stage.</p>
   *          <p>The ARN should be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
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
 * <p>The rule to exclude from a rule group. This is applicable only when the
 *             <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to
 *          the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p>
 */
export interface ExcludedRule {
  __type?: "ExcludedRule";
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId: string | undefined;
}

export namespace ExcludedRule {
  export const filterSensitiveLog = (obj: ExcludedRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExcludedRule => __isa(o, "ExcludedRule");
}

/**
 * <p>Specifies where in a web request to look for <code>TargetString</code>.</p>
 */
export interface FieldToMatch {
  __type?: "FieldToMatch";
  /**
   * <p>When the value of <code>Type</code> is <code>HEADER</code>, enter the name of the header that you want AWS WAF to search,
   * 			for example, <code>User-Agent</code> or <code>Referer</code>. The name of the header is not case sensitive.</p>
   * 	        <p>When the value of <code>Type</code> is <code>SINGLE_QUERY_ARG</code>, enter the name of the parameter that you want AWS WAF to search,
   * 	        for example, <code>UserName</code> or <code>SalesRegion</code>. The parameter name is not case sensitive.</p>
   * 	        <p>If the value of <code>Type</code> is any other value, omit <code>Data</code>.</p>
   */
  Data?: string;

  /**
   * <p>The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>HEADER</code>: A specified request header, for example, the value of the <code>User-Agent</code> or <code>Referer</code> header.
   * 				If you choose <code>HEADER</code> for the type, specify the name of the header in <code>Data</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>METHOD</code>: The HTTP method, which indicated the type of operation that the request is asking the origin to perform.
   * 				Amazon CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>,
   * 				<code>POST</code>, and <code>PUT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUERY_STRING</code>: A query string, which is the part of a URL that appears after a <code>?</code> character, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>URI</code>: The part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BODY</code>: The part of a request that contains any additional data that you want to send to your web server
   * 				as the HTTP request body, such as data from a form. The request body immediately follows the request headers.
   * 				Note that only the first <code>8192</code> bytes of the request body are forwarded to AWS WAF for inspection.
   * 				To allow or block requests based on the length of the body, you can create a size constraint set.
   * 				For more information, see <a>CreateSizeConstraintSet</a>. </p>
   *             </li>
   *             <li>
   * 		             <p>
   * 		                <code>SINGLE_QUERY_ARG</code>: The parameter in the query string that you will inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The maximum length for <code>SINGLE_QUERY_ARG</code> is 30 characters.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   * 		                <code>ALL_QUERY_ARGS</code>: Similar to <code>SINGLE_QUERY_ARG</code>, but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in
   * 		             <code>TargetString</code>.</p>
   * 		          </li>
   *          </ul>
   */
  Type: MatchFieldType | string | undefined;
}

export namespace FieldToMatch {
  export const filterSensitiveLog = (obj: FieldToMatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is FieldToMatch => __isa(o, "FieldToMatch");
}

/**
 * <p>The country from which web requests originate that you want AWS WAF to search for.</p>
 */
export interface GeoMatchConstraint {
  __type?: "GeoMatchConstraint";
  /**
   * <p>The type of geographical area you want AWS WAF to search for. Currently <code>Country</code> is the only valid value.</p>
   */
  Type: GeoMatchConstraintType | string | undefined;

  /**
   * <p>The country that you want AWS WAF to search for.</p>
   */
  Value: GeoMatchConstraintValue | string | undefined;
}

export namespace GeoMatchConstraint {
  export const filterSensitiveLog = (obj: GeoMatchConstraint): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoMatchConstraint =>
    __isa(o, "GeoMatchConstraint");
}

export enum GeoMatchConstraintType {
  Country = "Country"
}

export enum GeoMatchConstraintValue {
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

/**
 * <p>Contains one or more countries that AWS WAF will search for.</p>
 */
export interface GeoMatchSet {
  __type?: "GeoMatchSet";
  /**
   * <p>An array of <a>GeoMatchConstraint</a> objects, which contain the country that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraints: GeoMatchConstraint[] | undefined;

  /**
   * <p>The <code>GeoMatchSetId</code> for an <code>GeoMatchSet</code>. You use <code>GeoMatchSetId</code> to get information about a
   * 			<code>GeoMatchSet</code> (see <a>GeoMatchSet</a>), update a <code>GeoMatchSet</code> (see <a>UpdateGeoMatchSet</a>), insert a <code>GeoMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>GeoMatchSet</code> from AWS WAF (see <a>DeleteGeoMatchSet</a>).</p>
   * 		       <p>
   *             <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.</p>
   */
  GeoMatchSetId: string | undefined;

  /**
   * <p>A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.</p>
   */
  Name?: string;
}

export namespace GeoMatchSet {
  export const filterSensitiveLog = (obj: GeoMatchSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoMatchSet => __isa(o, "GeoMatchSet");
}

/**
 * <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p>
 */
export interface GeoMatchSetSummary {
  __type?: "GeoMatchSetSummary";
  /**
   * <p>The <code>GeoMatchSetId</code> for an <a>GeoMatchSet</a>. You can use <code>GeoMatchSetId</code> in a <a>GetGeoMatchSet</a> request to get detailed	information about an <a>GeoMatchSet</a>.</p>
   */
  GeoMatchSetId: string | undefined;

  /**
   * <p>A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.</p>
   */
  Name: string | undefined;
}

export namespace GeoMatchSetSummary {
  export const filterSensitiveLog = (obj: GeoMatchSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoMatchSetSummary =>
    __isa(o, "GeoMatchSetSummary");
}

/**
 * <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p>
 */
export interface GeoMatchSetUpdate {
  __type?: "GeoMatchSetUpdate";
  /**
   * <p>Specifies whether to insert or delete a country with <a>UpdateGeoMatchSet</a>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>The country from which web requests originate that you want AWS WAF to search for.</p>
   */
  GeoMatchConstraint: GeoMatchConstraint | undefined;
}

export namespace GeoMatchSetUpdate {
  export const filterSensitiveLog = (obj: GeoMatchSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is GeoMatchSetUpdate =>
    __isa(o, "GeoMatchSetUpdate");
}

export interface GetByteMatchSetRequest {
  __type?: "GetByteMatchSetRequest";
  /**
   * <p>The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to get. <code>ByteMatchSetId</code> is returned by
   * 			<a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.</p>
   */
  ByteMatchSetId: string | undefined;
}

export namespace GetByteMatchSetRequest {
  export const filterSensitiveLog = (obj: GetByteMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetByteMatchSetRequest =>
    __isa(o, "GetByteMatchSetRequest");
}

export interface GetByteMatchSetResponse {
  __type?: "GetByteMatchSetResponse";
  /**
   * <p>Information about the <a>ByteMatchSet</a> that you specified in the <code>GetByteMatchSet</code> request. For more information, see the
   * 			following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>ByteMatchSet</a>: Contains <code>ByteMatchSetId</code>, <code>ByteMatchTuples</code>, and <code>Name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ByteMatchTuples</code>: Contains an array of <a>ByteMatchTuple</a> objects. Each <code>ByteMatchTuple</code>
   * 				object contains <a>FieldToMatch</a>, <code>PositionalConstraint</code>, <code>TargetString</code>,
   * 				and <code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ByteMatchSet?: ByteMatchSet;
}

export namespace GetByteMatchSetResponse {
  export const filterSensitiveLog = (obj: GetByteMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetByteMatchSetResponse =>
    __isa(o, "GetByteMatchSetResponse");
}

export interface GetChangeTokenRequest {
  __type?: "GetChangeTokenRequest";
}

export namespace GetChangeTokenRequest {
  export const filterSensitiveLog = (obj: GetChangeTokenRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeTokenRequest =>
    __isa(o, "GetChangeTokenRequest");
}

export interface GetChangeTokenResponse {
  __type?: "GetChangeTokenResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used in the request. Use this value in a <code>GetChangeTokenStatus</code> request
   * 			to get the current status of the request. </p>
   */
  ChangeToken?: string;
}

export namespace GetChangeTokenResponse {
  export const filterSensitiveLog = (obj: GetChangeTokenResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeTokenResponse =>
    __isa(o, "GetChangeTokenResponse");
}

export interface GetChangeTokenStatusRequest {
  __type?: "GetChangeTokenStatusRequest";
  /**
   * <p>The change token for which you want to get the status. This change token was previously returned in the <code>GetChangeToken</code> response.</p>
   */
  ChangeToken: string | undefined;
}

export namespace GetChangeTokenStatusRequest {
  export const filterSensitiveLog = (
    obj: GetChangeTokenStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeTokenStatusRequest =>
    __isa(o, "GetChangeTokenStatusRequest");
}

export interface GetChangeTokenStatusResponse {
  __type?: "GetChangeTokenStatusResponse";
  /**
   * <p>The status of the change token.</p>
   */
  ChangeTokenStatus?: ChangeTokenStatus | string;
}

export namespace GetChangeTokenStatusResponse {
  export const filterSensitiveLog = (
    obj: GetChangeTokenStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetChangeTokenStatusResponse =>
    __isa(o, "GetChangeTokenStatusResponse");
}

export interface GetGeoMatchSetRequest {
  __type?: "GetGeoMatchSetRequest";
  /**
   * <p>The <code>GeoMatchSetId</code> of the <a>GeoMatchSet</a> that you want to get. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by
   * 			<a>ListGeoMatchSets</a>.</p>
   */
  GeoMatchSetId: string | undefined;
}

export namespace GetGeoMatchSetRequest {
  export const filterSensitiveLog = (obj: GetGeoMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGeoMatchSetRequest =>
    __isa(o, "GetGeoMatchSetRequest");
}

export interface GetGeoMatchSetResponse {
  __type?: "GetGeoMatchSetResponse";
  /**
   * <p>Information about the <a>GeoMatchSet</a> that you specified in the <code>GetGeoMatchSet</code> request. This includes the <code>Type</code>, which for a <code>GeoMatchContraint</code> is always <code>Country</code>, as well as the <code>Value</code>, which is the identifier for a specific country.</p>
   */
  GeoMatchSet?: GeoMatchSet;
}

export namespace GetGeoMatchSetResponse {
  export const filterSensitiveLog = (obj: GetGeoMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGeoMatchSetResponse =>
    __isa(o, "GetGeoMatchSetResponse");
}

export interface GetIPSetRequest {
  __type?: "GetIPSetRequest";
  /**
   * <p>The <code>IPSetId</code> of the <a>IPSet</a> that you want to get. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by
   * 			<a>ListIPSets</a>.</p>
   */
  IPSetId: string | undefined;
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
   * <p>Information about the <a>IPSet</a> that you specified in the <code>GetIPSet</code> request. For more information, see the
   * 			following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>IPSet</a>: Contains <code>IPSetDescriptors</code>, <code>IPSetId</code>, and <code>Name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPSetDescriptors</code>: Contains an array of <a>IPSetDescriptor</a> objects. Each <code>IPSetDescriptor</code>
   * 				object contains <code>Type</code> and <code>Value</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IPSet?: IPSet;
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

export interface GetPermissionPolicyRequest {
  __type?: "GetPermissionPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the RuleGroup for which you want to get the policy.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetPermissionPolicyRequest {
  export const filterSensitiveLog = (obj: GetPermissionPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPermissionPolicyRequest =>
    __isa(o, "GetPermissionPolicyRequest");
}

export interface GetPermissionPolicyResponse {
  __type?: "GetPermissionPolicyResponse";
  /**
   * <p>The IAM policy attached to the specified RuleGroup.</p>
   */
  Policy?: string;
}

export namespace GetPermissionPolicyResponse {
  export const filterSensitiveLog = (
    obj: GetPermissionPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPermissionPolicyResponse =>
    __isa(o, "GetPermissionPolicyResponse");
}

export interface GetRateBasedRuleManagedKeysRequest {
  __type?: "GetRateBasedRuleManagedKeysRequest";
  /**
   * <p>A null value and not currently used. Do not include this in your request.</p>
   */
  NextMarker?: string;

  /**
   * <p>The <code>RuleId</code> of the <a>RateBasedRule</a> for which you want to
   *          get a list of <code>ManagedKeys</code>. <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by <a>ListRateBasedRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace GetRateBasedRuleManagedKeysRequest {
  export const filterSensitiveLog = (
    obj: GetRateBasedRuleManagedKeysRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedRuleManagedKeysRequest =>
    __isa(o, "GetRateBasedRuleManagedKeysRequest");
}

export interface GetRateBasedRuleManagedKeysResponse {
  __type?: "GetRateBasedRuleManagedKeysResponse";
  /**
   * <p>An array of IP addresses that currently are blocked by the specified <a>RateBasedRule</a>. </p>
   */
  ManagedKeys?: string[];

  /**
   * <p>A null value and not currently used.</p>
   */
  NextMarker?: string;
}

export namespace GetRateBasedRuleManagedKeysResponse {
  export const filterSensitiveLog = (
    obj: GetRateBasedRuleManagedKeysResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedRuleManagedKeysResponse =>
    __isa(o, "GetRateBasedRuleManagedKeysResponse");
}

export interface GetRateBasedRuleRequest {
  __type?: "GetRateBasedRuleRequest";
  /**
   * <p>The <code>RuleId</code> of the <a>RateBasedRule</a> that you want to get.
   *             <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by <a>ListRateBasedRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace GetRateBasedRuleRequest {
  export const filterSensitiveLog = (obj: GetRateBasedRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedRuleRequest =>
    __isa(o, "GetRateBasedRuleRequest");
}

export interface GetRateBasedRuleResponse {
  __type?: "GetRateBasedRuleResponse";
  /**
   * <p>Information about the <a>RateBasedRule</a> that you specified in the
   *             <code>GetRateBasedRule</code> request.</p>
   */
  Rule?: RateBasedRule;
}

export namespace GetRateBasedRuleResponse {
  export const filterSensitiveLog = (obj: GetRateBasedRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRateBasedRuleResponse =>
    __isa(o, "GetRateBasedRuleResponse");
}

export interface GetRegexMatchSetRequest {
  __type?: "GetRegexMatchSetRequest";
  /**
   * <p>The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to get. <code>RegexMatchSetId</code> is returned by
   * 			<a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.</p>
   */
  RegexMatchSetId: string | undefined;
}

export namespace GetRegexMatchSetRequest {
  export const filterSensitiveLog = (obj: GetRegexMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegexMatchSetRequest =>
    __isa(o, "GetRegexMatchSetRequest");
}

export interface GetRegexMatchSetResponse {
  __type?: "GetRegexMatchSetResponse";
  /**
   * <p>Information about the <a>RegexMatchSet</a> that you specified in the <code>GetRegexMatchSet</code> request. For more information, see <a>RegexMatchTuple</a>.</p>
   */
  RegexMatchSet?: RegexMatchSet;
}

export namespace GetRegexMatchSetResponse {
  export const filterSensitiveLog = (obj: GetRegexMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegexMatchSetResponse =>
    __isa(o, "GetRegexMatchSetResponse");
}

export interface GetRegexPatternSetRequest {
  __type?: "GetRegexPatternSetRequest";
  /**
   * <p>The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to get. <code>RegexPatternSetId</code> is returned by
   * 			<a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;
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
   * <p>Information about the <a>RegexPatternSet</a> that you specified in the <code>GetRegexPatternSet</code> request, including the identifier of the pattern set and the regular expression patterns you want AWS WAF to search for. </p>
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
   * <p>The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to get. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by
   *          <a>ListRuleGroups</a>.</p>
   */
  RuleGroupId: string | undefined;
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
   * <p>Information about the <a>RuleGroup</a> that you specified in the <code>GetRuleGroup</code> request. </p>
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

export interface GetRuleRequest {
  __type?: "GetRuleRequest";
  /**
   * <p>The <code>RuleId</code> of the <a>Rule</a> that you want to get. <code>RuleId</code> is returned by <a>CreateRule</a> and by
   * 			<a>ListRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace GetRuleRequest {
  export const filterSensitiveLog = (obj: GetRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRuleRequest =>
    __isa(o, "GetRuleRequest");
}

export interface GetRuleResponse {
  __type?: "GetRuleResponse";
  /**
   * <p>Information about the <a>Rule</a> that you specified in the <code>GetRule</code> request.
   * 			For more information, see the following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>Rule</a>: Contains <code>MetricName</code>, <code>Name</code>, an array of <code>Predicate</code> objects,
   * 				and <code>RuleId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>Predicate</a>: Each <code>Predicate</code> object contains <code>DataId</code>, <code>Negated</code>, and
   * 				<code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Rule?: Rule;
}

export namespace GetRuleResponse {
  export const filterSensitiveLog = (obj: GetRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRuleResponse =>
    __isa(o, "GetRuleResponse");
}

export interface GetSampledRequestsRequest {
  __type?: "GetSampledRequestsRequest";
  /**
   * <p>The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received
   * 			during the time range. If your resource received fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code>
   * 			returns information about all of them. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>
   *             <code>RuleId</code> is one of three values:</p>
   * 			      <ul>
   *             <li>
   * 				           <p>The <code>RuleId</code> of the <code>Rule</code> or the <code>RuleGroupId</code> of the <code>RuleGroup</code> for which you want <code>GetSampledRequests</code> to return a sample of requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Default_Action</code>, which causes <code>GetSampledRequests</code> to return a sample of the requests that
   * 					didn't match any of the rules in the specified <code>WebACL</code>.</p>
   *             </li>
   *          </ul>
   */
  RuleId: string | undefined;

  /**
   * <p>The start date and time and the end date and time of the range for which you want <code>GetSampledRequests</code> to return a
   * 		    	sample of requests. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the
   * 			previous three hours.</p>
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * <p>The <code>WebACLId</code> of the <code>WebACL</code> for which you want <code>GetSampledRequests</code> to return a sample of requests.</p>
   */
  WebAclId: string | undefined;
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
   * 			If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your AWS resource
   * 			received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * <p>A complex type that contains detailed information about each of the requests in the sample.</p>
   */
  SampledRequests?: SampledHTTPRequest[];

  /**
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request. However,
   * 			if your AWS resource received more than 5,000 requests during the time range that you specified in the request,
   * 			<code>GetSampledRequests</code> returns the time range for the first 5,000 requests.</p>
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

export interface GetSizeConstraintSetRequest {
  __type?: "GetSizeConstraintSetRequest";
  /**
   * <p>The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to get. <code>SizeConstraintSetId</code> is returned by
   * 			<a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string | undefined;
}

export namespace GetSizeConstraintSetRequest {
  export const filterSensitiveLog = (
    obj: GetSizeConstraintSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSizeConstraintSetRequest =>
    __isa(o, "GetSizeConstraintSetRequest");
}

export interface GetSizeConstraintSetResponse {
  __type?: "GetSizeConstraintSetResponse";
  /**
   * <p>Information about the <a>SizeConstraintSet</a> that you specified in the <code>GetSizeConstraintSet</code> request. For more information, see the
   * 			following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>SizeConstraintSet</a>: Contains <code>SizeConstraintSetId</code>, <code>SizeConstraints</code>, and <code>Name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraints</code>: Contains an array of <a>SizeConstraint</a> objects. Each <code>SizeConstraint</code>
   * 				object contains <a>FieldToMatch</a>, <code>TextTransformation</code>, <code>ComparisonOperator</code>,
   * 				and <code>Size</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SizeConstraintSet?: SizeConstraintSet;
}

export namespace GetSizeConstraintSetResponse {
  export const filterSensitiveLog = (
    obj: GetSizeConstraintSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSizeConstraintSetResponse =>
    __isa(o, "GetSizeConstraintSetResponse");
}

/**
 * <p>A request to get a <a>SqlInjectionMatchSet</a>.</p>
 */
export interface GetSqlInjectionMatchSetRequest {
  __type?: "GetSqlInjectionMatchSetRequest";
  /**
   * <p>The <code>SqlInjectionMatchSetId</code> of the <a>SqlInjectionMatchSet</a> that you want to get. <code>SqlInjectionMatchSetId</code>
   * 			is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string | undefined;
}

export namespace GetSqlInjectionMatchSetRequest {
  export const filterSensitiveLog = (
    obj: GetSqlInjectionMatchSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSqlInjectionMatchSetRequest =>
    __isa(o, "GetSqlInjectionMatchSetRequest");
}

/**
 * <p>The response to a <a>GetSqlInjectionMatchSet</a> request.</p>
 */
export interface GetSqlInjectionMatchSetResponse {
  __type?: "GetSqlInjectionMatchSetResponse";
  /**
   * <p>Information about the <a>SqlInjectionMatchSet</a> that you specified in the <code>GetSqlInjectionMatchSet</code> request.
   * 			For more information, see the following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>SqlInjectionMatchSet</a>: Contains <code>Name</code>, <code>SqlInjectionMatchSetId</code>, and an array of
   * 				<code>SqlInjectionMatchTuple</code> objects</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SqlInjectionMatchTuple</a>: Each <code>SqlInjectionMatchTuple</code> object contains <code>FieldToMatch</code> and
   * 				<code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SqlInjectionMatchSet?: SqlInjectionMatchSet;
}

export namespace GetSqlInjectionMatchSetResponse {
  export const filterSensitiveLog = (
    obj: GetSqlInjectionMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSqlInjectionMatchSetResponse =>
    __isa(o, "GetSqlInjectionMatchSetResponse");
}

export interface GetWebACLForResourceRequest {
  __type?: "GetWebACLForResourceRequest";
  /**
   * <p>The ARN (Amazon Resource Name) of the resource for which to get the web ACL, either an application load balancer or Amazon API Gateway stage.</p>
   *          <p>The ARN should be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
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
   * <p>Information about the web ACL that you specified in the <code>GetWebACLForResource</code> request. If there is no associated resource, a null WebACLSummary is returned.</p>
   */
  WebACLSummary?: WebACLSummary;
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
   * <p>The <code>WebACLId</code> of the <a>WebACL</a> that you want to get. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by
   * 			<a>ListWebACLs</a>.</p>
   */
  WebACLId: string | undefined;
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
   * <p>Information about the <a>WebACL</a> that you specified in the <code>GetWebACL</code> request.
   * 			For more information, see the following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>WebACL</a>: Contains <code>DefaultAction</code>, <code>MetricName</code>, <code>Name</code>, an array of
   * 				<code>Rule</code> objects, and <code>WebACLId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DefaultAction</code> (Data type is <a>WafAction</a>): Contains <code>Type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Rules</code>: Contains an array of <code>ActivatedRule</code> objects, which contain <code>Action</code>,
   * 				<code>Priority</code>, and <code>RuleId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Action</code>: Contains <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
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
 * <p>A request to get an <a>XssMatchSet</a>.</p>
 */
export interface GetXssMatchSetRequest {
  __type?: "GetXssMatchSetRequest";
  /**
   * <p>The <code>XssMatchSetId</code> of the <a>XssMatchSet</a> that you want to get. <code>XssMatchSetId</code>
   * 			is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string | undefined;
}

export namespace GetXssMatchSetRequest {
  export const filterSensitiveLog = (obj: GetXssMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetXssMatchSetRequest =>
    __isa(o, "GetXssMatchSetRequest");
}

/**
 * <p>The response to a <a>GetXssMatchSet</a> request.</p>
 */
export interface GetXssMatchSetResponse {
  __type?: "GetXssMatchSetResponse";
  /**
   * <p>Information about the <a>XssMatchSet</a> that you specified in the <code>GetXssMatchSet</code> request.
   * 			For more information, see the following topics:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>XssMatchSet</a>: Contains <code>Name</code>, <code>XssMatchSetId</code>, and an array of
   * 				<code>XssMatchTuple</code> objects</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>XssMatchTuple</a>: Each <code>XssMatchTuple</code> object contains <code>FieldToMatch</code> and
   * 				<code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  XssMatchSet?: XssMatchSet;
}

export namespace GetXssMatchSetResponse {
  export const filterSensitiveLog = (obj: GetXssMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetXssMatchSetResponse =>
    __isa(o, "GetXssMatchSetResponse");
}

/**
 * <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that
 * 			appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of
 * 			all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
 */
export interface HTTPHeader {
  __type?: "HTTPHeader";
  /**
   * <p>The name of one of the headers in the sampled web request.</p>
   */
  Name?: string;

  /**
   * <p>The value of one of the headers in the sampled web request.</p>
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
 * <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that
 * 			appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about
 * 			one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
 */
export interface HTTPRequest {
  __type?: "HTTPRequest";
  /**
   * <p>The IP address that the request originated from. If the <code>WebACL</code> is associated with a CloudFront distribution,
   * 			this is the value of one of the following fields in CloudFront access logs:</p>
   * 		       <ul>
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
   * 			see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.</p>
   */
  Country?: string;

  /**
   * <p>The HTTP version specified in the sampled web request, for example, <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * <p>A complex type that contains two values for each header in the sampled web request: the name of the header and the value of the header.</p>
   */
  Headers?: HTTPHeader[];

  /**
   * <p>The HTTP method specified in the sampled web request. CloudFront supports the following methods: <code>DELETE</code>,
   * 			<code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>. </p>
   */
  Method?: string;

  /**
   * <p>The part of a web request that identifies the resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;
}

export namespace HTTPRequest {
  export const filterSensitiveLog = (obj: HTTPRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is HTTPRequest => __isa(o, "HTTPRequest");
}

/**
 * <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32.  AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p>
 * 	        <p>To specify an individual IP address, you specify the four-part IP address followed by a
 *             <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can
 *          specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or
 *          /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
 *             Inter-Domain Routing</a>. </p>
 */
export interface IPSet {
  __type?: "IPSet";
  /**
   * <p>The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from.
   * 			If the <code>WebACL</code> is associated with a CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.</p>
   */
  IPSetDescriptors: IPSetDescriptor[] | undefined;

  /**
   * <p>The <code>IPSetId</code> for an <code>IPSet</code>. You use <code>IPSetId</code> to get information about an
   * 			<code>IPSet</code> (see <a>GetIPSet</a>), update an <code>IPSet</code> (see <a>UpdateIPSet</a>),
   * 			insert an <code>IPSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and
   * 			delete an <code>IPSet</code> from AWS WAF (see <a>DeleteIPSet</a>).</p>
   * 		       <p>
   *             <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by <a>ListIPSets</a>.</p>
   */
  IPSetId: string | undefined;

  /**
   * <p>A friendly name or description of the <a>IPSet</a>. You can't change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name?: string;
}

export namespace IPSet {
  export const filterSensitiveLog = (obj: IPSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSet => __isa(o, "IPSet");
}

/**
 * <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>
 */
export interface IPSetDescriptor {
  __type?: "IPSetDescriptor";
  /**
   * <p>Specify <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  Type: IPSetDescriptorType | string | undefined;

  /**
   * <p>Specify an IPv4 address by using CIDR notation. For example:</p>
   * 		       <ul>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   * 				<code>192.0.2.0/24</code>.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>For more information about CIDR notation, see the Wikipedia entry
   * 	      <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   * 	        <p>Specify an IPv6 address by using CIDR notation. For example:</p>
   * 	        <ul>
   *             <li>
   * 	              <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   * 	           </li>
   *             <li>
   * 	              <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   * 	           </li>
   *          </ul>
   */
  Value: string | undefined;
}

export namespace IPSetDescriptor {
  export const filterSensitiveLog = (obj: IPSetDescriptor): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSetDescriptor =>
    __isa(o, "IPSetDescriptor");
}

export enum IPSetDescriptorType {
  IPV4 = "IPV4",
  IPV6 = "IPV6"
}

/**
 * <p>Contains the identifier and the name of the <code>IPSet</code>.</p>
 */
export interface IPSetSummary {
  __type?: "IPSetSummary";
  /**
   * <p>The <code>IPSetId</code> for an <a>IPSet</a>. You can use <code>IPSetId</code> in a <a>GetIPSet</a> request to get detailed
   * 			information about an <a>IPSet</a>.</p>
   */
  IPSetId: string | undefined;

  /**
   * <p>A friendly name or description of the <a>IPSet</a>. You can't change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;
}

export namespace IPSetSummary {
  export const filterSensitiveLog = (obj: IPSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSetSummary => __isa(o, "IPSetSummary");
}

/**
 * <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p>
 */
export interface IPSetUpdate {
  __type?: "IPSetUpdate";
  /**
   * <p>Specifies whether to insert or delete an IP address with <a>UpdateIPSet</a>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from.</p>
   */
  IPSetDescriptor: IPSetDescriptor | undefined;
}

export namespace IPSetUpdate {
  export const filterSensitiveLog = (obj: IPSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPSetUpdate => __isa(o, "IPSetUpdate");
}

export interface ListActivatedRulesInRuleGroupRequest {
  __type?: "ListActivatedRulesInRuleGroupRequest";
  /**
   * <p>Specifies the number of <code>ActivatedRules</code> that you want AWS WAF to return for this request. If you have more <code>ActivatedRules</code> than the number that you specify for <code>Limit</code>, the response includes a
   *          <code>NextMarker</code> value that you can use to get another batch of <code>ActivatedRules</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>ActivatedRules</code> than the value of <code>Limit</code>,
   *          AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ActivatedRules</code>.
   *          For the second and subsequent <code>ListActivatedRulesInRuleGroup</code> requests, specify the value of <code>NextMarker</code>
   *          from the previous response to get information about another batch of <code>ActivatedRules</code>.</p>
   */
  NextMarker?: string;

  /**
   * <p>The <code>RuleGroupId</code> of the <a>RuleGroup</a> for which you want to get a list of <a>ActivatedRule</a> objects.</p>
   */
  RuleGroupId?: string;
}

export namespace ListActivatedRulesInRuleGroupRequest {
  export const filterSensitiveLog = (
    obj: ListActivatedRulesInRuleGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListActivatedRulesInRuleGroupRequest =>
    __isa(o, "ListActivatedRulesInRuleGroupRequest");
}

export interface ListActivatedRulesInRuleGroupResponse {
  __type?: "ListActivatedRulesInRuleGroupResponse";
  /**
   * <p>An array of <code>ActivatedRules</code> objects.</p>
   */
  ActivatedRules?: ActivatedRule[];

  /**
   * <p>If you have more <code>ActivatedRules</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>ActivatedRules</code>, submit another <code>ListActivatedRulesInRuleGroup</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;
}

export namespace ListActivatedRulesInRuleGroupResponse {
  export const filterSensitiveLog = (
    obj: ListActivatedRulesInRuleGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListActivatedRulesInRuleGroupResponse =>
    __isa(o, "ListActivatedRulesInRuleGroupResponse");
}

export interface ListByteMatchSetsRequest {
  __type?: "ListByteMatchSetsRequest";
  /**
   * <p>Specifies the number of <code>ByteMatchSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>ByteMatchSets</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>ByteMatchSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>ByteMatchSets</code> than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ByteMatchSets</code>.
   * 			For the second and subsequent <code>ListByteMatchSets</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>ByteMatchSets</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListByteMatchSetsRequest {
  export const filterSensitiveLog = (obj: ListByteMatchSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListByteMatchSetsRequest =>
    __isa(o, "ListByteMatchSetsRequest");
}

export interface ListByteMatchSetsResponse {
  __type?: "ListByteMatchSetsResponse";
  /**
   * <p>An array of <a>ByteMatchSetSummary</a> objects.</p>
   */
  ByteMatchSets?: ByteMatchSetSummary[];

  /**
   * <p>If you have more <code>ByteMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>ByteMatchSet</code> objects, submit another
   * 			<code>ListByteMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;
}

export namespace ListByteMatchSetsResponse {
  export const filterSensitiveLog = (obj: ListByteMatchSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListByteMatchSetsResponse =>
    __isa(o, "ListByteMatchSetsResponse");
}

export interface ListGeoMatchSetsRequest {
  __type?: "ListGeoMatchSetsRequest";
  /**
   * <p>Specifies the number of <code>GeoMatchSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>GeoMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>GeoMatchSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>GeoMatchSet</code>s than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>GeoMatchSet</code> objects.
   * 			For the second and subsequent <code>ListGeoMatchSets</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>GeoMatchSet</code> objects.</p>
   */
  NextMarker?: string;
}

export namespace ListGeoMatchSetsRequest {
  export const filterSensitiveLog = (obj: ListGeoMatchSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGeoMatchSetsRequest =>
    __isa(o, "ListGeoMatchSetsRequest");
}

export interface ListGeoMatchSetsResponse {
  __type?: "ListGeoMatchSetsResponse";
  /**
   * <p>An array of <a>GeoMatchSetSummary</a> objects.</p>
   */
  GeoMatchSets?: GeoMatchSetSummary[];

  /**
   * <p>If you have more <code>GeoMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>GeoMatchSet</code> objects, submit another
   * 			<code>ListGeoMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;
}

export namespace ListGeoMatchSetsResponse {
  export const filterSensitiveLog = (obj: ListGeoMatchSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGeoMatchSetsResponse =>
    __isa(o, "ListGeoMatchSetsResponse");
}

export interface ListIPSetsRequest {
  __type?: "ListIPSetsRequest";
  /**
   * <p>Specifies the number of <code>IPSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>IPSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>IPSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>AWS WAF returns a <code>NextMarker</code> value in the response that allows you to
   *          list another group of <code>IPSets</code>. For the second and subsequent
   *             <code>ListIPSets</code> requests, specify the value of <code>NextMarker</code> from the
   *          previous response to get information about another batch of <code>IPSets</code>.</p>
   */
  NextMarker?: string;
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
   * <p>An array of <a>IPSetSummary</a> objects.</p>
   */
  IPSets?: IPSetSummary[];

  /**
   * <p>To list more <code>IPSet</code> objects, submit another <code>ListIPSets</code>
   *          request, and in the next request use the <code>NextMarker</code> response value as the
   *             <code>NextMarker</code> value.</p>
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
   * <p>Specifies the number of <code>LoggingConfigurations</code> that you want AWS WAF to return for this request. If you have more <code>LoggingConfigurations</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>LoggingConfigurations</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>LoggingConfigurations</code> than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>LoggingConfigurations</code>.
   * 			For the second and subsequent <code>ListLoggingConfigurations</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>ListLoggingConfigurations</code>.</p>
   */
  NextMarker?: string;
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
   * <p>An array of <a>LoggingConfiguration</a> objects.</p>
   */
  LoggingConfigurations?: LoggingConfiguration[];

  /**
   * <p>If you have more <code>LoggingConfigurations</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>LoggingConfigurations</code>, submit another <code>ListLoggingConfigurations</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
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

export interface ListRateBasedRulesRequest {
  __type?: "ListRateBasedRulesRequest";
  /**
   * <p>Specifies the number of <code>Rules</code> that you want AWS WAF to return for this
   *          request. If you have more <code>Rules</code> than the number that you specify for
   *             <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can
   *          use to get another batch of <code>Rules</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>Rules</code>
   *          than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the
   *          response that allows you to list another group of <code>Rules</code>. For the second and
   *          subsequent <code>ListRateBasedRules</code> requests, specify the value of
   *             <code>NextMarker</code> from the previous response to get information about another
   *          batch of <code>Rules</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListRateBasedRulesRequest {
  export const filterSensitiveLog = (obj: ListRateBasedRulesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRateBasedRulesRequest =>
    __isa(o, "ListRateBasedRulesRequest");
}

export interface ListRateBasedRulesResponse {
  __type?: "ListRateBasedRulesResponse";
  /**
   * <p>If you have more <code>Rules</code> than the number that you specified for
   *             <code>Limit</code> in the request, the response includes a <code>NextMarker</code>
   *          value. To list more <code>Rules</code>, submit another <code>ListRateBasedRules</code>
   *          request, and specify the <code>NextMarker</code> value from the response in the
   *             <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleSummary</a> objects.</p>
   */
  Rules?: RuleSummary[];
}

export namespace ListRateBasedRulesResponse {
  export const filterSensitiveLog = (obj: ListRateBasedRulesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRateBasedRulesResponse =>
    __isa(o, "ListRateBasedRulesResponse");
}

export interface ListRegexMatchSetsRequest {
  __type?: "ListRegexMatchSetsRequest";
  /**
   * <p>Specifies the number of <code>RegexMatchSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>RegexMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>RegexMatchSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>RegexMatchSet</code> objects than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ByteMatchSets</code>.
   * 			For the second and subsequent <code>ListRegexMatchSets</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>RegexMatchSet</code> objects.</p>
   */
  NextMarker?: string;
}

export namespace ListRegexMatchSetsRequest {
  export const filterSensitiveLog = (obj: ListRegexMatchSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegexMatchSetsRequest =>
    __isa(o, "ListRegexMatchSetsRequest");
}

export interface ListRegexMatchSetsResponse {
  __type?: "ListRegexMatchSetsResponse";
  /**
   * <p>If you have more <code>RegexMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>RegexMatchSet</code> objects, submit another
   * 			<code>ListRegexMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RegexMatchSetSummary</a> objects.</p>
   */
  RegexMatchSets?: RegexMatchSetSummary[];
}

export namespace ListRegexMatchSetsResponse {
  export const filterSensitiveLog = (obj: ListRegexMatchSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegexMatchSetsResponse =>
    __isa(o, "ListRegexMatchSetsResponse");
}

export interface ListRegexPatternSetsRequest {
  __type?: "ListRegexPatternSetsRequest";
  /**
   * <p>Specifies the number of <code>RegexPatternSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>RegexPatternSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>RegexPatternSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>RegexPatternSet</code> objects than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>RegexPatternSet</code> objects.
   * 			For the second and subsequent <code>ListRegexPatternSets</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>RegexPatternSet</code> objects.</p>
   */
  NextMarker?: string;
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
   * <p>If you have more <code>RegexPatternSet</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>RegexPatternSet</code> objects, submit another
   * 			<code>ListRegexPatternSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RegexPatternSetSummary</a> objects.</p>
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
   * <p>The type of resource to list, either an application load balancer or Amazon API Gateway.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The unique identifier (ID) of the web ACL for which to list the associated resources.</p>
   */
  WebACLId: string | undefined;
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
   * <p>An array of ARNs (Amazon Resource Names) of the resources associated with the specified web ACL. An array with zero elements is returned if there are no resources associated with the web ACL.</p>
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
   * <p>Specifies the number of <code>RuleGroups</code> that you want AWS WAF to return for this request. If you have more <code>RuleGroups</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>RuleGroups</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>RuleGroups</code> than the value of <code>Limit</code>,
   *          AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>RuleGroups</code>.
   *          For the second and subsequent <code>ListRuleGroups</code> requests, specify the value of <code>NextMarker</code>
   *          from the previous response to get information about another batch of <code>RuleGroups</code>.</p>
   */
  NextMarker?: string;
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
   * <p>If you have more <code>RuleGroups</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>RuleGroups</code>, submit another <code>ListRuleGroups</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleGroup</a> objects.</p>
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

export interface ListRulesRequest {
  __type?: "ListRulesRequest";
  /**
   * <p>Specifies the number of <code>Rules</code> that you want AWS WAF to return for this request. If you have more 			<code>Rules</code> than the number that you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>Rules</code> than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>Rules</code>.
   * 			For the second and subsequent <code>ListRules</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>Rules</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListRulesRequest {
  export const filterSensitiveLog = (obj: ListRulesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRulesRequest =>
    __isa(o, "ListRulesRequest");
}

export interface ListRulesResponse {
  __type?: "ListRulesResponse";
  /**
   * <p>If you have more <code>Rules</code> than the number that you specified for <code>Limit</code> in the request, 			the response includes a <code>NextMarker</code> value. To list more <code>Rules</code>, submit another
   * 			<code>ListRules</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleSummary</a> objects.</p>
   */
  Rules?: RuleSummary[];
}

export namespace ListRulesResponse {
  export const filterSensitiveLog = (obj: ListRulesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRulesResponse =>
    __isa(o, "ListRulesResponse");
}

export interface ListSizeConstraintSetsRequest {
  __type?: "ListSizeConstraintSetsRequest";
  /**
   * <p>Specifies the number of <code>SizeConstraintSet</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>SizeConstraintSets</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>SizeConstraintSet</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>SizeConstraintSets</code> than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>SizeConstraintSets</code>.
   * 			For the second and subsequent <code>ListSizeConstraintSets</code> requests, specify the value of <code>NextMarker</code> 			from the previous response to get information about another batch of <code>SizeConstraintSets</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListSizeConstraintSetsRequest {
  export const filterSensitiveLog = (
    obj: ListSizeConstraintSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSizeConstraintSetsRequest =>
    __isa(o, "ListSizeConstraintSetsRequest");
}

export interface ListSizeConstraintSetsResponse {
  __type?: "ListSizeConstraintSetsResponse";
  /**
   * <p>If you have more <code>SizeConstraintSet</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>SizeConstraintSet</code> objects, submit another
   * 			<code>ListSizeConstraintSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>SizeConstraintSetSummary</a> objects.</p>
   */
  SizeConstraintSets?: SizeConstraintSetSummary[];
}

export namespace ListSizeConstraintSetsResponse {
  export const filterSensitiveLog = (
    obj: ListSizeConstraintSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSizeConstraintSetsResponse =>
    __isa(o, "ListSizeConstraintSetsResponse");
}

/**
 * <p>A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.</p>
 */
export interface ListSqlInjectionMatchSetsRequest {
  __type?: "ListSqlInjectionMatchSetsRequest";
  /**
   * <p>Specifies the number of <a>SqlInjectionMatchSet</a> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>SqlInjectionMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <a>SqlInjectionMatchSet</a> objects than the value of
   * 			<code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of
   * 			<code>SqlInjectionMatchSets</code>. For the second and subsequent <code>ListSqlInjectionMatchSets</code> requests, specify the
   * 			value of <code>NextMarker</code> from the previous response to get information about another batch of <code>SqlInjectionMatchSets</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListSqlInjectionMatchSetsRequest {
  export const filterSensitiveLog = (
    obj: ListSqlInjectionMatchSetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSqlInjectionMatchSetsRequest =>
    __isa(o, "ListSqlInjectionMatchSetsRequest");
}

/**
 * <p>The response to a <a>ListSqlInjectionMatchSets</a> request.</p>
 */
export interface ListSqlInjectionMatchSetsResponse {
  __type?: "ListSqlInjectionMatchSetsResponse";
  /**
   * <p>If you have more <a>SqlInjectionMatchSet</a> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>SqlInjectionMatchSet</code> objects, submit another
   * 			<code>ListSqlInjectionMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>SqlInjectionMatchSetSummary</a> objects.</p>
   */
  SqlInjectionMatchSets?: SqlInjectionMatchSetSummary[];
}

export namespace ListSqlInjectionMatchSetsResponse {
  export const filterSensitiveLog = (
    obj: ListSqlInjectionMatchSetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSqlInjectionMatchSetsResponse =>
    __isa(o, "ListSqlInjectionMatchSetsResponse");
}

export interface ListSubscribedRuleGroupsRequest {
  __type?: "ListSubscribedRuleGroupsRequest";
  /**
   * <p>Specifies the number of subscribed rule groups that you want AWS WAF to return for this request. If you have more
   * 			objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>ByteMatchSets</code>subscribed rule groups than the value of <code>Limit</code>,
   * 			AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of subscribed rule groups.
   * 			For the second and subsequent <code>ListSubscribedRuleGroupsRequest</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of subscribed rule groups.</p>
   */
  NextMarker?: string;
}

export namespace ListSubscribedRuleGroupsRequest {
  export const filterSensitiveLog = (
    obj: ListSubscribedRuleGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSubscribedRuleGroupsRequest =>
    __isa(o, "ListSubscribedRuleGroupsRequest");
}

export interface ListSubscribedRuleGroupsResponse {
  __type?: "ListSubscribedRuleGroupsResponse";
  /**
   * <p>If you have more objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more objects, submit another
   * 			<code>ListSubscribedRuleGroups</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleGroup</a> objects.</p>
   */
  RuleGroups?: SubscribedRuleGroupSummary[];
}

export namespace ListSubscribedRuleGroupsResponse {
  export const filterSensitiveLog = (
    obj: ListSubscribedRuleGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSubscribedRuleGroupsResponse =>
    __isa(o, "ListSubscribedRuleGroupsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  Limit?: number;
  NextMarker?: string;
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
  NextMarker?: string;
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
   * <p>Specifies the number of <code>WebACL</code> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>WebACL</code> objects than the number that you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>WebACL</code> objects.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <code>WebACL</code> objects than the number that you specify
   * 			for <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of
   * 			<code>WebACL</code> objects. For the second and subsequent <code>ListWebACLs</code> requests, specify the value of <code>NextMarker</code>
   * 			from the previous response to get information about another batch of <code>WebACL</code> objects.</p>
   */
  NextMarker?: string;
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
   * <p>If you have more <code>WebACL</code> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>WebACL</code> objects, submit another
   * 			<code>ListWebACLs</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>WebACLSummary</a> objects.</p>
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
 * <p>A request to list the <a>XssMatchSet</a> objects created by the current AWS account.</p>
 */
export interface ListXssMatchSetsRequest {
  __type?: "ListXssMatchSetsRequest";
  /**
   * <p>Specifies the number of <a>XssMatchSet</a> objects that you want AWS WAF to return for this request. If you have more
   * 			<code>XssMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a
   * 			<code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <a>XssMatchSet</a> objects than the value of
   * 			<code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of
   * 			<code>XssMatchSets</code>. For the second and subsequent <code>ListXssMatchSets</code> requests, specify the
   * 			value of <code>NextMarker</code> from the previous response to get information about another batch of <code>XssMatchSets</code>.</p>
   */
  NextMarker?: string;
}

export namespace ListXssMatchSetsRequest {
  export const filterSensitiveLog = (obj: ListXssMatchSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListXssMatchSetsRequest =>
    __isa(o, "ListXssMatchSetsRequest");
}

/**
 * <p>The response to a <a>ListXssMatchSets</a> request.</p>
 */
export interface ListXssMatchSetsResponse {
  __type?: "ListXssMatchSetsResponse";
  /**
   * <p>If you have more <a>XssMatchSet</a> objects than the number that you specified for <code>Limit</code> in the request,
   * 			the response includes a <code>NextMarker</code> value. To list more <code>XssMatchSet</code> objects, submit another
   * 			<code>ListXssMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the
   * 			<code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>XssMatchSetSummary</a> objects.</p>
   */
  XssMatchSets?: XssMatchSetSummary[];
}

export namespace ListXssMatchSetsResponse {
  export const filterSensitiveLog = (obj: ListXssMatchSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListXssMatchSetsResponse =>
    __isa(o, "ListXssMatchSetsResponse");
}

/**
 * <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code>
 *          information, and the web ACL Amazon Resource Name (ARN).</p>
 */
export interface LoggingConfiguration {
  __type?: "LoggingConfiguration";
  /**
   * <p>An array of Amazon Kinesis Data Firehose ARNs.</p>
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * <p>The parts of the request that you want redacted from the logs. For
   *          example,
   *          if you redact the cookie field, the cookie field in the firehose will be
   *             <code>xxx</code>. </p>
   */
  RedactedFields?: FieldToMatch[];

  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with
   *             <code>LogDestinationConfigs</code>.</p>
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

export enum MatchFieldType {
  ALL_QUERY_ARGS = "ALL_QUERY_ARGS",
  BODY = "BODY",
  HEADER = "HEADER",
  METHOD = "METHOD",
  QUERY_STRING = "QUERY_STRING",
  SINGLE_QUERY_ARG = "SINGLE_QUERY_ARG",
  URI = "URI"
}

export enum ParameterExceptionField {
  BYTE_MATCH_FIELD_TYPE = "BYTE_MATCH_FIELD_TYPE",
  BYTE_MATCH_POSITIONAL_CONSTRAINT = "BYTE_MATCH_POSITIONAL_CONSTRAINT",
  BYTE_MATCH_TEXT_TRANSFORMATION = "BYTE_MATCH_TEXT_TRANSFORMATION",
  CHANGE_ACTION = "CHANGE_ACTION",
  GEO_MATCH_LOCATION_TYPE = "GEO_MATCH_LOCATION_TYPE",
  GEO_MATCH_LOCATION_VALUE = "GEO_MATCH_LOCATION_VALUE",
  IPSET_TYPE = "IPSET_TYPE",
  NEXT_MARKER = "NEXT_MARKER",
  PREDICATE_TYPE = "PREDICATE_TYPE",
  RATE_KEY = "RATE_KEY",
  RESOURCE_ARN = "RESOURCE_ARN",
  RULE_TYPE = "RULE_TYPE",
  SIZE_CONSTRAINT_COMPARISON_OPERATOR = "SIZE_CONSTRAINT_COMPARISON_OPERATOR",
  SQL_INJECTION_MATCH_FIELD_TYPE = "SQL_INJECTION_MATCH_FIELD_TYPE",
  TAGS = "TAGS",
  TAG_KEYS = "TAG_KEYS",
  WAF_ACTION = "WAF_ACTION",
  WAF_OVERRIDE_ACTION = "WAF_OVERRIDE_ACTION"
}

export enum ParameterExceptionReason {
  ILLEGAL_ARGUMENT = "ILLEGAL_ARGUMENT",
  ILLEGAL_COMBINATION = "ILLEGAL_COMBINATION",
  INVALID_OPTION = "INVALID_OPTION",
  INVALID_TAG_KEY = "INVALID_TAG_KEY"
}

export enum PositionalConstraint {
  CONTAINS = "CONTAINS",
  CONTAINS_WORD = "CONTAINS_WORD",
  ENDS_WITH = "ENDS_WITH",
  EXACTLY = "EXACTLY",
  STARTS_WITH = "STARTS_WITH"
}

/**
 * <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>,  <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects
 * 			that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do
 * 			NOT originate from the IP address 192.0.2.44. </p>
 */
export interface Predicate {
  __type?: "Predicate";
  /**
   * <p>A unique identifier for a predicate in a <code>Rule</code>, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   * 			The ID is returned by the corresponding <code>Create</code> or <code>List</code> command.</p>
   */
  DataId: string | undefined;

  /**
   * <p>Set <code>Negated</code> to <code>False</code> if you want AWS WAF to allow, block, or count requests based on the settings in the
   * 		       specified <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>,  <a>GeoMatchSet</a>,  or <a>SizeConstraintSet</a>.
   * 			For example, if an <code>IPSet</code> includes the IP address <code>192.0.2.44</code>, AWS WAF will allow or block requests based on that IP address.</p>
   * 		       <p>Set <code>Negated</code> to <code>True</code> if you want AWS WAF to allow or block a request based on the negation
   * 		       of the settings in the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>,  <a>GeoMatchSet</a>, or <a>SizeConstraintSet</a>.
   * 			For example, if an <code>IPSet</code> includes the IP address <code>192.0.2.44</code>, AWS WAF will allow, block, or count requests based on
   * 			all IP addresses <i>except</i>
   *             <code>192.0.2.44</code>.</p>
   */
  Negated: boolean | undefined;

  /**
   * <p>The type of predicate in a <code>Rule</code>, such as <code>ByteMatch</code> or <code>IPSet</code>.</p>
   */
  Type: PredicateType | string | undefined;
}

export namespace Predicate {
  export const filterSensitiveLog = (obj: Predicate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Predicate => __isa(o, "Predicate");
}

export enum PredicateType {
  BYTE_MATCH = "ByteMatch",
  GEO_MATCH = "GeoMatch",
  IP_MATCH = "IPMatch",
  REGEX_MATCH = "RegexMatch",
  SIZE_CONSTRAINT = "SizeConstraint",
  SQL_INJECTION_MATCH = "SqlInjectionMatch",
  XSS_MATCH = "XssMatch"
}

export interface PutLoggingConfigurationRequest {
  __type?: "PutLoggingConfigurationRequest";
  /**
   * <p>The Amazon Kinesis Data Firehose that contains the inspected traffic
   *          information, the redacted fields details, and the Amazon Resource Name (ARN) of the web ACL
   *          to monitor.</p>
   *          <note>
   *             <p>When specifying <code>Type</code> in <code>RedactedFields</code>, you must use one of
   *             the following values: <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>,
   *             or <code>METHOD</code>.</p>
   *          </note>
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
   * <p>The <a>LoggingConfiguration</a> that you submitted in the request.</p>
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

export interface PutPermissionPolicyRequest {
  __type?: "PutPermissionPolicyRequest";
  /**
   * <p>The policy to attach to the specified RuleGroup.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the RuleGroup to which you want to attach the policy.</p>
   */
  ResourceArn: string | undefined;
}

export namespace PutPermissionPolicyRequest {
  export const filterSensitiveLog = (obj: PutPermissionPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPermissionPolicyRequest =>
    __isa(o, "PutPermissionPolicyRequest");
}

export interface PutPermissionPolicyResponse {
  __type?: "PutPermissionPolicyResponse";
}

export namespace PutPermissionPolicyResponse {
  export const filterSensitiveLog = (
    obj: PutPermissionPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPermissionPolicyResponse =>
    __isa(o, "PutPermissionPolicyResponse");
}

/**
 * <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with
 *          one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a
 *          specified IP address every five minutes. For example, based on recent requests that you've
 *          seen from an attacker, you might create a <code>RateBasedRule</code> that includes the
 *          following conditions: </p>
 *          <ul>
 *             <li>
 *                <p>The requests come from 192.0.2.44.</p>
 *             </li>
 *             <li>
 *                <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code>
 *                header.</p>
 *             </li>
 *          </ul>
 *          <p>In the rule, you also define the rate limit as 15,000.</p>
 *          <p>Requests that meet both of these conditions and exceed 15,000 requests every five
 *          minutes trigger the rule's action (block or count), which is defined in the web
 *          ACL.</p>
 */
export interface RateBasedRule {
  __type?: "RateBasedRule";
  /**
   * <p>The <code>Predicates</code> object contains one <code>Predicate</code> element for
   *          each <a>ByteMatchSet</a>, <a>IPSet</a>, or <a>SqlInjectionMatchSet</a> object that you want to include in a
   *             <code>RateBasedRule</code>.</p>
   */
  MatchPredicates: Predicate[] | undefined;

  /**
   * <p>A friendly name or description for the metrics for a <code>RateBasedRule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the
   *             <code>RateBasedRule</code>.</p>
   */
  MetricName?: string;

  /**
   * <p>A friendly name or description for a <code>RateBasedRule</code>. You can't change the
   *          name of a <code>RateBasedRule</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The field that AWS WAF uses to determine if requests are likely arriving from single
   *          source and thus subject to rate monitoring. The only valid value for <code>RateKey</code>
   *          is <code>IP</code>. <code>IP</code> indicates that requests arriving from the same IP
   *          address are subject to the <code>RateLimit</code> that is specified in the
   *             <code>RateBasedRule</code>.</p>
   */
  RateKey: RateKey | string | undefined;

  /**
   * <p>The maximum number of requests, which have an identical value in the field specified
   *          by the <code>RateKey</code>, allowed in a five-minute period. If the number of requests
   *          exceeds the <code>RateLimit</code> and the other predicates specified in the rule are also
   *          met, AWS WAF triggers the action that is specified for this rule.</p>
   */
  RateLimit: number | undefined;

  /**
   * <p>A unique identifier for a <code>RateBasedRule</code>. You use <code>RuleId</code> to
   *          get more information about a <code>RateBasedRule</code> (see <a>GetRateBasedRule</a>), update a <code>RateBasedRule</code> (see <a>UpdateRateBasedRule</a>), insert a <code>RateBasedRule</code> into a
   *             <code>WebACL</code> or delete one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RateBasedRule</code> from AWS WAF (see <a>DeleteRateBasedRule</a>).</p>
   */
  RuleId: string | undefined;
}

export namespace RateBasedRule {
  export const filterSensitiveLog = (obj: RateBasedRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is RateBasedRule => __isa(o, "RateBasedRule");
}

export enum RateKey {
  IP = "IP"
}

/**
 * <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and
 * 			<code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p>
 *          <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one
 * 			<code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code>
 * 			to be considered a match.</p>
 */
export interface RegexMatchSet {
  __type?: "RegexMatchSet";
  /**
   * <p>A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a
   * 			<code>RegexMatchSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>The <code>RegexMatchSetId</code> for a <code>RegexMatchSet</code>. You use <code>RegexMatchSetId</code> to get information about a
   * 			<code>RegexMatchSet</code> (see <a>GetRegexMatchSet</a>), update a <code>RegexMatchSet</code> (see <a>UpdateRegexMatchSet</a>),
   * 			insert a <code>RegexMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and
   * 			delete a <code>RegexMatchSet</code> from AWS WAF (see <a>DeleteRegexMatchSet</a>).</p>
   * 		       <p>
   *             <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.</p>
   */
  RegexMatchSetId?: string;

  /**
   * <p>Contains an array of <a>RegexMatchTuple</a> objects. Each <code>RegexMatchTuple</code>
   * 				object contains: </p>
   * 		       <ul>
   *             <li>
   *                <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p>
   *             </li>
   *             <li>
   *                <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>.</p>
   *             </li>
   *             <li>
   *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
   * 			         </li>
   *          </ul>
   */
  RegexMatchTuples?: RegexMatchTuple[];
}

export namespace RegexMatchSet {
  export const filterSensitiveLog = (obj: RegexMatchSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexMatchSet => __isa(o, "RegexMatchSet");
}

/**
 * <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and
 * 			<code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p>
 */
export interface RegexMatchSetSummary {
  __type?: "RegexMatchSetSummary";
  /**
   * <p>A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a <code>RegexMatchSet</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>RegexMatchSetId</code> for a <code>RegexMatchSet</code>. You use <code>RegexMatchSetId</code> to get information about a <code>RegexMatchSet</code>,
   * 			update a <code>RegexMatchSet</code>, remove a <code>RegexMatchSet</code> from a <code>Rule</code>, and delete a <code>RegexMatchSet</code> from AWS WAF.</p>
   * 		       <p>
   *             <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.</p>
   */
  RegexMatchSetId: string | undefined;
}

export namespace RegexMatchSetSummary {
  export const filterSensitiveLog = (obj: RegexMatchSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexMatchSetSummary =>
    __isa(o, "RegexMatchSetSummary");
}

/**
 * <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a
 *          <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p>
 */
export interface RegexMatchSetUpdate {
  __type?: "RegexMatchSetUpdate";
  /**
   * <p>Specifies whether to insert or delete a <a>RegexMatchTuple</a>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the identifier of the regular expression (regex) pattern that you want AWS WAF to search for.
   *          If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>RegexMatchTuple</code> values must
   *          exactly match the values in the <code>RegexMatchTuple</code> that you want to delete from the <code>RegexMatchSet</code>.</p>
   */
  RegexMatchTuple: RegexMatchTuple | undefined;
}

export namespace RegexMatchSetUpdate {
  export const filterSensitiveLog = (obj: RegexMatchSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexMatchSetUpdate =>
    __isa(o, "RegexMatchSetUpdate");
}

/**
 * <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p>
 * 		       <ul>
 *             <li>
 *                <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p>
 *             </li>
 *             <li>
 *                <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p>
 *             </li>
 *             <li>
 *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
 * 			         </li>
 *          </ul>
 */
export interface RegexMatchTuple {
  __type?: "RegexMatchTuple";
  /**
   * <p>Specifies where in a web request to look for the <code>RegexPatternSet</code>.</p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>The <code>RegexPatternSetId</code> for a <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a
   * 			<code>RegexPatternSet</code> (see <a>GetRegexPatternSet</a>), update a <code>RegexPatternSet</code> (see <a>UpdateRegexPatternSet</a>),
   * 			insert a <code>RegexPatternSet</code> into a <code>RegexMatchSet</code> or delete one from a <code>RegexMatchSet</code> (see <a>UpdateRegexMatchSet</a>), and
   * 			delete an <code>RegexPatternSet</code> from AWS WAF (see <a>DeleteRegexPatternSet</a>).</p>
   * 		       <p>
   * 		          <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
   * 			If you specify a transformation, AWS WAF performs the transformation on <code>RegexPatternSet</code> before inspecting a request for a match.</p>
   *          <p>You can only specify a single type of TextTransformation.</p>
   * 		       <p>
   *             <b>CMD_LINE</b>
   *          </p>
   * 		       <p>When you're concerned that attackers are injecting an operating system commandline command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   * 		       <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   * 		       <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   * 		       <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   * 			the following operations:</p>
   * 		       <ul>
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
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>LOWERCASE</b>
   *          </p>
   * 		       <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   * 		       <p>
   *             <b>URL_DECODE</b>
   *          </p>
   * 		       <p>Use this option to decode a URL-encoded value.</p>
   * 		       <p>
   *             <b>NONE</b>
   *          </p>
   * 		       <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   */
  TextTransformation: TextTransformation | string | undefined;
}

export namespace RegexMatchTuple {
  export const filterSensitiveLog = (obj: RegexMatchTuple): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexMatchTuple =>
    __isa(o, "RegexMatchTuple");
}

/**
 * <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
 */
export interface RegexPatternSet {
  __type?: "RegexPatternSet";
  /**
   * <p>A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a <code>RegexPatternSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>The identifier for the <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a <code>RegexPatternSet</code>,
   *          update a <code>RegexPatternSet</code>, remove a <code>RegexPatternSet</code> from a <code>RegexMatchSet</code>, and delete a <code>RegexPatternSet</code> from AWS WAF.</p>
   *          <p>
   *             <code>RegexMatchSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;

  /**
   * <p>Specifies the regular expression (regex) patterns that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>.</p>
   */
  RegexPatternStrings: string[] | undefined;
}

export namespace RegexPatternSet {
  export const filterSensitiveLog = (obj: RegexPatternSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSet =>
    __isa(o, "RegexPatternSet");
}

/**
 * <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and
 *          <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p>
 */
export interface RegexPatternSetSummary {
  __type?: "RegexPatternSetSummary";
  /**
   * <p>A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a <code>RegexPatternSet</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>RegexPatternSetId</code> for a <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a <code>RegexPatternSet</code>,
   *          update a <code>RegexPatternSet</code>, remove a <code>RegexPatternSet</code> from a <code>RegexMatchSet</code>, and delete a <code>RegexPatternSet</code> from AWS WAF.</p>
   *          <p>
   *             <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;
}

export namespace RegexPatternSetSummary {
  export const filterSensitiveLog = (obj: RegexPatternSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSetSummary =>
    __isa(o, "RegexPatternSetSummary");
}

/**
 * <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a
 *          <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p>
 */
export interface RegexPatternSetUpdate {
  __type?: "RegexPatternSetUpdate";
  /**
   * <p>Specifies whether to insert or delete a <code>RegexPatternString</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>.</p>
   */
  RegexPatternString: string | undefined;
}

export namespace RegexPatternSetUpdate {
  export const filterSensitiveLog = (obj: RegexPatternSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegexPatternSetUpdate =>
    __isa(o, "RegexPatternSetUpdate");
}

export enum ResourceType {
  API_GATEWAY = "API_GATEWAY",
  APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER"
}

/**
 * <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you
 * 			want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code>
 * 				header is <code>BadBot</code>.</p>
 *             </li>
 *          </ul>
 * 		       <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code>
 * 			header for which the value is <code>BadBot</code>.</p>
 */
export interface Rule {
  __type?: "Rule";
  /**
   * <p>A friendly name or description for the metrics for this <code>Rule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change <code>MetricName</code> after you create the <code>Rule</code>.</p>
   */
  MetricName?: string;

  /**
   * <p>The friendly name or description for the <code>Rule</code>. You can't change the name of a <code>Rule</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The <code>Predicates</code> object contains one <code>Predicate</code> element for each <a>ByteMatchSet</a>, <a>IPSet</a>, or
   * 			<a>SqlInjectionMatchSet</a> object that you want to include in a <code>Rule</code>.</p>
   */
  Predicates: Predicate[] | undefined;

  /**
   * <p>A unique identifier for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>),
   * 			update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete a
   * 			one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p>
   * 		       <p>
   *             <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj
  });
  export const isa = (o: any): o is Rule => __isa(o, "Rule");
}

/**
 * <p>A collection of predefined rules that you can add to a web ACL.</p>
 * 	        <p>Rule groups are subject to the following limits:</p>
 * 	        <ul>
 *             <li>
 *                <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p>
 *             </li>
 *             <li>
 *                <p>One rule group per web ACL.</p>
 *             </li>
 *             <li>
 *                <p>Ten rules per rule group.</p>
 *             </li>
 *          </ul>
 */
export interface RuleGroup {
  __type?: "RuleGroup";
  /**
   * <p>A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the <code>RuleGroup</code>.</p>
   */
  MetricName?: string;

  /**
   * <p>The friendly name or description for the <code>RuleGroup</code>. You can't change the name of a <code>RuleGroup</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for a <code>RuleGroup</code>. You use <code>RuleGroupId</code> to get more information about a <code>RuleGroup</code> (see <a>GetRuleGroup</a>),
   *          update a <code>RuleGroup</code> (see <a>UpdateRuleGroup</a>), insert a <code>RuleGroup</code> into a <code>WebACL</code> or delete a
   *          one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RuleGroup</code> from AWS WAF (see <a>DeleteRuleGroup</a>).</p>
   *          <p>
   *             <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.</p>
   */
  RuleGroupId: string | undefined;
}

export namespace RuleGroup {
  export const filterSensitiveLog = (obj: RuleGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleGroup => __isa(o, "RuleGroup");
}

/**
 * <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p>
 */
export interface RuleGroupSummary {
  __type?: "RuleGroupSummary";
  /**
   * <p>A friendly name or description of the <a>RuleGroup</a>. You can't change the name of a <code>RuleGroup</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>RuleGroup</code>. You use <code>RuleGroupId</code> to get more information about a <code>RuleGroup</code> (see <a>GetRuleGroup</a>),
   *          update a <code>RuleGroup</code> (see <a>UpdateRuleGroup</a>), insert a <code>RuleGroup</code> into a <code>WebACL</code> or delete
   *          one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RuleGroup</code> from AWS WAF (see <a>DeleteRuleGroup</a>).</p>
   *          <p>
   *             <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.</p>
   */
  RuleGroupId: string | undefined;
}

export namespace RuleGroupSummary {
  export const filterSensitiveLog = (obj: RuleGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleGroupSummary =>
    __isa(o, "RuleGroupSummary");
}

/**
 * <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a
 *          <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p>
 */
export interface RuleGroupUpdate {
  __type?: "RuleGroupUpdate";
  /**
   * <p>Specify <code>INSERT</code> to add an <code>ActivatedRule</code> to a <code>RuleGroup</code>. Use <code>DELETE</code> to remove an
   *          <code>ActivatedRule</code> from a <code>RuleGroup</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>The <code>ActivatedRule</code> object specifies a <code>Rule</code> that you want to insert or delete,
   *          the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code>
   *          (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p>
   */
  ActivatedRule: ActivatedRule | undefined;
}

export namespace RuleGroupUpdate {
  export const filterSensitiveLog = (obj: RuleGroupUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleGroupUpdate =>
    __isa(o, "RuleGroupUpdate");
}

/**
 * <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p>
 */
export interface RuleSummary {
  __type?: "RuleSummary";
  /**
   * <p>A friendly name or description of the <a>Rule</a>. You can't change the name of a <code>Rule</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>),
   * 			update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete
   * 			one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p>
   * 		       <p>
   *             <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>
   */
  RuleId: string | undefined;
}

export namespace RuleSummary {
  export const filterSensitiveLog = (obj: RuleSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleSummary => __isa(o, "RuleSummary");
}

/**
 * <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a
 * 			<code>Rule</code> or delete it from a <code>Rule</code>.</p>
 */
export interface RuleUpdate {
  __type?: "RuleUpdate";
  /**
   * <p>Specify <code>INSERT</code> to add a <code>Predicate</code> to a <code>Rule</code>. Use <code>DELETE</code> to remove a
   * 			<code>Predicate</code> from a <code>Rule</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>The ID of the <code>Predicate</code> (such as an <code>IPSet</code>) that you want to add to a <code>Rule</code>.</p>
   */
  Predicate: Predicate | undefined;
}

export namespace RuleUpdate {
  export const filterSensitiveLog = (obj: RuleUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleUpdate => __isa(o, "RuleUpdate");
}

/**
 * <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that
 * 			appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one
 * 			<code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>
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
   * <p>This value is returned if the <code>GetSampledRequests</code>  request specifies the ID of a <code>RuleGroup</code> rather than the ID of an individual rule. <code>RuleWithinRuleGroup</code> is the rule within the specified <code>RuleGroup</code> that matched the request listed in the response.</p>
   */
  RuleWithinRuleGroup?: string;

  /**
   * <p>The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).</p>
   */
  Timestamp?: Date;

  /**
   * <p>A value that indicates how one result in the response relates proportionally to other results in the response.
   * 			A result that has a weight of <code>2</code> represents roughly twice as many CloudFront web requests as a result
   * 			that has a weight of <code>1</code>.</p>
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

/**
 * <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build
 * 			an expression in the form of "<code>Size</code>
 *             <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the
 * 			<code>SizeConstraint</code> is considered to match.</p>
 */
export interface SizeConstraint {
  __type?: "SizeConstraint";
  /**
   * <p>The type of comparison you want AWS WAF to perform. AWS WAF uses this in combination with the provided <code>Size</code> and <code>FieldToMatch</code>
   * 			to build an expression in the form of "<code>Size</code>
   *             <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression
   * 			is true, the <code>SizeConstraint</code> is considered to match.</p>
   * 		       <p>
   *             <b>EQ</b>: Used to test if the <code>Size</code> is equal to the size of the <code>FieldToMatch</code>
   *          </p>
   * 		       <p>
   *             <b>NE</b>: Used to test if the <code>Size</code> is not equal to the size of the <code>FieldToMatch</code>
   *          </p>
   * 		       <p>
   *             <b>LE</b>: Used to test if the <code>Size</code> is less than or equal to the size of the <code>FieldToMatch</code>
   *          </p>
   * 		       <p>
   *             <b>LT</b>: Used to test if the <code>Size</code> is strictly less than the size of the <code>FieldToMatch</code>
   *          </p>
   * 		       <p>
   *             <b>GE</b>: Used to test if the <code>Size</code> is greater than or equal to the size of the <code>FieldToMatch</code>
   *          </p>
   * 		       <p>
   *             <b>GT</b>: Used to test if the <code>Size</code> is strictly greater than the size of the <code>FieldToMatch</code>
   *          </p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>Specifies where in a web request to look for the size constraint.</p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>The size in bytes that you want AWS WAF to compare against the size of the specified <code>FieldToMatch</code>. AWS WAF uses this in combination
   * 			with <code>ComparisonOperator</code> and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code>
   *             <code>ComparisonOperator</code> size
   * 			in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
   * 		       <p>Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).</p>
   * 		       <p>If you specify <code>URI</code> for the value of <code>Type</code>, the / in the URI counts as one character.
   * 			For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
   */
  Size: number | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
   * 			If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting a request for a match.</p>
   *          <p>You can only specify a single type of TextTransformation.</p>
   * 		       <p>Note that if you choose <code>BODY</code> for the value of <code>Type</code>, you must choose <code>NONE</code> for <code>TextTransformation</code>
   * 			because CloudFront forwards only the first 8192 bytes for inspection. </p>
   * 		       <p>
   *             <b>NONE</b>
   *          </p>
   * 		       <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   * 		       <p>
   *             <b>CMD_LINE</b>
   *          </p>
   * 		       <p>When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   * 		       <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   * 		       <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   * 		       <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   * 			the following operations:</p>
   * 		       <ul>
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
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>LOWERCASE</b>
   *          </p>
   * 		       <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   * 		       <p>
   *             <b>URL_DECODE</b>
   *          </p>
   * 		       <p>Use this option to decode a URL-encoded value.</p>
   */
  TextTransformation: TextTransformation | string | undefined;
}

export namespace SizeConstraint {
  export const filterSensitiveLog = (obj: SizeConstraint): any => ({
    ...obj
  });
  export const isa = (o: any): o is SizeConstraint =>
    __isa(o, "SizeConstraint");
}

/**
 * <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you
 * 			want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code>
 * 			object, a request only needs to match one constraint to be considered a match.</p>
 */
export interface SizeConstraintSet {
  __type?: "SizeConstraintSet";
  /**
   * <p>The name, if any, of the <code>SizeConstraintSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a
   * 			<code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code>
   * 			(see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF
   * 			(see <a>DeleteSizeConstraintSet</a>).</p>
   * 		       <p>
   *             <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string | undefined;

  /**
   * <p>Specifies the parts of web requests that you want to inspect the size of.</p>
   */
  SizeConstraints: SizeConstraint[] | undefined;
}

export namespace SizeConstraintSet {
  export const filterSensitiveLog = (obj: SizeConstraintSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is SizeConstraintSet =>
    __isa(o, "SizeConstraintSet");
}

/**
 * <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p>
 */
export interface SizeConstraintSetSummary {
  __type?: "SizeConstraintSetSummary";
  /**
   * <p>The name of the <code>SizeConstraintSet</code>, if any.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a
   * 			<code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code>
   * 			(see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF
   * 			(see <a>DeleteSizeConstraintSet</a>).</p>
   * 		       <p>
   *             <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string | undefined;
}

export namespace SizeConstraintSetSummary {
  export const filterSensitiveLog = (obj: SizeConstraintSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SizeConstraintSetSummary =>
    __isa(o, "SizeConstraintSetSummary");
}

/**
 * <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to
 * 			add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p>
 */
export interface SizeConstraintSetUpdate {
  __type?: "SizeConstraintSetUpdate";
  /**
   * <p>Specify <code>INSERT</code> to add a <a>SizeConstraintSetUpdate</a> to a <a>SizeConstraintSet</a>.
   * 			Use <code>DELETE</code> to remove a <code>SizeConstraintSetUpdate</code> from a <code>SizeConstraintSet</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build
   * 			an expression in the form of "<code>Size</code>
   *             <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the
   * 			<code>SizeConstraint</code> is considered to match.</p>
   */
  SizeConstraint: SizeConstraint | undefined;
}

export namespace SizeConstraintSetUpdate {
  export const filterSensitiveLog = (obj: SizeConstraintSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is SizeConstraintSetUpdate =>
    __isa(o, "SizeConstraintSetUpdate");
}

/**
 * <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you
 * 			want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a
 * 			<code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to
 * 			include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>
 */
export interface SqlInjectionMatchSet {
  __type?: "SqlInjectionMatchSet";
  /**
   * <p>The name, if any, of the <code>SqlInjectionMatchSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for a <code>SqlInjectionMatchSet</code>. You use <code>SqlInjectionMatchSetId</code> to get information about a
   * 			<code>SqlInjectionMatchSet</code> (see <a>GetSqlInjectionMatchSet</a>), update a <code>SqlInjectionMatchSet</code>
   * 			(see <a>UpdateSqlInjectionMatchSet</a>), insert a <code>SqlInjectionMatchSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SqlInjectionMatchSet</code> from AWS WAF
   * 			(see <a>DeleteSqlInjectionMatchSet</a>).</p>
   * 		       <p>
   *             <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * <p>Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.</p>
   */
  SqlInjectionMatchTuples: SqlInjectionMatchTuple[] | undefined;
}

export namespace SqlInjectionMatchSet {
  export const filterSensitiveLog = (obj: SqlInjectionMatchSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlInjectionMatchSet =>
    __isa(o, "SqlInjectionMatchSet");
}

/**
 * <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p>
 */
export interface SqlInjectionMatchSetSummary {
  __type?: "SqlInjectionMatchSetSummary";
  /**
   * <p>The name of the <code>SqlInjectionMatchSet</code>, if any, specified by <code>Id</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>SqlInjectionMatchSet</code>. You use <code>SqlInjectionMatchSetId</code> to get information about a
   * 			<code>SqlInjectionMatchSet</code> (see <a>GetSqlInjectionMatchSet</a>), update a <code>SqlInjectionMatchSet</code>
   * 			(see <a>UpdateSqlInjectionMatchSet</a>), insert a <code>SqlInjectionMatchSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SqlInjectionMatchSet</code> from AWS WAF
   * 			(see <a>DeleteSqlInjectionMatchSet</a>).</p>
   * 		       <p>
   *             <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string | undefined;
}

export namespace SqlInjectionMatchSetSummary {
  export const filterSensitiveLog = (
    obj: SqlInjectionMatchSetSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlInjectionMatchSetSummary =>
    __isa(o, "SqlInjectionMatchSetSummary");
}

/**
 * <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to
 * 			add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p>
 */
export interface SqlInjectionMatchSetUpdate {
  __type?: "SqlInjectionMatchSetUpdate";
  /**
   * <p>Specify <code>INSERT</code> to add a <a>SqlInjectionMatchSetUpdate</a> to a <a>SqlInjectionMatchSet</a>.
   * 			Use <code>DELETE</code> to remove a <code>SqlInjectionMatchSetUpdate</code> from a <code>SqlInjectionMatchSet</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  SqlInjectionMatchTuple: SqlInjectionMatchTuple | undefined;
}

export namespace SqlInjectionMatchSetUpdate {
  export const filterSensitiveLog = (obj: SqlInjectionMatchSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlInjectionMatchSetUpdate =>
    __isa(o, "SqlInjectionMatchSetUpdate");
}

/**
 * <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
 */
export interface SqlInjectionMatchTuple {
  __type?: "SqlInjectionMatchTuple";
  /**
   * <p>Specifies where in a web request to look for snippets of malicious SQL code.</p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
   * 			If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting a request for a match.</p>
   *          <p>You can only specify a single type of TextTransformation.</p>
   * 		       <p>
   *             <b>CMD_LINE</b>
   *          </p>
   * 		       <p>When you're concerned that attackers are injecting an operating system command line
   *          command and using unusual formatting to disguise some or all of the command, use this
   *          option to perform the following transformations:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   * 		       <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   * 		       <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   * 		       <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   * 			the following operations:</p>
   * 		       <ul>
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
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>LOWERCASE</b>
   *          </p>
   * 		       <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   * 		       <p>
   *             <b>URL_DECODE</b>
   *          </p>
   * 		       <p>Use this option to decode a URL-encoded value.</p>
   * 		       <p>
   *             <b>NONE</b>
   *          </p>
   * 		       <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   */
  TextTransformation: TextTransformation | string | undefined;
}

export namespace SqlInjectionMatchTuple {
  export const filterSensitiveLog = (obj: SqlInjectionMatchTuple): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlInjectionMatchTuple =>
    __isa(o, "SqlInjectionMatchTuple");
}

/**
 * <p>A summary of the rule groups you are subscribed to.</p>
 */
export interface SubscribedRuleGroupSummary {
  __type?: "SubscribedRuleGroupSummary";
  /**
   * <p>A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the <code>RuleGroup</code>.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>A friendly name or description of the <code>RuleGroup</code>. You can't change the name of a <code>RuleGroup</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>RuleGroup</code>.</p>
   */
  RuleGroupId: string | undefined;
}

export namespace SubscribedRuleGroupSummary {
  export const filterSensitiveLog = (obj: SubscribedRuleGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscribedRuleGroupSummary =>
    __isa(o, "SubscribedRuleGroupSummary");
}

export interface Tag {
  __type?: "Tag";
  Key?: string;
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagInfoForResource {
  __type?: "TagInfoForResource";
  ResourceARN?: string;
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
  ResourceARN: string | undefined;
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

export enum TextTransformation {
  CMD_LINE = "CMD_LINE",
  COMPRESS_WHITE_SPACE = "COMPRESS_WHITE_SPACE",
  HTML_ENTITY_DECODE = "HTML_ENTITY_DECODE",
  LOWERCASE = "LOWERCASE",
  NONE = "NONE",
  URL_DECODE = "URL_DECODE"
}

/**
 * <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 * 			for which you want AWS WAF to return a sample of web requests.</p>
 * 		       <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range
 * 			for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first
 * 			5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000
 * 			requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code>
 * 			is the time that AWS WAF received the 5,000th request. </p>
 */
export interface TimeWindow {
  __type?: "TimeWindow";
  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   * 		    	AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your
   * 		    	AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
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
  ResourceARN: string | undefined;
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

export interface UpdateByteMatchSetRequest {
  __type?: "UpdateByteMatchSetRequest";
  /**
   * <p>The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to update. <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by
   * 			<a>ListByteMatchSets</a>.</p>
   */
  ByteMatchSetId: string | undefined;

  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>An array of <code>ByteMatchSetUpdate</code> objects that you want to insert into or delete from a <a>ByteMatchSet</a>.
   * 			For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>ByteMatchSetUpdate</a>: Contains <code>Action</code> and <code>ByteMatchTuple</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ByteMatchTuple</a>: Contains <code>FieldToMatch</code>, <code>PositionalConstraint</code>, <code>TargetString</code>,
   * 				and <code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates: ByteMatchSetUpdate[] | undefined;
}

export namespace UpdateByteMatchSetRequest {
  export const filterSensitiveLog = (obj: UpdateByteMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateByteMatchSetRequest =>
    __isa(o, "UpdateByteMatchSetRequest");
}

export interface UpdateByteMatchSetResponse {
  __type?: "UpdateByteMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateByteMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateByteMatchSetResponse {
  export const filterSensitiveLog = (obj: UpdateByteMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateByteMatchSetResponse =>
    __isa(o, "UpdateByteMatchSetResponse");
}

export interface UpdateGeoMatchSetRequest {
  __type?: "UpdateGeoMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>GeoMatchSetId</code> of the <a>GeoMatchSet</a> that you want to update. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by
   * 			<a>ListGeoMatchSets</a>.</p>
   */
  GeoMatchSetId: string | undefined;

  /**
   * <p>An array of <code>GeoMatchSetUpdate</code> objects that you want to insert into or delete from an <a>GeoMatchSet</a>.
   * 			For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>GeoMatchSetUpdate</a>: Contains <code>Action</code> and <code>GeoMatchConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GeoMatchConstraint</a>: Contains <code>Type</code> and <code>Value</code>
   *                </p>
   * 			            <p>You can have only one <code>Type</code> and <code>Value</code> per <code>GeoMatchConstraint</code>. To add multiple countries, include multiple <code>GeoMatchSetUpdate</code> objects in your request.</p>
   *             </li>
   *          </ul>
   */
  Updates: GeoMatchSetUpdate[] | undefined;
}

export namespace UpdateGeoMatchSetRequest {
  export const filterSensitiveLog = (obj: UpdateGeoMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGeoMatchSetRequest =>
    __isa(o, "UpdateGeoMatchSetRequest");
}

export interface UpdateGeoMatchSetResponse {
  __type?: "UpdateGeoMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateGeoMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateGeoMatchSetResponse {
  export const filterSensitiveLog = (obj: UpdateGeoMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGeoMatchSetResponse =>
    __isa(o, "UpdateGeoMatchSetResponse");
}

export interface UpdateIPSetRequest {
  __type?: "UpdateIPSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>IPSetId</code> of the <a>IPSet</a> that you want to update. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by
   * 			<a>ListIPSets</a>.</p>
   */
  IPSetId: string | undefined;

  /**
   * <p>An array of <code>IPSetUpdate</code> objects that you want to insert into or delete from an <a>IPSet</a>.
   * 			For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>IPSetUpdate</a>: Contains <code>Action</code> and <code>IPSetDescriptor</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>IPSetDescriptor</a>: Contains <code>Type</code> and <code>Value</code>
   *                </p>
   *             </li>
   *          </ul>
   * 	        <p>You can insert a maximum of 1000 addresses in a single request.</p>
   */
  Updates: IPSetUpdate[] | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateIPSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateIPSetResponse {
  export const filterSensitiveLog = (obj: UpdateIPSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIPSetResponse =>
    __isa(o, "UpdateIPSetResponse");
}

export interface UpdateRateBasedRuleRequest {
  __type?: "UpdateRateBasedRuleRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The maximum number of requests, which have an identical value in the field specified by the <code>RateKey</code>, allowed in a
   *          five-minute period. If the number of requests exceeds the <code>RateLimit</code> and the other
   *          predicates specified in the rule are also met,
   *          AWS WAF triggers the action that is specified for this rule.</p>
   */
  RateLimit: number | undefined;

  /**
   * <p>The <code>RuleId</code> of the <code>RateBasedRule</code> that you want to update.
   *             <code>RuleId</code> is returned by <code>CreateRateBasedRule</code> and by <a>ListRateBasedRules</a>.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>An array of <code>RuleUpdate</code> objects that you want to insert into or delete
   *          from a <a>RateBasedRule</a>. </p>
   */
  Updates: RuleUpdate[] | undefined;
}

export namespace UpdateRateBasedRuleRequest {
  export const filterSensitiveLog = (obj: UpdateRateBasedRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRateBasedRuleRequest =>
    __isa(o, "UpdateRateBasedRuleRequest");
}

export interface UpdateRateBasedRuleResponse {
  __type?: "UpdateRateBasedRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the
   *             <code>UpdateRateBasedRule</code> request. You can also use this value to query the
   *          status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateRateBasedRuleResponse {
  export const filterSensitiveLog = (
    obj: UpdateRateBasedRuleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRateBasedRuleResponse =>
    __isa(o, "UpdateRateBasedRuleResponse");
}

export interface UpdateRegexMatchSetRequest {
  __type?: "UpdateRegexMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to update. <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by
   * 			<a>ListRegexMatchSets</a>.</p>
   */
  RegexMatchSetId: string | undefined;

  /**
   * <p>An array of <code>RegexMatchSetUpdate</code> objects that you want to insert into or delete from a <a>RegexMatchSet</a>.
   * 			For more information, see <a>RegexMatchTuple</a>.</p>
   */
  Updates: RegexMatchSetUpdate[] | undefined;
}

export namespace UpdateRegexMatchSetRequest {
  export const filterSensitiveLog = (obj: UpdateRegexMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegexMatchSetRequest =>
    __isa(o, "UpdateRegexMatchSetRequest");
}

export interface UpdateRegexMatchSetResponse {
  __type?: "UpdateRegexMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateRegexMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateRegexMatchSetResponse {
  export const filterSensitiveLog = (
    obj: UpdateRegexMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegexMatchSetResponse =>
    __isa(o, "UpdateRegexMatchSetResponse");
}

export interface UpdateRegexPatternSetRequest {
  __type?: "UpdateRegexPatternSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to update. <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by
   * 			<a>ListRegexPatternSets</a>.</p>
   */
  RegexPatternSetId: string | undefined;

  /**
   * <p>An array of <code>RegexPatternSetUpdate</code> objects that you want to insert into or delete from a <a>RegexPatternSet</a>.</p>
   */
  Updates: RegexPatternSetUpdate[] | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateRegexPatternSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
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
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to update. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by
   *          <a>ListRuleGroups</a>.</p>
   */
  RuleGroupId: string | undefined;

  /**
   * <p>An array of <code>RuleGroupUpdate</code> objects that you want to insert into or delete from a
   *          <a>RuleGroup</a>.</p>
   * 		       <p>You can only insert <code>REGULAR</code> rules into a rule group.</p>
   * 		       <p>
   *             <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case you do not use <code>ActivatedRule|Action</code>.  For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>.</p>
   */
  Updates: RuleGroupUpdate[] | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateRuleGroup</code> request. You can also use this value
   *          to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateRuleGroupResponse {
  export const filterSensitiveLog = (obj: UpdateRuleGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRuleGroupResponse =>
    __isa(o, "UpdateRuleGroupResponse");
}

export interface UpdateRuleRequest {
  __type?: "UpdateRuleRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>RuleId</code> of the <code>Rule</code> that you want to update. <code>RuleId</code> is returned by
   * 			<code>CreateRule</code> and by <a>ListRules</a>.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>An array of <code>RuleUpdate</code> objects that you want to insert into or delete from a
   * 			<a>Rule</a>. For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>RuleUpdate</a>: Contains <code>Action</code> and <code>Predicate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>Predicate</a>: Contains <code>DataId</code>, <code>Negated</code>, and <code>Type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates: RuleUpdate[] | undefined;
}

export namespace UpdateRuleRequest {
  export const filterSensitiveLog = (obj: UpdateRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRuleRequest =>
    __isa(o, "UpdateRuleRequest");
}

export interface UpdateRuleResponse {
  __type?: "UpdateRuleResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateRule</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateRuleResponse {
  export const filterSensitiveLog = (obj: UpdateRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRuleResponse =>
    __isa(o, "UpdateRuleResponse");
}

export interface UpdateSizeConstraintSetRequest {
  __type?: "UpdateSizeConstraintSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to update. <code>SizeConstraintSetId</code>
   * 			is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>
   */
  SizeConstraintSetId: string | undefined;

  /**
   * <p>An array of <code>SizeConstraintSetUpdate</code> objects that you want to insert into or delete from a <a>SizeConstraintSet</a>.
   * 			For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>SizeConstraintSetUpdate</a>: Contains <code>Action</code> and <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SizeConstraint</a>: Contains <code>FieldToMatch</code>, <code>TextTransformation</code>, <code>ComparisonOperator</code>,
   * 				and <code>Size</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates: SizeConstraintSetUpdate[] | undefined;
}

export namespace UpdateSizeConstraintSetRequest {
  export const filterSensitiveLog = (
    obj: UpdateSizeConstraintSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSizeConstraintSetRequest =>
    __isa(o, "UpdateSizeConstraintSetRequest");
}

export interface UpdateSizeConstraintSetResponse {
  __type?: "UpdateSizeConstraintSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateSizeConstraintSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateSizeConstraintSetResponse {
  export const filterSensitiveLog = (
    obj: UpdateSizeConstraintSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSizeConstraintSetResponse =>
    __isa(o, "UpdateSizeConstraintSetResponse");
}

/**
 * <p>A request to update a <a>SqlInjectionMatchSet</a>.</p>
 */
export interface UpdateSqlInjectionMatchSetRequest {
  __type?: "UpdateSqlInjectionMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>The <code>SqlInjectionMatchSetId</code> of the <code>SqlInjectionMatchSet</code> that you want to update.
   * 			<code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * <p>An array of <code>SqlInjectionMatchSetUpdate</code> objects that you want to insert into or delete from a
   * 			<a>SqlInjectionMatchSet</a>. For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>SqlInjectionMatchSetUpdate</a>: Contains <code>Action</code> and <code>SqlInjectionMatchTuple</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SqlInjectionMatchTuple</a>: Contains <code>FieldToMatch</code> and <code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates: SqlInjectionMatchSetUpdate[] | undefined;
}

export namespace UpdateSqlInjectionMatchSetRequest {
  export const filterSensitiveLog = (
    obj: UpdateSqlInjectionMatchSetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSqlInjectionMatchSetRequest =>
    __isa(o, "UpdateSqlInjectionMatchSetRequest");
}

/**
 * <p>The response to an <a>UpdateSqlInjectionMatchSets</a> request.</p>
 */
export interface UpdateSqlInjectionMatchSetResponse {
  __type?: "UpdateSqlInjectionMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateSqlInjectionMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateSqlInjectionMatchSetResponse {
  export const filterSensitiveLog = (
    obj: UpdateSqlInjectionMatchSetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSqlInjectionMatchSetResponse =>
    __isa(o, "UpdateSqlInjectionMatchSetResponse");
}

export interface UpdateWebACLRequest {
  __type?: "UpdateWebACLRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>A default action for the web ACL, either ALLOW or BLOCK. AWS WAF performs the default
   *          action if a request doesn't match the criteria in any of the rules in a web ACL.</p>
   */
  DefaultAction?: WafAction;

  /**
   * <p>An array of updates to make to the <a>WebACL</a>.</p>
   * 		       <p>An array of <code>WebACLUpdate</code> objects that you want to insert into or delete from a
   * 			<a>WebACL</a>. For more information, see the applicable data types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>WebACLUpdate</a>: Contains <code>Action</code> and <code>ActivatedRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ActivatedRule</a>: Contains <code>Action</code>,
   *                   <code>OverrideAction</code>, <code>Priority</code>, <code>RuleId</code>, and
   *                   <code>Type</code>. <code>ActivatedRule|OverrideAction</code> applies only when
   *                updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this
   *                case,
   *                you do not use <code>ActivatedRule|Action</code>. For all other update requests,
   *                   <code>ActivatedRule|Action</code> is used instead of
   *                   <code>ActivatedRule|OverrideAction</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>WafAction</a>: Contains <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates?: WebACLUpdate[];

  /**
   * <p>The <code>WebACLId</code> of the <a>WebACL</a> that you want to update. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by
   * 			<a>ListWebACLs</a>.</p>
   */
  WebACLId: string | undefined;
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
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateWebACL</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateWebACLResponse {
  export const filterSensitiveLog = (obj: UpdateWebACLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWebACLResponse =>
    __isa(o, "UpdateWebACLResponse");
}

/**
 * <p>A request to update an <a>XssMatchSet</a>.</p>
 */
export interface UpdateXssMatchSetRequest {
  __type?: "UpdateXssMatchSetRequest";
  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string | undefined;

  /**
   * <p>An array of <code>XssMatchSetUpdate</code> objects that you want to insert into or
   *          delete from an
   *          <a>XssMatchSet</a>. For more information, see the applicable data
   *          types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a>XssMatchSetUpdate</a>: Contains <code>Action</code> and <code>XssMatchTuple</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>XssMatchTuple</a>: Contains <code>FieldToMatch</code> and <code>TextTransformation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Updates: XssMatchSetUpdate[] | undefined;

  /**
   * <p>The <code>XssMatchSetId</code> of the <code>XssMatchSet</code> that you want to update.
   * 			<code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string | undefined;
}

export namespace UpdateXssMatchSetRequest {
  export const filterSensitiveLog = (obj: UpdateXssMatchSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateXssMatchSetRequest =>
    __isa(o, "UpdateXssMatchSetRequest");
}

/**
 * <p>The response to an <a>UpdateXssMatchSets</a> request.</p>
 */
export interface UpdateXssMatchSetResponse {
  __type?: "UpdateXssMatchSetResponse";
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>UpdateXssMatchSet</code> request. You can also use this value
   * 			to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;
}

export namespace UpdateXssMatchSetResponse {
  export const filterSensitiveLog = (obj: UpdateXssMatchSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateXssMatchSetResponse =>
    __isa(o, "UpdateXssMatchSetResponse");
}

/**
 * <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a
 * 			web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want
 * 			AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p>
 */
export interface WafAction {
  __type?: "WafAction";
  /**
   * <p>Specifies how you want AWS WAF to respond to requests that match the settings in a <code>Rule</code>. Valid settings include the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code>: AWS WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code>: AWS WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code>: AWS WAF increments a counter of the requests that match all of the conditions in the rule.
   * 				AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify <code>COUNT</code>
   * 				for the default action for a <code>WebACL</code>.</p>
   *             </li>
   *          </ul>
   */
  Type: WafActionType | string | undefined;
}

export namespace WafAction {
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is WafAction => __isa(o, "WafAction");
}

export enum WafActionType {
  ALLOW = "ALLOW",
  BLOCK = "BLOCK",
  COUNT = "COUNT"
}

export interface WAFBadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFBadRequestException";
  $fault: "client";
  message?: string;
}

export namespace WAFBadRequestException {
  export const filterSensitiveLog = (obj: WAFBadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFBadRequestException =>
    __isa(o, "WAFBadRequestException");
}

/**
 * <p>The name specified is invalid.</p>
 */
export interface WAFDisallowedNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFDisallowedNameException";
  $fault: "client";
  message?: string;
}

export namespace WAFDisallowedNameException {
  export const filterSensitiveLog = (obj: WAFDisallowedNameException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFDisallowedNameException =>
    __isa(o, "WAFDisallowedNameException");
}

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 */
export interface WAFInternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInternalErrorException";
  $fault: "server";
  message?: string;
}

export namespace WAFInternalErrorException {
  export const filterSensitiveLog = (obj: WAFInternalErrorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInternalErrorException =>
    __isa(o, "WAFInternalErrorException");
}

/**
 * <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 */
export interface WAFInvalidAccountException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidAccountException";
  $fault: "client";
}

export namespace WAFInvalidAccountException {
  export const filterSensitiveLog = (obj: WAFInvalidAccountException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidAccountException =>
    __isa(o, "WAFInvalidAccountException");
}

/**
 * <p>The operation failed because there was nothing to do. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 * 					isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the
 * 					specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 *                already exists in the specified <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 */
export interface WAFInvalidOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace WAFInvalidOperationException {
  export const filterSensitiveLog = (
    obj: WAFInvalidOperationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidOperationException =>
    __isa(o, "WAFInvalidOperationException");
}

/**
 * <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 */
export interface WAFInvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidParameterException";
  $fault: "client";
  field?: ParameterExceptionField | string;
  parameter?: string;
  reason?: ParameterExceptionReason | string;
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
 * <p>The operation failed because the specified policy is not in the proper format. </p>
 *          <p>The policy is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p>
 *             </li>
 *             <li>
 *
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p>
 *             </li>
 *             <li>
 *                <p>The policy cannot include a <code>Resource</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the RuleGroup.</p>
 *             </li>
 *             <li>
 *                <p>Your policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *          </ul>
 */
export interface WAFInvalidPermissionPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidPermissionPolicyException";
  $fault: "client";
  message?: string;
}

export namespace WAFInvalidPermissionPolicyException {
  export const filterSensitiveLog = (
    obj: WAFInvalidPermissionPolicyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidPermissionPolicyException =>
    __isa(o, "WAFInvalidPermissionPolicyException");
}

/**
 * <p>The regular expression (regex) you specified in <code>RegexPatternString</code> is invalid.</p>
 */
export interface WAFInvalidRegexPatternException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFInvalidRegexPatternException";
  $fault: "client";
  message?: string;
}

export namespace WAFInvalidRegexPatternException {
  export const filterSensitiveLog = (
    obj: WAFInvalidRegexPatternException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFInvalidRegexPatternException =>
    __isa(o, "WAFInvalidRegexPatternException");
}

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create
 * 			for an AWS account. For more information, see
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface WAFLimitsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFLimitsExceededException";
  $fault: "client";
  message?: string;
}

export namespace WAFLimitsExceededException {
  export const filterSensitiveLog = (obj: WAFLimitsExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFLimitsExceededException =>
    __isa(o, "WAFLimitsExceededException");
}

/**
 * <p>The operation failed because you tried to delete an object that isn't empty. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects
 * 				or other predicates.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p>
 *             </li>
 *          </ul>
 */
export interface WAFNonEmptyEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFNonEmptyEntityException";
  $fault: "client";
  message?: string;
}

export namespace WAFNonEmptyEntityException {
  export const filterSensitiveLog = (obj: WAFNonEmptyEntityException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFNonEmptyEntityException =>
    __isa(o, "WAFNonEmptyEntityException");
}

/**
 * <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>
 * 				that doesn't exist.</p>
 *             </li>
 *          </ul>
 */
export interface WAFNonexistentContainerException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFNonexistentContainerException";
  $fault: "client";
  message?: string;
}

export namespace WAFNonexistentContainerException {
  export const filterSensitiveLog = (
    obj: WAFNonexistentContainerException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFNonexistentContainerException =>
    __isa(o, "WAFNonexistentContainerException");
}

/**
 * <p>The operation failed because the referenced object doesn't exist.</p>
 */
export interface WAFNonexistentItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFNonexistentItemException";
  $fault: "client";
  message?: string;
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
 * <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>
 */
export interface WafOverrideAction {
  __type?: "WafOverrideAction";
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a <code>RuleGroup</code> . If set to <code>NONE</code>, the rule's action will take place.</p>
   */
  Type: WafOverrideActionType | string | undefined;
}

export namespace WafOverrideAction {
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is WafOverrideAction =>
    __isa(o, "WafOverrideAction");
}

export enum WafOverrideActionType {
  COUNT = "COUNT",
  NONE = "NONE"
}

/**
 * <p>The operation failed because you tried to delete an object that is still in use. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 */
export interface WAFReferencedItemException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFReferencedItemException";
  $fault: "client";
  message?: string;
}

export namespace WAFReferencedItemException {
  export const filterSensitiveLog = (obj: WAFReferencedItemException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFReferencedItemException =>
    __isa(o, "WAFReferencedItemException");
}

export enum WafRuleType {
  GROUP = "GROUP",
  RATE_BASED = "RATE_BASED",
  REGULAR = "REGULAR"
}

/**
 * <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
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
 * <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 */
export interface WAFStaleDataException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFStaleDataException";
  $fault: "client";
  message?: string;
}

export namespace WAFStaleDataException {
  export const filterSensitiveLog = (obj: WAFStaleDataException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFStaleDataException =>
    __isa(o, "WAFStaleDataException");
}

/**
 * <p>The specified subscription does not exist.</p>
 */
export interface WAFSubscriptionNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFSubscriptionNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace WAFSubscriptionNotFoundException {
  export const filterSensitiveLog = (
    obj: WAFSubscriptionNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFSubscriptionNotFoundException =>
    __isa(o, "WAFSubscriptionNotFoundException");
}

export interface WAFTagOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFTagOperationException";
  $fault: "client";
  message?: string;
}

export namespace WAFTagOperationException {
  export const filterSensitiveLog = (obj: WAFTagOperationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is WAFTagOperationException =>
    __isa(o, "WAFTagOperationException");
}

export interface WAFTagOperationInternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFTagOperationInternalErrorException";
  $fault: "server";
  message?: string;
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
 * <p>The operation failed because the entity
 *       referenced is temporarily unavailable. Retry your request.</p>
 */
export interface WAFUnavailableEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "WAFUnavailableEntityException";
  $fault: "client";
  message?: string;
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
 * <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a
 * 			default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a
 * 			<code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers.
 * 			You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter.
 * 			If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications
 * 			to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p>
 */
export interface WebACL {
  __type?: "WebACL";
  /**
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. The action is specified by the
   * 			<a>WafAction</a> object.</p>
   */
  DefaultAction: WafAction | undefined;

  /**
   * <p>A friendly name or description for the metrics for this <code>WebACL</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain
   *          whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change <code>MetricName</code> after you create the <code>WebACL</code>.</p>
   */
  MetricName?: string;

  /**
   * <p>A friendly name or description of the <code>WebACL</code>. You can't change the name of a <code>WebACL</code> after you create it.</p>
   */
  Name?: string;

  /**
   * <p>An array that contains the action for each <code>Rule</code> in a <code>WebACL</code>, the priority of the <code>Rule</code>,
   * 			and the ID of the <code>Rule</code>.</p>
   */
  Rules: ActivatedRule[] | undefined;

  /**
   * <p>Tha Amazon Resource Name (ARN) of the web ACL.</p>
   */
  WebACLArn?: string;

  /**
   * <p>A unique identifier for a <code>WebACL</code>. You use <code>WebACLId</code> to get information about a <code>WebACL</code>
   * 			(see <a>GetWebACL</a>), update a <code>WebACL</code> (see <a>UpdateWebACL</a>), and delete a <code>WebACL</code> from AWS WAF
   * 			(see <a>DeleteWebACL</a>).</p>
   * 		       <p>
   *             <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>
   */
  WebACLId: string | undefined;
}

export namespace WebACL {
  export const filterSensitiveLog = (obj: WebACL): any => ({
    ...obj
  });
  export const isa = (o: any): o is WebACL => __isa(o, "WebACL");
}

/**
 * <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p>
 */
export interface WebACLSummary {
  __type?: "WebACLSummary";
  /**
   * <p>A friendly name or description of the <a>WebACL</a>. You can't change the name of a <code>WebACL</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a <code>WebACL</code>. You use <code>WebACLId</code> to get information about a <code>WebACL</code>
   * 			(see <a>GetWebACL</a>), update a <code>WebACL</code> (see <a>UpdateWebACL</a>), and delete a <code>WebACL</code> from AWS WAF
   * 			(see <a>DeleteWebACL</a>).</p>
   * 		       <p>
   *             <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>
   */
  WebACLId: string | undefined;
}

export namespace WebACLSummary {
  export const filterSensitiveLog = (obj: WebACLSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is WebACLSummary => __isa(o, "WebACLSummary");
}

/**
 * <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>
 */
export interface WebACLUpdate {
  __type?: "WebACLUpdate";
  /**
   * <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete,
   *          the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code>
   *          (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p>
   */
  ActivatedRule: ActivatedRule | undefined;
}

export namespace WebACLUpdate {
  export const filterSensitiveLog = (obj: WebACLUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is WebACLUpdate => __isa(o, "WebACLUpdate");
}

/**
 * <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you
 * 			want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a
 * 			<code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to
 * 			include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>
 */
export interface XssMatchSet {
  __type?: "XssMatchSet";
  /**
   * <p>The name, if any, of the <code>XssMatchSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about an
   * 			<code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code>
   * 			(see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF
   * 			(see <a>DeleteXssMatchSet</a>).</p>
   * 		       <p>
   *             <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string | undefined;

  /**
   * <p>Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.</p>
   */
  XssMatchTuples: XssMatchTuple[] | undefined;
}

export namespace XssMatchSet {
  export const filterSensitiveLog = (obj: XssMatchSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is XssMatchSet => __isa(o, "XssMatchSet");
}

/**
 * <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>
 */
export interface XssMatchSetSummary {
  __type?: "XssMatchSetSummary";
  /**
   * <p>The name of the <code>XssMatchSet</code>, if any, specified by <code>Id</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about a
   * 			<code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code>
   * 			(see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or
   * 			delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF
   * 			(see <a>DeleteXssMatchSet</a>).</p>
   * 		       <p>
   *             <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string | undefined;
}

export namespace XssMatchSetSummary {
  export const filterSensitiveLog = (obj: XssMatchSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is XssMatchSetSummary =>
    __isa(o, "XssMatchSetSummary");
}

/**
 * <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to
 * 			add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>
 */
export interface XssMatchSetUpdate {
  __type?: "XssMatchSetUpdate";
  /**
   * <p>Specify <code>INSERT</code> to add an
   *          <a>XssMatchSetUpdate</a> to an <a>XssMatchSet</a>. Use
   *             <code>DELETE</code> to remove an
   *          <code>XssMatchSetUpdate</code> from an <code>XssMatchSet</code>.</p>
   */
  Action: ChangeAction | string | undefined;

  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  XssMatchTuple: XssMatchTuple | undefined;
}

export namespace XssMatchSetUpdate {
  export const filterSensitiveLog = (obj: XssMatchSetUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is XssMatchSetUpdate =>
    __isa(o, "XssMatchSetUpdate");
}

/**
 * <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
 */
export interface XssMatchTuple {
  __type?: "XssMatchTuple";
  /**
   * <p>Specifies where in a web request to look for cross-site scripting attacks.</p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
   * 			If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting a request for a match.</p>
   *          <p>You can only specify a single type of TextTransformation.</p>
   * 		       <p>
   *             <b>CMD_LINE</b>
   *          </p>
   * 		       <p>When you're concerned that attackers are injecting an operating system command line
   *          command and using unusual formatting to disguise some or all of the command, use this
   *          option to perform the following transformations:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <b>COMPRESS_WHITE_SPACE</b>
   *          </p>
   * 		       <p>Use this option to replace the following characters with a space character (decimal 32):</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p>
   * 		       <p>
   *             <b>HTML_ENTITY_DECODE</b>
   *          </p>
   * 		       <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs
   * 			the following operations:</p>
   * 		       <ul>
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
   *                <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *             <li>
   *                <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding
   * 				characters</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <b>LOWERCASE</b>
   *          </p>
   * 		       <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p>
   * 		       <p>
   *             <b>URL_DECODE</b>
   *          </p>
   * 		       <p>Use this option to decode a URL-encoded value.</p>
   * 		       <p>
   *             <b>NONE</b>
   *          </p>
   * 		       <p>Specify <code>NONE</code> if you don't want to perform any text transformations.</p>
   */
  TextTransformation: TextTransformation | string | undefined;
}

export namespace XssMatchTuple {
  export const filterSensitiveLog = (obj: XssMatchTuple): any => ({
    ...obj
  });
  export const isa = (o: any): o is XssMatchTuple => __isa(o, "XssMatchTuple");
}
