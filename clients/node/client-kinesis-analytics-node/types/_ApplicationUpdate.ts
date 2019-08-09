import { _InputUpdate, _UnmarshalledInputUpdate } from "./_InputUpdate";
import { _OutputUpdate, _UnmarshalledOutputUpdate } from "./_OutputUpdate";
import {
  _ReferenceDataSourceUpdate,
  _UnmarshalledReferenceDataSourceUpdate
} from "./_ReferenceDataSourceUpdate";
import {
  _CloudWatchLoggingOptionUpdate,
  _UnmarshalledCloudWatchLoggingOptionUpdate
} from "./_CloudWatchLoggingOptionUpdate";

/**
 * <p>Describes updates to apply to an existing Amazon Kinesis Analytics application.</p>
 */
export interface _ApplicationUpdate {
  /**
   * <p>Describes application input configuration updates.</p>
   */
  InputUpdates?: Array<_InputUpdate> | Iterable<_InputUpdate>;

  /**
   * <p>Describes application code updates.</p>
   */
  ApplicationCodeUpdate?: string;

  /**
   * <p>Describes application output configuration updates.</p>
   */
  OutputUpdates?: Array<_OutputUpdate> | Iterable<_OutputUpdate>;

  /**
   * <p>Describes application reference data source updates.</p>
   */
  ReferenceDataSourceUpdates?:
    | Array<_ReferenceDataSourceUpdate>
    | Iterable<_ReferenceDataSourceUpdate>;

  /**
   * <p>Describes application CloudWatch logging option updates.</p>
   */
  CloudWatchLoggingOptionUpdates?:
    | Array<_CloudWatchLoggingOptionUpdate>
    | Iterable<_CloudWatchLoggingOptionUpdate>;
}

export interface _UnmarshalledApplicationUpdate extends _ApplicationUpdate {
  /**
   * <p>Describes application input configuration updates.</p>
   */
  InputUpdates?: Array<_UnmarshalledInputUpdate>;

  /**
   * <p>Describes application output configuration updates.</p>
   */
  OutputUpdates?: Array<_UnmarshalledOutputUpdate>;

  /**
   * <p>Describes application reference data source updates.</p>
   */
  ReferenceDataSourceUpdates?: Array<_UnmarshalledReferenceDataSourceUpdate>;

  /**
   * <p>Describes application CloudWatch logging option updates.</p>
   */
  CloudWatchLoggingOptionUpdates?: Array<
    _UnmarshalledCloudWatchLoggingOptionUpdate
  >;
}
