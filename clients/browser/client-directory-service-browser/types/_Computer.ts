import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>Contains information about a computer account in a directory.</p>
 */
export interface _Computer {
  /**
   * <p>The identifier of the computer.</p>
   */
  ComputerId?: string;

  /**
   * <p>The computer name.</p>
   */
  ComputerName?: string;

  /**
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the computer account.</p>
   */
  ComputerAttributes?: Array<_Attribute> | Iterable<_Attribute>;
}

export interface _UnmarshalledComputer extends _Computer {
  /**
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the computer account.</p>
   */
  ComputerAttributes?: Array<_UnmarshalledAttribute>;
}
