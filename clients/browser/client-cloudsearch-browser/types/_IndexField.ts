import { _IntOptions, _UnmarshalledIntOptions } from "./_IntOptions";
import { _DoubleOptions, _UnmarshalledDoubleOptions } from "./_DoubleOptions";
import {
  _LiteralOptions,
  _UnmarshalledLiteralOptions
} from "./_LiteralOptions";
import { _TextOptions, _UnmarshalledTextOptions } from "./_TextOptions";
import { _DateOptions, _UnmarshalledDateOptions } from "./_DateOptions";
import { _LatLonOptions, _UnmarshalledLatLonOptions } from "./_LatLonOptions";
import {
  _IntArrayOptions,
  _UnmarshalledIntArrayOptions
} from "./_IntArrayOptions";
import {
  _DoubleArrayOptions,
  _UnmarshalledDoubleArrayOptions
} from "./_DoubleArrayOptions";
import {
  _LiteralArrayOptions,
  _UnmarshalledLiteralArrayOptions
} from "./_LiteralArrayOptions";
import {
  _TextArrayOptions,
  _UnmarshalledTextArrayOptions
} from "./_TextArrayOptions";
import {
  _DateArrayOptions,
  _UnmarshalledDateArrayOptions
} from "./_DateArrayOptions";

/**
 * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
 */
export interface _IndexField {
  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
   */
  IndexFieldName: string;

  /**
   * <p>The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  IndexFieldType:
    | "int"
    | "double"
    | "literal"
    | "text"
    | "date"
    | "latlon"
    | "int-array"
    | "double-array"
    | "literal-array"
    | "text-array"
    | "date-array"
    | string;

  /**
   * <p>Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
   */
  IntOptions?: _IntOptions;

  /**
   * <p>Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
   */
  DoubleOptions?: _DoubleOptions;

  /**
   * <p>Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
   */
  LiteralOptions?: _LiteralOptions;

  /**
   * <p>Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
   */
  TextOptions?: _TextOptions;

  /**
   * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
   */
  DateOptions?: _DateOptions;

  /**
   * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
   */
  LatLonOptions?: _LatLonOptions;

  /**
   * <p>Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
   */
  IntArrayOptions?: _IntArrayOptions;

  /**
   * <p>Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.</p>
   */
  DoubleArrayOptions?: _DoubleArrayOptions;

  /**
   * <p>Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
   */
  LiteralArrayOptions?: _LiteralArrayOptions;

  /**
   * <p>Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
   */
  TextArrayOptions?: _TextArrayOptions;

  /**
   * <p>Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
   */
  DateArrayOptions?: _DateArrayOptions;
}

export interface _UnmarshalledIndexField extends _IndexField {
  /**
   * <p>Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
   */
  IntOptions?: _UnmarshalledIntOptions;

  /**
   * <p>Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
   */
  DoubleOptions?: _UnmarshalledDoubleOptions;

  /**
   * <p>Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
   */
  LiteralOptions?: _UnmarshalledLiteralOptions;

  /**
   * <p>Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
   */
  TextOptions?: _UnmarshalledTextOptions;

  /**
   * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
   */
  DateOptions?: _UnmarshalledDateOptions;

  /**
   * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
   */
  LatLonOptions?: _UnmarshalledLatLonOptions;

  /**
   * <p>Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
   */
  IntArrayOptions?: _UnmarshalledIntArrayOptions;

  /**
   * <p>Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.</p>
   */
  DoubleArrayOptions?: _UnmarshalledDoubleArrayOptions;

  /**
   * <p>Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
   */
  LiteralArrayOptions?: _UnmarshalledLiteralArrayOptions;

  /**
   * <p>Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
   */
  TextArrayOptions?: _UnmarshalledTextArrayOptions;

  /**
   * <p>Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
   */
  DateArrayOptions?: _UnmarshalledDateArrayOptions;
}
