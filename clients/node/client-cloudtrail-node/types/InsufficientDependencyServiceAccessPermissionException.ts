import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface InsufficientDependencyServiceAccessPermissionException
  extends __ServiceException__<
    _InsufficientDependencyServiceAccessPermissionExceptionDetails
  > {
  name: "InsufficientDependencyServiceAccessPermissionException";
}

export interface _InsufficientDependencyServiceAccessPermissionExceptionDetails {}
