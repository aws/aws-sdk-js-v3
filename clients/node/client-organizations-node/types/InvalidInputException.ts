import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation failed because you provided invalid values for one or more of the request parameters. This exception includes a reason that contains additional information about the violated limit:</p> <note> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> </note> <ul> <li> <p>IMMUTABLE_POLICY: You specified a policy that is managed by AWS and can't be modified.</p> </li> <li> <p>INPUT_REQUIRED: You must include a value for all required parameters.</p> </li> <li> <p>INVALID_ENUM: You specified an invalid value.</p> </li> <li> <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid characters.</p> </li> <li> <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one invalid value.</p> </li> <li> <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code> parameter from the response to a previous call of the operation.</p> </li> <li> <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account, organization, or email) as a party.</p> </li> <li> <p>INVALID_PATTERN: You provided a value that doesn't match the required pattern.</p> </li> <li> <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the required pattern.</p> </li> <li> <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p> </li> <li> <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name (ARN) for the organization.</p> </li> <li> <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p> </li> <li> <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag. You can’t add, edit, or delete system tag keys because they're reserved for AWS use. System tags don’t count against your tags per resource limit.</p> </li> <li> <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the operation.</p> </li> <li> <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than allowed.</p> </li> <li> <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than allowed.</p> </li> <li> <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than allowed.</p> </li> <li> <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than allowed.</p> </li> <li> <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities in the same root.</p> </li> </ul>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;

  /**
   * _InvalidInputExceptionReason shape
   */
  Reason?:
    | "INVALID_PARTY_TYPE_TARGET"
    | "INVALID_SYNTAX_ORGANIZATION_ARN"
    | "INVALID_SYNTAX_POLICY_ID"
    | "INVALID_ENUM"
    | "INVALID_LIST_MEMBER"
    | "MAX_LENGTH_EXCEEDED"
    | "MAX_VALUE_EXCEEDED"
    | "MIN_LENGTH_EXCEEDED"
    | "MIN_VALUE_EXCEEDED"
    | "IMMUTABLE_POLICY"
    | "INVALID_PATTERN"
    | "INVALID_PATTERN_TARGET_ID"
    | "INPUT_REQUIRED"
    | "INVALID_NEXT_TOKEN"
    | "MAX_LIMIT_EXCEEDED_FILTER"
    | "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS"
    | "INVALID_FULL_NAME_TARGET"
    | "UNRECOGNIZED_SERVICE_PRINCIPAL"
    | "INVALID_ROLE_NAME"
    | "INVALID_SYSTEM_TAGS_PARAMETER"
    | string;
}
