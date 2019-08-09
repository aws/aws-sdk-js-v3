import {
  _NetworkAccessConfiguration,
  _UnmarshalledNetworkAccessConfiguration
} from "./_NetworkAccessConfiguration";

/**
 * <p>Describes a streaming session.</p>
 */
export interface _Session {
  /**
   * <p>The identifier of the streaming session.</p>
   */
  Id: string;

  /**
   * <p>The identifier of the user for whom the session was created.</p>
   */
  UserId: string;

  /**
   * <p>The name of the stack for the streaming session.</p>
   */
  StackName: string;

  /**
   * <p>The name of the fleet for the streaming session.</p>
   */
  FleetName: string;

  /**
   * <p>The current state of the streaming session.</p>
   */
  State: "ACTIVE" | "PENDING" | "EXPIRED" | string;

  /**
   * <p>Specifies whether a user is connected to the streaming session.</p>
   */
  ConnectionState?: "CONNECTED" | "NOT_CONNECTED" | string;

  /**
   * <p>The time when a streaming instance is dedicated for the user.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</p>
   */
  MaxExpirationTime?: Date | string | number;

  /**
   * <p>The authentication method. The user is authenticated using a streaming URL (<code>API</code>) or SAML 2.0 federation (<code>SAML</code>).</p>
   */
  AuthenticationType?: "API" | "SAML" | "USERPOOL" | string;

  /**
   * <p>The network details for the streaming session.</p>
   */
  NetworkAccessConfiguration?: _NetworkAccessConfiguration;
}

export interface _UnmarshalledSession extends _Session {
  /**
   * <p>The time when a streaming instance is dedicated for the user.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</p>
   */
  MaxExpirationTime?: Date;

  /**
   * <p>The network details for the streaming session.</p>
   */
  NetworkAccessConfiguration?: _UnmarshalledNetworkAccessConfiguration;
}
