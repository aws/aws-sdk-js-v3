/**
 * <p>The Shutdown event configuration.</p>
 */
export interface _ShutdownEventConfiguration {
  /**
   * <p>The time, in seconds, that AWS OpsWorks Stacks will wait after triggering a Shutdown event before shutting down an instance.</p>
   */
  ExecutionTimeout?: number;

  /**
   * <p>Whether to enable Elastic Load Balancing connection draining. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain">Connection Draining</a> </p>
   */
  DelayUntilElbConnectionsDrained?: boolean;
}

export type _UnmarshalledShutdownEventConfiguration = _ShutdownEventConfiguration;
