import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service can't be created because a service with the same name already exists.</p>
 */
export interface ServiceAlreadyExists
  extends __ServiceException__<_ServiceAlreadyExistsDetails> {
  name: "ServiceAlreadyExists";
}

export interface _ServiceAlreadyExistsDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the service.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ID of the existing service.</p>
   */
  ServiceId?: string;
}
