export const resolveIdentityConfig = (/** params */) => {
    // Populate identity from credentials or token, if provided in config by customer
    // for backward compatibility. If not, populate from AuthScheme.
 
    // This would be a mix of resolveCredentialsConfig and resolveTokenConfig
    // and use isToken and isCredentials checks. This should NOT resolve signer.
    
    return {
      ...input,
      identity
    }
 };
