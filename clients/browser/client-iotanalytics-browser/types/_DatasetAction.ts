import {
  _SqlQueryDatasetAction,
  _UnmarshalledSqlQueryDatasetAction
} from "./_SqlQueryDatasetAction";
import {
  _ContainerDatasetAction,
  _UnmarshalledContainerDatasetAction
} from "./_ContainerDatasetAction";

/**
 * <p>A "DatasetAction" object that specifies how data set contents are automatically created.</p>
 */
export interface _DatasetAction {
  /**
   * <p>The name of the data set action by which data set contents are automatically created.</p>
   */
  actionName?: string;

  /**
   * <p>An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.</p>
   */
  queryAction?: _SqlQueryDatasetAction;

  /**
   * <p>Information which allows the system to run a containerized application in order to create the data set contents. The application must be in a Docker container along with any needed support libraries.</p>
   */
  containerAction?: _ContainerDatasetAction;
}

export interface _UnmarshalledDatasetAction extends _DatasetAction {
  /**
   * <p>An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.</p>
   */
  queryAction?: _UnmarshalledSqlQueryDatasetAction;

  /**
   * <p>Information which allows the system to run a containerized application in order to create the data set contents. The application must be in a Docker container along with any needed support libraries.</p>
   */
  containerAction?: _UnmarshalledContainerDatasetAction;
}
