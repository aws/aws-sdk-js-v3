/**
 * <p>Represents information about an action type.</p>
 */
export interface _ActionTypeId {
  /**
   * <p>A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.</p>
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
   * <p>The creator of the action being called.</p>
   */
  owner: "AWS" | "ThirdParty" | "Custom" | string;

  /**
   * <p>The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of AWS CodeDeploy, which would be specified as CodeDeploy. To reference a list of action providers by action type, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers">Valid Action Types and Providers in CodePipeline</a>.</p>
   */
  provider: string;

  /**
   * <p>A string that describes the action version.</p>
   */
  version: string;
}

export type _UnmarshalledActionTypeId = _ActionTypeId;
