import { _UnmarshalledSkillsStoreSkill } from "./_SkillsStoreSkill";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSkillsStoreSkillsByCategoryOutput shape
 */
export interface ListSkillsStoreSkillsByCategoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The skill store skills.</p>
   */
  SkillsStoreSkills?: Array<_UnmarshalledSkillsStoreSkill>;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
