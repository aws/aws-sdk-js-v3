/**
 * <p>The event criteria that specify when a webhook notification is sent to your URL.</p>
 */
export interface _WebhookFilterRule {
  /**
   * <p>A JsonPath expression that will be applied to the body/payload of the webhook. The value selected by the JsonPath expression must match the value specified in the <code>MatchEquals</code> field, otherwise the request will be ignored. For more information about JsonPath expressions, see <a href="https://github.com/json-path/JsonPath">Java JsonPath implementation</a> in GitHub.</p>
   */
  jsonPath: string;

  /**
   * <p>The value selected by the <code>JsonPath</code> expression must match what is supplied in the <code>MatchEquals</code> field, otherwise the request will be ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly braces. For example, if the value supplied here is "refs/heads/{Branch}" and the target action has an action configuration property called "Branch" with a value of "master", the <code>MatchEquals</code> value will be evaluated as "refs/heads/master". For a list of action configuration properties for built-in action types, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements">Pipeline Structure Reference Action Requirements</a>.</p>
   */
  matchEquals?: string;
}

export type _UnmarshalledWebhookFilterRule = _WebhookFilterRule;
