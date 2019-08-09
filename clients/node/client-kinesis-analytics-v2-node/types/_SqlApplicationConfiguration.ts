import { _Input, _UnmarshalledInput } from "./_Input";
import { _Output, _UnmarshalledOutput } from "./_Output";
import {
  _ReferenceDataSource,
  _UnmarshalledReferenceDataSource
} from "./_ReferenceDataSource";

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface _SqlApplicationConfiguration {
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the application.</p>
   */
  Inputs?: Array<_Input> | Iterable<_Input>;

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by the application.</p>
   */
  Outputs?: Array<_Output> | Iterable<_Output>;

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data sources used by the application.</p>
   */
  ReferenceDataSources?:
    | Array<_ReferenceDataSource>
    | Iterable<_ReferenceDataSource>;
}

export interface _UnmarshalledSqlApplicationConfiguration
  extends _SqlApplicationConfiguration {
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the application.</p>
   */
  Inputs?: Array<_UnmarshalledInput>;

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by the application.</p>
   */
  Outputs?: Array<_UnmarshalledOutput>;

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data sources used by the application.</p>
   */
  ReferenceDataSources?: Array<_UnmarshalledReferenceDataSource>;
}
