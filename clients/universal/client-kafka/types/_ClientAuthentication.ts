import { _Tls, _UnmarshalledTls } from "./_Tls";

/**
 *
 *             <p>Includes all client authentication information.</p>
 *
 */
export interface _ClientAuthentication {
  /**
   *
   *             <p>Details for ClientAuthentication using TLS.</p>
   *
   */
  Tls?: _Tls;
}

export interface _UnmarshalledClientAuthentication
  extends _ClientAuthentication {
  /**
   *
   *             <p>Details for ClientAuthentication using TLS.</p>
   *
   */
  Tls?: _UnmarshalledTls;
}
