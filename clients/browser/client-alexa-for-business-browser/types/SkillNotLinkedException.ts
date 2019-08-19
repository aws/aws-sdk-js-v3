import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The skill must be linked to a third-party account.</p>
 */
export interface SkillNotLinkedException
  extends __ServiceException__<_SkillNotLinkedExceptionDetails> {
  name: "SkillNotLinkedException";
}

export interface _SkillNotLinkedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
