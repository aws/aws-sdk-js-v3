import { _MaxCountRule, _UnmarshalledMaxCountRule } from "./_MaxCountRule";
import { _MaxAgeRule, _UnmarshalledMaxAgeRule } from "./_MaxAgeRule";

/**
 * <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
 */
export interface _ApplicationVersionLifecycleConfig {
  /**
   * <p>Specify a max count rule to restrict the number of application versions that are retained for an application.</p>
   */
  MaxCountRule?: _MaxCountRule;

  /**
   * <p>Specify a max age rule to restrict the length of time that application versions are retained for an application.</p>
   */
  MaxAgeRule?: _MaxAgeRule;
}

export interface _UnmarshalledApplicationVersionLifecycleConfig
  extends _ApplicationVersionLifecycleConfig {
  /**
   * <p>Specify a max count rule to restrict the number of application versions that are retained for an application.</p>
   */
  MaxCountRule?: _UnmarshalledMaxCountRule;

  /**
   * <p>Specify a max age rule to restrict the length of time that application versions are retained for an application.</p>
   */
  MaxAgeRule?: _UnmarshalledMaxAgeRule;
}
