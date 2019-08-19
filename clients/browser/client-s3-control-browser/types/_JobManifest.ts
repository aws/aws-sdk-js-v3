import {
  _JobManifestSpec,
  _UnmarshalledJobManifestSpec
} from "./_JobManifestSpec";
import {
  _JobManifestLocation,
  _UnmarshalledJobManifestLocation
} from "./_JobManifestLocation";

/**
 * <p>Contains the configuration information for a job's manifest.</p>
 */
export interface _JobManifest {
  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
   */
  Spec: _JobManifestSpec;

  /**
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: _JobManifestLocation;
}

export interface _UnmarshalledJobManifest extends _JobManifest {
  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
   */
  Spec: _UnmarshalledJobManifestSpec;

  /**
   * <p>Contains the information required to locate the specified job's manifest.</p>
   */
  Location: _UnmarshalledJobManifestLocation;
}
