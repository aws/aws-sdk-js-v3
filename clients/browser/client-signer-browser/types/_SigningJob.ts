import { _Source, _UnmarshalledSource } from "./_Source";
import { _SignedObject, _UnmarshalledSignedObject } from "./_SignedObject";
import {
  _SigningMaterial,
  _UnmarshalledSigningMaterial
} from "./_SigningMaterial";

/**
 * <p>Contains information about a signing job.</p>
 */
export interface _SigningJob {
  /**
   * <p>The ID of the signing job.</p>
   */
  jobId?: string;

  /**
   * <p>A <code>Source</code> that contains information about a signing job's code image source.</p>
   */
  source?: _Source;

  /**
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's signed code image.</p>
   */
  signedObject?: _SignedObject;

  /**
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of the certificate used for the signing job.</p>
   */
  signingMaterial?: _SigningMaterial;

  /**
   * <p>The date and time that the signing job was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The status of the signing job.</p>
   */
  status?: "InProgress" | "Failed" | "Succeeded" | string;
}

export interface _UnmarshalledSigningJob extends _SigningJob {
  /**
   * <p>A <code>Source</code> that contains information about a signing job's code image source.</p>
   */
  source?: _UnmarshalledSource;

  /**
   * <p>A <code>SignedObject</code> structure that contains information about a signing job's signed code image.</p>
   */
  signedObject?: _UnmarshalledSignedObject;

  /**
   * <p>A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of the certificate used for the signing job.</p>
   */
  signingMaterial?: _UnmarshalledSigningMaterial;

  /**
   * <p>The date and time that the signing job was created.</p>
   */
  createdAt?: Date;
}
