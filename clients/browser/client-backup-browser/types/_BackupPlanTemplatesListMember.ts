/**
 * <p>An object specifying metadata associated with a backup plan template.</p>
 */
export interface _BackupPlanTemplatesListMember {
  /**
   * <p>Uniquely identifies a stored backup plan template.</p>
   */
  BackupPlanTemplateId?: string;

  /**
   * <p>The optional display name of a backup plan template.</p>
   */
  BackupPlanTemplateName?: string;
}

export type _UnmarshalledBackupPlanTemplatesListMember = _BackupPlanTemplatesListMember;
