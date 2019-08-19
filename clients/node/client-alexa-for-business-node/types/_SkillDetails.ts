import { _DeveloperInfo, _UnmarshalledDeveloperInfo } from "./_DeveloperInfo";

/**
 * <p>Granular information about the skill.</p>
 */
export interface _SkillDetails {
  /**
   * <p>The description of the product.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The phrase used to trigger the skill.</p>
   */
  InvocationPhrase?: string;

  /**
   * <p>The date when the skill was released.</p>
   */
  ReleaseDate?: string;

  /**
   * <p>The URL of the end user license agreement.</p>
   */
  EndUserLicenseAgreement?: string;

  /**
   * <p>The generic keywords associated with the skill that can be used to find a skill.</p>
   */
  GenericKeywords?: Array<string> | Iterable<string>;

  /**
   * <p>The details about what the skill supports organized as bullet points.</p>
   */
  BulletPoints?: Array<string> | Iterable<string>;

  /**
   * <p>The updates added in bullet points.</p>
   */
  NewInThisVersionBulletPoints?: Array<string> | Iterable<string>;

  /**
   * <p>The types of skills.</p>
   */
  SkillTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The list of reviews for the skill, including Key and Value pair.</p>
   */
  Reviews?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The details about the developer that published the skill.</p>
   */
  DeveloperInfo?: _DeveloperInfo;
}

export interface _UnmarshalledSkillDetails extends _SkillDetails {
  /**
   * <p>The generic keywords associated with the skill that can be used to find a skill.</p>
   */
  GenericKeywords?: Array<string>;

  /**
   * <p>The details about what the skill supports organized as bullet points.</p>
   */
  BulletPoints?: Array<string>;

  /**
   * <p>The updates added in bullet points.</p>
   */
  NewInThisVersionBulletPoints?: Array<string>;

  /**
   * <p>The types of skills.</p>
   */
  SkillTypes?: Array<string>;

  /**
   * <p>The list of reviews for the skill, including Key and Value pair.</p>
   */
  Reviews?: { [key: string]: string };

  /**
   * <p>The details about the developer that published the skill.</p>
   */
  DeveloperInfo?: _UnmarshalledDeveloperInfo;
}
