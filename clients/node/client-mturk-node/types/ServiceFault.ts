import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 */
export interface ServiceFault
  extends __ServiceException__<_ServiceFaultDetails> {
  name: "ServiceFault";
}

export interface _ServiceFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;

  /**
   * _TurkErrorCode shape
   */
  TurkErrorCode?: string;
}
