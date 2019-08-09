import { _TrainingJob, _UnmarshalledTrainingJob } from "./_TrainingJob";

/**
 * <p>An individual search result record that contains a single resource object.</p>
 */
export interface _SearchRecord {
  /**
   * <p>A <code>TrainingJob</code> object that is returned as part of a <code>Search</code> request.</p>
   */
  TrainingJob?: _TrainingJob;
}

export interface _UnmarshalledSearchRecord extends _SearchRecord {
  /**
   * <p>A <code>TrainingJob</code> object that is returned as part of a <code>Search</code> request.</p>
   */
  TrainingJob?: _UnmarshalledTrainingJob;
}
