import {
  _GlacierJobParameters,
  _UnmarshalledGlacierJobParameters
} from "./_GlacierJobParameters";
import {
  _SelectParameters,
  _UnmarshalledSelectParameters
} from "./_SelectParameters";
import {
  _OutputLocation,
  _UnmarshalledOutputLocation
} from "./_OutputLocation";

/**
 * <p>Container for restore job parameters.</p>
 */
export interface _RestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify OutputLocation.</p>
   */
  Days?: number;

  /**
   * <p>Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.</p>
   */
  GlacierJobParameters?: _GlacierJobParameters;

  /**
   * <p>Type of restore request.</p>
   */
  Type?: "SELECT" | string;

  /**
   * <p>Glacier retrieval tier at which the restore will be processed.</p>
   */
  Tier?: "Standard" | "Bulk" | "Expedited" | string;

  /**
   * <p>The optional description for the job.</p>
   */
  Description?: string;

  /**
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: _SelectParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: _OutputLocation;
}

export interface _UnmarshalledRestoreRequest extends _RestoreRequest {
  /**
   * <p>Glacier related parameters pertaining to this job. Do not use with restores that specify OutputLocation.</p>
   */
  GlacierJobParameters?: _UnmarshalledGlacierJobParameters;

  /**
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: _UnmarshalledSelectParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: _UnmarshalledOutputLocation;
}
