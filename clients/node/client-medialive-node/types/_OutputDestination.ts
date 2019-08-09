import {
  _MediaPackageOutputDestinationSettings,
  _UnmarshalledMediaPackageOutputDestinationSettings
} from "./_MediaPackageOutputDestinationSettings";
import {
  _OutputDestinationSettings,
  _UnmarshalledOutputDestinationSettings
} from "./_OutputDestinationSettings";

/**
 * Placeholder documentation for OutputDestination
 */
export interface _OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   */
  Id?: string;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   */
  MediaPackageSettings?:
    | Array<_MediaPackageOutputDestinationSettings>
    | Iterable<_MediaPackageOutputDestinationSettings>;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   */
  Settings?:
    | Array<_OutputDestinationSettings>
    | Iterable<_OutputDestinationSettings>;
}

export interface _UnmarshalledOutputDestination extends _OutputDestination {
  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   */
  MediaPackageSettings?: Array<
    _UnmarshalledMediaPackageOutputDestinationSettings
  >;

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   */
  Settings?: Array<_UnmarshalledOutputDestinationSettings>;
}
