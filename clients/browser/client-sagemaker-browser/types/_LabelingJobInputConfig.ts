import {
  _LabelingJobDataSource,
  _UnmarshalledLabelingJobDataSource
} from "./_LabelingJobDataSource";
import {
  _LabelingJobDataAttributes,
  _UnmarshalledLabelingJobDataAttributes
} from "./_LabelingJobDataAttributes";

/**
 * <p>Input configuration information for a labeling job.</p>
 */
export interface _LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: _LabelingJobDataSource;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: _LabelingJobDataAttributes;
}

export interface _UnmarshalledLabelingJobInputConfig
  extends _LabelingJobInputConfig {
  /**
   * <p>The location of the input data.</p>
   */
  DataSource: _UnmarshalledLabelingJobDataSource;

  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: _UnmarshalledLabelingJobDataAttributes;
}
