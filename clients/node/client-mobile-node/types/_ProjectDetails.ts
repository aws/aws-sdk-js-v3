import { _Resource, _UnmarshalledResource } from "./_Resource";

/**
 * <p> Detailed information about an AWS Mobile Hub project. </p>
 */
export interface _ProjectDetails {
  /**
   * <p> Name of the project. </p>
   */
  name?: string;

  /**
   * <p> Unique project identifier. </p>
   */
  projectId?: string;

  /**
   * <p> Default region to use for AWS resource creation in the AWS Mobile Hub project. </p>
   */
  region?: string;

  /**
   * <p> Synchronization state for a project. </p>
   */
  state?: "NORMAL" | "SYNCING" | "IMPORTING" | string;

  /**
   * <p> Date the project was created. </p>
   */
  createdDate?: Date | string | number;

  /**
   * <p> Date of the last modification of the project. </p>
   */
  lastUpdatedDate?: Date | string | number;

  /**
   * <p> Website URL for this project in the AWS Mobile Hub console. </p>
   */
  consoleUrl?: string;

  /**
   * <p> List of AWS resources associated with a project. </p>
   */
  resources?: Array<_Resource> | Iterable<_Resource>;
}

export interface _UnmarshalledProjectDetails extends _ProjectDetails {
  /**
   * <p> Date the project was created. </p>
   */
  createdDate?: Date;

  /**
   * <p> Date of the last modification of the project. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p> List of AWS resources associated with a project. </p>
   */
  resources?: Array<_UnmarshalledResource>;
}
