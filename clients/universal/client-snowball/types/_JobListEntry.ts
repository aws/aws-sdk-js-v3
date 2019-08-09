/**
 * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.</p>
 */
export interface _JobListEntry {
  /**
   * <p>The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * <p>The current state of this job.</p>
   */
  JobState?:
    | "New"
    | "PreparingAppliance"
    | "PreparingShipment"
    | "InTransitToCustomer"
    | "WithCustomer"
    | "InTransitToAWS"
    | "WithAWSSortingFacility"
    | "WithAWS"
    | "InProgress"
    | "Complete"
    | "Cancelled"
    | "Listing"
    | "Pending"
    | string;

  /**
   * <p>A value that indicates that this job is a master job. A master job represents a successful request to create an export job. Master jobs aren't associated with any Snowballs. Instead, each master job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular master job are listed, because they are created after the master job is created.</p>
   */
  IsMaster?: boolean;

  /**
   * <p>The type of job.</p>
   */
  JobType?: "IMPORT" | "EXPORT" | "LOCAL_USE" | string;

  /**
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: "STANDARD" | "EDGE" | "EDGE_C" | "EDGE_CG" | string;

  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The optional description of this specific job, for example <code>Important Photos 2016-08-11</code>.</p>
   */
  Description?: string;
}

export interface _UnmarshalledJobListEntry extends _JobListEntry {
  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;
}
