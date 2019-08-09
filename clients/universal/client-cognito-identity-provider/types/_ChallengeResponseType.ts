/**
 * <p>The challenge response type.</p>
 */
export interface _ChallengeResponseType {
  /**
   * <p>The challenge name</p>
   */
  ChallengeName?: "Password" | "Mfa" | string;

  /**
   * <p>The challenge response.</p>
   */
  ChallengeResponse?: "Success" | "Failure" | string;
}

export type _UnmarshalledChallengeResponseType = _ChallengeResponseType;
