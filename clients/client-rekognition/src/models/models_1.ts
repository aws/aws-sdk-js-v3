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
   * <p>
   *             Name of the stream processor that you want to update.
   *         </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence.
   *         </p>
   * @public
   */
  SettingsForUpdate?: StreamProcessorSettingsForUpdate | undefined;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   * @public
   */
  RegionsOfInterestForUpdate?: RegionOfInterest[] | undefined;

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   * @public
   */
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference | undefined;

  /**
   * <p>
   *             A list of parameters you want to delete from the stream processor.
   *         </p>
   * @public
   */
  ParametersToDelete?: StreamProcessorParameterToDelete[] | undefined;
}

/**
 * @public
 */
export interface UpdateStreamProcessorResponse {}
