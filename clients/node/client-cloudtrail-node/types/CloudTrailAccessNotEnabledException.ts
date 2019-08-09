import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when trusted access has not been enabled between AWS CloudTrail and AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other AWS Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
 */
export interface CloudTrailAccessNotEnabledException
  extends __ServiceException__<_CloudTrailAccessNotEnabledExceptionDetails> {
  name: "CloudTrailAccessNotEnabledException";
}

export interface _CloudTrailAccessNotEnabledExceptionDetails {}
