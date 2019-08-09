import { _InputLocation, _UnmarshalledInputLocation } from "./_InputLocation";

/**
 * Input Loss Behavior
 */
export interface _InputLossBehavior {
  /**
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: _InputLocation;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: "COLOR" | "SLATE" | string;

  /**
   * Documentation update needed
   */
  RepeatFrameMsec?: number;
}

export interface _UnmarshalledInputLossBehavior extends _InputLossBehavior {
  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: _UnmarshalledInputLocation;
}
