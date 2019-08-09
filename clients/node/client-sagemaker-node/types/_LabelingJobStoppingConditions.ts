/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p>
 */
export interface _LabelingJobStoppingConditions {
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export type _UnmarshalledLabelingJobStoppingConditions = _LabelingJobStoppingConditions;
