import {
  _SigningProfileParameter,
  _UnmarshalledSigningProfileParameter
} from "./_SigningProfileParameter";
import { _Destination, _UnmarshalledDestination } from "./_Destination";

/**
 * <p>Information required to start a signing job.</p>
 */
export interface _StartSigningJobParameter {
  /**
   * <p>Describes the code-signing profile.</p>
   */
  signingProfileParameter?: _SigningProfileParameter;

  /**
   * <p>The code-signing profile name.</p>
   */
  signingProfileName?: string;

  /**
   * <p>The location to write the code-signed file.</p>
   */
  destination?: _Destination;
}

export interface _UnmarshalledStartSigningJobParameter
  extends _StartSigningJobParameter {
  /**
   * <p>Describes the code-signing profile.</p>
   */
  signingProfileParameter?: _UnmarshalledSigningProfileParameter;

  /**
   * <p>The location to write the code-signed file.</p>
   */
  destination?: _UnmarshalledDestination;
}
