import {
  _ResourceConfiguration,
  _UnmarshalledResourceConfiguration
} from "./_ResourceConfiguration";
import { _Variable, _UnmarshalledVariable } from "./_Variable";

/**
 * <p>Information needed to run the "containerAction" to produce data set contents.</p>
 */
export interface _ContainerDatasetAction {
  /**
   * <p>The ARN of the Docker container stored in your account. The Docker container contains an application and needed support libraries and is used to generate data set contents.</p>
   */
  image: string;

  /**
   * <p>The ARN of the role which gives permission to the system to access needed resources in order to run the "containerAction". This includes, at minimum, permission to retrieve the data set contents which are the input to the containerized application.</p>
   */
  executionRoleArn: string;

  /**
   * <p>Configuration of the resource which executes the "containerAction".</p>
   */
  resourceConfiguration: _ResourceConfiguration;

  /**
   * <p>The values of variables used within the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue".</p>
   */
  variables?: Array<_Variable> | Iterable<_Variable>;
}

export interface _UnmarshalledContainerDatasetAction
  extends _ContainerDatasetAction {
  /**
   * <p>Configuration of the resource which executes the "containerAction".</p>
   */
  resourceConfiguration: _UnmarshalledResourceConfiguration;

  /**
   * <p>The values of variables used within the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue".</p>
   */
  variables?: Array<_UnmarshalledVariable>;
}
