import {
  _TransformDataSource,
  _UnmarshalledTransformDataSource
} from "./_TransformDataSource";

/**
 * <p>Describes the input source of a transform job and the way the transform job consumes it.</p>
 */
export interface _TransformInput {
  /**
   * <p>Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.</p>
   */
  DataSource: _TransformDataSource;

  /**
   * <p>The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.</p>
   */
  ContentType?: string;

  /**
   * <p>If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is <code>None</code>.</p>
   */
  CompressionType?: "None" | "Gzip" | string;

  /**
   * <p>The method to use to split the transform job's data files into smaller batches. Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for <code>SplitType</code> is <code>None</code>, which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to <code>Line</code> to split records on a newline character boundary. <code>SplitType</code> also supports a number of record-oriented binary data formats.</p> <p>When splitting is enabled, the size of a mini-batch depends on the values of the <code>BatchStrategy</code> and <code>MaxPayloadInMB</code> parameters. When the value of <code>BatchStrategy</code> is <code>MultiRecord</code>, Amazon SageMaker sends the maximum number of records in each request, up to the <code>MaxPayloadInMB</code> limit. If the value of <code>BatchStrategy</code> is <code>SingleRecord</code>, Amazon SageMaker sends individual records in each request.</p> <note> <p>Some data formats represent a record as a binary payload wrapped with extra padding bytes. When splitting is applied to a binary data format, padding is removed if the value of <code>BatchStrategy</code> is set to <code>SingleRecord</code>. Padding is not removed if the value of <code>BatchStrategy</code> is set to <code>MultiRecord</code>.</p> <p>For more information about the RecordIO, see <a href="http://mxnet.io/architecture/note_data_loading.html#data-format">Data Format</a> in the MXNet documentation. For more information about the TFRecord, see <a href="https://www.tensorflow.org/guide/datasets#consuming_tfrecord_data">Consuming TFRecord data</a> in the TensorFlow documentation.</p> </note>
   */
  SplitType?: "None" | "Line" | "RecordIO" | "TFRecord" | string;
}

export interface _UnmarshalledTransformInput extends _TransformInput {
  /**
   * <p>Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.</p>
   */
  DataSource: _UnmarshalledTransformDataSource;
}
