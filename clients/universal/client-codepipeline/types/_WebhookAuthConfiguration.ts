/**
 * <p>The authentication applied to incoming webhook trigger requests.</p>
 */
export interface _WebhookAuthConfiguration {
  /**
   * <p>The property used to configure acceptance of webhooks within a specific IP range. For IP, only the <code>AllowedIPRange</code> property must be set, and this property must be set to a valid CIDR range.</p>
   */
  AllowedIPRange?: string;

  /**
   * <p>The property used to configure GitHub authentication. For GITHUB_HMAC, only the <code>SecretToken</code> property must be set.</p>
   */
  SecretToken?: string;
}

export type _UnmarshalledWebhookAuthConfiguration = _WebhookAuthConfiguration;
