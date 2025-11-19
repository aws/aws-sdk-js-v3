// smithy-typescript generated code
/**
 * @public
 */
export interface SendSerialConsoleSSHPublicKeyRequest {
  /**
   * <p>The ID of the EC2 instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The serial port of the EC2 instance. Currently only port 0 is supported.</p>
   *         <p>Default: 0</p>
   * @public
   */
  SerialPort?: number | undefined;

  /**
   * <p>The public key material. To use the public key, you must have the matching private
   *             key. For information about the supported key formats and lengths, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws">Requirements for key pairs</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   * @public
   */
  SSHPublicKey: string | undefined;
}

/**
 * @public
 */
export interface SendSerialConsoleSSHPublicKeyResponse {
  /**
   * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Is true if the request succeeds and an error otherwise.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface SendSSHPublicKeyRequest {
  /**
   * <p>The ID of the EC2 instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The OS user on the EC2 instance for whom the key can be used to authenticate.</p>
   * @public
   */
  InstanceOSUser: string | undefined;

  /**
   * <p>The public key material. To use the public key, you must have the matching private key.</p>
   * @public
   */
  SSHPublicKey: string | undefined;

  /**
   * <p>The Availability Zone in which the EC2 instance was launched.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface SendSSHPublicKeyResponse {
  /**
   * <p>The ID of the request. Please provide this ID when contacting AWS Support for assistance.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Is true if the request succeeds and an error otherwise.</p>
   * @public
   */
  Success?: boolean | undefined;
}
