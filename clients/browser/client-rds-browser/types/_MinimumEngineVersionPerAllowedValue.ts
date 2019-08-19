/**
 * <p>The minimum DB engine version required for each corresponding allowed value for an option setting.</p>
 */
export interface _MinimumEngineVersionPerAllowedValue {
  /**
   * <p>The allowed value for an option setting.</p>
   */
  AllowedValue?: string;

  /**
   * <p>The minimum DB engine version required for the allowed value.</p>
   */
  MinimumEngineVersion?: string;
}

export type _UnmarshalledMinimumEngineVersionPerAllowedValue = _MinimumEngineVersionPerAllowedValue;
