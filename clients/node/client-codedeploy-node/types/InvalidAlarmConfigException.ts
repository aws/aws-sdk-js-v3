import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The format of the alarm configuration is invalid. Possible causes include:</p> <ul> <li> <p>The alarm list is null.</p> </li> <li> <p>The alarm object is null.</p> </li> <li> <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p> </li> <li> <p>Two alarms with the same name have been specified.</p> </li> <li> <p>The alarm configuration is enabled, but the alarm list is empty.</p> </li> </ul>
 */
export interface InvalidAlarmConfigException
  extends __ServiceException__<_InvalidAlarmConfigExceptionDetails> {
  name: "InvalidAlarmConfigException";
}

export interface _InvalidAlarmConfigExceptionDetails {}
