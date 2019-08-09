import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface NotOrganizationMasterAccountException
  extends __ServiceException__<_NotOrganizationMasterAccountExceptionDetails> {
  name: "NotOrganizationMasterAccountException";
}

export interface _NotOrganizationMasterAccountExceptionDetails {}
