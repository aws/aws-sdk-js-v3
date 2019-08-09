import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service-linked role is not yet ready for use.</p>
 */
export interface ServiceLinkedRoleFailure
  extends __ServiceException__<_ServiceLinkedRoleFailureDetails> {
  name: "ServiceLinkedRoleFailure";
}

export interface _ServiceLinkedRoleFailureDetails {
  /**
   * _XmlStringMaxLen255 shape
   */
  message?: string;
}
