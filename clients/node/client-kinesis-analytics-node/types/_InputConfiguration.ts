import {
  _InputStartingPositionConfiguration,
  _UnmarshalledInputStartingPositionConfiguration
} from "./_InputStartingPositionConfiguration";

/**
 * <p>When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.</p>
 */
export interface _InputConfiguration {
  /**
   * <p>Input source ID. You can get this ID by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  Id: string;

  /**
   * <p>Point at which you want the application to start processing records from the streaming source.</p>
   */
  InputStartingPositionConfiguration: _InputStartingPositionConfiguration;
}

export interface _UnmarshalledInputConfiguration extends _InputConfiguration {
  /**
   * <p>Point at which you want the application to start processing records from the streaming source.</p>
   */
  InputStartingPositionConfiguration: _UnmarshalledInputStartingPositionConfiguration;
}
