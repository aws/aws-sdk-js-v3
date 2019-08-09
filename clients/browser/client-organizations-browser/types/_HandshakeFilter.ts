/**
 * <p>Specifies the criteria that are used to select the handshakes for the operation.</p>
 */
export interface _HandshakeFilter {
  /**
   * <p>Specifies the type of handshake action.</p> <p>If you specify <code>ActionType</code>, you cannot also specify <code>ParentHandshakeId</code>.</p>
   */
  ActionType?:
    | "INVITE"
    | "ENABLE_ALL_FEATURES"
    | "APPROVE_ALL_FEATURES"
    | "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"
    | string;

  /**
   * <p>Specifies the parent handshake. Only used for handshake types that are a child of another type.</p> <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify <code>ActionType</code>.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.</p>
   */
  ParentHandshakeId?: string;
}

export type _UnmarshalledHandshakeFilter = _HandshakeFilter;
