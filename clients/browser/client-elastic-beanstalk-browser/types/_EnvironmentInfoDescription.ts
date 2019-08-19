/**
 * <p>The information retrieved from the Amazon EC2 instances.</p>
 */
export interface _EnvironmentInfoDescription {
  /**
   * <p>The type of information retrieved.</p>
   */
  InfoType?: "tail" | "bundle" | string;

  /**
   * <p>The Amazon EC2 Instance ID for this information.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The time stamp when this information was retrieved.</p>
   */
  SampleTimestamp?: Date | string | number;

  /**
   * <p>The retrieved information. Currently contains a presigned Amazon S3 URL. The files are deleted after 15 minutes.</p> <p>Anyone in possession of this URL can access the files before they are deleted. Make the URL available only to trusted parties.</p>
   */
  Message?: string;
}

export interface _UnmarshalledEnvironmentInfoDescription
  extends _EnvironmentInfoDescription {
  /**
   * <p>The time stamp when this information was retrieved.</p>
   */
  SampleTimestamp?: Date;
}
