import { _WebhookFilter, _UnmarshalledWebhookFilter } from "./_WebhookFilter";

/**
 * <p>Information about a webhook that connects repository events to a build project in AWS CodeBuild.</p>
 */
export interface _Webhook {
  /**
   * <p>The URL to the webhook.</p>
   */
  url?: string;

  /**
   * <p> The AWS CodeBuild endpoint where webhook events are sent.</p>
   */
  payloadUrl?: string;

  /**
   * <p> The secret token of the associated repository. </p> <note> <p> A Bitbucket webhook does not support <code>secret</code>. </p> </note>
   */
  secret?: string;

  /**
   * <p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p> It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>
   */
  branchFilter?: string;

  /**
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine which webhooks are triggered. At least one <code>WebhookFilter</code> in the array must specify <code>EVENT</code> as its <code>type</code>. </p> <p> For a build to be triggered, at least one filter group in the <code>filterGroups</code> array must pass. For a filter group to pass, each of its filters must pass. </p>
   */
  filterGroups?:
    | Array<Array<_WebhookFilter> | Iterable<_WebhookFilter>>
    | Iterable<Array<_WebhookFilter> | Iterable<_WebhookFilter>>;

  /**
   * <p> A timestamp that indicates the last time a repository's secret token was modified. </p>
   */
  lastModifiedSecret?: Date | string | number;
}

export interface _UnmarshalledWebhook extends _Webhook {
  /**
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine which webhooks are triggered. At least one <code>WebhookFilter</code> in the array must specify <code>EVENT</code> as its <code>type</code>. </p> <p> For a build to be triggered, at least one filter group in the <code>filterGroups</code> array must pass. For a filter group to pass, each of its filters must pass. </p>
   */
  filterGroups?: Array<Array<_UnmarshalledWebhookFilter>>;

  /**
   * <p> A timestamp that indicates the last time a repository's secret token was modified. </p>
   */
  lastModifiedSecret?: Date;
}
