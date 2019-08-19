import { _Parameter, _UnmarshalledParameter } from "./_Parameter";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. </p>
 */
export interface _StackSet {
  /**
   * <p>The name that's associated with the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>A description of the stack set that you specify when the stack set is created or updated.</p>
   */
  Description?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: "ACTIVE" | "DELETED" | string;

  /**
   * <p>The structure that contains the body of the template that was used to create or update the stack set.</p>
   */
  TemplateBody?: string;

  /**
   * <p>A list of input parameters for a stack set.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>The capabilities that are allowed in the stack set. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates.</a> </p>
   */
  Capabilities?:
    | Array<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >
    | Iterable<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >;

  /**
   * <p>A list of tags that specify information about the stack set. A maximum number of 50 tags can be specified.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Amazon Resource Number (ARN) of the stack set.</p>
   */
  StackSetARN?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role used to create or update the stack set.</p> <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set. </p> <p>Use customized execution roles to control which stack resources users and groups can include in their stack sets. </p>
   */
  ExecutionRoleName?: string;
}

export interface _UnmarshalledStackSet extends _StackSet {
  /**
   * <p>A list of input parameters for a stack set.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>The capabilities that are allowed in the stack set. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates.</a> </p>
   */
  Capabilities?: Array<
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
    | string
  >;

  /**
   * <p>A list of tags that specify information about the stack set. A maximum number of 50 tags can be specified.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
