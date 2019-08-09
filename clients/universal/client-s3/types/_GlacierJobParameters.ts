/**
 * <p/>
 */
export interface _GlacierJobParameters {
  /**
   * <p>Glacier retrieval tier at which the restore will be processed.</p>
   */
  Tier: "Standard" | "Bulk" | "Expedited" | string;
}

export type _UnmarshalledGlacierJobParameters = _GlacierJobParameters;
