/**
 * <p>Contains information about an email template.</p>
 */
export interface _TemplateMetadata {
  /**
   * <p>The name of the template.</p>
   */
  Name?: string;

  /**
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date | string | number;
}

export interface _UnmarshalledTemplateMetadata extends _TemplateMetadata {
  /**
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date;
}
