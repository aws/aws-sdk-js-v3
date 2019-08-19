import {
  _OriginSslProtocols,
  _UnmarshalledOriginSslProtocols
} from "./_OriginSslProtocols";

/**
 * <p>A custom origin or an Amazon S3 bucket configured as a website endpoint.</p>
 */
export interface _CustomOriginConfig {
  /**
   * <p>The HTTP port the custom origin listens on.</p>
   */
  HTTPPort: number;

  /**
   * <p>The HTTPS port the custom origin listens on.</p>
   */
  HTTPSPort: number;

  /**
   * <p>The origin protocol policy to apply to your origin.</p>
   */
  OriginProtocolPolicy: "http-only" | "match-viewer" | "https-only" | string;

  /**
   * <p>The SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS.</p>
   */
  OriginSslProtocols?: _OriginSslProtocols;

  /**
   * <p>You can create a custom origin read timeout. All timeout units are in seconds. The default origin read timeout is 30 seconds, but you can configure custom timeout lengths using the CloudFront API. The minimum timeout length is 4 seconds; the maximum is 60 seconds.</p> <p>If you need to increase the maximum time limit, contact the <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>.</p>
   */
  OriginReadTimeout?: number;

  /**
   * <p>You can create a custom keep-alive timeout. All timeout units are in seconds. The default keep-alive timeout is 5 seconds, but you can configure custom timeout lengths using the CloudFront API. The minimum timeout length is 1 second; the maximum is 60 seconds.</p> <p>If you need to increase the maximum time limit, contact the <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>.</p>
   */
  OriginKeepaliveTimeout?: number;
}

export interface _UnmarshalledCustomOriginConfig extends _CustomOriginConfig {
  /**
   * <p>The SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS.</p>
   */
  OriginSslProtocols?: _UnmarshalledOriginSslProtocols;
}
