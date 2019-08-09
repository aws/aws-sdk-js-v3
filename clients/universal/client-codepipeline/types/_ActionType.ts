import { _ActionTypeId, _UnmarshalledActionTypeId } from "./_ActionTypeId";
import {
  _ActionTypeSettings,
  _UnmarshalledActionTypeSettings
} from "./_ActionTypeSettings";
import {
  _ActionConfigurationProperty,
  _UnmarshalledActionConfigurationProperty
} from "./_ActionConfigurationProperty";
import {
  _ArtifactDetails,
  _UnmarshalledArtifactDetails
} from "./_ArtifactDetails";

/**
 * <p>Returns information about the details of an action type.</p>
 */
export interface _ActionType {
  /**
   * <p>Represents information about an action type.</p>
   */
  id: _ActionTypeId;

  /**
   * <p>The settings for the action type.</p>
   */
  settings?: _ActionTypeSettings;

  /**
   * <p>The configuration properties for the action type.</p>
   */
  actionConfigurationProperties?:
    | Array<_ActionConfigurationProperty>
    | Iterable<_ActionConfigurationProperty>;

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: _ArtifactDetails;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: _ArtifactDetails;
}

export interface _UnmarshalledActionType extends _ActionType {
  /**
   * <p>Represents information about an action type.</p>
   */
  id: _UnmarshalledActionTypeId;

  /**
   * <p>The settings for the action type.</p>
   */
  settings?: _UnmarshalledActionTypeSettings;

  /**
   * <p>The configuration properties for the action type.</p>
   */
  actionConfigurationProperties?: Array<
    _UnmarshalledActionConfigurationProperty
  >;

  /**
   * <p>The details of the input artifact for the action, such as its commit ID.</p>
   */
  inputArtifactDetails: _UnmarshalledArtifactDetails;

  /**
   * <p>The details of the output artifact of the action, such as its commit ID.</p>
   */
  outputArtifactDetails: _UnmarshalledArtifactDetails;
}
