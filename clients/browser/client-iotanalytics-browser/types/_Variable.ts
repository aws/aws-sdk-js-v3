import {
  _DatasetContentVersionValue,
  _UnmarshalledDatasetContentVersionValue
} from "./_DatasetContentVersionValue";
import {
  _OutputFileUriValue,
  _UnmarshalledOutputFileUriValue
} from "./_OutputFileUriValue";

/**
 * <p>An instance of a variable to be passed to the "containerAction" execution. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue".</p>
 */
export interface _Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name: string;

  /**
   * <p>The value of the variable as a string.</p>
   */
  stringValue?: string;

  /**
   * <p>The value of the variable as a double (numeric).</p>
   */
  doubleValue?: number;

  /**
   * <p>The value of the variable as a structure that specifies a data set content version.</p>
   */
  datasetContentVersionValue?: _DatasetContentVersionValue;

  /**
   * <p>The value of the variable as a structure that specifies an output file URI.</p>
   */
  outputFileUriValue?: _OutputFileUriValue;
}

export interface _UnmarshalledVariable extends _Variable {
  /**
   * <p>The value of the variable as a structure that specifies a data set content version.</p>
   */
  datasetContentVersionValue?: _UnmarshalledDatasetContentVersionValue;

  /**
   * <p>The value of the variable as a structure that specifies an output file URI.</p>
   */
  outputFileUriValue?: _UnmarshalledOutputFileUriValue;
}
