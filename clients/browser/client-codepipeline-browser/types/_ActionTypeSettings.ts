/**
 * <p>Returns information about the settings for an action type.</p>
 */
export interface _ActionTypeSettings {
  /**
   * <p>The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.</p>
   */
  thirdPartyConfigurationUrl?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display within the pipeline.</p>
   */
  entityUrlTemplate?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.</p>
   */
  executionUrlTemplate?: string;

  /**
   * <p>The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.</p>
   */
  revisionUrlTemplate?: string;
}

export type _UnmarshalledActionTypeSettings = _ActionTypeSettings;
