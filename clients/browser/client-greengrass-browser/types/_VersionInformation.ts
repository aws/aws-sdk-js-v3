/**
 * Information about a version.
 */
export interface _VersionInformation {
  /**
   * The ARN of the version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the version was created.
   */
  CreationTimestamp?: string;

  /**
   * The ID of the version.
   */
  Id?: string;

  /**
   * The unique ID of the version.
   */
  Version?: string;
}

export type _UnmarshalledVersionInformation = _VersionInformation;
