/**
 * <p>Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.</p>
 */
export interface _Parent {
  /**
   * <p>The unique identifier (ID) of the parent entity.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>
   */
  Id?: string;

  /**
   * <p>The type of the parent entity.</p>
   */
  Type?: "ROOT" | "ORGANIZATIONAL_UNIT" | string;
}

export type _UnmarshalledParent = _Parent;
