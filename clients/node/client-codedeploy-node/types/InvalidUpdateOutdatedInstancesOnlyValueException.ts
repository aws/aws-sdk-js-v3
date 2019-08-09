import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The UpdateOutdatedInstancesOnly value is invalid. For AWS Lambda deployments, <code>false</code> is expected. For EC2/On-premises deployments, <code>true</code> or <code>false</code> is expected.</p>
 */
export interface InvalidUpdateOutdatedInstancesOnlyValueException
  extends __ServiceException__<
    _InvalidUpdateOutdatedInstancesOnlyValueExceptionDetails
  > {
  name: "InvalidUpdateOutdatedInstancesOnlyValueException";
}

export interface _InvalidUpdateOutdatedInstancesOnlyValueExceptionDetails {}
