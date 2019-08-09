/**
 * <p>Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.</p>
 */
export interface _InputConfig {
  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  S3Uri: string;

  /**
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form. The data inputs are <a>InputConfig$Framework</a> specific. </p> <ul> <li> <p> <code>TensorFlow</code>: You must specify the name and shape (NHWC format) of the expected data inputs using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.</p> <ul> <li> <p>Examples for one input:</p> <ul> <li> <p>If using the console, <code>{"input":[1,1024,1024,3]}</code> </p> </li> <li> <p>If using the CLI, <code>{\"input\":[1,1024,1024,3]}</code> </p> </li> </ul> </li> <li> <p>Examples for two inputs:</p> <ul> <li> <p>If using the console, <code>{"data1": [1,28,28,1], "data2":[1,28,28,1]}</code> </p> </li> <li> <p>If using the CLI, <code>{\"data1\": [1,28,28,1], \"data2\":[1,28,28,1]}</code> </p> </li> </ul> </li> </ul> </li> <li> <p> <code>MXNET/ONNX</code>: You must specify the name and shape (NCHW format) of the expected data inputs in order using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.</p> <ul> <li> <p>Examples for one input:</p> <ul> <li> <p>If using the console, <code>{"data":[1,3,1024,1024]}</code> </p> </li> <li> <p>If using the CLI, <code>{\"data\":[1,3,1024,1024]}</code> </p> </li> </ul> </li> <li> <p>Examples for two inputs:</p> <ul> <li> <p>If using the console, <code>{"var1": [1,1,28,28], "var2":[1,1,28,28]} </code> </p> </li> <li> <p>If using the CLI, <code>{\"var1\": [1,1,28,28], \"var2\":[1,1,28,28]}</code> </p> </li> </ul> </li> </ul> </li> <li> <p> <code>PyTorch</code>: You can either specify the name and shape (NCHW format) of expected data inputs in order using a dictionary format for your trained model or you can specify the shape only using a list format. The dictionary formats required for the console and CLI are different. The list formats for the console and CLI are the same.</p> <ul> <li> <p>Examples for one input in dictionary format:</p> <ul> <li> <p>If using the console, <code>{"input0":[1,3,224,224]}</code> </p> </li> <li> <p>If using the CLI, <code>{\"input0\":[1,3,224,224]}</code> </p> </li> </ul> </li> <li> <p>Example for one input in list format: <code>[[1,3,224,224]]</code> </p> </li> <li> <p>Examples for two inputs in dictionary format:</p> <ul> <li> <p>If using the console, <code>{"input0":[1,3,224,224], "input1":[1,3,224,224]}</code> </p> </li> <li> <p>If using the CLI, <code>{\"input0\":[1,3,224,224], \"input1\":[1,3,224,224]} </code> </p> </li> </ul> </li> <li> <p>Example for two inputs in list format: <code>[[1,3,224,224], [1,3,224,224]]</code> </p> </li> </ul> </li> <li> <p> <code>XGBOOST</code>: input data name and shape are not needed.</p> </li> </ul>
   */
  DataInputConfig: string;

  /**
   * <p>Identifies the framework in which the model was trained. For example: TENSORFLOW.</p>
   */
  Framework: "TENSORFLOW" | "MXNET" | "ONNX" | "PYTORCH" | "XGBOOST" | string;
}

export type _UnmarshalledInputConfig = _InputConfig;
