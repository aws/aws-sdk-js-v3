/**
 * <p>A custom AMI available to platforms.</p>
 */
export interface _CustomAmi {
  /**
   * <p>The type of virtualization used to create the custom AMI.</p>
   */
  VirtualizationType?: string;

  /**
   * <p>THe ID of the image used to create the custom AMI.</p>
   */
  ImageId?: string;
}

export type _UnmarshalledCustomAmi = _CustomAmi;
