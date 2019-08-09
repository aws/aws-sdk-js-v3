/**
 * <p>Describes the status of the application.</p>
 */
export interface _ApplicationInfo {
  /**
   * <p>The name of the resource group used for the application.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The lifecycle of the application. </p>
   */
  LifeCycle?: string;

  /**
   * <p>The issues on the user side that are blocking Application Insights from fully monitoring the application.</p>
   */
  Remarks?: string;
}

export type _UnmarshalledApplicationInfo = _ApplicationInfo;
