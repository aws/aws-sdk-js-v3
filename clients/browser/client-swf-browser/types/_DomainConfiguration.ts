/**
 * <p>Contains the configuration settings of a domain.</p>
 */
export interface _DomainConfiguration {
  /**
   * <p>The retention period for workflow executions in this domain.</p>
   */
  workflowExecutionRetentionPeriodInDays: string;
}

export type _UnmarshalledDomainConfiguration = _DomainConfiguration;
