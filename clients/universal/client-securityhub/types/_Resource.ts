import {
  _ResourceDetails,
  _UnmarshalledResourceDetails
} from "./_ResourceDetails";

/**
 * <p>A resource related to a finding.</p>
 */
export interface _Resource {
  /**
   * <p>The type of the resource that details are provided for.</p>
   */
  Type: string;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string;

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  Partition?: "aws" | "aws-cn" | "aws-us-gov" | string;

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was processed.</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: _ResourceDetails;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: _UnmarshalledResourceDetails;
}
