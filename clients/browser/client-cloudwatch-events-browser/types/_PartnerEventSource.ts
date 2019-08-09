/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services.</p>
 */
export interface _PartnerEventSource {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;
}

export type _UnmarshalledPartnerEventSource = _PartnerEventSource;
