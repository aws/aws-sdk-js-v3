/**
 * <p>Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.</p>
 */
export interface _Tag {
  /**
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters in length.</p>
   */
  key: string;

  /**
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length.</p>
   */
  value: string;
}

export type _UnmarshalledTag = _Tag;
