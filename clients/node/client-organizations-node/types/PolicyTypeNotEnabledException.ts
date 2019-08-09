import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified policy type isn't currently enabled in this root. You can't attach policies of the specified type to entities in a root until you enable that type in the root. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p>
 */
export interface PolicyTypeNotEnabledException
  extends __ServiceException__<_PolicyTypeNotEnabledExceptionDetails> {
  name: "PolicyTypeNotEnabledException";
}

export interface _PolicyTypeNotEnabledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
