// smithy-typescript generated code
import type { StreamProcessorParameterToDelete } from "./enums";
import type {
  RegionOfInterest,
  StreamProcessorDataSharingPreference,
  StreamProcessorSettingsForUpdate,
} from "./models_0";

/**
 * @public
 */
export interface UpdateStreamProcessorRequest {
  /**
   * Name of the stream processor that you want to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence.
   *
   * @public
   */
  SettingsForUpdate?: StreamProcessorSettingsForUpdate | undefined;

  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *
   * @public
   */
  RegionsOfInterestForUpdate?: RegionOfInterest[] | undefined;

  /**
   * Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
   *
   * @public
   */
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference | undefined;

  /**
   * A list of parameters you want to delete from the stream processor.
   *
   * @public
   */
  ParametersToDelete?: StreamProcessorParameterToDelete[] | undefined;
}

/**
 * @public
 */
export interface UpdateStreamProcessorResponse {}
