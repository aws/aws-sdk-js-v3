import {
  _InputWhitelistRule,
  _UnmarshalledInputWhitelistRule
} from "./_InputWhitelistRule";

/**
 * An Input Security Group
 */
export interface _InputSecurityGroup {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: Array<string> | Iterable<string>;

  /**
   * The current state of the Input Security Group.
   */
  State?: "IDLE" | "IN_USE" | "UPDATING" | "DELETED" | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: Array<_InputWhitelistRule> | Iterable<_InputWhitelistRule>;
}

export interface _UnmarshalledInputSecurityGroup extends _InputSecurityGroup {
  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: Array<string>;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: Array<_UnmarshalledInputWhitelistRule>;
}
