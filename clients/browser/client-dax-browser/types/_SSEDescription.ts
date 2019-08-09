/**
 * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
 */
export interface _SSEDescription {
  /**
   * <p>The current state of server-side encryption:</p> <ul> <li> <p> <code>ENABLING</code> - Server-side encryption is being enabled.</p> </li> <li> <p> <code>ENABLED</code> - Server-side encryption is enabled.</p> </li> <li> <p> <code>DISABLING</code> - Server-side encryption is being disabled.</p> </li> <li> <p> <code>DISABLED</code> - Server-side encryption is disabled.</p> </li> </ul>
   */
  Status?: "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED" | string;
}

export type _UnmarshalledSSEDescription = _SSEDescription;
