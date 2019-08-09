/**
 * <p>Container details related to a finding.</p>
 */
export interface _ContainerDetails {
  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>The date and time when the container started.</p>
   */
  LaunchedAt?: string;
}

export type _UnmarshalledContainerDetails = _ContainerDetails;
