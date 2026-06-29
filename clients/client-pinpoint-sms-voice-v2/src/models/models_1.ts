// smithy-typescript generated code
import type { VerificationStatus } from "./enums";

/**
 * @public
 */
export interface VerifyDestinationNumberRequest {
  /**
   * <p>The unique identifier for the verififed destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * <p>The verification code that was received by the verified destination phone number.</p>
   * @public
   */
  VerificationCode: string | undefined;
}

/**
 * @public
 */
export interface VerifyDestinationNumberResult {
  /**
   * <p>The Amazon Resource Name (ARN) for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberArn: string | undefined;

  /**
   * <p>The unique identifier for the verified destination phone number.</p>
   * @public
   */
  VerifiedDestinationNumberId: string | undefined;

  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The status for being able to send messages to the phone number.</p>
   * @public
   */
  Status: VerificationStatus | undefined;

  /**
   * <p>The time when the destination phone number was created, in <a href="https://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   * @public
   */
  CreatedTimestamp: Date | undefined;
}
