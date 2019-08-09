import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The event was already logged.</p>
 */
export interface DataAlreadyAcceptedException
  extends __ServiceException__<_DataAlreadyAcceptedExceptionDetails> {
  name: "DataAlreadyAcceptedException";
}

export interface _DataAlreadyAcceptedExceptionDetails {
  /**
   * _SequenceToken shape
   */
  expectedSequenceToken?: string;
}
