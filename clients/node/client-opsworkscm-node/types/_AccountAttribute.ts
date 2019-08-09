/**
 * <p>Stores account attributes. </p>
 */
export interface _AccountAttribute {
  /**
   * <p> The attribute name. The following are supported attribute names. </p> <ul> <li> <p> <i>ServerLimit:</i> The number of current servers/maximum number of servers allowed. By default, you can have a maximum of 10 servers. </p> </li> <li> <p> <i>ManualBackupLimit:</i> The number of current manual backups/maximum number of backups allowed. By default, you can have a maximum of 50 manual backups saved. </p> </li> </ul>
   */
  Name?: string;

  /**
   * <p> The maximum allowed value. </p>
   */
  Maximum?: number;

  /**
   * <p> The current usage, such as the current number of servers that are associated with the account. </p>
   */
  Used?: number;
}

export type _UnmarshalledAccountAttribute = _AccountAttribute;
