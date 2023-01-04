import {
    AuthScheme,
    Credentials,
    Identity,
    IdentityProvider,
    Provider,
    Token,
    TokenProvider
} from "@aws-sdk/types";

// middleware-identity/src/configurations.ts
export interface IdentityInputConfig {
    // Signer will be discussed in later section.
  
    /**
     * @deprecated Use {@link identity}
     */
    credentials?: Credentials | Provider<Credentials>;
    
    /**
     * @deprecated Use {@link identity}
     */
    token?: Token | TokenProvider;
    
    /**
     * A representation of who is using the SDK client.
     */
    identity?: Identity | IdentityProvider<Identity>;
  }
  
  export interface IdentityPreviouslyResolved {
    // The section on AuthScheme will discuss how Provider will be made available.
    authScheme: AuthScheme;
  }
  
  export interface IdentityResolvedConfig {
    /**
     * Resolved value for input config {@link IdentityInputConfig.identity}
     */
    identity: IdentityProvider<Identity>;
  }
