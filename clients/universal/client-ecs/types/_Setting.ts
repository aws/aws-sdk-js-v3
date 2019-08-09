/**
 * <p>The current account setting for a resource.</p>
 */
export interface _Setting {
  /**
   * <p>The Amazon ECS resource name.</p>
   */
  name?:
    | "serviceLongArnFormat"
    | "taskLongArnFormat"
    | "containerInstanceLongArnFormat"
    | "awsvpcTrunking"
    | "containerInsights"
    | string;

  /**
   * <p>Whether the account setting is enabled or disabled for the specified resource.</p>
   */
  value?: string;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If this field is omitted, the authenticated user is assumed.</p>
   */
  principalArn?: string;
}

export type _UnmarshalledSetting = _Setting;
