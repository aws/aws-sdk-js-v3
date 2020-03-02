import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Indicates that either your AWS credentials are invalid or you do not have access to the EC2 instance.</p>
 */
export interface AuthException extends __SmithyException, $MetadataBearer {
  name: "AuthException";
  $fault: "client";
  Message?: string;
}

export namespace AuthException {
  export function isa(o: any): o is AuthException {
    return __isa(o, "AuthException");
  }
}

/**
 * <p>Indicates that the instance requested was not found in the given zone.  Check that you have provided a valid instance ID and the correct zone.</p>
 */
export interface EC2InstanceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EC2InstanceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EC2InstanceNotFoundException {
  export function isa(o: any): o is EC2InstanceNotFoundException {
    return __isa(o, "EC2InstanceNotFoundException");
  }
}

/**
 * <p>Indicates that you provided bad input.  Ensure you have a valid instance ID, the correct zone, and a valid SSH public key.</p>
 */
export interface InvalidArgsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgsException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgsException {
  export function isa(o: any): o is InvalidArgsException {
    return __isa(o, "InvalidArgsException");
  }
}

export interface SendSSHPublicKeyRequest {
  __type?: "SendSSHPublicKeyRequest";
  /**
   * <p>The availability zone the EC2 instance was launched in.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The EC2 instance you wish to publish the SSH key to.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The OS user on the EC2 instance whom the key may be used to authenticate as.</p>
   */
  InstanceOSUser: string | undefined;

  /**
   * <p>The public key to be published to the instance.  To use it after publication you must have the matching private key.</p>
   */
  SSHPublicKey: string | undefined;
}

export namespace SendSSHPublicKeyRequest {
  export function isa(o: any): o is SendSSHPublicKeyRequest {
    return __isa(o, "SendSSHPublicKeyRequest");
  }
}

export interface SendSSHPublicKeyResponse {
  __type?: "SendSSHPublicKeyResponse";
  /**
   * <p>The request ID as logged by EC2 Connect.  Please provide this when contacting AWS Support.</p>
   */
  RequestId?: string;

  /**
   * <p>Indicates request success.</p>
   */
  Success?: boolean;
}

export namespace SendSSHPublicKeyResponse {
  export function isa(o: any): o is SendSSHPublicKeyResponse {
    return __isa(o, "SendSSHPublicKeyResponse");
  }
}

/**
 * <p>Indicates that the service encountered an error.  Follow the message's instructions and try again.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceException {
  export function isa(o: any): o is ServiceException {
    return __isa(o, "ServiceException");
  }
}

/**
 * <p>Indicates you have been making requests too frequently and have been throttled.  Wait for a while and try again.  If higher call volume is warranted contact AWS Support.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}
