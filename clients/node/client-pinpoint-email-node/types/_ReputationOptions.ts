/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. </p>
 */
export interface _ReputationOptions {
  /**
   * <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.</p>
   */
  ReputationMetricsEnabled?: boolean;

  /**
   * <p>The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.</p>
   */
  LastFreshStart?: Date | string | number;
}

export interface _UnmarshalledReputationOptions extends _ReputationOptions {
  /**
   * <p>The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.</p>
   */
  LastFreshStart?: Date;
}
