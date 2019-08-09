import {
  _StartSigningJobParameter,
  _UnmarshalledStartSigningJobParameter
} from "./_StartSigningJobParameter";
import {
  _CustomCodeSigning,
  _UnmarshalledCustomCodeSigning
} from "./_CustomCodeSigning";

/**
 * <p>Describes the method to use when code signing a file.</p>
 */
export interface _CodeSigning {
  /**
   * <p>The ID of the AWSSignerJob which was created to sign the file.</p>
   */
  awsSignerJobId?: string;

  /**
   * <p>Describes the code-signing job.</p>
   */
  startSigningJobParameter?: _StartSigningJobParameter;

  /**
   * <p>A custom method for code signing a file.</p>
   */
  customCodeSigning?: _CustomCodeSigning;
}

export interface _UnmarshalledCodeSigning extends _CodeSigning {
  /**
   * <p>Describes the code-signing job.</p>
   */
  startSigningJobParameter?: _UnmarshalledStartSigningJobParameter;

  /**
   * <p>A custom method for code signing a file.</p>
   */
  customCodeSigning?: _UnmarshalledCustomCodeSigning;
}
