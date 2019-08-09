import { _HTTPRequest, _UnmarshalledHTTPRequest } from "./_HTTPRequest";

/**
 * <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>
 */
export interface _SampledHTTPRequest {
  /**
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: _HTTPRequest;

  /**
   * <p>A value that indicates how one result in the response relates proportionally to other results in the response. A result that has a weight of <code>2</code> represents roughly twice as many CloudFront web requests as a result that has a weight of <code>1</code>.</p>
   */
  Weight: number;

  /**
   * <p>The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The action for the <code>Rule</code> that the request matched: <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
   */
  Action?: string;

  /**
   * <p>This value is returned if the <code>GetSampledRequests</code> request specifies the ID of a <code>RuleGroup</code> rather than the ID of an individual rule. <code>RuleWithinRuleGroup</code> is the rule within the specified <code>RuleGroup</code> that matched the request listed in the response.</p>
   */
  RuleWithinRuleGroup?: string;
}

export interface _UnmarshalledSampledHTTPRequest extends _SampledHTTPRequest {
  /**
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: _UnmarshalledHTTPRequest;

  /**
   * <p>The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).</p>
   */
  Timestamp?: Date;
}
