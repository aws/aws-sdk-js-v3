import {
  _LabelCountersForWorkteam,
  _UnmarshalledLabelCountersForWorkteam
} from "./_LabelCountersForWorkteam";

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface _LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific labeling job.</p>
   */
  JobReferenceCode: string;

  /**
   * <p/>
   */
  WorkRequesterAccountId: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: _LabelCountersForWorkteam;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

export interface _UnmarshalledLabelingJobForWorkteamSummary
  extends _LabelingJobForWorkteamSummary {
  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: _UnmarshalledLabelCountersForWorkteam;
}
