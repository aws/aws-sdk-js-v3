import { ChecksumConstructor, HashConstructor, Provider } from "@smithy/types";

/**
 * @public
 */
export interface SigV4AuthInputConfig {
  /**
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * An offset value in milliseconds to apply to all signing times.
   */
  systemClockOffset?: number;
}

interface SigV4PreviouslyResolved {
  region: string | Provider<string>;
  sha256: ChecksumConstructor | HashConstructor;
  signingName: string;
}

export interface SigV4AuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.signingEscapePath}
   */
  signingEscapePath: boolean;
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.systemClockOffset}
   */
  systemClockOffset: number;
}

export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4PreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const {
    // Default for signingEscapePath
    signingEscapePath = true,
    // Default for systemClockOffset
    systemClockOffset = input.systemClockOffset || 0,
  } = input;
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
  };
};
