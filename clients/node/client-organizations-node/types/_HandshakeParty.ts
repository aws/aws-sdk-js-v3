/**
 * <p>Identifies a participant in a handshake.</p>
 */
export interface _HandshakeParty {
  /**
   * <p>The unique identifier (ID) for the party.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id: string;

  /**
   * <p>The type of party.</p>
   */
  Type: "ACCOUNT" | "ORGANIZATION" | "EMAIL" | string;
}

export type _UnmarshalledHandshakeParty = _HandshakeParty;
