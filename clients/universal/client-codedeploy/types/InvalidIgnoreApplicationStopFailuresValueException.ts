import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The IgnoreApplicationStopFailures value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>
 */
export interface InvalidIgnoreApplicationStopFailuresValueException
  extends __ServiceException__<
    _InvalidIgnoreApplicationStopFailuresValueExceptionDetails
  > {
  name: "InvalidIgnoreApplicationStopFailuresValueException";
}

export interface _InvalidIgnoreApplicationStopFailuresValueExceptionDetails {}
