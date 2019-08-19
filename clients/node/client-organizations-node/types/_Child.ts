/**
 * <p>Contains a list of child entities, either OUs or accounts.</p>
 */
export interface _Child {
  /**
   * <p>The unique identifier (ID) of this child entity.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the following:</p> <ul> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>
   */
  Id?: string;

  /**
   * <p>The type of this child entity.</p>
   */
  Type?: "ACCOUNT" | "ORGANIZATIONAL_UNIT" | string;
}

export type _UnmarshalledChild = _Child;
