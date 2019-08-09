/**
 * <p>The data structure used to combine the input data and transformed data from the batch transform output into a joined dataset and to store it in an output file. It also contains information on how to filter the input data and the joined dataset. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-io-join.html">Batch Transform I/O Join</a>.</p>
 */
export interface _DataProcessing {
  /**
   * <p>A JSONPath expression used to select a portion of the input data to pass to the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an ID column, from the input. If you want Amazon SageMaker to pass the entire input dataset to the algorithm, accept the default value <code>$</code>.</p> <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code> </p>
   */
  InputFilter?: string;

  /**
   * <p>A JSONPath expression used to select a portion of the joined dataset to save in the output file for a batch transform job. If you want Amazon SageMaker to store the entire input dataset in the output file, leave the default value, <code>$</code>. If you specify indexes that aren't within the dimension size of the joined dataset, you get an error.</p> <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>, <code>"$.['id','SageMakerOutput']"</code> </p>
   */
  OutputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values are <code>None</code> and <code>Input</code> The default value is <code>None</code> which specifies not to join the input with the transformed data. If you want the batch transform job to join the original input data with the transformed data, set <code>JoinSource</code> to <code>Input</code>. To join input and output, the batch transform job must satisfy the <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-io-join.html#batch-transform-io-join-requirements">Requirements for Using Batch Transform I/O Join</a>.</p> <p>For JSON or JSONLines objects, such as a JSON array, Amazon SageMaker adds the transformed data to the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined result for JSON must be a key-value pair object. If the input is not a key-value pair object, Amazon SageMaker creates a new JSON file. In the new JSON file, and the input data is stored under the <code>SageMakerInput</code> key and the results are stored in <code>SageMakerOutput</code>.</p> <p>For CSV files, Amazon SageMaker combines the transformed data with the input data at the end of the input data and stores it in the output file. The joined data has the joined input data followed by the transformed data and the output is a CSV file. </p>
   */
  JoinSource?: "Input" | "None" | string;
}

export type _UnmarshalledDataProcessing = _DataProcessing;
