import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't use the specified policy type with the feature set currently enabled for this organization. For example, you can enable SCPs only after you enable all features in the organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html#enable_policies_on_root">Enabling and Disabling a Policy Type on a Root</a> in the <i>AWS Organizations User Guide.</i> </p>
 */
export interface PolicyTypeNotAvailableForOrganizationException
  extends __ServiceException__<
    _PolicyTypeNotAvailableForOrganizationExceptionDetails
  > {
  name: "PolicyTypeNotAvailableForOrganizationException";
}

export interface _PolicyTypeNotAvailableForOrganizationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
