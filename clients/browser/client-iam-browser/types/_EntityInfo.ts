/**
 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
 */
export interface _EntityInfo {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn: string;

  /**
   * <p>The name of the entity (user or role).</p>
   */
  Name: string;

  /**
   * <p>The type of entity (user or role).</p>
   */
  Type: "USER" | "ROLE" | "GROUP" | string;

  /**
   * <p>The identifier of the entity (user or role).</p>
   */
  Id: string;

  /**
   * <p>The path to the entity (user or role). For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Path?: string;
}

export type _UnmarshalledEntityInfo = _EntityInfo;
