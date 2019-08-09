import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The organization that your account belongs to, is not in All Features mode. To enable all features mode, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html">EnableAllFeatures</a>.</p>
 */
export interface OrganizationNotInAllFeaturesModeException
  extends __ServiceException__<
    _OrganizationNotInAllFeaturesModeExceptionDetails
  > {
  name: "OrganizationNotInAllFeaturesModeException";
}

export interface _OrganizationNotInAllFeaturesModeExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
