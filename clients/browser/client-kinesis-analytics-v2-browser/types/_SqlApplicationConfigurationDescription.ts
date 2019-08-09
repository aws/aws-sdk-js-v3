import {
  _InputDescription,
  _UnmarshalledInputDescription
} from "./_InputDescription";
import {
  _OutputDescription,
  _UnmarshalledOutputDescription
} from "./_OutputDescription";
import {
  _ReferenceDataSourceDescription,
  _UnmarshalledReferenceDataSourceDescription
} from "./_ReferenceDataSourceDescription";

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface _SqlApplicationConfigurationDescription {
  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used by the application.</p>
   */
  InputDescriptions?: Array<_InputDescription> | Iterable<_InputDescription>;

  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination streams used by the application.</p>
   */
  OutputDescriptions?: Array<_OutputDescription> | Iterable<_OutputDescription>;

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?:
    | Array<_ReferenceDataSourceDescription>
    | Iterable<_ReferenceDataSourceDescription>;
}

export interface _UnmarshalledSqlApplicationConfigurationDescription
  extends _SqlApplicationConfigurationDescription {
  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used by the application.</p>
   */
  InputDescriptions?: Array<_UnmarshalledInputDescription>;

  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination streams used by the application.</p>
   */
  OutputDescriptions?: Array<_UnmarshalledOutputDescription>;

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?: Array<
    _UnmarshalledReferenceDataSourceDescription
  >;
}
