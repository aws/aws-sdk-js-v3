import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The configuration aggregator cannot be created because organization does not have all features enabled.</p>
 */
export interface OrganizationAllFeaturesNotEnabledException
  extends __ServiceException__<
    _OrganizationAllFeaturesNotEnabledExceptionDetails
  > {
  name: "OrganizationAllFeaturesNotEnabledException";
}

export interface _OrganizationAllFeaturesNotEnabledExceptionDetails {}
