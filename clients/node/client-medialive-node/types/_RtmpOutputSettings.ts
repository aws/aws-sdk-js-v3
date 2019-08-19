import {
  _OutputLocationRef,
  _UnmarshalledOutputLocationRef
} from "./_OutputLocationRef";

/**
 * Rtmp Output Settings
 */
export interface _RtmpOutputSettings {
  /**
   * If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.
   */
  CertificateMode?: "SELF_SIGNED" | "VERIFY_AUTHENTICITY" | string;

  /**
   * Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   */
  Destination: _OutputLocationRef;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;
}

export interface _UnmarshalledRtmpOutputSettings extends _RtmpOutputSettings {
  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   */
  Destination: _UnmarshalledOutputLocationRef;
}
