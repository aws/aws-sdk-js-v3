import { _ActionTypeSettings } from "./_ActionTypeSettings";
import { _ActionConfigurationProperty } from "./_ActionConfigurationProperty";
import { _ArtifactDetails } from "./_ArtifactDetails";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a CreateCustomActionType operation.</p>
 */
export interface CreateCustomActionTypeInput {
  /**
   * <p>The category of the custom action, such as a build action or a test action.</p> <note> <p>Although <code>Source</code> and <code>Approval</code> are listed as valid values, they are not currently functional. These values are reserved for future use.</p> </note>
   */
  category:
    | "Source"
    | "Build"
    | "Deploy"
    | "Test"
    | "Invoke"
    | "Approval"
    | string;

  /**
   * <p>The provider of the service used in the custom action, such as AWS CodeDeploy.</p>
   */
  provider: string;

  /**
   * <p>The version identifier of the custom action.</p>
   */
  version: string;

  /**
   * <p>URLs that provide users information about this custom action.</p>
   */
  settings?: _ActionTypeSettings;

  /**
   * <p>The configuration properties for the custom action.</p> <note> <p>You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html">Create a Custom Action for a Pipeline</a>.</p> </note>
   */
  configurationProperties?:
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

  /**
   * <p>The tags for the custom action.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
