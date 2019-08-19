import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when AWS Organizations is not configured to support all features. All features must be enabled in AWS Organization to support creating an organization trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface OrganizationNotInAllFeaturesModeException
  extends __ServiceException__<
    _OrganizationNotInAllFeaturesModeExceptionDetails
  > {
  name: "OrganizationNotInAllFeaturesModeException";
}

export interface _OrganizationNotInAllFeaturesModeExceptionDetails {}
