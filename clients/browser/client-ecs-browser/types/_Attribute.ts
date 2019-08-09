/**
 * <p>An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface _Attribute {
  /**
   * <p>The name of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, and periods are allowed.</p>
   */
  name: string;

  /**
   * <p>The value of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, periods, at signs (@), forward slashes, colons, and spaces are allowed.</p>
   */
  value?: string;

  /**
   * <p>The type of the target with which to attach the attribute. This parameter is required if you use the short form ID for a resource instead of the full ARN.</p>
   */
  targetType?: "container-instance" | string;

  /**
   * <p>The ID of the target. You can specify the short form ID for a resource or the full Amazon Resource Name (ARN).</p>
   */
  targetId?: string;
}

export type _UnmarshalledAttribute = _Attribute;
