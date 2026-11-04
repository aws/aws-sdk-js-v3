// smithy-typescript generated code
/**
 * @public
 */
export interface SendSerialConsoleSSHPublicKeyRequest {
  /**
   * The ID of the EC2 instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The serial port of the EC2 instance. Currently only port 0 is supported.
   *
   * Default: 0
   *
   * @public
   */
  SerialPort?: number | undefined;

  /**
   * The public key material. To use the public key, you must have the matching private key. For information about the supported key formats and lengths, see [Requirements for key pairs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  SSHPublicKey: string | undefined;
}

/**
 * @public
 */
export interface SendSerialConsoleSSHPublicKeyResponse {
  /**
   * The ID of the request. Please provide this ID when contacting AWS Support for assistance.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Is true if the request succeeds and an error otherwise.
   *
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface SendSSHPublicKeyRequest {
  /**
   * The ID of the EC2 instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The OS user on the EC2 instance for whom the key can be used to authenticate.
   *
   * @public
   */
  InstanceOSUser: string | undefined;

  /**
   * The public key material. To use the public key, you must have the matching private key.
   *
   * @public
   */
  SSHPublicKey: string | undefined;

  /**
   * The Availability Zone in which the EC2 instance was launched.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface SendSSHPublicKeyResponse {
  /**
   * The ID of the request. Please provide this ID when contacting AWS Support for assistance.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Is true if the request succeeds and an error otherwise.
   *
   * @public
   */
  Success?: boolean | undefined;
}
