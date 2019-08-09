/**
 *
 *             <p>Specifies the configuration to use for the brokers.</p>
 *
 */
export interface _ConfigurationInfo {
  /**
   *
   *             <p>ARN of the configuration to use.</p>
   *
   */
  Arn: string;

  /**
   *
   *             <p>The revision of the configuration to use.</p>
   *
   */
  Revision: number;
}

export type _UnmarshalledConfigurationInfo = _ConfigurationInfo;
