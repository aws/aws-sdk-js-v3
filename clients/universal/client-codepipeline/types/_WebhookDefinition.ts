import {
  _WebhookFilterRule,
  _UnmarshalledWebhookFilterRule
} from "./_WebhookFilterRule";
import {
  _WebhookAuthConfiguration,
  _UnmarshalledWebhookAuthConfiguration
} from "./_WebhookAuthConfiguration";

/**
 * <p>Represents information about a webhook and its definition.</p>
 */
export interface _WebhookDefinition {
  /**
   * <p>The name of the webhook.</p>
   */
  name: string;

  /**
   * <p>The name of the pipeline you want to connect to the webhook.</p>
   */
  targetPipeline: string;

  /**
   * <p>The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.</p>
   */
  targetAction: string;

  /**
   * <p>A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.</p>
   */
  filters: Array<_WebhookFilterRule> | Iterable<_WebhookFilterRule>;

  /**
   * <p>Supported options are GITHUB_HMAC, IP and UNAUTHENTICATED.</p> <ul> <li> <p>For information about the authentication scheme implemented by GITHUB_HMAC, see <a href="https://developer.github.com/webhooks/securing/">Securing your webhooks</a> on the GitHub Developer website.</p> </li> <li> <p> IP will reject webhooks trigger requests unless they originate from an IP within the IP range whitelisted in the authentication configuration.</p> </li> <li> <p> UNAUTHENTICATED will accept all webhook trigger requests regardless of origin.</p> </li> </ul>
   */
  authentication: "GITHUB_HMAC" | "IP" | "UNAUTHENTICATED" | string;

  /**
   * <p>Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the <code>SecretToken </code>property must be set. For IP, only the <code>AllowedIPRange </code>property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.</p>
   */
  authenticationConfiguration: _WebhookAuthConfiguration;
}

export interface _UnmarshalledWebhookDefinition extends _WebhookDefinition {
  /**
   * <p>A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.</p>
   */
  filters: Array<_UnmarshalledWebhookFilterRule>;

  /**
   * <p>Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the <code>SecretToken </code>property must be set. For IP, only the <code>AllowedIPRange </code>property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.</p>
   */
  authenticationConfiguration: _UnmarshalledWebhookAuthConfiguration;
}
