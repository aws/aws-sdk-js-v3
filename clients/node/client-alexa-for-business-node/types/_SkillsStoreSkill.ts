import { _SkillDetails, _UnmarshalledSkillDetails } from "./_SkillDetails";

/**
 * <p>The detailed information about an Alexa skill.</p>
 */
export interface _SkillsStoreSkill {
  /**
   * <p>The ARN of the skill.</p>
   */
  SkillId?: string;

  /**
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * <p>Short description about the skill.</p>
   */
  ShortDescription?: string;

  /**
   * <p>The URL where the skill icon resides.</p>
   */
  IconUrl?: string;

  /**
   * <p>Sample utterances that interact with the skill.</p>
   */
  SampleUtterances?: Array<string> | Iterable<string>;

  /**
   * <p>Information about the skill.</p>
   */
  SkillDetails?: _SkillDetails;

  /**
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;
}

export interface _UnmarshalledSkillsStoreSkill extends _SkillsStoreSkill {
  /**
   * <p>Sample utterances that interact with the skill.</p>
   */
  SampleUtterances?: Array<string>;

  /**
   * <p>Information about the skill.</p>
   */
  SkillDetails?: _UnmarshalledSkillDetails;
}
