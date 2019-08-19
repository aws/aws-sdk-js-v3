/**
 * <p>The current options of an Elasticsearch domain service software options.</p>
 */
export interface _ServiceSoftwareOptions {
  /**
   * <p>The current service software version that is present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The new service software version if one is available.</p>
   */
  NewVersion?: string;

  /**
   * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
   */
  Cancellable?: boolean;

  /**
   * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
   */
  UpdateStatus?:
    | "PENDING_UPDATE"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "NOT_ELIGIBLE"
    | "ELIGIBLE"
    | string;

  /**
   * <p>The description of the <code>UpdateStatus</code>.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date | string | number;
}

export interface _UnmarshalledServiceSoftwareOptions
  extends _ServiceSoftwareOptions {
  /**
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;
}
