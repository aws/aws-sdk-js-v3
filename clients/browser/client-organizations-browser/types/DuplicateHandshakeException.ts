import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A handshake with the same action and target already exists. For example, if you invited an account to join your organization, the invited account might already have a pending invitation from this organization. If you intend to resend an invitation to an account, ensure that existing handshakes that might be considered duplicates are canceled or declined.</p>
 */
export interface DuplicateHandshakeException
  extends __ServiceException__<_DuplicateHandshakeExceptionDetails> {
  name: "DuplicateHandshakeException";
}

export interface _DuplicateHandshakeExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
