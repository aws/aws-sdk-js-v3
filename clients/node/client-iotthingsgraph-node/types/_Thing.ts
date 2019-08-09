/**
 * <p>An AWS IoT thing.</p>
 */
export interface _Thing {
  /**
   * <p>The ARN of the thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;
}

export type _UnmarshalledThing = _Thing;
