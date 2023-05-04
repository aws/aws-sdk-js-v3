// smithy-typescript generated code
import {
  ConnectedHomeSettingsForUpdate,
  DatasetChanges,
  RegionOfInterest,
  StreamProcessorDataSharingPreference,
} from "./models_0";

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDatasetEntriesRequest {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the dataset that you want to update.
   * </p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>
   *    The changes that you want to make to the dataset.
   * </p>
   */
  Changes: DatasetChanges | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetEntriesResponse {}

/**
 * @public
 * @enum
 */
export const StreamProcessorParameterToDelete = {
  ConnectedHomeMinConfidence: "ConnectedHomeMinConfidence",
  RegionsOfInterest: "RegionsOfInterest",
} as const;

/**
 * @public
 */
export type StreamProcessorParameterToDelete =
  (typeof StreamProcessorParameterToDelete)[keyof typeof StreamProcessorParameterToDelete];

/**
 * @public
 * <p>
 *             The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence.
 *         </p>
 */
export interface StreamProcessorSettingsForUpdate {
  /**
   * <p>
   *             The label detection settings you want to use for your stream processor.
   *         </p>
   */
  ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate;
}

/**
 * @public
 */
export interface UpdateStreamProcessorRequest {
  /**
   * <p>
   *             Name of the stream processor that you want to update.
   *         </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *             The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence.
   *         </p>
   */
  SettingsForUpdate?: StreamProcessorSettingsForUpdate;

  /**
   * <p>
   *             Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
   *         </p>
   */
  RegionsOfInterestForUpdate?: RegionOfInterest[];

  /**
   * <p>
   *             Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis.
   *             Note that if you opt out at the account level this setting is ignored on individual streams.
   *         </p>
   */
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;

  /**
   * <p>
   *             A list of parameters you want to delete from the stream processor.
   *         </p>
   */
  ParametersToDelete?: (StreamProcessorParameterToDelete | string)[];
}

/**
 * @public
 */
export interface UpdateStreamProcessorResponse {}
