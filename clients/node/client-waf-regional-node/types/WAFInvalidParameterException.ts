import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
 */
export interface WAFInvalidParameterException
  extends __ServiceException__<_WAFInvalidParameterExceptionDetails> {
  name: "WAFInvalidParameterException";
}

export interface _WAFInvalidParameterExceptionDetails {
  /**
   * _ParameterExceptionField shape
   */
  field?:
    | "CHANGE_ACTION"
    | "WAF_ACTION"
    | "WAF_OVERRIDE_ACTION"
    | "PREDICATE_TYPE"
    | "IPSET_TYPE"
    | "BYTE_MATCH_FIELD_TYPE"
    | "SQL_INJECTION_MATCH_FIELD_TYPE"
    | "BYTE_MATCH_TEXT_TRANSFORMATION"
    | "BYTE_MATCH_POSITIONAL_CONSTRAINT"
    | "SIZE_CONSTRAINT_COMPARISON_OPERATOR"
    | "GEO_MATCH_LOCATION_TYPE"
    | "GEO_MATCH_LOCATION_VALUE"
    | "RATE_KEY"
    | "RULE_TYPE"
    | "NEXT_MARKER"
    | "RESOURCE_ARN"
    | "TAGS"
    | "TAG_KEYS"
    | string;

  /**
   * _ParameterExceptionParameter shape
   */
  parameter?: string;

  /**
   * _ParameterExceptionReason shape
   */
  reason?:
    | "INVALID_OPTION"
    | "ILLEGAL_COMBINATION"
    | "ILLEGAL_ARGUMENT"
    | "INVALID_TAG_KEY"
    | string;
}
