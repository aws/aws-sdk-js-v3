import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p>
 */
export interface RegionDisabledException
  extends __ServiceException__<_RegionDisabledExceptionDetails> {
  name: "RegionDisabledException";
}

export interface _RegionDisabledExceptionDetails {
  /**
   * _regionDisabledMessage shape
   */
  message?: string;
}
