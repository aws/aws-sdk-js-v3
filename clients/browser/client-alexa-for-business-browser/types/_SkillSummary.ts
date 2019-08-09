/**
 * <p>The summary of skills.</p>
 */
export interface _SkillSummary {
  /**
   * <p>The ARN of the skill summary.</p>
   */
  SkillId?: string;

  /**
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;

  /**
   * <p>Whether the skill is enabled under the user's account, or if it requires linking to be used.</p>
   */
  EnablementType?: "ENABLED" | "PENDING" | string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: "PUBLIC" | "PRIVATE" | string;
}

export type _UnmarshalledSkillSummary = _SkillSummary;
