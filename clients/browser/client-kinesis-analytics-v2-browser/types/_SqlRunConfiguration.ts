import {
  _InputStartingPositionConfiguration,
  _UnmarshalledInputStartingPositionConfiguration
} from "./_InputStartingPositionConfiguration";

/**
 * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface _SqlRunConfiguration {
  /**
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   */
  InputId: string;

  /**
   * <p>The point at which you want the application to start processing records from the streaming source. </p>
   */
  InputStartingPositionConfiguration: _InputStartingPositionConfiguration;
}

export interface _UnmarshalledSqlRunConfiguration extends _SqlRunConfiguration {
  /**
   * <p>The point at which you want the application to start processing records from the streaming source. </p>
   */
  InputStartingPositionConfiguration: _UnmarshalledInputStartingPositionConfiguration;
}
