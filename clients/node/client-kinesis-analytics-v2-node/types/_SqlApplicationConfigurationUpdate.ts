import { _InputUpdate, _UnmarshalledInputUpdate } from "./_InputUpdate";
import { _OutputUpdate, _UnmarshalledOutputUpdate } from "./_OutputUpdate";
import {
  _ReferenceDataSourceUpdate,
  _UnmarshalledReferenceDataSourceUpdate
} from "./_ReferenceDataSourceUpdate";

/**
 * <p>Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface _SqlApplicationConfigurationUpdate {
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used by the application.</p>
   */
  InputUpdates?: Array<_InputUpdate> | Iterable<_InputUpdate>;

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams used by the application.</p>
   */
  OutputUpdates?: Array<_OutputUpdate> | Iterable<_OutputUpdate>;

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?:
    | Array<_ReferenceDataSourceUpdate>
    | Iterable<_ReferenceDataSourceUpdate>;
}

export interface _UnmarshalledSqlApplicationConfigurationUpdate
  extends _SqlApplicationConfigurationUpdate {
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used by the application.</p>
   */
  InputUpdates?: Array<_UnmarshalledInputUpdate>;

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams used by the application.</p>
   */
  OutputUpdates?: Array<_UnmarshalledOutputUpdate>;

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?: Array<_UnmarshalledReferenceDataSourceUpdate>;
}
