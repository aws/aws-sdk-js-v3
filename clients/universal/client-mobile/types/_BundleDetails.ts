/**
 * <p> The details of the bundle. </p>
 */
export interface _BundleDetails {
  /**
   * <p> Unique bundle identifier. </p>
   */
  bundleId?: string;

  /**
   * <p> Title of the download bundle. </p>
   */
  title?: string;

  /**
   * <p> Version of the download bundle. </p>
   */
  version?: string;

  /**
   * <p> Description of the download bundle. </p>
   */
  description?: string;

  /**
   * <p> Icon for the download bundle. </p>
   */
  iconUrl?: string;

  /**
   * <p> Developer desktop or mobile app or website platforms. </p>
   */
  availablePlatforms?:
    | Array<
        | "OSX"
        | "WINDOWS"
        | "LINUX"
        | "OBJC"
        | "SWIFT"
        | "ANDROID"
        | "JAVASCRIPT"
        | string
      >
    | Iterable<
        | "OSX"
        | "WINDOWS"
        | "LINUX"
        | "OBJC"
        | "SWIFT"
        | "ANDROID"
        | "JAVASCRIPT"
        | string
      >;
}

export interface _UnmarshalledBundleDetails extends _BundleDetails {
  /**
   * <p> Developer desktop or mobile app or website platforms. </p>
   */
  availablePlatforms?: Array<
    | "OSX"
    | "WINDOWS"
    | "LINUX"
    | "OBJC"
    | "SWIFT"
    | "ANDROID"
    | "JAVASCRIPT"
    | string
  >;
}
